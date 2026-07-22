import { motion } from "motion/react";
import { ScreenSection } from "../journey/ScreenSection";
import { COVER, HER } from "@/content/copy";
import { EASE_CINEMA } from "@/lib/motion";
import { AnimatedText } from "../journey/AnimatedText";

/**
 * Tela 1 — Capa / Ato 1: Expectativa.
 * Composição editorial assimétrica: marcações de índice nos cantos,
 * título deslocado do centro, sussurro em Boska, CTA como gesto silencioso
 * (ring respirando + linha) em vez de botão de landing page.
 */
export function CoverScreen({ onAdvance }: { onAdvance: () => void }) {
  return (
    <ScreenSection id="capa" className="overflow-hidden" theme="ballet">
      {/* Grão sutil sobre toda a tela */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Vinheta quente */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-1000"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, transparent 40%, color-mix(in oklab, var(--accent-dark) 10%, transparent) 100%)",
        }}
      />

      {/* Cantos editoriais */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.2 }}
        className="absolute top-8 left-6 right-6 flex items-start justify-between text-[10px] tracking-[0.32em] uppercase text-text-muted"
      >
        <span>Ato I</span>
        <span>Expectativa</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE_CINEMA, delay: 0.3 }}
        className="absolute top-24 right-6 flex flex-col items-end gap-2"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-text-muted">
          {HER.birthdayFull}
        </span>
        <span
          aria-hidden
          className="h-14 w-px bg-text-primary/20"
        />
      </motion.div>

      {/* Composição central — assimétrica */}
      <div className="relative z-10 flex w-full max-w-md flex-col">
        {/* pequena marca antes do título */}
        <motion.div
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE_CINEMA, delay: 0.5 }}
          className="flex items-center gap-3 pl-1"
        >
          <span className="h-px w-8 bg-accent" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent-dark">
            para {HER.name.toLowerCase()}
          </span>
        </motion.div>

        {/* Título editorial */}
        <h1 className="font-display mt-6 text-[clamp(3rem,14vw,5rem)] leading-[0.95] font-medium text-text-primary">
          <span className="block">
            <AnimatedText text="Feliz" delay={0.7} />
          </span>
          <span className="block pl-6 text-text-secondary">
            <AnimatedText text="aniversário," delay={0.9} />
          </span>
          <span className="mt-2 block pl-10 font-hand text-accent-dark">
            <AnimatedText text={`${HER.name}.`} delay={1.15} />
          </span>
        </h1>

        {/* Sussurro em Boska */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE_CINEMA, delay: 1.6 }}
          className="mt-10 flex items-start gap-4 pl-1"
        >
          <span
            aria-hidden
            className="mt-3 h-px w-6 shrink-0 bg-text-primary/30"
          />
          <p className="font-hand text-lg leading-relaxed text-text-secondary">
            &ldquo;{COVER.whisper}&rdquo;
          </p>
        </motion.div>
      </div>

      {/* CTA silencioso — gesto, não botão de landing */}
      <motion.button
        type="button"
        onClick={onAdvance}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE_CINEMA, delay: 2 }}
        className="group absolute bottom-14 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4 focus:outline-none"
        aria-label={`${COVER.cta} a caixa`}
      >
        <span className="relative flex h-16 w-16 items-center justify-center">
          {/* aros respirando */}
          <span
            aria-hidden
            className="absolute inset-0 rounded-full border border-accent/40 animate-[cover-pulse_3s_ease-in-out_infinite]"
          />
          <span
            aria-hidden
            className="absolute inset-2 rounded-full border border-accent/25 animate-[cover-pulse_3s_ease-in-out_infinite]"
            style={{ animationDelay: "0.6s" }}
          />
          {/* núcleo */}
          <span className="relative h-2 w-2 rounded-full bg-accent-dark transition-transform duration-500 group-hover:scale-125" />
        </span>
        <span className="text-[10px] tracking-[0.5em] uppercase text-text-primary/70 transition-colors duration-500 group-hover:text-accent-dark">
          {COVER.cta}
        </span>
      </motion.button>
    </ScreenSection>
  );
}