import { createFileRoute } from "@tanstack/react-router";
import { QuizScreen } from "@/components/screens/QuizScreen";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
});

function QuizPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <QuizScreen onAdvance={() => {}} />
      <Link to="/hub" className="mt-8">
        <Button variant="outline">Voltar ao Hub</Button>
      </Link>
    </div>
  );
}
