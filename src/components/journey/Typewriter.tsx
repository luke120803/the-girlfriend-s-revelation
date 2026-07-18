import { useEffect, useState } from "react";
import { motion } from "motion/react";

type TypewriterProps = {
  text: string;
  className?: string;
  onComplete: () => void;
};

export function Typewriter({ text, className, onComplete }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setIsComplete(true);
        onComplete();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, onComplete, isComplete]);

  return <p className={className}>{displayText}</p>;
}
