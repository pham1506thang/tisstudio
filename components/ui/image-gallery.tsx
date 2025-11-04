import { useCallback, useRef, useState } from "react";
import { AspectRatio } from "./aspect-ratio";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ImageResource } from "@/types/content";
import {
  THUMB_IMAGE_SIZES,
  FULLSCREEN_IMAGE_SIZES,
  BLUR_PLACEHOLDER_BASE64,
} from "@/lib/utils";
import { ClientImage } from "./client-image";

interface ImageGalleryProps {
  images: ImageResource[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
}

export const ImageGallery = ({
  images,
  open,
  onOpenChange,
  title,
}: ImageGalleryProps) => {
  const [detailOpen, setDetailOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelected(index);
    setDetailOpen(true);
  };

  const handleGalleryClose = (openState: boolean) => {
    onOpenChange(openState);
    if (!openState) {
      setSelected(null);
      setDetailOpen(false);
    }
  };

  const handleDetailClose = (openState: boolean) => {
    setDetailOpen(openState);
    if (!openState) {
      setSelected(null);
    }
  };

  const navigatePrev = () => {
    if (selected === null) return;
    setSelected((i) => (i! > 0 ? i! - 1 : images.length - 1));
  };

  const navigateNext = () => {
    if (selected === null) return;
    setSelected((i) => (i! < images.length - 1 ? i! + 1 : 0));
  };

  // Kiểm tra bounds để tránh lỗi
  const selectedImage =
    selected !== null && images[selected] ? images[selected] : null;

  return (
    <>
      <Dialog open={open} onOpenChange={handleGalleryClose}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{title || "Thư viện ảnh"}</DialogTitle>
            <DialogDescription>
              Chọn một ảnh để xem chi tiết và phóng to
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-y-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img: ImageResource, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleImageClick(idx)}
                  className="group rounded-lg border overflow-hidden relative"
                  aria-label={`Xem ảnh: ${img.public_id}`}
                >
                  <AspectRatio ratio={1}>
                    <ClientImage
                      version={img.version}
                      type="thumb"
                      src={img.public_id}
                      alt={img.public_id}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes={THUMB_IMAGE_SIZES}
                      loading={idx < 10 ? "eager" : "lazy"}
                      preload={idx < 10}
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER_BASE64}
                    />
                  </AspectRatio>
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={detailOpen} onOpenChange={handleDetailClose}>
        <DialogContent className="bg-black/90 border-none !p-0 !max-w-none !w-screen !h-screen !rounded-none [&>button]:text-white [&>button]:bg-white/20 [&>button]:hover:bg-white/40">
          <DialogHeader className="sr-only">
            <DialogTitle>Chi tiết ảnh</DialogTitle>
            <DialogDescription>
              Xem ảnh chi tiết với khả năng điều hướng qua lại
            </DialogDescription>
          </DialogHeader>
          {selectedImage && (
            <div className="relative w-full h-full">
              <ClientImage
                key={selectedImage.public_id}
                version={selectedImage.version}
                type="thumb"
                src={selectedImage.public_id}
                alt={selectedImage.public_id}
                className="object-contain"
                fill
                sizes={FULLSCREEN_IMAGE_SIZES}
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER_BASE64}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={navigatePrev}
                  className="bg-white/30 hover:bg-white/50"
                >
                  <ChevronLeft className="h-6 w-6 text-black" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={navigateNext}
                  className="bg-white/30 hover:bg-white/50"
                >
                  <ChevronRight className="h-6 w-6 text-black" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
