# Skill: web-3d-motion

## Purpose
This skill defines how to build tasteful 3D and advanced motion interactions for the web.
Use it for object-like interactions, layered depth, tactile animation, page-turn effects, spatial transitions, and interactive 3D-feeling interfaces.

## Core philosophy
3D should create presence, tactility, and narrative — not gimmicks.
If the interaction would still be meaningful without the 3D effect, the 3D is probably supporting the experience well.
If the 3D is the only interesting part, it is probably too shallow.

## Best use cases
Use this skill for:
- albums that open like physical objects
- page-turn effects
- layered cards with depth
- object-based interfaces
- tactile reveals
- subtle parallax environments
- focus/zoom transitions that feel spatial

Avoid using it just to tilt everything.

## Motion hierarchy
Prioritize motion in this order:
1. clarity of interaction
2. tactile response
3. depth and spatial logic
4. emotional timing
5. decoration

If an animation makes the UI less understandable, remove it.

## Recommended stack usage
### CSS 3D
Use CSS 3D for:
- perspective
- preserve-3d
- structural depth
- page layers
- object shells
- covers, panels, cards, and stacked surfaces

CSS 3D should define the physical model of the object.

### anime.js
Use anime.js for:
- opening and closing object sequences
- page turns
- chained transitions
- staggered movement inside 3D scenes
- refined easing for tactile interactions
- moving between object states
- polished focus transitions inside the 3D experience

anime.js should handle expressive, controlled animation sequences.

### Motion for React
Use Motion for React for:
- presence/exit transitions
- modal visibility
- small state transitions
- overlays
- content reveals
- secondary UI feedback around the 3D object

Do not use Motion for the whole 3D object choreography if anime.js is handling the main sequence.

### GSAP
Use GSAP only when:
- scroll-linked parallax is genuinely needed
- a complex timeline is easier there
- spatial scroll behavior must be synchronized precisely

Do not default to GSAP if CSS or anime.js can solve it cleanly.

## Mobile-first 3D rules
- Build for mobile first.
- The 3D object must remain understandable on a small screen.
- Avoid wide cinematic layouts that collapse badly on phones.
- Interactions must feel stable and finger-friendly.
- Depth should remain subtle enough that the user never loses orientation.
- Never make users fight perspective to access content.

## Album-specific guidance
For a 3D album:
- it should feel like an object, not a carousel
- start from a closed or resting state
- opening the album should feel like a deliberate moment
- page transitions should be readable and paced
- photos should live on pages, not just float in space
- tapping a photo can move into a focused viewing mode
- structure should support future expansion

## Reduced motion fallback
- When `prefers-reduced-motion` is active, replace 3D flips with simple fade transitions.
- The album should still open and reveal content — just without spatial animation.
- Never hide content behind motion that cannot be bypassed.
- Use `@media (prefers-reduced-motion: reduce)` in CSS and check `window.matchMedia` in JS before triggering anime.js sequences.
- Provide a static fallback state for every 3D interaction.

## Loading state
- The 3D object should not appear broken or invisible while assets load.
- Show a minimal placeholder (e.g., closed cover with opacity) until the scene is ready.
- Avoid layout shifts when the 3D object initializes.
- If fonts or images are part of the 3D surface, wait for them before triggering the opening sequence.

## Performance rules
- Avoid unnecessary real-time effects
- Prefer transform and opacity over layout-heavy animation
- Keep layers minimal and composited where possible
- Limit simultaneous animation
- Preserve responsiveness on mobile devices
- Respect prefers-reduced-motion where possible

## Anti-patterns
Avoid:
- 3D for everything
- exaggerated rotations
- fake “cool” motion with no interaction logic
- glow-heavy futuristic styling
- chaotic perspective
- overbuilt WebGL solutions when CSS/anime.js is enough
- turning a memory-driven experience into a tech demo

## Review checklist
Before shipping any 3D interaction, verify:
1. Does it feel like an object with logic?
2. Is the interaction understandable on mobile?
3. Is anime.js used for meaningful sequences, not random flourish?
4. Is CSS 3D carrying the structure?
5. Is motion helping emotion and clarity?
6. Does it stay elegant instead of flashy?
7. Would this still feel special without being exhausting?

## Output expectations
When applying this skill, the agent should:
- describe the interaction model before coding
- separate structure from animation logic
- use anime.js intentionally
- keep the result elegant, tactile, and coherent
- prefer a functional first pass that can be refined later