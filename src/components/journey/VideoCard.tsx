import { useState } from "react";
import { motion } from "motion/react";
import { PlayCircle } from "lucide-react";

type VideoCardProps = {
  thumbnail: string;
  videoUrl: string;
  onVideoPlay: () => void;
};

export function VideoCard({ thumbnail, videoUrl, onVideoPlay }: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    onVideoPlay();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        className="relative w-full h-full bg-bg-card cursor-pointer"
        onClick={openModal}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        style={{ borderRadius: 8, boxShadow: "var(--shadow-soft)" }}
      >
        <img src={thumbnail} alt="Thumbnail" className="w-full h-full object-cover" style={{ borderRadius: 8 }} />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center" style={{ borderRadius: 8 }}>
          <PlayCircle className="h-12 w-12 text-white/70" />
        </div>
      </motion.div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <video src={videoUrl} controls autoPlay className="max-w-[90vw] max-h-[90vh]" />
        </div>
      )}
    </>
  );
}
