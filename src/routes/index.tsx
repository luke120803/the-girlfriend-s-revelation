import { createFileRoute } from "@tanstack/react-router";
import { JourneyShell } from "@/components/JourneyShell";
import { Reveal } from "@/components/Reveal";
import { COVER, HER } from "@/content/copy";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <JourneyShell>
      {/* Etapa 0 — validação de fundação: paleta + fontes carregadas */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <p className="font-hand text-lg text-text-secondary">{COVER.whisper}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="font-display mt-6 text-[clamp(2.5rem,10vw,4rem)] leading-[1.05] font-semibold text-text-primary">
            Feliz Aniversário,
            <br />
            <span className="italic text-accent-dark">{HER.name}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-8 text-sm tracking-[0.3em] uppercase text-text-muted">
            {HER.birthday}
          </p>
        </Reveal>
      </section>
    </JourneyShell>
  );
}
