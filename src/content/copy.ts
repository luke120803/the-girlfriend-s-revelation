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

export const LETTER = {
  body: `Minnie,

Feliz aniversário. Que este novo ciclo traga a leveza que você merece e a certeza do quanto é amada.

Estar ao seu lado é o maior presente. Cada dia contigo é uma nova descoberta, uma nova cor no nosso quadro.

Com todo o meu amor,

Lucas`,
  cta: "Fechar",
} as const;
