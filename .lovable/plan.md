## 1. Resumo do conceito

Experiência íntima, mobile-first, para o aniversário da **Minnie (Yasmim)** em **28/07/2008**. Jornada de 6 telas agrupadas em 4 atos:

- **Ato 1 — Expectativa:** Capa + Preâmbulo. Cria mistério.
- **Ato 2 — Descoberta:** Grid 2x2 de cards que abrem com tap (flip 3D).
- **Ato 3 — Conexão:** Mosaico assimétrico com fotos/mensagens de amigos.
- **Ato 4 — Clímax:** Carta com typewriter + surpresa final + confetti + encerramento.

Ritmo cinematográfico, uma cor de acento (terracota), tipografia protagonista, assimetria intencional. Zero estética SaaS/IA.

## 2. Decisões fixadas neste plano

- **Nome:** tratamento como **Minnie** no site inteiro.
- **Data:** 28/07/2008 (usada na capa como marco).
- **Frase da capa (Boska itálico):** *"amamos estar ao nosso lado"* (exatamente como enviado).
- **Título da capa (Clash Display):** *"Feliz Aniversário, Minnie"*.
- **Paleta:** terracota da spec — `#FDF8F3` bg, `#2A2118` texto, acento `#C4785A` com variações.
- **Fontes:** Clash Display + Satoshi + Boska (Fontshare, via `<link>` no `__root.tsx`).
- **Preâmbulo (rascunho a validar):** *"Antes de abrir, respira. O que vem a seguir foi feito devagar — um pedaço de cada vez, pensando em você. Segue no seu tempo."* Se não gostar, você me manda o texto na hora de começar a Etapa 1.

## 3. Arquitetura das telas

Rota única `/` com todas as telas empilhadas; navegação por scroll controlado + botão explícito no fim de cada ato; URL sincronizada por hash (`#ato-1`…`#ato-4`) para deep-link.

```text
/ (index.tsx) ── JourneyShell
  ├── Act1 · Expectativa
  │     ├── Screen1_Capa           (100vh — frase + título + data + CTA)
  │     └── Screen2_Preambulo      (texto curto + "Continuar")
  ├── Act2 · Descoberta
  │     └── Screen3_Revelacao      (grid 2x2 de RevealCards, flip 3D)
  ├── Act3 · Conexão
  │     └── Screen4_Mosaico        (mosaico assimétrico + lightbox)
  └── Act4 · Clímax
        ├── Screen5_Carta          (typewriter + SurpriseReveal + confetti)
        └── Screen6_Encerramento   (agradecimento + compartilhar)
```

## 4. Componentes necessários

**Primitivos**
- `JourneyShell` — max-width mobile, hash sync, gestão de progresso.
- `Reveal` — fade-in + slide-up via IntersectionObserver, respeita `prefers-reduced-motion`.
- `ScreenSection` — bloco 100vh com id ancorado.
- `ProgressDots` — indicador discreto dos 4 atos.
- `AdvanceButton` — botão de acento, radius 0, pulse sutil.

**Por ato**
- Ato 1: `CoverScreen`, `PreambleScreen`.
- Ato 2: `RevealGrid` + `RevealCard` (flip 3D CSS, estado aberto persistido em memória).
- Ato 3: `FriendMosaic` + `FriendTile` + `FriendLightbox`; dados em `src/content/friends.ts`.
- Ato 4: `LetterScreen` (typewriter linha a linha), `SurpriseReveal`, `ConfettiBurst`, `ClosingScreen` (Web Share API + fallback copiar link).

**Design system**
- `src/styles.css` — tokens da spec no `@theme` do Tailwind v4.
- `src/routes/__root.tsx` — `<link>` Fontshare + meta/title reais.
- `src/lib/motion.ts` — presets de easing/duração.
- `src/content/copy.ts` — textos fixos (nome, data, frases da capa/preâmbulo) para edição fácil.

## 5. Riscos de cair em visual genérico (e mitigação)

| Risco | Mitigação |
|---|---|
| Virar "landing" hero + cards | Cada tela 100vh, 1 ideia por vez |
| Radius uniforme | 0 botões / 8 cards / 24 modais, via tokens |
| Sombra preta padrão | Sombras `rgba(42,33,24,…)` |
| Grid simétrico 3 col | Mosaico assimétrico (2+1, 1+2, full-bleed); grid 2x2 é proposital |
| Ícones em círculo colorido | Sem ícones em círculos; só linha fina inline se necessário |
| Copy genérica | Textos vêm de `src/content/copy.ts`; TODOs marcados até você preencher |
| Fade-in em tudo | Motion hierárquico (fade → flip → parallax → confetti); cada intensidade aparece 1x |
| Fotos stock/IA | Placeholders com dimensões corretas até você mandar as reais |
| Fontes genéricas | Fontshare (Clash Display / Satoshi / Boska) |
| Roxo/azul/gradiente | 1 acento (`#C4785A`) + variações; zero `linear-gradient` decorativo |

## 6. Plano de implementação (em etapas — cada etapa com checkpoint)

**Etapa 0 — Fundação** *(vou executar assim que você aprovar)*
- `bun add canvas-confetti motion` (Motion for React) — sem framer-motion.
- `__root.tsx`: `<link>` Fontshare (Clash Display + Satoshi + Boska), title/description/OG reais ("Para a Minnie — 28.07").
- `src/styles.css`: tokens da spec (`--bg-primary`, `--text-primary`, `--accent` etc.) mapeados no `@theme` do Tailwind v4.
- `src/lib/motion.ts` + `Reveal`.
- `src/content/copy.ts` com nome, data, frase da capa e preâmbulo.
- `src/routes/index.tsx`: substituir placeholder por `JourneyShell` vazio com bg da paleta e uma linha em Clash Display para validar carregamento das fontes.
- **Checkpoint:** você abre o preview e confirma que o fundo é terracota-cream, Clash Display carregou e o tom bate.

**Etapa 1 — Ato 1: Expectativa**
- `CoverScreen`: Boska itálico "amamos estar ao nosso lado" · Clash Display "Feliz Aniversário, Minnie" · data 28.07 · botão "Abrir" com pulse.
- `PreambleScreen`: texto do preâmbulo + botão "Continuar".
- Transição entre telas: slide + fade (0.5s, easing `cubic-bezier(0.16,1,0.3,1)`).
- **Checkpoint:** revisão emocional do Ato 1 no seu celular real antes de seguir.

**Etapa 2 — Ato 2: Descoberta**
- Grid 2x2 + RevealCard com flip 3D. Placeholders para os 4 conteúdos internos (você me passa antes desta etapa).
- **Checkpoint:** sensação tátil do flip.

**Etapa 3 — Ato 3: Conexão**
- Mosaico assimétrico + lightbox. Estrutura em `src/content/friends.ts`.
- **Checkpoint:** densidade e ritmo do mosaico.

**Etapa 4 — Ato 4: Clímax**
- Typewriter, SurpriseReveal (formato a definir com você antes desta etapa), confetti nas 3 cores, tela de encerramento com compartilhar.
- **Checkpoint:** refinamento sensorial final.

**Etapa 5 — Polimento e QA mobile**
- Checklist anti-genérico item a item; touch targets ≥44px; LCP <2s; teste em iPhone real (você) + DevTools 375/430px.

## Detalhes técnicos

- Stack: TanStack Start + React 19 + Tailwind v4 + **Motion for React** + `canvas-confetti`.
- Fontes: `<link>` no `__root.tsx` (não `@import` em `styles.css` — Tailwind v4 + Lightning CSS quebram).
- Tokens: `@theme` de `src/styles.css`; zero cor hardcoded em componentes.
- Rotas: única `/`; hash `#ato-N` para deep-link.
- A11y: `prefers-reduced-motion` respeitado em reveals, flip e typewriter; contraste AA na paleta terracota; foco visível nos botões.
- Sem backend nesta fase. Se depois quiser formulário público para amigos mandarem mensagem, habilitamos Lovable Cloud fora deste escopo.

## O que ainda preciso de você (não bloqueia a Etapa 0)

Antes de cada etapa correspondente:
- **Etapa 1:** confirmar o preâmbulo (rascunho acima ou substituir).
- **Etapa 2:** os 4 conteúdos internos dos cards de revelação (título curto + texto curto por card; opcionalmente 1 foto por card).
- **Etapa 3:** lista de amigos com foto + nome + mensagem curta.
- **Etapa 4:** texto da carta final + qual é a "surpresa" (foto, vídeo, promessa, link para presente físico, etc.).
