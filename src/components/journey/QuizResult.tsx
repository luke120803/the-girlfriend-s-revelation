import { motion } from "motion/react";
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-sm px-8 py-10 text-center"
    >
      <p className="text-text-muted text-xs uppercase tracking-[0.25em] font-body mb-6">
        {score} de {total}
      </p>
      <h3
        className="font-display text-text-primary leading-tight"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
      >
        {QUIZ.result.title}
      </h3>
      <p className="mt-5 text-text-secondary font-handwritten italic leading-relaxed text-lg">
        {getResultMessage()}
      </p>
      <p className="mt-6 text-text-muted text-sm font-body leading-relaxed">
        Agora, algumas memórias que guardei com cuidado.
      </p>
      <button
        onClick={onAdvance}
        className="mt-10 w-full py-4 bg-accent text-[#FDF8F3] text-sm uppercase tracking-[0.2em] font-body transition-all duration-400 hover:bg-accent-dark active:scale-95"
        style={{ borderRadius: 0 }}
      >
        {QUIZ.result.cta}
      </button>
    </motion.div>
  );
}
