"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClientImage } from "@/components/ui/client-image";
import { ImageGallery } from "@/components/ui/image-gallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { Pricing, Tier, Contact } from "@/types/content";
import { THUMB_IMAGE_SIZES, BLUR_PLACEHOLDER_BASE64 } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const PricingSection = ({ content, contact }: { content: Pricing; contact: Contact }) => {
  const { title, subtitle, tiers } = content;
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const activeTier = tiers.find((t) => t.folder === activeKey);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateScrollState = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateScrollState();
    api.on("reInit", updateScrollState);
    api.on("select", updateScrollState);

    return () => {
      api.off("reInit", updateScrollState);
      api.off("select", updateScrollState);
    };
  }, [api]);

  return (
    <section id="pricing" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 text-muted-foreground" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
      </header>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {tiers.map((t: Tier) => (
            <CarouselItem
              key={t.folder}
              className="basis-[90%] md:basis-[42%] lg:basis-[33%]"
            >
              <AspectRatio ratio={2 / 3}>
                <Card
                  className={
                    t.highlight
                      ? "border-2 border-primary h-full overflow-hidden relative"
                      : "border-2 border-border h-full overflow-hidden relative"
                  }
                >
                  <div
                    onClick={() => {
                      setActiveKey(t.folder);
                      setOpen(true);
                    }}
                    className="w-full h-full absolute inset-0 group cursor-pointer"
                  >
                    <ClientImage
                      version={t.images[0].version}
                      type="thumb"
                      src={t.images[0].public_id}
                      alt={t.images[0].public_id}
                      fill
                      className="object-cover"
                      sizes={THUMB_IMAGE_SIZES}
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER_BASE64}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold">
                        Xem qua
                      </span>
                    </div>
                  </div>
                  <a
                    href={`tel:${contact.phone}`}
                    className="absolute bottom-4 right-4 z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      variant={t.highlight ? "hero" : "outline"}
                      size="lg"
                      className="shadow-lg shadow-black/20"
                    >
                      Đặt lịch
                    </Button>
                  </a>
                </Card>
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        {canScrollPrev && <CarouselPrevious />}
        {canScrollNext && <CarouselNext />}
      </Carousel>

      {activeTier && (
        <ImageGallery
          images={activeTier.images}
          open={open}
          onOpenChange={(v) => {
            setOpen(v);
            if (!v) setActiveKey(null);
          }}
          title={`Thư viện bảng giá - ${activeTier.name}`}
        />
      )}
    </section>
  );
};

export default PricingSection;
