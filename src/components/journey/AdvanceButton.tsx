import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "solid" | "ghost";
  pulse?: boolean;
};

/**
 * Botão de acento — radius 0 (spec), pulse opcional, touch target ≥44px.
 * Nunca usar shadcn Button aqui para não herdar radius/estética genérica.
 */
export function AdvanceButton({
  children,
  variant = "solid",
  pulse = false,
  className = "",
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 min-h-[52px] px-8 text-sm tracking-[0.22em] uppercase font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg-primary";
  const styles =
    variant === "solid"
      ? "bg-accent text-bg-primary hover:bg-accent-dark active:scale-[0.98]"
      : "bg-transparent text-text-primary border border-text-primary/20 hover:border-text-primary/60";
  const pulseCls = pulse ? "animate-[cover-pulse_2.4s_ease-in-out_infinite]" : "";
  return (
    <button
      {...rest}
      className={`${base} ${styles} ${pulseCls} ${className}`}
      style={{ borderRadius: 0 }}
    >
      {children}
    </button>
  );
}
