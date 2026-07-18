import { motion } from "motion/react";
import { EASE_CINEMA } from "@/lib/motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  const letters = text.split("").map((letter, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: EASE_CINEMA,
        delay: delay + index * 0.05,
      }}
      className="inline-block"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  ));

  return <span className={className}>{letters}</span>;
}
