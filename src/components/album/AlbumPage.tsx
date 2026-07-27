import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

type Photo = {
  id: number;
  url: string;
  caption: string;
};

type AlbumPageProps = {
  page: {
    photos: Photo[];
  };
  onPhotoSelect: (photo: Photo) => void;
};

export function AlbumPage({ page, onPhotoSelect }: AlbumPageProps) {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const handlePhotoSelect = (photo: Photo) => {
    const sound = new Audio("/audio/polaroid.wav");
    sound.play();
    onPhotoSelect(photo);
  };

  return (
    <motion.div
      ref={carousel}
      className="cursor-grab overflow-hidden"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {page.photos.map((photo) => (
          <motion.div
            key={photo.id}
            className="min-w-[300px] p-4"
            onClick={() => handlePhotoSelect(photo)}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover rounded-md shadow-soft pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}