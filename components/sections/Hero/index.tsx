import { ClientImage } from "@/components/ui/client-image";
import { Button } from "@/components/ui/button";
import type { Hero, Contact } from "@/types/content";
import { FULLSCREEN_IMAGE_SIZES, BLUR_PLACEHOLDER_BASE64 } from "@/lib/utils";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export const HeroSection = ({ content, contact }: { content: Hero; contact: Contact }) => {
  const { image, title, subtitle, cta1, cta2 } = content;

  return (
    <section id="top" className="relative">
      <div className="relative overflow-hidden bg-card shadow-sm h-[calc(100dvh-4rem)]">
        <ClientImage
          version={image.version}
          type="thumb"
          src={image.public_id}
          alt={image.public_id}
          fill
          preload={true}
          className="object-cover"
          sizes={FULLSCREEN_IMAGE_SIZES}
          placeholder="blur"
          loading="eager"
          blurDataURL={BLUR_PLACEHOLDER_BASE64}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-background/15 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-4 md:px-6 lg:container lg:mx-auto pb-10 md:pb-14">
            <div className="max-w-2xl animate-enter">
              <h1 
                className="font-display text-4xl md:text-6xl font-semibold leading-tight text-white"
                style={{ 
                  textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.4), 0 0 2px rgba(0,0,0,0.8)' 
                }}
              >
                {title}
              </h1>
              <p 
                className="mt-4 text-lg md:text-xl text-white/95 hidden md:block"
                style={{ 
                  textShadow: '0 2px 6px rgba(0,0,0,0.5), 0 0 2px rgba(0,0,0,0.7)' 
                }}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              >
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact">
                  <Button variant="hero" size="lg">{cta1}</Button>
                </a>
                <a href="#portfolio">
                  <Button variant="outline" size="lg">{cta2}</Button>
                </a>
              </div>
              <div className="flex gap-4 mt-6">
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook 
                    className="h-6 w-6 text-white hover:text-accent transition-colors" 
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
                  />
                </a>
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram 
                    className="h-6 w-6 text-white hover:text-accent transition-colors" 
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
                  />
                </a>
                <a href={`mailto:${contact.email}`} aria-label="Email">
                  <Mail 
                    className="h-6 w-6 text-white hover:text-accent transition-colors" 
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
                  />
                </a>
                <a href={`tel:${contact.phone}`} aria-label="Phone" className="flex items-center gap-2">
                  <Phone 
                    className="h-6 w-6 text-white hover:text-accent transition-colors" 
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
                  />
                  <span 
                    className="text-white hover:text-accent transition-colors font-medium"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                  >
                    {contact.phoneDisplay}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
