import { Card, CardContent, CardHeader } from "../ui/card";
import type { Review, Testimonials } from "../../types/content";
import { BLUR_PLACEHOLDER_BASE64 } from "../../lib/utils";
import { Star } from "lucide-react";
import { ClientImage } from "../ui/client-image";

const TestimonialsSection = ({ content }: { content: Testimonials }) => {
  const { title, subtitle, reviews } = content;

  return (
    <section id="testimonials" className="container py-12 md:py-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 text-muted-foreground" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r: Review) => (
          <Card key={r.name} className="group">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden relative">
                <ClientImage
                  version={r.avatar.version}
                  type="thumb"
                  src={r.avatar.public_id}
                  alt={r.avatar.public_id}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="56px"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER_BASE64}
                />
              </div>
              <div>
                <p className="font-medium">{r.name}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="text-accent" />
                  ))}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80" dangerouslySetInnerHTML={{ __html: r.text }}></p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
