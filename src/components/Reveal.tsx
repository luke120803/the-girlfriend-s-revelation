import { motion } from "motion/react";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "title" | "text";
};

const variants = {
  title: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  text: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "text",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants[variant]}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
