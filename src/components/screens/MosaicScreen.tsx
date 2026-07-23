import { useState } from "react";
import { ScreenSection } from "../journey/ScreenSection";
import { AdvanceButton } from "../journey/AdvanceButton";
import { motion } from "motion/react";
import { VideoCard } from "../journey/VideoCard";
import { Bird } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Ato III — Conexão. Mosaico assimétrico de vídeos.
 */
export function MosaicScreen({ onAdvance }: { onAdvance: () => void }) {
  const [watchedVideos, setWatchedVideos] = useState(0);
  const allVideosWatched = watchedVideos >= 5;

  const handleVideoPlay = () => {
    setWatchedVideos((count) => count + 1);
  };

  const videos = [
    { thumbnail: "https://picsum.photos/seed/A/400/300", videoUrl: "", className: "col-span-2 aspect-[4/3]" },
    { thumbnail: "https://picsum.photos/seed/B/300/300", videoUrl: "", className: "col-span-1 aspect-square" },
    { thumbnail: "https://picsum.photos/seed/C/300/300", videoUrl: "", className: "col-span-1 aspect-square" },
    { thumbnail: "https://picsum.photos/seed/D/400/300", videoUrl: "", className: "col-span-2 aspect-[4/3]" },
    { thumbnail: "https://picsum.photos/seed/E/800/450", videoUrl: "", className: "col-span-3 aspect-[16/9]" },
  ];

  return (
    <ScreenSection id="mosaico" theme="artistic">
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <Bird size={16} className="text-accent" strokeWidth={1.5} />
          <span className="text-xs tracking-[0.35em] uppercase text-accent">
            Ato III · Conexão
          </span>
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="font-display mt-4 text-[clamp(2rem,7vw,2.5rem)] leading-[1.1] text-text-primary"
        >
          As pessoas<br />
          <span className="italic text-accent-dark">que te escolheram.</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="mt-10 grid w-full grid-cols-3 gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {videos.map((video, index) => (
          <motion.div key={index} variants={itemVariants} className={video.className}>
            <VideoCard
              thumbnail={video.thumbnail}
              videoUrl={video.videoUrl}
              onVideoPlay={handleVideoPlay}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12">
        <AdvanceButton
          variant="ghost"
          onClick={onAdvance}
          disabled={!allVideosWatched}
        >
          Seguir
        </AdvanceButton>
      </motion.div>
    </ScreenSection>
  );
}
