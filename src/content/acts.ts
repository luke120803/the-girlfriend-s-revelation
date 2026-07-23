/**
 * Ordem canônica dos atos e telas.
 * Fonte única para navegação, hash e ProgressDots.
 */

export const ACTS = [
  { id: "capa", label: "Expectativa", screens: ["capa", "preambulo"] },
  { id: "revelacao", label: "Descoberta", screens: ["revelacao"] },
  { id: "quiz", label: "Desafio", screens: ["quiz"] },
  { id: "album-3d", label: "Memórias", screens: ["album-3d"] },
  { id: "mosaico", label: "Conexão", screens: ["mosaico"] },
  { id: "carta", label: "Clímax", screens: ["carta", "encerramento"] },
] as const;

export const SCREEN_IDS = {
  capa: "capa",
  preambulo: "preambulo",
  revelacao: "revelacao",
  quiz: "quiz",
  "album-3d": "album-3d",
  mosaico: "mosaico",
  carta: "carta",
  encerramento: "encerramento",
} as const;
