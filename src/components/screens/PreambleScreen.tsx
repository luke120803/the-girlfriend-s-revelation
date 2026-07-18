import { ScreenSection } from "../journey/ScreenSection";
import { AdvanceButton } from "../journey/AdvanceButton";
import { Reveal } from "../Reveal";
import { PREAMBLE } from "@/content/copy";

export function PreambleScreen({ onAdvance }: { onAdvance: () => void }) {
  return (
    <ScreenSection id="preambulo">
      <div className="flex w-full flex-col items-start text-left">
        <Reveal>
          <span className="text-xs tracking-[0.35em] uppercase text-accent">
            Ato I · Expectativa
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-display mt-6 text-[clamp(1.5rem,5.5vw,2rem)] leading-[1.25] text-text-primary">
            {PREAMBLE.body}
          </p>
        </Reveal>
        <Reveal delay={0.4} className="mt-12 self-center">
          <AdvanceButton variant="ghost" onClick={onAdvance}>
            {PREAMBLE.cta}
          </AdvanceButton>
        </Reveal>
      </div>
    </ScreenSection>
  );
}
