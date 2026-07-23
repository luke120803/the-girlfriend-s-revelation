import { useState } from "react";
import { ScreenSection } from "../journey/ScreenSection";
import { QuestionCard } from "../journey/QuestionCard";
import { QuizResult } from "../journey/QuizResult";
import { QUIZ } from "@/content/copy";
import { AnimatePresence, motion } from "motion/react";

type QuizScreenProps = {
  onAdvance: () => void;
};

export function QuizScreen({ onAdvance }: QuizScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    // O feedback já foi mostrado no QuestionCard, agora avançamos
    if (currentQuestionIndex < QUIZ.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  return (
    <ScreenSection id="quiz" theme="artistic">
      <AnimatePresence>
        {!isQuizComplete ? (
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          >
            <QuestionCard
              question={QUIZ.questions[currentQuestionIndex].question}
              options={QUIZ.questions[currentQuestionIndex].options}
              answer={QUIZ.questions[currentQuestionIndex].answer}
              feedback={QUIZ.questions[currentQuestionIndex].feedback}
              onAnswer={handleAnswer}
            />
          </motion.div>
        ) : (
          <QuizResult
            score={score}
            total={QUIZ.questions.length}
            onAdvance={onAdvance}
          />
        )}
      </AnimatePresence>
    </ScreenSection>
  );
}
