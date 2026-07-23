import { useState, Suspense, Component, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { AlbumModel } from "../album/AlbumModel";
import { AlbumNavigation } from "../album/AlbumNavigation";
import { PhotoModal } from "../journey/PhotoModal";
import { ScreenSection } from "../journey/ScreenSection";
import { ALBUM_PAGES } from "@/content/album";

class AlbumErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Album3D Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-bg-primary">
          <h2 className="text-3xl font-serif mb-4 text-text-primary">Nosso Álbum</h2>
          <p className="text-lg opacity-80 max-w-md text-text-secondary">
            Ocorreu um erro ao carregar o álbum 3D. Mas nossas memórias continuam aqui.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
            {ALBUM_PAGES[0]?.photos.map(photo => (
              <img 
                key={photo.id} 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full aspect-square object-cover rounded shadow-lg"
              />
            ))}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScreenSection id="album-3d" theme="marine">
      <AlbumErrorBoundary>
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

        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
          <h2 className="text-2xl font-serif text-white/90">Nossas Memórias</h2>
          <p className="text-xs text-white/50 uppercase tracking-widest mt-1">Toque para abrir</p>
        </div>

        {isOpen && (
          <AlbumNavigation
            onPrev={() => turnPage("prev")}
            onNext={() => turnPage("next")}
            isPrevDisabled={currentPage === 0}
            isNextDisabled={currentPage >= ALBUM_PAGES.length - 1}
          />
        )}
        
        {currentPage === ALBUM_PAGES.length - 1 && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20">
             <button 
              onClick={() => scrollTo("mosaico")}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm transition-all animate-pulse"
            >
              Continuar Jornada
            </button>
          </div>
        )}
      </AlbumErrorBoundary>

      <PhotoModal
        isOpen={!!selectedPhoto}
        onOpenChange={(isOpen) => !isOpen && handleCloseModal()}
        photo={selectedPhoto}
      />
    </ScreenSection>
  );
}
