# Skill: accessibility

## Purpose
This skill defines the accessibility baseline for this project.
Use it when building or reviewing any screen, component, or interaction to ensure the experience is usable, inclusive, and meets WCAG AA standards.

## Core principles
- Accessibility is not a checklist — it is a quality bar.
- An inaccessible experience is an incomplete experience.
- Mobile-first accessibility means touch, screen reader, and motion sensitivity all matter.
- Never remove a native browser behavior (focus, scroll, tap) without providing a better replacement.

## Contrast
- Body text must meet 4.5:1 contrast ratio against its background (WCAG AA).
- Large text (≥ 18px bold or ≥ 24px regular) must meet 3:1.
- The terracotta accent `#C4785A` on `#FDF8F3` background: verify contrast before using for text.
- Use `#2A2118` for primary text — it passes AA on all project backgrounds.
- Never use `--text-muted` (`#B8A99A`) for meaningful text — only for decorative or supplementary labels.

## Focus management
- All interactive elements must have a visible focus state.
- Never use `outline: none` without a custom replacement.
- Focus order must follow the visual reading order.
- When a modal or overlay opens, move focus inside it.
- When a modal closes, return focus to the trigger element.
- In the quiz, focus should move to the next question automatically after answer selection.

## Motion sensitivity
- Wrap all animations in `prefers-reduced-motion` checks.
- CSS: use `@media (prefers-reduced-motion: reduce)` to disable or simplify transitions.
- JS: check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before triggering anime.js sequences.
- The experience must be fully usable with all motion disabled — no content should be hidden behind an animation that never plays.
- Confetti, typewriter, and flip effects all need reduced-motion fallbacks.

## Semantic HTML
- Use `<button>` for all interactive tap targets — never `<div onClick>`.
- Use `<main>`, `<section>`, `<nav>`, `<article>` to structure the page.
- Each screen section should have a meaningful `aria-label` or heading.
- Images must have descriptive `alt` text — or `alt=""` if purely decorative.
- The quiz must use `role="radiogroup"` and `role="radio"` or native `<input type="radio">` for answer options.

## Touch and tap targets
- Minimum tap target size: 44×44px (Apple HIG and WCAG 2.5.5).
- Spacing between adjacent tap targets: at least 8px.
- The advance button, quiz options, card flip triggers, and lightbox close must all meet this minimum.
- Do not rely on small icons as the only tap target.

## Screen reader support
- Announce dynamic content changes with `aria-live` where appropriate (e.g., quiz feedback after answer).
- Use `aria-hidden="true"` on purely decorative elements (confetti, background patterns).
- The typewriter effect should have a complete static version available for screen readers via `aria-label` on the container.
- Progress indicators (e.g., "3 de 7") should be readable by screen readers.

## Anti-patterns
Avoid:
- `onClick` on non-interactive elements
- Missing `alt` attributes on images
- Color as the only way to convey state (e.g., correct/wrong answer)
- Animations that cannot be paused or skipped
- Focus traps outside of modals
- Placeholder text as the only label for inputs
- Removing focus outlines without replacement

## Output expectations
When applying this skill, the agent should:
- verify contrast ratios before finalizing any color combination
- add `prefers-reduced-motion` handling to every animated component
- use semantic HTML from the start, not as an afterthought
- test focus order mentally or with keyboard navigation
- flag any component that relies on color alone to communicate state
