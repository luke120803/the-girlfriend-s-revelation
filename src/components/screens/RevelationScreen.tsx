import { ScreenSection } from "../journey/ScreenSection";
import { AdvanceButton } from "../journey/AdvanceButton";
import { Reveal } from "../Reveal";

/**
 * Ato II — Descoberta. Estrutura vazia: grid 2x2 de placeholders.
 * Flip 3D + conteúdo real entram na Etapa 2 do plano.
 */
export function RevelationScreen({ onAdvance }: { onAdvance: () => void }) {
  return (
    <ScreenSection id="ato-2">
      <Reveal>
        <span className="text-xs tracking-[0.35em] uppercase text-accent">
          Ato II · Descoberta
        </span>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="font-display mt-4 text-[clamp(2rem,7vw,2.5rem)] leading-[1.1] text-text-primary">
          Quatro pedaços,<br />
          <span className="italic text-accent-dark">um de cada vez.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.3} className="mt-10 grid w-full grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="aspect-[3/4] flex items-end p-4 bg-bg-card"
            style={{
              borderRadius: 8,
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted">
              Card {n}
            </span>
          </div>
        ))}
      </Reveal>

      <Reveal delay={0.5} className="mt-12">
        <AdvanceButton variant="ghost" onClick={onAdvance}>
          Seguir
        </AdvanceButton>
      </Reveal>
    </ScreenSection>
  );
}
