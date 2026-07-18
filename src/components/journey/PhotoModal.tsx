import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PhotoModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  photo: { url: string; caption: string } | null;
};

export function PhotoModal({ isOpen, onOpenChange, photo }: PhotoModalProps) {
  if (!photo) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-4">
        <DialogHeader>
          <DialogTitle className="sr-only">Foto em destaque</DialogTitle>
          <DialogDescription className="sr-only">{photo.caption}</DialogDescription>
        </DialogHeader>
        <img
          src={photo.url}
          alt={photo.caption}
          className="w-full h-full object-contain"
        />
        <p className="mt-4 text-center text-sm text-text-secondary">{photo.caption}</p>
      </DialogContent>
    </Dialog>
  );
}
