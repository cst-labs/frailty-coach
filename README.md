# Frailty Coach

Frailty Coach is a hackathon MVP for elder-facing wellness self-monitoring. It guides a user through functional checks, combines the results with wearable-style trend data, assigns a function and resilience score, and generates a safe adaptive workout plan.

This is not a diagnostic or medical-device implementation. It is positioned as a wellness aid with escalation prompts when safety or fall-risk flags are present.

## Run

```bash
npm start
```

Then open `http://localhost:5173`.

## Test

```bash
npm test
```

## Implemented MVP

- Responsive PWA shell with service worker and manifest.
- Demo personas across frail, pre-frail, robust, and advanced ability ranges.
- Safety and fall-risk screens.
- Timed Up and Go, chair stand, balance stage, gait speed, and confidence inputs.
- Deterministic `Function Resilience Score` with mobility, strength, balance, activity, and recovery sub-scores.
- Ability-band workout prescriptions from seated to advanced robust.
- Deload and supervision rules based on safety, recovery, missed sessions, and fall-risk signals.
- Wearable-style signals for steps, active minutes, sedentary time, walking speed, heart rate, and sleep.
- Four-week progress simulation for demos.
- Plain-language elder and caregiver/PT summaries.

## Clinical Positioning

The app is inspired by CDC STEADI-style fall-risk screening, common functional assessments such as Timed Up and Go and chair stands, and multicomponent exercise approaches for healthy aging. It does not reproduce licensed clinical scales or claim to diagnose frailty.
