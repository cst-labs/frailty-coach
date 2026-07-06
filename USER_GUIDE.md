# Frailty Coach User Guide and Evidence Dossier

## Purpose

Frailty Coach is a mobile-first wellness app for older adults. It helps a user:

- screen for safety and fall-risk signals,
- complete simple physical-function checks,
- interpret mobility, strength, balance, activity, and recovery trends,
- receive an adaptive exercise plan matched to current ability, and
- track whether function improves over time.

The app is intended as a **wellness and self-monitoring aid**, not a medical diagnosis tool. It should support, not replace, clinical judgement from physicians, physiotherapists, occupational therapists, nurses, or geriatric care teams.

## Clinical Positioning

Frailty is commonly assessed through validated clinical frameworks such as:

- **Fried frailty phenotype**: weight loss, exhaustion, weakness, slow walking speed, and low physical activity.
- **Frailty Index / deficit accumulation**: cumulative count of health deficits.
- **Clinical Frailty Scale (CFS)**: a clinician-rated global frailty scale.
- **Short Physical Performance Battery (SPPB)**: lower-extremity function battery including balance, gait speed, and chair stands.

Frailty Coach does **not** claim to reproduce or validate any of these instruments. Its 0-100 **Function Resilience Score** is a product composite for coaching and visualization. The score is built from domains that are strongly represented in validated frailty and fall-risk literature: mobility, gait, lower-body strength, balance, physical activity, recovery context, and fall-risk signals.

## How to Read the Evidence Claims

This guide separates three evidence levels:

- **Directly validated assessment**: the exact test is used in clinical or research practice, such as Timed Up and Go, 30-second chair stand, gait speed, and staged balance testing.
- **Evidence-supported exercise category**: the exact app exercise may not have its own trial, but it belongs to a category repeatedly supported in fall-prevention and older-adult exercise trials, such as balance-challenging functional exercise, sit-to-stand training, progressive resistance training, gait training, and walking.
- **Product heuristic**: the app's score weights, band boundaries, deload triggers, and four-week demo simulation are pragmatic coaching logic for an MVP. They are intentionally deterministic and explainable, but they are not a validated clinical endpoint.

The strongest evidence supports **multicomponent exercise** that includes balance, functional movements, strength/resistance, gait, and endurance, especially when it is individualized and progressed. The World Guidelines for Falls Prevention recommend balance-challenging and functional exercises such as sit-to-stand and stepping, performed three or more times weekly, individualized, progressed for at least 12 weeks, and continued longer for greater effect. USPSTF similarly recommends exercise interventions for community-dwelling adults aged 65+ at increased fall risk, with common components including gait, balance, functional training, strength/resistance, flexibility, and endurance.

## Feature 1: Safety Screen

### Goal

Prevent the app from encouraging exercise when the user has symptoms or circumstances that require caution, supervision, or clinical escalation.

### How It Works

The app asks whether the user has:

- chest pain, faintness, or severe breathlessness during activity,
- new sudden weakness, confusion, or neurological symptoms,
- sharp joint pain or new injury,
- no stable chair/counter or clear walking path,
- use of a walking aid or need for hands-on help.

Red-flag symptoms block exercise guidance and prompt escalation. Environmental/support issues trigger supervision or support recommendations.

### Why These Checks Were Chosen

Fall-prevention guidelines emphasize screening, assessment, and intervention rather than giving generic exercise advice to everyone. CDC STEADI recommends a structured **Screen -> Assess -> Intervene** flow and includes modifiable fall-risk factors such as gait, strength, balance, medications, orthostatic blood pressure, vision, feet/footwear, home hazards, and comorbidities. The app's safety screen is a lightweight wellness version of that logic.

### Evidence

- CDC STEADI states that the initiative helps providers screen, assess, and intervene to reduce fall risk among older patients, and lists standardized gait and balance assessment tools.  
  https://www.cdc.gov/steadi/hcp/clinical-resources/index.html
- CDC STEADI algorithm recommends annual fall-risk screening, assessment of modifiable risk factors, and intervention/referral when gait, strength, or balance concerns are identified.  
  https://www.cdc.gov/steadi/media/pdfs/STEADI-Algorithm-508.pdf
- USPSTF recommends exercise interventions for community-dwelling adults aged 65+ at increased fall risk and notes that implementation should consider comorbidities, fall history, and patient circumstances.  
  https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/falls-prevention-community-dwelling-older-adults-interventions

## Feature 2: Fall-Risk Self-Screen

### Goal

Identify users who may be at increased fall risk and therefore need supported exercise, slower progression, or clinician/PT involvement.

### How It Works

The app asks four questions:

- Had a fall in the last 12 months?
- Feels unsteady when standing or walking?
- Worries about falling?
- Medicines or dizziness affect balance?

The first three directly mirror CDC STEADI's three key fall-risk screening questions. Medication/dizziness is included because medication effects, dizziness, and orthostatic symptoms are common modifiable fall-risk contributors.

### Why These Checks Were Chosen

Fall history, unsteadiness, and fear of falling are clinically meaningful signals. In the app, any fall in the past year or two or more positive fall-risk responses moves the user toward a more conservative plan.

### Evidence

- CDC STEADI algorithm lists three key questions: feels unsteady, worries about falling, and has fallen in the past year. A "yes" to any indicates risk.  
  https://www.cdc.gov/steadi/media/pdfs/STEADI-Algorithm-508.pdf
- CDC STEADI clinical resources include fall-risk checklists and medication-linked fall resources.  
  https://www.cdc.gov/steadi/hcp/clinical-resources/index.html
- USPSTF notes that a pragmatic way to identify increased fall risk is a history of falls or problems in physical functioning and limited mobility.  
  https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/falls-prevention-community-dwelling-older-adults-interventions

## Feature 3: Timed Up and Go (TUG)

### Goal

Assess basic functional mobility: standing from a chair, walking, turning, returning, and sitting.

### How It Works

The user starts seated, stands, walks 3 meters, turns, walks back, and sits. The app records total time in seconds. A manual timer is included for the prototype.

### Why It Was Chosen

TUG is widely used in older-adult mobility and fall-risk assessment because it is fast, low-equipment, and captures multiple functional transitions: sit-to-stand, gait, turning, and controlled sitting. These are exactly the transitions that matter for independence and fall risk.

### Evidence

- CDC STEADI lists the TUG as a functional assessment to assess mobility.  
  https://www.cdc.gov/steadi/hcp/clinical-resources/index.html
- Podsiadlo and Richardson introduced the timed "Up & Go" as a test of basic functional mobility for frail elderly persons.  
  Podsiadlo D, Richardson S. *J Am Geriatr Soc*. 1991;39(2):142-148. PMID: 1991946.
- Shumway-Cook, Brauer, and Woollacott studied TUG for predicting fall probability in community-dwelling older adults.  
  Shumway-Cook A, Brauer S, Woollacott M. *Phys Ther*. 2000;80(9):896-903.

## Feature 4: 30-Second Chair Stand

### Goal

Assess lower-body strength and endurance, especially the ability to repeatedly rise from a chair.

### How It Works

The user performs as many full sit-to-stand repetitions as safely possible in 30 seconds. The app records the count.

### Why It Was Chosen

Standing from a chair is a core activity of daily living. Low chair-stand performance reflects reduced lower-limb strength, endurance, mobility reserve, and potential fall risk. It also maps directly to exercise prescription because sit-to-stand practice, chair squats, and controlled sit-to-stands can train the same functional pattern.

### Evidence

- CDC STEADI lists the 30-second chair stand as a functional assessment for leg strength and endurance.  
  https://www.cdc.gov/steadi/hcp/clinical-resources/index.html
- Jones, Rikli, and Beam studied the 30-second chair-stand test as a measure of lower-body strength in community-residing older adults.  
  Jones CJ, Rikli RE, Beam WC. *Res Q Exerc Sport*. 1999;70(2):113-119.
- The SPPB includes repeated chair stands as one of three lower-extremity performance domains.  
  Guralnik JM et al. *J Gerontol*. 1994;49(2):M85-M94. PMID: 8126356.

## Feature 5: 4-Stage Balance / Balance Stage

### Goal

Assess static standing balance and determine how much support is needed for safe balance training.

### How It Works

The app records the highest safely held stage:

1. feet together,
2. semi-tandem,
3. tandem,
4. single-leg stance.

It also records hold time in seconds.

### Why It Was Chosen

Balance deficits are a major fall-risk domain. The staged format lets the app scale from very frail users who need basic supported stance to robust users who can train single-leg and multidirectional balance.

### Evidence

- CDC STEADI lists the 4-stage balance test to assess balance.  
  https://www.cdc.gov/steadi/hcp/clinical-resources/index.html
- CDC STEADI algorithm identifies gait, strength, and balance assessment as common fall-risk assessment components.  
  https://www.cdc.gov/steadi/media/pdfs/STEADI-Algorithm-508.pdf
- SPPB includes progressively more challenging standing balance positions as a lower-extremity function domain.  
  Guralnik JM et al. *J Gerontol*. 1994;49(2):M85-M94. PMID: 8126356.

## Feature 6: Optional Gait Speed

### Goal

Capture walking speed as an objective marker of mobility and global health risk.

### How It Works

The app allows optional 4-meter gait speed in meters per second. In the prototype, this is entered manually.

### Why It Was Chosen

Gait speed is one of the most consistently studied physical-function measures in older adults. It appears in frailty phenotype definitions, SPPB scoring, and survival-risk literature. Slower gait speed is a core signal of reduced physiologic reserve.

### Evidence

- Fried frailty phenotype includes slow walking speed as one of five frailty criteria.  
  Fried LP et al. *J Gerontol A Biol Sci Med Sci*. 2001;56(3):M146-M156. PMID: 11253156.
- SPPB includes gait speed as a core component.  
  Guralnik JM et al. *J Gerontol*. 1994;49(2):M85-M94. PMID: 8126356.
- Gait speed predicts survival in older adults.  
  Studenski S et al. *JAMA*. 2011;305(1):50-58. PMID: 21205966.

## Feature 7: Function Resilience Score

### Goal

Give users one understandable coaching number while preserving the underlying raw metrics.

### How It Works

The app combines five sub-scores:

- mobility: TUG plus optional gait speed,
- lower-body strength: chair stands,
- balance: balance stage and hold time,
- activity consistency: steps, active minutes, sedentary time,
- recovery: sleep, sleep regularity, resting heart rate, heart-rate recovery.

Fall-risk and safety flags can lower the score or force a more conservative plan.

### Why It Was Chosen

Older adults and caregivers benefit from a simple high-level signal, but clinical validity requires raw values. The app therefore stores and displays raw measures and uses the 0-100 score as a **communication layer**, not as a diagnostic label.

### Evidence

- Frailty phenotype includes weakness, slow walking, low activity, exhaustion, and weight loss, showing that frailty is multidimensional rather than a single movement test.  
  Fried LP et al. *J Gerontol A Biol Sci Med Sci*. 2001;56(3):M146-M156. PMID: 11253156.
- Frailty Index approaches model frailty as accumulation of deficits across domains.  
  Rockwood K, Mitnitski A. *J Gerontol A Biol Sci Med Sci*. 2007;62(7):722-727.
- The Clinical Frailty Scale requires clinical judgement and should not be replaced by an app score. Dalhousie's CFS guidance explicitly emphasizes clinical judgement.  
  https://www.dal.ca/sites/gmr/our-tools/clinical-frailty-scale.html

## Feature 8: Wearable-Style Signals

### Goal

Use day-to-day lifestyle and recovery context to adjust coaching without overriding functional assessment results.

### How It Works

The prototype uses demo wearable values:

- steps,
- active minutes,
- sedentary hours,
- walking speed,
- resting heart rate,
- heart-rate recovery,
- sleep duration,
- sleep regularity.

Low sleep, elevated resting heart rate, low active minutes, or high sedentary time can lead to conservative recommendations or deloading.

### Why These Signals Were Chosen

Wearables can add continuous context between formal assessments. The app uses them as supportive signals only. A good wearable week should not hide a poor TUG, unsafe balance result, or fall-risk flag.

### Evidence

- WHO states that regular physical activity in adults and older adults is associated with reduced falls and improved health outcomes.  
  https://www.who.int/news-room/fact-sheets/detail/physical-activity
- WHO notes that any amount of physical activity is better than none and that muscle strengthening benefits everyone.  
  https://www.who.int/news-room/fact-sheets/detail/physical-activity
- Daily steps are associated with mortality risk in older women, with benefit observed below the popular 10,000-step target.  
  Lee IM et al. *JAMA Intern Med*. 2019;179(8):1105-1112.
- Gait speed is a validated functional marker and survival predictor in older adults.  
  Studenski S et al. *JAMA*. 2011;305(1):50-58. PMID: 21205966.

## Feature 9: Ability Bands

### Goal

Match exercise difficulty to the user's current function and fall risk.

### How It Works

The app assigns one of six bands:

- Level A: seated/disability,
- Level B: frail,
- Level B+: frail with fall-risk precautions,
- Level C: pre-frail,
- Level D: robust,
- Level E: advanced robust.

Safety red flags and fall-risk status can force the user into a safer band.

### Why It Was Chosen

Older adults vary widely. A single workout is unsafe and ineffective across the full spectrum from very frail to highly active. Ability bands make the app more clinically plausible because they separate users who need chair support from those who can safely perform more intense gait, strength, and balance work.

### Evidence

- Vivifrail provides physical exercise passports by functional level, including disability, frailty, frailty with fall risk, pre-frailty, robust, and advanced robust categories.  
  https://vivifrail.com/resources/
- USPSTF notes that fall-prevention exercise interventions commonly include gait, balance, functional training, strength/resistance, flexibility, and endurance, and should be matched to risk and context.  
  https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/falls-prevention-community-dwelling-older-adults-interventions

## Feature 10: Adaptive Workout Plans

### Goal

Improve mobility, strength, balance, and function safely over time.

### How It Works

The app prescribes daily exercise from the user's ability band. Progression changes only one variable at a time: reps, sets, hold time, walking duration, or reduced support. The app deloads after poor recovery, high safety risk, or missed sessions.

### Why These Exercise Categories Were Chosen

The exercise library covers the intervention components most often represented in fall-prevention and frailty exercise research:

- lower-body strength,
- balance,
- gait/endurance,
- functional training,
- flexibility/mobility,
- supported progression.

### Evidence

- USPSTF recommends exercise interventions to prevent falls in community-dwelling adults aged 65+ at increased risk, with a Grade B recommendation.  
  https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/falls-prevention-community-dwelling-older-adults-interventions
- USPSTF reports that common exercise-intervention components include gait, balance, functional training, strength/resistance, flexibility, and endurance.  
  https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/falls-prevention-community-dwelling-older-adults-interventions
- WHO guidelines support physical activity, reduced sedentary behavior, and muscle strengthening for adults and older adults.  
  https://www.who.int/news-room/fact-sheets/detail/physical-activity
- Vivifrail provides level-specific multicomponent exercise materials and participant passports.  
  https://vivifrail.com/resources/

## Exercise Library: Exercise-by-Exercise Rationale

The exact exercise list is deliberately conservative. It favors movements with a clear relationship to daily function: sitting and standing, walking, stepping, turning, maintaining posture, recovering balance, climbing steps, and carrying light household loads. For frail users, the same movement patterns are introduced in seated or supported form before progressing to unsupported or higher-intensity versions.

| Exercise | Level(s) | Goal | How the app uses it | Evidence basis |
|---|---:|---|---|---|
| Seated marching | A | Introduce rhythmic lower-limb movement and low-intensity endurance without standing fall risk. | Two short timed sets while seated upright. Progression can increase time before moving to standing marches. | Gait/endurance and functional training are common fall-prevention components. Seated entry points are consistent with disability/frailty bands in Vivifrail-style programming. |
| Ankle pumps | A | Maintain ankle range of motion and prepare for safer standing and walking. | Slow repetitions through comfortable range while seated. | Ankle control contributes to gait and balance strategies. CDC STEADI and world fall guidelines emphasize orthostatic symptoms, gait, balance, and functional mobility as fall-risk domains. |
| Knee extensions | A | Strengthen quadriceps in a low-risk seated position. | Small sets per leg, pausing at the top without locking the knee. | Lower-extremity strength underpins chair stands, gait, and SPPB performance. Progressive resistance training improves physical function in older adults. |
| Seated heel raises | A | Build calf activation and ankle strategy without standing balance demand. | Seated repetitions pressing through the balls of the feet. | Calf strength supports push-off, balance control, and walking. Heel-raise patterns also appear in established balance and strength programs such as Otago-style exercise. |
| Band or towel rows | A | Train posture, pulling strength, and trunk control without challenging standing balance. | Seated pulling movement with a band or towel. | Resistance training is part of multicomponent older-adult exercise guidance. Upper-body work is included conservatively to support posture and daily tasks. |
| Supported sit-to-stand practice | A | Preserve transfer ability and build confidence rising from a chair. | Very low-repetition practice with armrests and stopping before fatigue. | Sit-to-stand is both a validated functional assessment pattern and a recommended functional exercise in fall-prevention guidance. |
| Supported sit-to-stand | B, B+ | Improve lower-body strength, controlled transfer, and independence in daily living. | Low sets with stable chair support; lower volume in B+ fall-risk band. | CDC STEADI uses chair stand assessment; SPPB includes repeated chair stands; world fall guidelines explicitly cite sit-to-stand as functional fall-prevention exercise. |
| Supported heel and toe raises | B | Train ankle plantarflexion and dorsiflexion for gait clearance and balance response. | Both hands on a chair/counter, small controlled repetitions. | Gait and balance impairment are modifiable fall-risk factors; strength and balance training are core fall-prevention categories. |
| Supported heel raises | B+ | Strengthen calf and ankle strategy with lower fall risk. | Reduced volume and support required for fall-risk users. | Same category support as heel/toe raises, with risk control added because B+ users have fall-risk flags. |
| Standing hip abduction | B | Strengthen lateral hip stabilizers needed for walking and side-to-side balance. | Small sets each side while holding stable support. | Lateral stability matters for gait and fall recovery. Functional and balance training are repeatedly supported in fall-prevention reviews. |
| Standing hip taps | B+ | Practice small, controlled stepping while supported. | Small step taps with support nearby and caregiver supervision recommended. | Stepping is named in world fall guidelines as a balance-challenging functional exercise; B+ keeps the range small and supported. |
| Mini-marches | B | Improve foot clearance, hip flexion, and walking confidence. | Short timed standing sets with stable support. | Gait training and functional stepping are common fall-prevention components; marching is a supported precursor to walking intervals. |
| Weight shifts | B+ | Teach controlled center-of-mass movement before unsupported balance drills. | Short timed sets with both hands near support. | Balance training is a core fall-prevention intervention. Weight shifts are a low-risk progression toward more challenging balance work. |
| Wall push-ups | B, B+ | Add upper-body pushing strength with minimal fall risk. | Low-repetition sets at the wall, closer stance for easier version. | Resistance exercise is recommended in older-adult multicomponent programs; wall push-ups are safer and easier to scale than floor push-ups. |
| Short walking intervals | B | Build walking tolerance and confidence. | One-minute intervals using prescribed walking aid if needed. | Walking/aerobic training is part of CDC/WHO older-adult activity guidance and LIFE-style structured activity programs. |
| Hallway walk | B+ | Maintain gait exposure while controlling fall risk. | Shorter intervals, prescribed aid, and supervision recommended. | Gait training is evidence-supported, but fall-risk users need environmental control and support. |
| Chair squats | C | Build transfer strength and eccentric control beyond basic sit-to-stand. | Hover above the chair, then stand tall; counter nearby if needed. | Chair-stand performance is a validated lower-body measure; squat-to-chair is a direct functional progression. |
| Calf raises | C | Improve plantarflexor strength and ankle balance strategy. | Fingertip-supported standing repetitions. | Strength and balance components are common in effective fall-prevention programs. |
| Step taps | C | Train foot clearance, stepping confidence, and obstacle negotiation. | Tap a low stable step or book with support nearby. | Stepping is directly named in fall-prevention exercise guidelines as functional balance exercise. |
| Side steps | C | Train lateral stepping and hip control for real-world balance recovery. | Controlled side steps in each direction with soft knees. | Multidirectional stepping and lateral hip control support gait stability; balance/functional exercise is supported by USPSTF, Cochrane, and world guideline evidence. |
| Tandem stance near support | C | Challenge static balance while keeping rescue support nearby. | Short holds with touch support when needed. | Staged balance positions are used in STEADI and SPPB-style balance assessment; balance-challenging exercise reduces falls when appropriately dosed. |
| Walking intervals | C | Improve gait capacity and aerobic tolerance while preserving conversational intensity. | Multiple one-minute intervals. | CDC and WHO recommend aerobic activity for older adults; gait/endurance work appears in fall-prevention interventions and LIFE-style structured activity. |
| Squats to chair | D | Build stronger transfer capacity and lower-body control. | Higher-volume chair-referenced squats with controlled lowering. | Functional lower-body strengthening maps to chair-stand assessment and resistance/functional training evidence. |
| Step-ups | D | Improve stair ability, single-leg loading, and functional strength. | Low stable step, support nearby. | World fall guidelines include stepping as functional fall-prevention exercise; functional training targets daily mobility tasks. |
| Reverse lunge to support | D | Train stride control, lower-body strength, and controlled stepping in robust users. | Low repetitions while holding support lightly. | This is a higher-demand functional strength progression, justified by resistance and stepping evidence but restricted to robust users because of balance demand. |
| Single-leg balance near support | D | Challenge higher-level static balance safely. | Fingers hover over support; short holds. | Single-limb stance is a common balance challenge; balance training is a central evidence-supported fall-prevention component. |
| Brisk walking intervals | D | Improve gait speed, endurance, and activity capacity. | Repeated 90-second brisk bouts with recovery. | Aerobic/walking activity is recommended by CDC/WHO; gait speed is a strong older-adult functional marker. |
| Loaded carries | D, E | Train real-world carrying, posture, trunk control, grip, and gait under load. | Short carries with equal light weights if available; advanced users get longer rounds. | Functional resistance training supports daily activities. This is reserved for robust bands because it adds load to gait. |
| Tempo squats | E | Increase strength demand and eccentric control for advanced users. | Slow lowering, smooth standing. | Progressive resistance and functional lower-body training are supported for older adults; tempo adds challenge without jumping or uncontrolled speed. |
| Stair or step intervals | E | Improve stair tolerance, lower-body power endurance, and gait confidence. | Timed intervals with handrail as needed. | Stepping/stair-related mobility is a daily function target; world fall guidelines support progressed functional stepping exercises. |
| Multi-directional balance taps | E | Train dynamic balance, directional control, and recovery steps. | Controlled taps in multiple directions with posture reset. | Balance-challenging and functional exercises are strongly recommended for fall prevention; multidirectional tasks are reserved for users with adequate baseline function. |
| Fast walking intervals | E | Improve higher-end gait capacity and aerobic reserve. | Repeated one-minute faster bouts while staying controlled. | Aerobic activity and gait training are evidence-supported; higher intensity is limited to advanced robust users. |
| Controlled power sit-to-stands | E | Train faster force generation for advanced users while preserving controlled sitting. | Stand quickly, sit slowly, low repetitions. | Lower-extremity power is relevant to mobility and transfers; the sit-to-stand pattern is functional and measurable, but this variant is reserved for advanced users. |

### Exercise Evidence Caveat

Not every named app exercise has an RCT proving that exact movement, dose, and wording independently reduces falls. That would be an unrealistic standard for a hackathon MVP and even for many clinical exercise programs. The defensible claim is that each exercise maps to a movement category with strong support: balance-challenging functional exercise, sit-to-stand/stepping, resistance training, gait/walking, aerobic conditioning, or safe seated entry-level movement. The app should continue to present this as evidence-informed coaching rather than prescribed medical rehabilitation.

## Progression and Deload Rules

### Goal

Promote improvement without pushing users into unsafe fatigue or excessive fall risk.

### How It Works

The app progresses only one variable at a time:

- repetitions,
- sets,
- hold time,
- walking duration,
- reduced support.

The app deloads when:

- red-flag safety symptoms are present,
- sleep is low,
- resting heart rate is elevated,
- missed sessions indicate deconditioning or disrupted routine.

### Evidence

Progressive overload is standard exercise programming. For older adults, progression must be balanced with fall-risk, recovery, comorbidities, and adherence. World fall-prevention guidelines recommend individualized programs that are progressed in intensity for at least 12 weeks. USPSTF emphasizes individualized decisions based on circumstances, comorbid conditions, prior falls, patient preferences, and exercise availability.

### Why the App Deloads for Sleep, Resting Heart Rate, and Missed Sessions

The deload logic is intentionally conservative. Poor sleep, unusually elevated resting heart rate, and missed sessions are not diagnostic markers of acute illness, but they are plausible signals of reduced recovery, stress, disrupted routine, or declining adherence. For a wellness app serving older adults, the safer product behavior is to maintain movement while reducing volume or intensity instead of pushing progression.

The app should be careful in future versions to personalize these thresholds against each user's baseline. A resting heart rate of 82 bpm is not inherently dangerous for every person, and a single poor night of sleep should not be overinterpreted. The MVP uses these signals as low-stakes coaching inputs only.

## Evidence Summary by App Component

| App component | Why included | Evidence anchor |
|---|---|---|
| Fall-risk questions | Rapid screen for elevated fall risk | CDC STEADI three key questions |
| TUG | Mobility, turning, transfers | CDC STEADI; Podsiadlo & Richardson 1991 |
| Chair stands | Lower-body strength/endurance | CDC STEADI; Jones/Rikli/Beam 1999; SPPB |
| Balance stage | Static balance and support needs | CDC STEADI 4-stage balance; SPPB |
| Gait speed | Mobility reserve and frailty signal | Fried phenotype; SPPB; Studenski JAMA 2011 |
| Wearable activity | Context between assessments | WHO physical activity; steps/mortality literature |
| Exercise bands | Match work to ability/fall risk | Vivifrail functional levels |
| Strength exercises | Preserve transfers and independence | USPSTF/WHO multicomponent exercise guidance |
| Balance exercises | Reduce fall-risk domain | USPSTF exercise intervention evidence |
| Walking intervals | Gait/endurance and activity | USPSTF/WHO guidance |
| Deload/supervision | Safety and adherence | USPSTF individualized intervention framing |

## Research Support for the Overall App Model

Frailty Coach combines assessment, feedback, and home exercise because this mirrors the structure of many successful older-adult interventions:

- **Screen and assess first**: CDC STEADI and world fall guidelines recommend asking about falls and assessing gait, strength, and balance rather than giving generic advice.
- **Use validated functional domains**: TUG, chair stands, balance tests, and gait speed are common in fall-risk, SPPB, mobility, and frailty research.
- **Prescribe multicomponent exercise**: fall-prevention evidence repeatedly supports balance, functional training, resistance/strength, gait, endurance, and flexibility rather than one isolated exercise.
- **Individualize by ability and risk**: Vivifrail and fall-prevention guidelines both support matching program difficulty to current function and fall risk.
- **Track objective progress**: raw TUG time, chair-stand count, balance stage, gait speed, active minutes, and steps are easier to interpret and audit than a black-box score.

The LIFE randomized clinical trial is especially relevant to the app's broader concept. It enrolled 1,635 sedentary adults aged 70-89 with physical limitations and tested a structured moderate-intensity physical activity program including aerobic, resistance, and flexibility activities. The intervention reduced major mobility disability over 2.6 years compared with health education. Frailty Coach is much smaller and not clinically validated, but the direction is aligned: structured, progressive, home-supported physical activity can help vulnerable older adults preserve mobility.

## Important Limitations

- The app does not diagnose frailty.
- The Function Resilience Score is not a validated clinical endpoint.
- Wearable signals are supportive context, not a substitute for clinical assessment.
- Some exercises may be unsafe for users with unstable cardiovascular symptoms, acute neurological symptoms, recent injury, severe dizziness, uncontrolled pain, or unsafe home environments.
- Very frail users, recent fallers, or users with walking aids may need caregiver supervision or clinician/PT review.
- Future clinical validation would require prospective testing against established outcomes such as falls, SPPB, TUG, gait speed, CFS, hospitalization, and quality-of-life measures.

## Reference List

1. Centers for Disease Control and Prevention. STEADI Clinical Resources. https://www.cdc.gov/steadi/hcp/clinical-resources/index.html
2. Centers for Disease Control and Prevention. STEADI Algorithm for Fall Risk Screening, Assessment, and Intervention. https://www.cdc.gov/steadi/media/pdfs/STEADI-Algorithm-508.pdf
3. US Preventive Services Task Force. Falls Prevention in Community-Dwelling Older Adults: Interventions. 2024. https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/falls-prevention-community-dwelling-older-adults-interventions
4. World Health Organization. Physical activity fact sheet. 2024. https://www.who.int/news-room/fact-sheets/detail/physical-activity
5. Vivifrail. Resources and physical exercise passports. https://vivifrail.com/resources/
6. Dalhousie University Geriatric Medicine Research. Clinical Frailty Scale. https://www.dal.ca/sites/gmr/our-tools/clinical-frailty-scale.html
7. Podsiadlo D, Richardson S. The timed "Up & Go": a test of basic functional mobility for frail elderly persons. *J Am Geriatr Soc*. 1991;39(2):142-148. PMID: 1991946.
8. Jones CJ, Rikli RE, Beam WC. A 30-s chair-stand test as a measure of lower body strength in community-residing older adults. *Res Q Exerc Sport*. 1999;70(2):113-119.
9. Guralnik JM, Simonsick EM, Ferrucci L, et al. A short physical performance battery assessing lower extremity function. *J Gerontol*. 1994;49(2):M85-M94. PMID: 8126356.
10. Fried LP, Tangen CM, Walston J, et al. Frailty in older adults: evidence for a phenotype. *J Gerontol A Biol Sci Med Sci*. 2001;56(3):M146-M156. PMID: 11253156.
11. Studenski S, Perera S, Patel K, et al. Gait speed and survival in older adults. *JAMA*. 2011;305(1):50-58. PMID: 21205966.
12. Rockwood K, Mitnitski A. Frailty in relation to the accumulation of deficits. *J Gerontol A Biol Sci Med Sci*. 2007;62(7):722-727.
13. Rockwood K, Song X, MacKnight C, et al. A global clinical measure of fitness and frailty in elderly people. *CMAJ*. 2005;173(5):489-495.
14. Sherrington C, Fairhall NJ, Wallbank GK, et al. Exercise for preventing falls in older people living in the community. *Cochrane Database Syst Rev*. 2019.
15. Lee IM, Shiroma EJ, Kamada M, et al. Association of step volume and intensity with all-cause mortality in older women. *JAMA Intern Med*. 2019;179(8):1105-1112.
16. Montero-Odasso M, van der Velde N, Martin FC, et al. World guidelines for falls prevention and management for older adults: a global initiative. *Age Ageing*. 2022;51(9):afac205. https://academic.oup.com/ageing/article/51/9/afac205/6730755
17. Pahor M, Guralnik JM, Ambrosius WT, et al. Effect of structured physical activity on prevention of major mobility disability in older adults: the LIFE study randomized clinical trial. *JAMA*. 2014;311(23):2387-2396. PMID: 24866862. https://pubmed.ncbi.nlm.nih.gov/24866862/
18. Liu CJ, Latham NK. Progressive resistance strength training for improving physical function in older adults. *Cochrane Database Syst Rev*. 2009.
19. Campbell AJ, Robertson MC, Gardner MM, Norton RN, Tilyard MW, Buchner DM. Randomised controlled trial of a general practice programme of home based exercise to prevent falls in elderly women. *BMJ*. 1997;315(7115):1065-1069.
20. Robertson MC, Campbell AJ, Gardner MM, Devlin N. Preventing injuries in older people by preventing falls: a meta-analysis of individual-level data. *J Am Geriatr Soc*. 2002;50(5):905-911.
21. Chodzko-Zajko WJ, Proctor DN, Fiatarone Singh MA, et al. Exercise and physical activity for older adults. *Med Sci Sports Exerc*. 2009;41(7):1510-1530.
22. Nelson ME, Rejeski WJ, Blair SN, et al. Physical activity and public health in older adults: recommendation from the American College of Sports Medicine and the American Heart Association. *Med Sci Sports Exerc*. 2007;39(8):1435-1445.
23. Izquierdo M, Merchant RA, Morley JE, et al. International exercise recommendations in older adults (ICFSR): expert consensus guidelines. *J Nutr Health Aging*. 2021;25(7):824-853.
24. Cadore EL, Rodriguez-Manas L, Sinclair A, Izquierdo M. Effects of different exercise interventions on risk of falls, gait ability, and balance in physically frail older adults: a systematic review. *Rejuvenation Res*. 2013;16(2):105-114.
25. Tinetti ME, Baker DI, McAvay G, et al. A multifactorial intervention to reduce the risk of falling among elderly people living in the community. *N Engl J Med*. 1994;331(13):821-827.
