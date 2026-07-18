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

export const QUIZ = {
  title: "O Quiz da Minnie",
  intro: "Um pequeno teste para ver o quanto você me conhece.",
  questions: [
    {
      question: "Qual é a minha linguagem do amor primária?",
      options: ["Presentes", "Tempo de qualidade", "Palavras de afirmação", "Atos de serviço"],
      answer: "Tempo de qualidade",
      feedback: "Acertou! Nada supera um bom tempo juntos."
    },
    {
      question: "Qual o meu café preferido?",
      options: ["Espresso", "Cappuccino", "Latte", "Americano"],
      answer: "Cappuccino",
      feedback: "Exato! Um cappuccino cremoso é o meu favorito."
    },
    {
      question: "O que eu mais gosto de fazer num dia de folga?",
      options: ["Ler um livro", "Assistir a uma série", "Passear ao ar livre", "Cozinhar algo novo"],
      answer: "Passear ao ar livre",
      feedback: "Isso! Adoro uma boa caminhada na natureza."
    },
    {
      question: "Qual o meu maior sonho de viagem?",
      options: ["Japão", "Itália", "Nova Zelândia", "Egito"],
      answer: "Japão",
      feedback: "Correto! Mal posso esperar para explorar o Japão."
    }
  ],
  result: {
    title: "Resultado do Quiz",
    perfect: "Você me conhece perfeitamente! Cada detalhe, cada mania. Isso é amor.",
    good: "Você me conhece muito bem! Fico feliz em saber que você presta atenção nos detalhes.",
    bad: "Temos muito o que conversar! Mas o que importa é que estamos juntos nessa jornada.",
    cta: "Continuar a jornada"
  }
};
