import { useState } from "react";
import { ScreenSection } from "../journey/ScreenSection";
import { AdvanceButton } from "../journey/AdvanceButton";
import { Reveal } from "../Reveal";
import { Typewriter } from "../journey/Typewriter";
import { LETTER } from "@/content/copy";
import confetti from "canvas-confetti";
import { Fish } from "lucide-react";

/**
 * Ato IV — Clímax (Carta). Efeito de digitação e confetti.
 */
export function LetterScreen({ onAdvance }: { onAdvance: () => void }) {
  const [isLetterComplete, setIsLetterComplete] = useState(false);

  const handleLetterComplete = () => {
    setIsLetterComplete(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <ScreenSection id="ato-4" theme="marine">
      <Reveal>
        <div className="flex items-center gap-3">
          <Fish size={16} className="text-accent" strokeWidth={1.5} />
          <span className="text-xs tracking-[0.35em] uppercase text-accent">
            Ato IV · Clímax
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="font-display mt-4 text-[clamp(2rem,7vw,2.5rem)] leading-[1.1] text-text-primary">
          Uma carta,<br />
          <span className="italic text-accent-dark">só sua.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.3} className="mt-8 w-full">
        <article
          className="p-6 bg-bg-card"
          style={{ borderRadius: 8, boxShadow: "var(--shadow-medium)" }}
        >
          <Typewriter
            text={LETTER.body}
            className="font-hand text-lg leading-relaxed text-text-secondary whitespace-pre-wrap"
            onComplete={handleLetterComplete}
          />
        </article>
      </Reveal>

      {isLetterComplete && (
        <Reveal delay={0.5} className="mt-12">
          <AdvanceButton variant="ghost" onClick={onAdvance}>
            {LETTER.cta}
          </AdvanceButton>
        </Reveal>
      )}
    </ScreenSection>
  );
}