import {
  applyFourWeekProgress,
  buildCoachCopy,
  completeWorkout,
  computeFunctionScore,
  getWorkoutPlan,
  makeHistoryWithCurrent
} from "./logic.js";
import { fallQuestions, personas, safetyQuestions } from "./data.js";

const STORAGE_KEY = "frailty-coach-state-v1";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

let appState = loadState();
let activeTimer = null;
let timerStart = 0;

init();

function init() {
  renderPersonaOptions();
  renderQuestionLists();
  bindEvents();
  render();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function bindEvents() {
  $("#personaSelect").addEventListener("change", (event) => {
    appState = clonePersona(event.target.value);
    saveState();
    render();
    toast(`Loaded ${appState.name}`);
  });

  $$(".tab").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });

  $("#saveAssessmentBtn").addEventListener("click", () => {
    readAssessmentForm();
    saveState();
    render();
    toast("Assessment saved");
  });

  $("#demoProgressBtn").addEventListener("click", () => {
    appState = applyFourWeekProgress(appState);
    saveState();
    render();
    toast("Four-week progress simulated");
  });

  $("#completeWorkoutBtn").addEventListener("click", () => {
    appState = completeWorkout(appState);
    saveState();
    render();
    toast("Workout completed");
  });

  $("#resetPersonaBtn").addEventListener("click", () => {
    appState = clonePersona(appState.id);
    saveState();
    render();
    toast("Persona reset");
  });

  $("#startTimerBtn").addEventListener("click", () => {
    timerStart = performance.now();
    clearInterval(activeTimer);
    activeTimer = setInterval(updateTimerReadout, 100);
    $("#timerReadout").textContent = "Timer running";
  });

  $("#stopTimerBtn").addEventListener("click", () => {
    if (!timerStart) return;
    clearInterval(activeTimer);
    const seconds = Math.round(((performance.now() - timerStart) / 1000) * 10) / 10;
    $("#tugInput").value = seconds;
    $("#timerReadout").textContent = `TUG timer stopped at ${seconds}s`;
    timerStart = 0;
  });

  $("#addRepBtn").addEventListener("click", () => {
    const input = $("#chairInput");
    input.value = Number(input.value || 0) + 1;
  });

  $("#copySummaryBtn").addEventListener("click", async () => {
    const summary = `${$("#elderSummary").textContent}\n\n${$("#caregiverSummary").textContent}`;
    try {
      await navigator.clipboard.writeText(summary);
      toast("Summary copied");
    } catch {
      toast("Summary ready to copy");
    }
  });
}

function render() {
  const score = computeFunctionScore(appState);
  const plan = getWorkoutPlan(score, appState);
  const history = makeHistoryWithCurrent(appState, score);
  const coach = buildCoachCopy(appState, score, plan);

  $("#personaSelect").value = appState.id;
  renderScore(score);
  renderAssessmentForm();
  renderAlerts(score.alerts);
  renderWearable(score);
  renderTodayFocus(score, plan);
  renderWorkout(plan);
  renderProgress(history);
  renderCoach(coach);
}

function renderScore(score) {
  $("#scoreValue").textContent = score.total;
  $("#scoreBand").textContent = score.bandLabel;
  $("#scoreFill").style.width = `${score.total}%`;
  $("#ringValue").textContent = score.total;
  $("#scoreRing").style.setProperty("--score", `${score.total * 3.6}deg`);
  $("#scoreTitle").textContent = score.bandLabel;
  $("#scoreExplanation").textContent = score.explanation;
  $("#statTug").textContent = `${appState.assessment.tugSeconds}s`;
  $("#statChair").textContent = appState.assessment.chairStands;
  $("#statBalance").textContent = `Stage ${appState.assessment.balanceStage}`;
}

function renderWearable(score) {
  $("#stepsMetric").textContent = appState.wearable.steps.toLocaleString();
  $("#activeMetric").textContent = appState.wearable.activeMinutes;
  $("#sleepMetric").textContent = `${appState.wearable.sleepHours}h`;
  $("#rhrMetric").textContent = appState.wearable.restingHeartRate;
  $("#wearableInsight").textContent =
    score.subScores.activity < 55
      ? "Wearable trend suggests low daily activity. The plan favors short walking intervals and supported strength."
      : score.subScores.recovery < 60
        ? "Recovery is the limiting signal today, so progression should stay conservative."
        : "Wearable trend supports the current progression level.";
}

function renderTodayFocus(score, plan) {
  const focus = [
    ["Current band", score.bandLabel],
    ["Safety posture", score.status.shouldSupervise ? "Use support or supervision" : "Independent with clear space"],
    ["Workout rule", plan.progression],
    ["Wearable source", appState.wearable.source]
  ];
  $("#todayFocus").innerHTML = focus
    .map(([label, value]) => `<div><strong>${label}</strong><span>${value}</span></div>`)
    .join("");
}

function renderAlerts(alerts) {
  $("#alerts").innerHTML = alerts.length
    ? alerts
        .map(
          (alert) => `
            <div class="alert ${alert.tone}">
              <strong>${alert.title}</strong>
              <span>${alert.body}</span>
            </div>
          `
        )
        .join("")
    : `<div class="alert success"><strong>Ready for today's plan</strong><span>No blocking safety flags are active.</span></div>`;
}

function renderWorkout(plan) {
  $("#planLevel").textContent = plan.label;
  $("#workoutPlan").innerHTML = `
    <article class="panel workout-intro">
      <h3>${plan.label}</h3>
      <p>${plan.support}</p>
      <p class="muted">${plan.progression}</p>
    </article>
    ${plan.exercises
      .map(
        (exercise) => `
          <article class="panel exercise-card">
            <span class="exercise-kicker">${exercise.dose}</span>
            <h3>${exercise.name}</h3>
            <p>${exercise.coaching}</p>
          </article>
        `
      )
      .join("")}
  `;
}

function renderProgress(history) {
  const max = Math.max(...history.map((entry) => entry.score), 100);
  $("#scoreChart").innerHTML = history
    .map(
      (entry) => `
        <div class="bar-item">
          <span>${entry.score}</span>
          <div style="height:${Math.max(12, (entry.score / max) * 100)}%"></div>
          <small>${entry.week}</small>
        </div>
      `
    )
    .join("");

  const first = history[0];
  const last = history[history.length - 1];
  const changes = [
    ["Score", signed(last.score - first.score)],
    ["TUG time", `${signed(round1(first.tugSeconds - last.tugSeconds))}s faster`],
    ["Chair stands", `${signed(last.chairStands - first.chairStands)} reps`],
    ["Balance stage", signed(last.balanceStage - first.balanceStage)]
  ];

  $("#changeList").innerHTML = changes
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
}

function renderCoach(coach) {
  $("#elderSummary").textContent = coach.elder;
  $("#caregiverSummary").textContent = coach.caregiver;
}

function renderPersonaOptions() {
  $("#personaSelect").innerHTML = Object.values(personas)
    .map((persona) => `<option value="${persona.id}">${persona.name} - ${persona.description}</option>`)
    .join("");
}

function renderQuestionLists() {
  $("#safetyChecks").innerHTML = safetyQuestions.map(renderCheck("safety")).join("");
  $("#fallChecks").innerHTML = fallQuestions.map(renderCheck("fallRisk")).join("");

  $$("#safetyChecks input, #fallChecks input").forEach((input) => {
    input.addEventListener("change", () => {
      appState[input.dataset.group][input.name] = input.checked;
      saveState();
      render();
    });
  });
}

function renderCheck(group) {
  return (question) => `
    <label class="check-row">
      <input type="checkbox" data-group="${group}" name="${question.id}" />
      <span>${question.label}</span>
    </label>
  `;
}

function renderAssessmentForm() {
  $("#tugInput").value = appState.assessment.tugSeconds;
  $("#chairInput").value = appState.assessment.chairStands;
  $("#balanceStageInput").value = appState.assessment.balanceStage;
  $("#balanceSecondsInput").value = appState.assessment.balanceSeconds;
  $("#gaitInput").value = appState.assessment.gaitSpeed || "";
  $("#confidenceInput").value = appState.assessment.confidence;

  $$("#safetyChecks input, #fallChecks input").forEach((input) => {
    input.checked = Boolean(appState[input.dataset.group][input.name]);
  });
}

function readAssessmentForm() {
  appState.assessment = {
    tugSeconds: Number($("#tugInput").value),
    chairStands: Number($("#chairInput").value),
    balanceStage: Number($("#balanceStageInput").value),
    balanceSeconds: Number($("#balanceSecondsInput").value),
    gaitSpeed: Number($("#gaitInput").value || 0),
    confidence: $("#confidenceInput").value
  };
}

function showView(view) {
  $$(".tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === view));
  $$(".view").forEach((panel) => panel.classList.toggle("is-visible", panel.id === `view-${view}`));
  $("#main").focus({ preventScroll: true });
}

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored?.id && personas[stored.id]) return stored;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
  return clonePersona("grace");
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function clonePersona(id) {
  return structuredClone(personas[id] || personas.grace);
}

function updateTimerReadout() {
  const seconds = Math.round(((performance.now() - timerStart) / 1000) * 10) / 10;
  $("#timerReadout").textContent = `${seconds}s`;
}

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("is-visible");
  clearTimeout(node.hideTimer);
  node.hideTimer = setTimeout(() => node.classList.remove("is-visible"), 2200);
}

function signed(value) {
  return value > 0 ? `+${value}` : `${value}`;
}

function round1(value) {
  return Math.round(value * 10) / 10;
}
