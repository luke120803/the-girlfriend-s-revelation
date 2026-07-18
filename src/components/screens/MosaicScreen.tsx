import { ScreenSection } from "../journey/ScreenSection";
import { AdvanceButton } from "../journey/AdvanceButton";
import { Reveal } from "../Reveal";

/**
 * Ato III — Conexão. Mosaico assimétrico (2+1, 1+2) só de placeholders.
 */
export function MosaicScreen({ onAdvance }: { onAdvance: () => void }) {
  return (
    <ScreenSection id="ato-3" className="bg-bg-secondary">
      <Reveal>
        <span className="text-xs tracking-[0.35em] uppercase text-accent">
          Ato III · Conexão
        </span>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="font-display mt-4 text-[clamp(2rem,7vw,2.5rem)] leading-[1.1] text-text-primary">
          As pessoas<br />
          <span className="italic text-accent-dark">que te escolheram.</span>
        </h2>
      </Reveal>

      {/* mosaico assimétrico — 3 linhas: 2+1, 1+2, full */}
      <Reveal delay={0.3} className="mt-10 grid w-full grid-cols-3 gap-3">
        <Placeholder className="col-span-2 aspect-[4/3]" label="A" />
        <Placeholder className="col-span-1 aspect-square" label="B" />
        <Placeholder className="col-span-1 aspect-square" label="C" />
        <Placeholder className="col-span-2 aspect-[4/3]" label="D" />
        <Placeholder className="col-span-3 aspect-[16/9]" label="E" />
      </Reveal>

      <Reveal delay={0.5} className="mt-12">
        <AdvanceButton variant="ghost" onClick={onAdvance}>
          Seguir
        </AdvanceButton>
      </Reveal>
    </ScreenSection>
  );
}

function Placeholder({ className, label }: { className: string; label: string }) {
  return (
    <div
      className={`${className} flex items-end p-3 bg-bg-card`}
      style={{ borderRadius: 8, boxShadow: "var(--shadow-soft)" }}
    >
      <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted">
        {label}
      </span>
    </div>
  );
}
