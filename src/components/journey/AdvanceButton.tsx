import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "motion/react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "solid" | "ghost";
  pulse?: boolean;
};

/**
 * Botão de acento — radius 0 (spec), pulse opcional, touch target ≥44px.
 * Refatorado com Motion for React para microinterações ricas.
 */
export function AdvanceButton({
  children,
  variant = "solid",
  pulse = false,
  className = "",
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 min-h-[52px] px-8 text-sm tracking-[0.22em] uppercase font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg-primary";
  const styles =
    variant === "solid"
      ? "bg-accent text-bg-primary"
      : "bg-transparent text-text-primary border border-text-primary/20";
  const pulseCls = pulse ? "animate-[cover-pulse_2.4s_ease-in-out_infinite]" : "";

  return (
    <motion.button
      {...rest}
      className={`${base} ${styles} ${pulseCls} ${className}`}
      style={{ borderRadius: 0 }}
      whileHover={{ y: -3, boxShadow: "var(--shadow-medium)" }}
      whileTap={{ scale: 0.95, y: -1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.button>
  );
}
