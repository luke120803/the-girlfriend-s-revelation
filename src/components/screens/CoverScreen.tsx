import { ScreenSection } from "../journey/ScreenSection";
import { AdvanceButton } from "../journey/AdvanceButton";
import { Reveal } from "../Reveal";
import { COVER, HER } from "@/content/copy";

export function CoverScreen({ onAdvance }: { onAdvance: () => void }) {
  return (
    <ScreenSection id="capa">
      {/* padrão sutil de dots — decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(var(--text-muted) 0.6px, transparent 0.6px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div className="relative z-10 flex w-full flex-col items-center text-center">
        <Reveal>
          <p className="font-hand text-lg leading-relaxed text-text-secondary">
            {COVER.whisper}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <h1 className="font-display mt-8 text-[clamp(2.75rem,11vw,4rem)] leading-[1.02] font-semibold text-text-primary">
            Feliz
            <br />
            Aniversário,
            <br />
            <span className="italic text-accent-dark">{HER.name}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-10 text-xs tracking-[0.4em] uppercase text-text-muted">
            {COVER.date}
          </p>
        </Reveal>
        <Reveal delay={0.6} className="mt-14">
          <AdvanceButton pulse onClick={onAdvance}>
            {COVER.cta}
          </AdvanceButton>
        </Reveal>
      </div>
    </ScreenSection>
  );
}
