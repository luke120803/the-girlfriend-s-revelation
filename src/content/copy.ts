/**
 * Textos fixos da jornada. Editar aqui, nunca dentro de componente.
 */

export const HER = {
  name: "Minnie",
  fullName: "Yasmim",
  birthday: "28.07",
  birthdayFull: "28 de julho",
} as const;

export const COVER = {
  whisper: "amamos estar ao nosso lado",
  title: `Feliz Aniversário, ${HER.name}`,
  date: HER.birthday,
  cta: "Abrir",
} as const;

export const PREAMBLE = {
  body: "Antes de abrir, respira. O que vem a seguir foi feito devagar — um pedaço de cada vez, pensando em você. Segue no seu tempo.",
  cta: "Continuar",
} as const;
