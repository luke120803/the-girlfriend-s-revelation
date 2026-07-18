<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project guidance

## Context
This project is a mobile-first interactive birthday experience for Minnie Yasmim.
It should feel intimate, cinematic, emotional, elegant, and non-generic.

Primary reference files:
- `plan.md`
- `spec_aniversario.md`

If there is any conflict, prefer `plan.md` for current implementation decisions and `spec_aniversario.md` for design/motion rules.

## Creative direction
- Avoid SaaS/landing page aesthetics.
- Avoid generic AI-generated layouts.
- Avoid purple/blue gradients, glowing effects, and symmetric feature grids.
- Use warm neutral backgrounds and a single terracotta accent.
- Keep the experience narrative-first and revelation-driven.

## Implementation rules
- Work in small, scoped changes.
- Do not rewrite the whole project unless explicitly requested.
- Prefer editing only the files necessary for the current task.
- Keep the app working after each change.
- Favor reusable components and content files over hardcoded inline content.
- Preserve mobile-first behavior and test for small screens first.

## Current roadmap
1. Stabilize and refine the existing journey.
2. Implement the Minnie quiz first.
3. Validate the quiz in a functional version.
4. Only after that, implement the interactive 3D photo album.
5. Refine motion, sound, and sensory details later.

## Quiz guidance
- The quiz should be intimate and playful, not childish.
- It should feel like a personalized discovery moment, not a generic app quiz.
- Keep it simple in the first iteration: functional first, polish later.

## Motion guidance
- Use subtle transitions and progressive reveals.
- Respect `prefers-reduced-motion`.
- Do not over-animate every section.
- 3D effects should be selective and soft, not flashy.

## Git workflow
- Do not force push.
- Do not rewrite published commits.
- Keep commits small and meaningful.
- Leave the branch in a working state after changes.