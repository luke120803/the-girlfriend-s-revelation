import { ScreenSection } from "../journey/ScreenSection";
import { Reveal } from "../Reveal";
import { PREAMBLE } from "@/content/copy";
import { AnimatedWords } from "../journey/AnimatedWords";
import { ArrowRight } from "lucide-react";

export function PreambleScreen({ onAdvance }: { onAdvance: () => void }) {
  return (
    <ScreenSection id="preambulo">
      <div className="flex w-full flex-col items-start text-left">
        <Reveal>
          <span className="text-xs tracking-[0.35em] uppercase text-accent">
            Ato I · Expectativa
          </span>
        </Reveal>
        
        <AnimatedWords
          text={PREAMBLE.body}
          delay={0.15}
          className="font-display mt-6 text-[clamp(1.5rem,5.5vw,2rem)] leading-[1.25] text-text-primary"
        />

        <Reveal delay={0.4} className="mt-12 self-center">
          <button
            type="button"
            onClick={onAdvance}
            className="group flex items-center gap-2 text-sm text-text-secondary transition-colors duration-300 hover:text-accent-dark focus:outline-none"
          >
            {PREAMBLE.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </ScreenSection>
  );
}