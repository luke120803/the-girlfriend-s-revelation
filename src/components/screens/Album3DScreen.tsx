import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { ALBUM_PHOTOS } from "@/content/album";
import { PhotoModal } from "../journey/PhotoModal";
import { ScreenSection } from "../journey/ScreenSection";

export function Album3DScreen() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = useCallback((photo) => {
    setSelectedPhoto(photo);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  return (
    <ScreenSection id="album-3d">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="font-display text-3xl text-text-primary mb-8">Nosso Álbum</h2>
        <div className="w-full" ref={emblaRef} style={{ perspective: "1000px" }}>
          <div className="flex">
            {ALBUM_PHOTOS.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="flex-[0_0_60%] min-w-0 pl-4"
                onClick={() => openModal(photo)}
                style={{
                  transform: `rotateY(${index === emblaApi?.selectedScrollSnap() ? 0 : index < emblaApi?.selectedScrollSnap() ? 20 : -20}deg) scale(${index === emblaApi?.selectedScrollSnap() ? 1 : 0.9})`,
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-auto object-cover rounded-lg shadow-medium"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <PhotoModal
        isOpen={!!selectedPhoto}
        onOpenChange={(isOpen) => !isOpen && closeModal()}
        photo={selectedPhoto}
      />
    </ScreenSection>
  );
}
