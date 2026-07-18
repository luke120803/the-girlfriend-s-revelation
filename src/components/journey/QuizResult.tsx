import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { QUIZ } from "@/content/copy";

type QuizResultProps = {
  score: number;
  total: number;
  onAdvance: () => void;
};

export function QuizResult({ score, total, onAdvance }: QuizResultProps) {
  const getResultMessage = () => {
    const percentage = score / total;
    if (percentage === 1) return QUIZ.result.perfect;
    if (percentage >= 0.5) return QUIZ.result.good;
    return QUIZ.result.bad;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md p-6 text-center"
    >
      <h3 className="text-2xl font-display text-text-primary">{QUIZ.result.title}</h3>
      <p className="mt-4 text-lg text-text-secondary">{getResultMessage()}</p>
      <Button onClick={onAdvance} className="mt-8">
        {QUIZ.result.cta}
      </Button>
    </motion.div>
  );
}
