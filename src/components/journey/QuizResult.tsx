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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md p-10 text-center bg-bg-card/30 backdrop-blur-xl rounded-3xl border border-accent/20 shadow-2xl"
    >
      <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 text-accent text-3xl font-display">
        {score}/{total}
      </div>
      <h3 className="text-3xl font-display text-text-primary leading-tight">{QUIZ.result.title}</h3>
      <p className="mt-6 text-lg text-text-secondary italic font-serif leading-relaxed">
        {getResultMessage()}
      </p>
      <Button 
        onClick={onAdvance} 
        size="lg"
        className="mt-10 w-full py-6 text-lg rounded-xl bg-accent hover:bg-accent-dark transition-all duration-500 hover:tracking-widest"
      >
        {QUIZ.result.cta}
      </Button>
    </motion.div>
  );
}
