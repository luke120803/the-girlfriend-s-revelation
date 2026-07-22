import { motion } from "motion/react";

type OrnamentProps = {
  className?: string;
};

export function Ornament({ className }: OrnamentProps) {
  return (
    <motion.svg
      className={className}
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <path
        d="M12 5C12 5 8 8 8 12C8 16 12 19 12 19C12 19 16 16 16 12C16 8 12 5 12 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5C12 5 16 8 16 12C16 16 12 19 12 19C12 19 8 16 8 12C8 8 12 5 12 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
