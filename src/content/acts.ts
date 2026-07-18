/**
 * Ordem canônica dos atos e telas.
 * Fonte única para navegação, hash e ProgressDots.
 */

export const ACTS = [
  { id: "ato-1", label: "Expectativa", screens: ["capa", "preambulo"] },
  { id: "ato-2", label: "Descoberta", screens: ["revelacao"] },
  { id: "ato-3", label: "Conexão", screens: ["mosaico"] },
  { id: "ato-4", label: "Clímax", screens: ["carta", "encerramento"] },
] as const;

export const SCREEN_IDS = {
  capa: "capa",
  preambulo: "preambulo",
  revelacao: "ato-2",
  mosaico: "ato-3",
  carta: "ato-4",
  encerramento: "encerramento",
} as const;
