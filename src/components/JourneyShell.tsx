import type { ReactNode } from "react";

/**
 * Casca da jornada — mobile-first.
 * scroll-snap suave entre telas; wrapper max-width em telas maiores para
 * preservar a intenção mobile-first sem esticar em desktop.
 */
export function JourneyShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-bg-primary text-text-primary">
      <main
        className="relative mx-auto w-full max-w-[480px] snap-y snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {children}
      </main>
    </div>
  );
}
