import type { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
  /** rótulo curto do ato — some no ProgressDots quando não passado */
  className?: string;
};

/**
 * Bloco 100vh com padding padronizado, ancorado por id.
 * Toda tela da jornada usa este wrapper para que scroll + hash funcionem.
 */
export function ScreenSection({ id, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`relative flex min-h-[100svh] w-full snap-start flex-col items-center justify-center px-6 py-16 ${className}`}
    >
      {children}
    </section>
  );
}
