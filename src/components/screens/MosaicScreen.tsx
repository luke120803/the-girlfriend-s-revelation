import { useState } from "react";
import { ScreenSection } from "../journey/ScreenSection";
import { AdvanceButton } from "../journey/AdvanceButton";
import { Reveal } from "../Reveal";
import { VideoCard } from "../journey/VideoCard";

/**
 * Ato III — Conexão. Mosaico assimétrico de vídeos.
 */
export function MosaicScreen({ onAdvance }: { onAdvance: () => void }) {
  const [watchedVideos, setWatchedVideos] = useState(0);
  const allVideosWatched = watchedVideos === 5;

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
    <ScreenSection id="ato-3" className="bg-bg-secondary">
      <Reveal>
        <span className="text-xs tracking-[0.35em] uppercase text-accent">
          Ato III · Conexão
        </span>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="font-display mt-4 text-[clamp(2rem,7vw,2.5rem)] leading-[1.1] text-text-primary">
          As pessoas<br />
          <span className="italic text-accent-dark">que te escolheram.</span>
        </h2>
      </Reveal>

      <div className="mt-10 grid w-full grid-cols-3 gap-3">
        {videos.map((video, index) => (
          <Reveal key={index} delay={0.3 + index * 0.1} className={video.className}>
            <VideoCard
              thumbnail={video.thumbnail}
              videoUrl={video.videoUrl}
              onVideoPlay={handleVideoPlay}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.5} className="mt-12">
        <AdvanceButton
          variant="ghost"
          onClick={onAdvance}
          disabled={!allVideosWatched}
        >
          Seguir
        </AdvanceButton>
      </Reveal>
    </ScreenSection>
  );
}