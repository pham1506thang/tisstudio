import { ClientImage } from "../ui/client-image";
import type { About, Feature } from "../../types/content";
import { BLUR_PLACEHOLDER_BASE64 } from "../../lib/utils";

const AboutSection = ({ content }: { content: About }) => {
  const { title, subtitle, features } = content;

  return (
    <section id="about" className="container py-12 md:py-24">
      <header className="mb-8">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 text-muted-foreground" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
      </header>

      <div className="space-y-16">
        {features.map((it: Feature, idx: number) => (
          <article key={it.title} className="grid md:grid-cols-2 gap-8 items-center">
            <div className={idx % 2 === 1 ? "md:order-2" : ""}>
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl border overflow-hidden">
                <ClientImage
                  version={it.image.version}
                  type="thumb"
                  src={it.image.public_id}
                  alt={it.image.public_id}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER_BASE64}
                />
              </div>
            </div>
            <div className={idx % 2 === 1 ? "md:order-1" : ""}>
              <h3 className="font-display text-2xl">{it.title}</h3>
              <p className="mt-4 text-muted-foreground max-w-prose" dangerouslySetInnerHTML={{ __html: it.text }}></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
