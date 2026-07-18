import { motion } from "motion/react";
import { EASE_CINEMA } from "@/lib/motion";

type AnimatedWordsProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function AnimatedWords({ text, className, delay = 0 }: AnimatedWordsProps) {
  const words = text.split(" ").map((word, index) => (
    <span key={index} className="inline-block mr-[0.5em]">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: EASE_CINEMA,
          delay: delay + index * 0.1,
        }}
        className="inline-block"
      >
        {word}
      </motion.span>
    </span>
  ));

  return <p className={className}>{words}</p>;
}
