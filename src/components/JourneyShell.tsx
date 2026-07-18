import type { ReactNode } from "react";

/**
 * Casca da jornada — mobile-first, sem max-width fixo no wrapper
 * (as telas 100vh controlam seus próprios paddings internos).
 */
export function JourneyShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen w-full bg-bg-primary text-text-primary antialiased">
      {children}
    </main>
  );
}
