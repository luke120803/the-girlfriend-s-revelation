import { useSoundState } from "@/hooks/useSound";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function SoundToggle() {
  const { isSoundEnabled, toggleSound } = useSoundState();

  return (
    <motion.button
      onClick={toggleSound}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-bg-card/50 backdrop-blur-sm shadow-medium"
      aria-label={isSoundEnabled ? "Desativar som" : "Ativar som"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait">
        {isSoundEnabled ? (
          <motion.div
            key="sound-on"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <Volume2 className="h-5 w-5 text-text-primary" />
          </motion.div>
        ) : (
          <motion.div
            key="sound-off"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <VolumeX className="h-5 w-5 text-text-muted" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
