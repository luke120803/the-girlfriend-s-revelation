import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AlbumModel } from "../album/AlbumModel";
import { AlbumNavigation } from "../album/AlbumNavigation";
import { PhotoModal } from "../journey/PhotoModal";
import { ScreenSection } from "../journey/ScreenSection";
import { ALBUM_PAGES } from "@/content/album";

type Photo = {
  id: number;
  url: string;
  caption: string;
};

export function Album3DScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleOpenAlbum = () => setIsOpen(true);
  const handleSelectPhoto = (photo: Photo) => setSelectedPhoto(photo);
  const handleCloseModal = () => setSelectedPhoto(null);

  const turnPage = (direction: "next" | "prev") => {
    const newPage = direction === "next" ? currentPage + 1 : currentPage - 1;
    if (newPage >= 0 && newPage < ALBUM_PAGES.length) {
      setCurrentPage(newPage);
    }
  };

  return (
    <ScreenSection id="album-3d" theme="marine">
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Carregando Álbum...</div>}>
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
          <AlbumModel
            isOpen={isOpen}
            currentPage={currentPage}
            onOpen={handleOpenAlbum}
            onSelectPhoto={handleSelectPhoto}
          />
        </Canvas>
      </Suspense>

      {isOpen && (
        <AlbumNavigation
          onPrev={() => turnPage("prev")}
          onNext={() => turnPage("next")}
          isPrevDisabled={currentPage === 0}
          isNextDisabled={currentPage >= ALBUM_PAGES.length - 1}
        />
      )}

      <PhotoModal
        isOpen={!!selectedPhoto}
        onOpenChange={(isOpen) => !isOpen && handleCloseModal()}
        photo={selectedPhoto}
      />
    </ScreenSection>
  );
}
