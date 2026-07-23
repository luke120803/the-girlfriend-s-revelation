import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

type QuestionCardProps = {
  question: string;
  options: string[];
  answer: string;
  feedback: string;
  onAnswer: (isCorrect: boolean) => void;
};

export function QuestionCard({ question, options, answer, feedback, onAnswer }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    // O tempo de espera agora é menor para a transição ser mais ágil
    setTimeout(() => {
      onAnswer(option === answer);
    }, 1500); // Dá um tempo curto para ver a cor do botão antes de passar para o feedback
  };

  return (
    <div className="w-full max-w-md p-8 bg-bg-card/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
      {/* Elemento decorativo sutil */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-1000" />
      
      <p className="text-xl font-display text-text-primary leading-tight relative z-10">{question}</p>
      <div className="mt-8 space-y-4 relative z-10">
        {options.map((option) => (
          <Button
            key={option}
            variant={
              isAnswered
                ? option === answer
                  ? "success"
                  : option === selectedOption
                  ? "destructive"
                  : "outline"
                : "outline"
            }
            className={`w-full justify-start text-left h-auto py-5 px-6 rounded-2xl transition-all duration-500 border-white/5 ${
              !isAnswered ? 'hover:scale-[1.02] hover:bg-white/5 active:scale-95' : ''
            } ${isAnswered && option === answer ? 'ring-2 ring-success/50' : ''}`}
            onClick={() => handleAnswer(option)}
            disabled={isAnswered}
          >
            <span className="text-base font-sans tracking-wide">{option}</span>
          </Button>
        ))}
      </div>
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mt-8 p-6 rounded-2xl bg-accent/5 border border-accent/10 text-center relative z-10"
        >
          <p className="text-sm italic text-text-primary leading-relaxed">
            {feedback}
          </p>
        </motion.div>
      )}
    </div>
  );
}
