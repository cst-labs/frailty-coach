# Frailty Coach

Frailty Coach is a mobile-first wellness app that helps older adults safely assess physical resilience, understand frailty and fall-risk signals, and follow adaptive exercise plans that improve strength, balance, and mobility over time.

The app is designed for the Healthy Longevity hackathon theme, especially **Physical health and frailty** and **Longevity data and insights**. It is not a diagnostic or regulated medical-device implementation. It presents a wellness-oriented coaching layer with safety prompts and clinician/caregiver escalation cues.

## One-Sentence Pitch

Frailty Coach helps older adults safely assess their physical resilience, understand frailty and fall-risk signals, and follow adaptive exercise plans that improve strength, balance, and mobility over time.

## Key Features

- **Function Resilience Score**: a simple 0-100 wellness score summarizing mobility, strength, balance, activity, recovery, and fall-risk signals.
- **Guided frailty and fall-risk checks**: safety screen, fall-risk questions, Timed Up and Go, chair stands, balance stage, gait speed, and measurement confidence.
- **Adaptive workout plans**: daily exercises matched to ability level, from seated/supportive movements to advanced strength and balance training.
- **Wearable-style insights**: uses steps, active minutes, sleep, resting heart rate, walking speed, and recovery signals to adjust recommendations.
- **Safety-aware coaching**: flags red-flag symptoms, fall-risk concerns, poor recovery, and missed sessions, then recommends supervision or deloading when needed.
- **Progress tracking**: shows four-week changes in score, TUG time, chair stands, and balance stage.
- **Plain-language coach summaries**: separate explanations for the older adult and for a caregiver or physiotherapist.
- **Evidence & Sources section**: compact source panel explaining the clinical and scientific basis behind the assessments and workouts.
- **Demo personas**: lets judges switch between frail, pre-frail, robust, and advanced users to see how the app adapts.
- **4-week demo simulation**: shows how consistent training can improve assessment results, wearable trends, and the overall score.

## App Screens

- **Today**: the main home screen with the user’s current score, coaching message, safety alerts, wearable signal, and daily focus.
- **Assess**: guided safety, fall-risk, and functional checks that update the score and workout level.
- **Workout**: the adaptive exercise prescription for the user’s current ability band.
- **Progress**: trend view showing how score and functional metrics change over time.
- **Coach**: plain-language summaries for the older adult and caregiver/PT, plus the Evidence & Sources disclosure.

## Scientific Positioning

The individual assessment domains and exercise categories are evidence-informed. The app draws from CDC STEADI-style fall-risk screening, functional measures such as Timed Up and Go, chair stands, balance testing, Vivifrail-style exercise levels, and broader older-adult exercise guidance.

The `Function Resilience Score` is a product composite for coaching and visualization. It should be described as a wellness score based on validated domains, not as a validated diagnostic frailty score.

## Run Locally

```bash
npm start
```

Then open:

```text
http://localhost:5173/?v=7
```

## Test

```bash
npm test
```

## Documentation Maintenance

Keep this README updated whenever product behavior, screens, scoring logic, evidence positioning, or demo flow changes. At minimum, update the **Key Features**, **App Screens**, and **Scientific Positioning** sections when those areas change.
