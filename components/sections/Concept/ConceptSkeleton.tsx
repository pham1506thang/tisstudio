import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ConceptSkeleton = () => {
  return (
    <section id="demo" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-8">
        <div className="h-10 w-48 bg-muted animate-pulse rounded-md mb-3" />
        <div className="h-6 w-80 bg-muted animate-pulse rounded-md" />
      </header>
      <div className="w-full rounded-xl overflow-hidden border bg-card shadow-sm">
        <AspectRatio ratio={1182 / 788}>
          <div className="h-full w-full bg-muted animate-pulse" />
        </AspectRatio>
      </div>
    </section>
  );
};
