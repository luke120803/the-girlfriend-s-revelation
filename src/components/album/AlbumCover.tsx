import { motion } from "motion/react";

type AlbumCoverProps = {
  onOpen: () => void;
};

export function AlbumCover({ onOpen }: AlbumCoverProps) {
  return (
    <motion.div
      className="w-full h-full bg-accent-dark rounded-lg shadow-lifted flex flex-col items-center justify-center text-center p-8 cursor-pointer"
      onClick={onOpen}
      whileHover={{ scale: 1.02 }}
    >
      <h2 className="font-display text-4xl text-bg-primary">Nosso Álbum</h2>
      <p className="mt-4 font-hand text-lg text-bg-primary/80">
        Toque para abrir e relembrar
      </p>
    </motion.div>
  );
}
