# Spec Completa: Site de Aniversário — Caixa de Revelações
## Experiência Mobile-First | Anti-Genérico | Alta Qualidade Visual

---

## 1. Arquitetura da Experiência (Mobile-First)

### Fluxo de 4 Atos

```
[ATO 1: EXPECTATIVA]          [ATO 2: DESCUBERTA]
    ↓                              ↓
Tela de Capa                4 Cards de Revelação
(Frase + Botão)             (Toque para abrir)
    ↓                              ↓
[ATO 3: CONEXÃO]              [ATO 4: CLIMAX]
    ↓                              ↓
Mosaico de Amigos           Carta Final
(Revelação coletiva)        + Surpresa Principal
```

### Estrutura de Telas (375px → 430px base)

| Tela | Conteúdo | Interação | Propósito Emocional |
|------|----------|-----------|---------------------|
| **1. Capa** | Frase curta, data, botão único | Tap para iniciar | Criar mistério, não entregar |
| **2. Preâmbulo** | Texto curto (2-3 frases) | Scroll + botão avançar | Contextualizar, aquecer |
| **3. Revelação** | Grid 2x2 de cards | Tap para flip/expand | Curiosidade, descoberta |
| **4. Conexão** | Mosaico de fotos/mensagens | Tap para ampliar | Sentimento de comunidade |
| **5. Climax** | Carta final + surpresa | Scroll + reveal final | Impacto emocional máximo |
| **6. Encerramento** | Agradecimento + link | Tap para compartilhar | Fechamento elegante |

---

## 2. Design System Anti-Genérico

### 2.1 Paleta Personalizada (Não use defaults de IA)

```css
:root {
  /* Base neutra quente — evita branco puro e cinza padrão */
  --bg-primary: #FDF8F3;
  --bg-secondary: #F5EDE4;
  --bg-card: #FFFFFF;

  /* Texto com temperatura — não use #333 ou #666 */
  --text-primary: #2A2118;
  --text-secondary: #8B7355;
  --text-muted: #B8A99A;

  /* Acento único — escolha 1 cor só com variações */
  --accent: #C4785A;        /* Terracota/cobre */
  --accent-light: #E8B4A2;
  --accent-dark: #8B4A3A;

  /* Superfícies de profundidade */
  --shadow-soft: 0 4px 24px rgba(42, 33, 24, 0.06);
  --shadow-medium: 0 8px 32px rgba(42, 33, 24, 0.10);
  --shadow-lifted: 0 16px 48px rgba(42, 33, 24, 0.14);
}
```

### 2.2 Tipografia (Fontshare > Google Fonts)

```html
<!-- Display: personalidade sem ser overused -->
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,600&display=swap" rel="stylesheet">

<!-- Body: legível mas com caráter -->
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap" rel="stylesheet">

<!-- Texto manuscrito (para cartas, quotes) -->
<link href="https://api.fontshare.com/v2/css?f[]=boska@400,500&display=swap" rel="stylesheet">
```

```css
--font-display: 'Clash Display', 'Georgia', serif;
--font-body: 'Satoshi', 'Inter', sans-serif;
--font-handwritten: 'Boska', 'Georgia', serif;

/* Regras */
--text-hero: clamp(2.5rem, 8vw, 4rem);      /* Clash Display */
--text-title: clamp(1.5rem, 4vw, 2.25rem);  /* Clash Display */
--text-body: clamp(1rem, 2vw, 1.125rem);     /* Satoshi */
--text-quote: 1.25rem;                        /* Boska italic */
--text-small: 0.875rem;                       /* Satoshi */
```

### 2.3 Anti-Padrões IA (O que NÃO fazer)

| ❌ Padrão IA | ✅ Substituição |
|-------------|----------------|
| Gradientes roxo/azul | Cor sólida única com variações de opacidade |
| Border-radius 16px em tudo | Variação: 0px (botões) → 8px (cards) → 24px (modais) |
| Cards com sombra padrão | Sombra customizada com cor da superfície |
| Ícones em círculos coloridos | Ícones em linha fina (Lucide) ou sem círculo |
| Layout simétrico 3-colunas | Assimetria intencional: 2+1, 1+2, full-bleed |
| Texto genérico | Texto específico que só faz sentido para ela |
| "Hero image" genérica | Foto real sua, com tratamento de cor próprio |
| "Features grid" | Narrativa em sequência, não lista de features |

---

## 3. Stack Técnico: 3 Abordagens

### Opção A: Lovable (Mais rápido, menos controle)

**Para:** MVP em 2-3 horas, iteração visual rápida

**Workflow:**
1. Crie projeto no Lovable
2. Use prompt de setup (design system) — veja seção 5
3. Peça seção por seção, não "site completo"
4. Exporte para GitHub
5. Refine manualmente no VS Code

**Limitações:**
- Animações complexas (GSAP) requerem edição manual
- Difícil de fazer microinterações precisas
- Código pode ficar "inchado"

### Opção B: Bolt.new (Balanceado)

**Para:** Protótipo rápido com código limpo

**Workflow:**
1. Inicie com prompt de design system completo
2. Use referências de sites reais (screenshots)
3. Peça componente por componente
4. Edite no StackBlitz integrado
5. Deploy direto

**Vantagem:** Código mais limpo que Lovable, mais fácil de refinar

### Opção C: Local + Gemini CLI (Recomendado para você)

**Para:** Controle total, código otimizado, aprendizado

**Stack:**
```
Frontend:    HTML5 + CSS3 + Vanilla JS (sem framework)
Animações:   GSAP + ScrollTrigger
Ícones:      Lucide (SVG inline)
Assets:      Imagens otimizadas (WebP)
Deploy:      Vercel / Netlify (drop)
```

**Workflow com Gemini CLI:**
```bash
# 1. Crie estrutura
mkdir aniversario-caixa-revelacoes
cd aniversario-caixa-revelacoes

# 2. Inicie sessão com Gemini CLI
gemini init

# 3. Use prompts estruturados (veja seção 5)
#    Um prompt por arquivo/componente

# 4. Refine interativamente
#    "Refine a animação do card flip para ser mais suave"
#    "Add parallax suave no background"

# 5. Teste mobile
#    Chrome DevTools → Device: iPhone 14 Pro

# 6. Deploy
vercel --prod
```

**Recomendação final:** Use **Opção C** para este projeto. Como você tem experiência técnica, o controle total vale o tempo extra. Você aprende mais e o resultado é mais refinado.

---

## 4. Animações & Efeitos (Alta Qualidade)

### 4.1 Hierarquia de Movimento

| Prioridade | Efeito | Tecnologia | Onde usar |
|------------|--------|-----------|-----------|
| **1** | Fade-in + slide-up suave | CSS transition | Todo conteúdo ao entrar |
| **2** | Card flip 3D | CSS transform | Cards de revelação |
| **3** | Parallax sutil | GSAP ScrollTrigger | Backgrounds, fotos |
| **4** | Confetti/celebração | canvas-confetti | Momento de climax |
| **5** | Typewriter | CSS + JS | Carta final |
| **6** | Floating elements | CSS animation | Elementos decorativos |

### 4.2 Implementações

```css
/* EFEITO 1: Fade-in + slide-up */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* EFEITO 2: Card flip 3D */
.card {
  perspective: 1000px;
}
.card-inner {
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transform-style: preserve-3d;
}
.card.flipped .card-inner {
  transform: rotateY(180deg);
}

/* EFEITO 3: Floating suave */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
.float-element {
  animation: float 4s ease-in-out infinite;
}
```

```javascript
// EFEITO 4: Scroll reveal com IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// EFEITO 5: Confetti no climax
import confetti from 'canvas-confetti';

function celebrate() {
  const duration = 3000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#C4785A', '#E8B4A2', '#F5EDE4']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#C4785A', '#E8B4A2', '#F5EDE4']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}
```

---

## 5. Prompts Estratégicos para IA

### 5.1 Princípio Fundamental

> **NUNCA peça "crie um site"**. Peça "implemente este design system" + "adicione esta seção" + "refine esta animação".

### 5.2 Prompt de Setup (Design System)

```
Crie um design system CSS para um site de homenagem romântica. 

REGRAS:
- Use apenas CSS variables, sem valores hardcoded
- Paleta: fundo #FDF8F3, texto #2A2118, acento #C4785A
- Fontes: 'Clash Display' (títulos), 'Satoshi' (corpo), 'Boska' (citações)
- Shadow: 0 4px 24px rgba(42,33,24,0.06)
- Border-radius: 0px para botões, 8px para cards, 24px para modais
- Transitions: 0.6s cubic-bezier(0.16, 1, 0.3, 1)
- NÃO use gradientes
- NÃO use ícones em círculos coloridos
- NÃO use cards simétricos em 3 colunas

Entregue como um único arquivo style.css com comentários.
```

### 5.3 Prompt por Seção

```
Implemente a Tela 1 (Capa) do site de homenagem:

ELEMENTOS:
- Background: cor #FDF8F3 com pattern sutil de dots (CSS, não imagem)
- Texto central: "Para a pessoa que..." (fonte Boska, 1.25rem, itálico)
- Título: "Feliz Aniversário" (fonte Clash Display, 2.5rem, peso 600)
- Botão: "Abrir surpresa" (fundo #C4785A, texto branco, border-radius 0)
- Efeito: botão pulse suave (scale 1.02, infinito, 2s)

REGRAS:
- Mobile-first: max-width 430px, padding 24px
- Todo conteúdo centralizado vertical e horizontalmente
- 100vh, sem scroll
- Transição suave para próxima tela ao clicar

Entregue como HTML + CSS inline.
```

### 5.4 Prompt para Refinamento

```
Refine a animação de transição entre telas:

ATUAL: fade simples
DESEJADO: 
- Tela atual: slide para left + fade out
- Próxima tela: slide from right + fade in
- Duração: 0.5s
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

REGRAS:
- Use CSS transitions, não JS pesado
- Respeite prefers-reduced-motion
- Teste em 60fps

Entregue apenas o CSS/JS modificado.
```

---

## 6. Checklist Anti-Genérico

Antes de considerar pronto, verifique:

- [ ] Paleta não é roxo/azul/gradiente genérico
- [ ] Fontes não são Inter/Poppins/Open Sans (use Fontshare)
- [ ] Cards não têm border-radius idêntico
- [ ] Layout não é simétrico 3-colunas
- [ ] Ícones não estão em círculos coloridos
- [ ] Texto não é genérico ("Bem-vindo", "Nossos serviços")
- [ ] Animações não são "fade-in" em tudo
- [ ] Mobile tem touch targets ≥ 44px
- [ ] Imagens são reais (não stock/AI genérico)
- [ ] Sombra tem cor da superfície (não preto puro)
- [ ] Existe pelo menos 1 surpresa inesperada
- [ ] Performance: < 1.5MB total, < 2s LCP

---

## 7. Estrutura de Arquivos (Local)

```
aniversario-caixa-revelacoes/
├── index.html              # Single entry point
├── css/
│   ├── design-system.css   # Variables, tokens, base
│   ├── animations.css      # Keyframes, transitions
│   └── components.css      # Cards, buttons, modais
├── js/
│   ├── main.js            # Entry point
│   ├── navigation.js      # Transição entre telas
│   ├── reveal.js          # Lógica de revelação
│   └── animations.js      # GSAP, observers
├── assets/
│   ├── images/            # Fotos (WebP, otimizadas)
│   ├── audio/             # Áudio gravado (MP3, < 500KB)
│   └── fonts/             # Fallbacks locais
└── README.md              # Instruções de deploy
```

---

## 8. Deploy & Compartilhamento

```bash
# Opção 1: Vercel (recomendado)
npm i -g vercel
vercel --prod

# Opção 2: Netlify Drop
# Arraste pasta para netlify.com/drop

# Opção 3: GitHub Pages
# Push para repo, enable Pages

# Compartilhamento:
# - Link direto (vercel.app)
# - QR code para scan
# - Mensagem com emoji: "🎁 Tenho uma surpresa para você..."
```

---

## 9. Próximos Passos

1. **Escolha a abordagem**: Local + Gemini CLI (recomendado)
2. **Defina a paleta**: Use a terra/cobre ou crie uma baseada em uma foto dela
3. **Colete conteúdo**: Fotos, textos, áudio de amigos
4. **Crie o design system**: 1 arquivo CSS com todos os tokens
5. **Implemente tela por tela**: Não tente fazer tudo de uma vez
6. **Teste no celular**: Seu celular real, não só DevTools
7. **Refine**: Pequenos ajustes fazem grande diferença

---

*Documento criado para projeto pessoal. Priorize emoção sobre perfeição técnica.*
