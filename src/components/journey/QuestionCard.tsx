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
    onAnswer(option === answer);
  };

  return (
    <div className="w-full max-w-md p-6 bg-bg-card rounded-lg shadow-soft">
      <p className="text-lg font-display text-text-primary">{question}</p>
      <div className="mt-6 space-y-3">
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
            className="w-full justify-start text-left"
            onClick={() => handleAnswer(option)}
            disabled={isAnswered}
          >
            {option}
          </Button>
        ))}
      </div>
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center text-sm text-text-secondary"
        >
          {feedback}
        </motion.div>
      )}
    </div>
  );
}
