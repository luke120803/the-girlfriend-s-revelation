import { AtmosphereProvider } from "@/hooks/useAtmosphere";
import { AtmosphereElements } from "./journey/AtmosphereElements";
import type { ReactNode } from "react";

/**
 * Casca da jornada — mobile-first.
 * scroll-snap suave entre telas; wrapper max-width em telas maiores para
 * preservar a intenção mobile-first sem esticar em desktop.
 */
export function JourneyShell({ children }: { children: ReactNode }) {
  return (
    <AtmosphereProvider>
      <div className="min-h-screen w-full bg-bg-primary text-text-primary transition-colors duration-[1500ms] ease-cinema">
        <AtmosphereElements />
        <main
          className="relative mx-auto w-full max-w-[480px] snap-y snap-mandatory z-10"
          style={{ scrollBehavior: "smooth" }}
        >
          {children}
        </main>
      </div>
    </AtmosphereProvider>
  );
}
