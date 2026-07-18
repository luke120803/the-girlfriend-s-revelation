/**
 * Presets de movimento — ritmo cinematográfico da spec.
 * Easing único (0.16, 1, 0.3, 1) para coesão em toda jornada.
 */

export const EASE_CINEMA = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 0.8,
  transition: 0.5,
} as const;

export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
