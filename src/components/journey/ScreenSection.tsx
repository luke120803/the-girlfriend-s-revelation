import { useEffect } from "react";
import type { ReactNode } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AtmosphereTheme, useAtmosphere } from "@/hooks/useAtmosphere";

type Props = {
  id: string;
  children: ReactNode;
  /** rótulo curto do ato — some no ProgressDots quando não passado */
  className?: string;
  /** tema da atmosfera para esta seção */
  theme?: AtmosphereTheme;
};

/**
 * Bloco 100vh com padding padronizado, ancorado por id.
 * Toda tela da jornada usa este wrapper para que scroll + hash funcionem.
 */
export function ScreenSection({ id, children, className = "", theme }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setTheme } = useAtmosphere();

  useEffect(() => {
    if (isInView && theme) {
      setTheme(theme);
    }
  }, [isInView, theme, setTheme]);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative flex min-h-[100svh] w-full snap-start flex-col items-center justify-center px-6 py-16 ${className}`}
    >
      {children}
    </section>
  );
}
