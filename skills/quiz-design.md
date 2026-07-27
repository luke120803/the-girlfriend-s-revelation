# Skill: quiz-design

## Purpose
This skill defines how to design and implement intimate, playful quizzes for personal web experiences.
Use it when building the Minnie quiz or any quiz that must feel like a private game between two people — not a generic app feature.

## Core philosophy
A quiz in this context is not a test. It is a discovery moment.
The goal is not to measure knowledge — it is to create a feeling of being known and seen.
Every question, answer, and feedback message should reinforce intimacy, not gamification.

## Tone
- Playful, not childish.
- Intimate, not clinical.
- Warm, not competitive.
- Personal, not trivia-style.
- The quiz should feel like an inside joke, not a personality test.

## Structure principles
- Keep it short: 5–8 questions maximum in the first iteration.
- One question per screen — never show multiple questions at once.
- Progress should be visible but subtle (e.g., "3 de 7", not a loud progress bar).
- Each question should feel different in framing — avoid repetitive sentence structures.
- The final result should be a moment, not just a score.

## Question design
- Frame questions from the perspective of the relationship, not abstract facts.
- Prefer "O que você acha que eu…" over "Qual é o meu…"
- Use 3–4 answer options maximum.
- Answer options should have personality and voice — not just neutral labels.
- At least one option per question should be slightly absurd or self-aware, to keep it light.
- Avoid yes/no questions — they kill momentum.

## Feedback design
- Every answer (correct or not) should have a specific, warm response.
- Wrong answers should feel playful, not punishing.
- Correct answers should feel like a small shared moment, not a trophy.
- Avoid: "Correto! ✅" or "Errado! ❌"
- Prefer: a short sentence that reacts to the specific answer chosen.

## Result screen
- The result is not a score — it is a message.
- Frame the result around what the score reveals about the relationship, not about the person's performance.
- Even a low score should end warmly: "Ainda tem muito pra descobrir — e eu adoro isso."
- The result screen should transition naturally into the next act of the experience.

## Visual and interaction rules
- One question fills the screen — no scrolling within a question.
- Answer options are large tap targets (minimum 44px height, full width or near-full).
- Selected state should be clear and immediate.
- Transition between questions: subtle slide or fade — not a jarring cut.
- Do not use timers or countdowns — they create anxiety, not intimacy.
- Respect `prefers-reduced-motion` in all transitions.

## Anti-patterns
Avoid:
- Trivia-style phrasing ("Em que ano nós…", "Qual foi a primeira vez que…")
- Score-first result screens ("Você acertou 6 de 8!")
- Generic feedback ("Muito bem!", "Que pena!")
- Competitive framing of any kind
- Too many questions (more than 8 in first version)
- Answer options that are too similar or too obvious
- Emoji as the primary emotional signal

## Implementation notes
- Store quiz state in memory (React state) — no backend needed.
- Questions and answers live in `src/content/quiz.ts` for easy editing.
- Each question object should include: `question`, `options[]`, `correctIndex`, `feedbackCorrect`, `feedbackWrong[]` (one per wrong option).
- The result message should be determined by score range, not exact score.
- Keep the component structure simple in the first pass — polish later.

## Output expectations
When applying this skill, the agent should:
- propose question drafts that feel specific to Minnie and the relationship
- write feedback messages that have voice and warmth
- keep the interaction model simple and thumb-friendly
- separate content (quiz.ts) from presentation (component)
- prefer a functional first pass over a polished but incomplete version
