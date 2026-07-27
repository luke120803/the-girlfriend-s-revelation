# Skill: performance-mobile

## Purpose
This skill defines the performance baseline for mobile-first web experiences.
Use it when building, reviewing, or optimizing any part of the project to ensure fast load times, smooth interactions, and a stable visual experience on real mobile devices.

## Core targets
- Total page weight: under 1.5MB
- LCP (Largest Contentful Paint): under 2 seconds on a mid-range mobile device
- CLS (Cumulative Layout Shift): under 0.1
- FID / INP: interactions should feel instant (under 100ms response)
- No render-blocking resources on the critical path

## Images
- Use WebP format for all photos and decorative images.
- Provide correct `width` and `height` attributes to prevent layout shift.
- Lazy-load all images below the fold using `loading="lazy"`.
- Do not lazy-load the first visible image (LCP candidate) — load it eagerly.
- Compress images before adding to the project: target under 150KB per photo.
- Use `srcset` for responsive images when multiple sizes are needed.
- Avoid using CSS `background-image` for content images — prefer `<img>` for LCP tracking.

## Fonts
- Load fonts via `<link rel="preconnect">` and `<link rel="stylesheet">` in `__root.tsx`.
- Use `font-display: swap` to prevent invisible text during font load.
- Preload the most critical font file (Clash Display) with `<link rel="preload">`.
- Limit font weights: load only the weights actually used in the project.
- Do not use `@import` for fonts inside CSS — it blocks rendering.

## JavaScript
- Keep the JS bundle lean — avoid adding libraries for things CSS can do.
- anime.js and Motion for React are already in the stack — do not add redundant animation libraries.
- Lazy-load heavy components (e.g., the 3D album, confetti) using dynamic imports.
- Do not run animations or observers before the component is visible.
- Clean up IntersectionObservers and event listeners on component unmount.

## CSS
- Use Tailwind v4 utility classes — avoid writing redundant custom CSS.
- Avoid `@keyframes` on elements that are off-screen.
- Use `will-change: transform` sparingly — only on elements actively animating.
- Prefer `transform` and `opacity` for animations — they are GPU-composited.
- Avoid animating `width`, `height`, `top`, `left`, or `margin` — they trigger layout.

## Rendering stability
- Reserve space for images before they load (use aspect-ratio or explicit dimensions).
- Reserve space for fonts: set a fallback font with similar metrics to avoid layout shift.
- Do not inject content above existing content after load.
- Avoid showing skeleton loaders that shift layout when content arrives.

## Mobile-specific considerations
- Test on a real device, not just Chrome DevTools — DevTools throttling is not accurate.
- Test on a mid-range Android device, not just iPhone.
- Avoid heavy blur or filter effects on large elements — they are expensive on mobile GPUs.
- Limit simultaneous CSS animations to avoid jank.
- The 3D album should not animate until it is in the viewport.

## Measurement
- Use Chrome DevTools Lighthouse (mobile preset) for LCP, CLS, and total weight.
- Use the Network tab to verify no unexpected large assets are loading.
- Use the Performance tab to identify long tasks or animation jank.
- Run Lighthouse before considering any screen "done".

## Anti-patterns
Avoid:
- Loading all images eagerly on page load
- Using uncompressed PNG or JPEG for photos
- Importing entire libraries when only one function is needed
- Running GSAP or anime.js timelines on mount for off-screen elements
- Adding `will-change` to every animated element
- Using `filter: blur()` on large background areas
- Blocking the main thread with synchronous operations during animation

## Output expectations
When applying this skill, the agent should:
- check image formats and sizes before adding them to the project
- verify font loading strategy in `__root.tsx`
- lazy-load heavy components by default
- flag any animation that runs before the element is visible
- run a mental Lighthouse audit before marking a feature complete
