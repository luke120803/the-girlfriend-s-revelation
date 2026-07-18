import { createFileRoute } from "@tanstack/react-router";
import { Album3DScreen } from "@/components/screens/Album3DScreen";

export const Route = createFileRoute("/album")({
  component: AlbumPage,
});

function AlbumPage() {
  return <Album3DScreen />;
}
