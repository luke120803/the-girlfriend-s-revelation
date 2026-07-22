import { useState } from "react";
import { ScreenSection } from "../journey/ScreenSection";
import { AdvanceButton } from "../journey/AdvanceButton";
import { Reveal } from "../Reveal";
import { FlippableCard } from "../journey/FlippableCard";
import { Castle } from "lucide-react";

/**
 * Ato II — Descoberta. Estrutura com cards 3D que revelam conteúdo.
 */
export function RevelationScreen({ onAdvance }: { onAdvance: () => void }) {
  const [flippedCards, setFlippedCards] = useState(0);
  const allCardsFlipped = flippedCards === 4;

  const handleCardFlip = () => {
    setFlippedCards((count) => count + 1);
  };

  const cards = [
    {
      front: <div className="flex items-center justify-center h-full text-4xl font-display text-text-muted">1</div>,
      back: <p className="text-sm text-text-secondary">"O primeiro olhar, a primeira conversa..."</p>,
    },
    {
      front: <div className="flex items-center justify-center h-full text-4xl font-display text-text-muted">2</div>,
      back: <p className="text-sm text-text-secondary">"A cumplicidade nos pequenos gestos..."</p>,
    },
    {
      front: <div className="flex items-center justify-center h-full text-4xl font-display text-text-muted">3</div>,
      back: <p className="text-sm text-text-secondary">"Os sonhos que compartilhamos..."</p>,
    },
    {
      front: <div className="flex items-center justify-center h-full text-4xl font-display text-text-muted">4</div>,
      back: <p className="text-sm text-text-secondary">"E a certeza de que o futuro é nosso."</p>,
    },
  ];

  return (
    <ScreenSection id="ato-2" theme="classic">
      <Reveal>
        <div className="flex items-center gap-3">
          <Castle size={16} className="text-accent" strokeWidth={1.5} />
          <span className="text-xs tracking-[0.35em] uppercase text-accent">
            Ato II · Descoberta
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="font-display mt-4 text-[clamp(2rem,7vw,2.5rem)] leading-[1.1] text-text-primary">
          Quatro pedaços,<br />
          <span className="italic text-accent-dark">um de cada vez.</span>
        </h2>
      </Reveal>

      <div className="mt-10 grid w-full grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <Reveal key={index} delay={0.3 + index * 0.1}>
            <div onClick={handleCardFlip}>
              <FlippableCard front={card.front} back={card.back} />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.5} className="mt-12">
        <AdvanceButton
          variant="ghost"
          onClick={onAdvance}
          disabled={!allCardsFlipped}
        >
          Seguir
        </AdvanceButton>
      </Reveal>
    </ScreenSection>
  );
}