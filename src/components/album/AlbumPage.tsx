import { motion } from "motion/react";

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
  return (
    <div className="w-full h-full bg-bg-secondary p-6 grid grid-cols-2 gap-4">
      {page.photos.map((photo) => (
        <motion.div
          key={photo.id}
          className="w-full h-full cursor-pointer"
          onClick={() => onPhotoSelect(photo)}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={photo.url}
            alt={photo.caption}
            className="w-full h-full object-cover rounded-md shadow-soft"
          />
        </motion.div>
      ))}
    </div>
  );
}
