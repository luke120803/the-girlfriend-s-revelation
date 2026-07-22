import { ScreenSection } from "../journey/ScreenSection";
import { Reveal } from "../Reveal";
import { HER } from "@/content/copy";
import { PulsingHeart } from "../journey/PulsingHeart";
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Ornament } from "../journey/Ornament";
import { useParallax } from "@/hooks/useParallax";
import { Heart } from "lucide-react";

export function ClosingScreen() {
  const { triggerRef, targetRef } = useParallax(0.2);

  return (
    <ScreenSection id="encerramento" theme="marine">
      <div className="flex w-full flex-col items-center text-center">
        <div ref={targetRef}>
          <Reveal>
            <Ornament className="text-accent-dark/50" />
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="font-hand text-lg text-text-secondary mt-4">
            com carinho,
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <h2 className="font-display mt-6 text-[clamp(2rem,8vw,3rem)] leading-[1.05] text-text-primary">
            para a<br />
            <span className="italic text-accent-dark">{HER.name}.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.6}>
          <div
            aria-hidden
            className="mt-10 h-px w-16"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </Reveal>
        <Reveal delay={0.8}>
          <p className="mt-10 text-xs tracking-[0.4em] uppercase text-text-muted">
            fim · {HER.birthday}
          </p>
        </Reveal>
        <Reveal delay={1.0} className="mt-10">
          <div className="relative">
            <Heart size={32} className="text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 animate-ping" />
            <PulsingHeart />
          </div>
        </Reveal>
        <Reveal delay={1.2} className="mt-12">
          <Link to="/hub">
            <Button variant="outline">Explorar mais memórias</Button>
          </Link>
        </Reveal>
      </div>
    </ScreenSection>
  );
}
