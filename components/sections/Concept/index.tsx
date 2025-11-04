"use client";
import { useState } from "react";
import { ImageGallery } from "@/components/ui/image-gallery";
import type { Concept } from "@/types/content";
import { BLUR_PLACEHOLDER_BASE64 } from "@/lib/utils";
import { ClientImage } from "@/components/ui/client-image";
export { ConceptSkeleton } from "./ConceptSkeleton";

export const ConceptSection = ({ content }: { content: Concept }) => {
  const { title, subtitle, cover, gallery } = content;
  const [open, setOpen] = useState(false);

  return (
    <section id="concept" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 text-muted-foreground" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
      </header>

      <button
        onClick={() => setOpen(true)}
        className="w-full rounded-xl overflow-hidden border bg-card shadow-sm group"
        aria-label="Mở thư viện ảnh concept"
      >
        <div className="aspect-square md:aspect-[16/9] relative">
          <ClientImage
            version={cover.version}
            type="thumb"
            src={cover.public_id}
            alt={cover.public_id}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 768px) 100vw, 100vw"
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER_BASE64}
          />
        </div>
      </button>

      <ImageGallery
        images={gallery}
        open={open}
        onOpenChange={setOpen}
        title="Thư viện ảnh concept"
      />
    </section>
  );
};