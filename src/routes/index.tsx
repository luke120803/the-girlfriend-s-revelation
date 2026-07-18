import { createFileRoute } from "@tanstack/react-router";
import { useCallback } from "react";
import { JourneyShell } from "@/components/JourneyShell";
import { ProgressDots } from "@/components/journey/ProgressDots";
import { CoverScreen } from "@/components/screens/CoverScreen";
import { PreambleScreen } from "@/components/screens/PreambleScreen";
import { RevelationScreen } from "@/components/screens/RevelationScreen";
import { MosaicScreen } from "@/components/screens/MosaicScreen";
import { LetterScreen } from "@/components/screens/LetterScreen";
import { ClosingScreen } from "@/components/screens/ClosingScreen";
import { ACTS } from "@/content/acts";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // sincroniza hash sem interferir com o smooth scroll
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${id}`);
    }
  }, []);

  return (
    <>
      <ProgressDots acts={ACTS.map((a) => ({ id: a.id, label: a.label }))} />
      <JourneyShell>
        <CoverScreen onAdvance={() => scrollTo("preambulo")} />
        <PreambleScreen onAdvance={() => scrollTo("ato-2")} />
        <RevelationScreen onAdvance={() => scrollTo("ato-3")} />
        <MosaicScreen onAdvance={() => scrollTo("ato-4")} />
        <LetterScreen onAdvance={() => scrollTo("encerramento")} />
        <ClosingScreen />
      </JourneyShell>
    </>
  );
}
