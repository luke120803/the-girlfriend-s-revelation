import { ScreenSection } from "../journey/ScreenSection";
import { Reveal } from "../Reveal";
import { HER } from "@/content/copy";

export function ClosingScreen() {
  return (
    <ScreenSection id="encerramento">
      <div className="flex w-full flex-col items-center text-center">
        <Reveal>
          <p className="font-hand text-lg text-text-secondary">
            com carinho,
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="font-display mt-6 text-[clamp(2rem,8vw,3rem)] leading-[1.05] text-text-primary">
            para a<br />
            <span className="italic text-accent-dark">{HER.name}.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.4}>
          <div
            aria-hidden
            className="mt-10 h-px w-16"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </Reveal>
        <Reveal delay={0.6}>
          <p className="mt-10 text-xs tracking-[0.4em] uppercase text-text-muted">
            fim · {HER.birthday}
          </p>
        </Reveal>
      </div>
    </ScreenSection>
  );
}
