"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/ui/image-gallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ImageResource as ContentImage, RecentWork } from "@/types/content";
import { THUMB_IMAGE_SIZES, BLUR_PLACEHOLDER_BASE64 } from "@/lib/utils";
import { ClientImage } from "@/components/ui/client-image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
export { RecentWorkSkeleton } from "./RecentWorkSkeleton";

export const RecentWorkSection = ({ content }: { content: RecentWork }) => {
  const { title, subtitle, images } = content;
  const [open, setOpen] = useState(false);
  return (
    <section id="portfolio" className="container py-16 md:py-24">
      <header className="mb-8 flex items-start justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 text-muted-foreground" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
        </div>
        <Button variant="outline" onClick={() => setOpen(true)} className="shrink-0">
          Xem tất cả
        </Button>
      </header>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((img: ContentImage, index: number) => (
            <CarouselItem
              key={index}
              className="basis-[75%] md:basis-[40%] lg:basis-[30%]"
            >
              <AspectRatio ratio={1 / 1}>
                <ClientImage
                  version={img.version}
                  type="thumb"
                  src={img.public_id}
                  alt={img.public_id}
                  fill
                  className="object-cover rounded-lg"
                  sizes={THUMB_IMAGE_SIZES}
                  loading={index < 10 ? "eager" : "lazy"}
                  preload={index < 10}
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER_BASE64}
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <ImageGallery images={images} open={open} onOpenChange={setOpen} title={title} />
    </section>
  );
};
