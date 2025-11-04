import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const RecentWorkSkeleton = () => {
  return (
    <section id="portfolio" className="container py-16 md:py-24">
      <header className="mb-8 flex items-start justify-between gap-4">
        <div className="max-w-2xl">
          <div className="h-10 w-64 bg-muted animate-pulse rounded-md mb-3" />
          <div className="h-6 w-96 bg-muted animate-pulse rounded-md" />
        </div>
        <div className="h-10 w-32 bg-muted animate-pulse rounded-md shrink-0" />
      </header>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-[75%] md:basis-[40%] lg:basis-[30%]"
            >
              <AspectRatio ratio={1 / 1}>
                <div className="h-full w-full bg-muted animate-pulse rounded-lg" />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
