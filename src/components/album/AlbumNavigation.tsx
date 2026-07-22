import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type AlbumNavigationProps = {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
};

export function AlbumNavigation({
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
}: AlbumNavigationProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20">
      <Button
        variant="outline"
        size="icon"
        onClick={onPrev}
        disabled={isPrevDisabled}
        aria-label="Página anterior"
      >
        <ArrowLeft />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        disabled={isNextDisabled}
        aria-label="Próxima página"
      >
        <ArrowRight />
      </Button>
    </div>
  );
}
