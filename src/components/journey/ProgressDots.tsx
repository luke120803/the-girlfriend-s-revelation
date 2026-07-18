import { useEffect, useState } from "react";

type Act = { id: string; label: string };

/**
 * Indicador discreto dos 4 atos, canto superior direito.
 * Rastreia o ato mais próximo do topo do viewport.
 */
export function ProgressDots({ acts }: { acts: Act[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const targets = acts
      .map((a) => document.getElementById(a.id))
      .filter((n): n is HTMLElement => n !== null);
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pega o alvo mais visível no momento
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const idx = acts.findIndex((a) => a.id === visible.target.id);
        if (idx >= 0) setActive(idx);
      },
      { threshold: [0.35, 0.6, 0.9] },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [acts]);

  return (
    <nav
      aria-label="Progresso da jornada"
      className="fixed right-5 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3"
    >
      {acts.map((a, i) => {
        const isActive = i === active;
        return (
          <a
            key={a.id}
            href={`#${a.id}`}
            aria-label={a.label}
            aria-current={isActive ? "step" : undefined}
            className="group flex h-6 w-6 items-center justify-center"
          >
            <span
              className="block transition-all duration-500"
              style={{
                width: isActive ? "18px" : "6px",
                height: "1px",
                backgroundColor: isActive ? "var(--accent)" : "var(--text-muted)",
              }}
            />
          </a>
        );
      })}
    </nav>
  );
}
