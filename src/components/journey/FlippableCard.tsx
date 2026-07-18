import { useState } from "react";
import { motion } from "motion/react";

type FlippableCardProps = {
  front: React.ReactNode;
  back: React.ReactNode;
};

export function FlippableCard({ front, back }: FlippableCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="aspect-[3/4] w-full cursor-pointer"
      onClick={handleFlip}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div
          className="absolute w-full h-full bg-bg-card"
          style={{
            backfaceVisibility: "hidden",
            borderRadius: 8,
            boxShadow: "var(--shadow-soft)",
          }}
        >
          {front}
        </div>
        <div
          className="absolute w-full h-full bg-bg-card p-4"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 8,
            boxShadow: "var(--shadow-soft)",
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
