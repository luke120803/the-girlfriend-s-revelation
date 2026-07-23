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
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 z-20 px-8 py-4 bg-bg-card/40 backdrop-blur-md rounded-full border border-white/10">
      <Button
        variant="ghost"
        size="icon"
        onClick={onPrev}
        disabled={isPrevDisabled}
        className="text-text-primary hover:bg-accent/20 rounded-full"
        aria-label="Página anterior"
      >
        <ArrowLeft className="w-6 h-6" />
      </Button>
      
      <div className="w-px h-6 bg-white/20 hidden sm:block" />
      
      <p className="text-xs font-display text-text-primary uppercase tracking-widest hidden sm:block">
        Nossas Memórias
      </p>

      <div className="w-px h-6 bg-white/20 hidden sm:block" />

      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        disabled={isNextDisabled}
        className="text-text-primary hover:bg-accent/20 rounded-full"
        aria-label="Próxima página"
      >
        <ArrowRight className="w-6 h-6" />
      </Button>
    </div>
  );
}
