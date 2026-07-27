import { createFileRoute } from "@tanstack/react-router";
import { AlbumPage as AlbumPageComponent } from "@/components/album/AlbumPage";
import { ALBUM_PAGES } from "@/content/album";

export const Route = createFileRoute("/album")({
  component: AlbumPage,
});

function AlbumPage() {
  const allPhotos = ALBUM_PAGES.flatMap((page) => page.photos);
  const page = { photos: allPhotos };

  // For now, onPhotoSelect does nothing
  const handlePhotoSelect = () => {};

  return <AlbumPageComponent page={page} onPhotoSelect={handlePhotoSelect} />;
}