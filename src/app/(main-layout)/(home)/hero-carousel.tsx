"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useWindowSize } from "@/lib/hooks";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import img1 from "@/assets/imgs/hero-carousel-imgs-sm/1.png";
import img2 from "@/assets/imgs/hero-carousel-imgs-lg/1.png";

export default function HeroCarousel() {
  const windowSize = useWindowSize();

  const IMGS = windowSize.width > 500 ? [img1, img1, img1] : [img2, img2, img2];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="full-screen-height relative">
      <div className="relative flex h-[calc(50svh-72px)] md:h-[calc(50svh-88px)] xl:h-[calc(100svh-88px)] items-center justify-center bg-neutral-1">
        <Carousel
          setApi={setApi}
          opts={{ loop: true, duration: 50 }}
          className="h-full"
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent className="h-full -ml-px">
            {IMGS.map((img, i) => (
              <CarouselItem
                key={i}
                className="pl-px relative h-[calc(50svh-72px)] md:h-[calc(50svh-88px)] xl:h-[calc(100svh-88px)] w-full"
              >
                <Image
                  quality={100}
                  placeholder="blur"
                  src={img}
                  className="h-full w-full block object-cover"
                  alt=""
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3"
          >
            {Array.from({ length: count }).map((_, i) => (
              <div
                className={cn(
                  "size-1.5 bg-neutral-1 rounded-full transition-[width]",
                  i + 1 === current && "w-5"
                )}
                key={i}
              ></div>
            ))}
          </div>
          <CarouselPrevious className="hidden sm:grid bg-neutral-1 place-items-center left-2 absolute top-1/2 -translate-y-1/2" />
          <CarouselNext className="hidden sm:grid bg-neutral-1 place-items-center right-2 absolute top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
