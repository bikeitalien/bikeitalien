"use client";
import Image from "next/image";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { img } from "motion/react-client";

const images = [
  { src: "/assets/apulien.webp", alt: "Apulien" },
  { src: "/assets/gardaverona.webp", alt: "Gardaverona" },
  { src: "/assets/eventyrrejser.webp", alt: "Eventyrrejser" },
  { src: "/assets/familieferie.webp", alt: "Familieferie" },
  { src: "/assets/frankerstien.webp", alt: "Frankerstien" },
  { src: "/assets/gravel.webp", alt: "Gravel biking" },
  { src: "/assets/grandissimo.webp", alt: "Grandissimo" },
  { src: "/assets/jordan.webp", alt: "Jordan" },
];

const layout = [
  { className: "md:col-start-1 md:col-end-3 md:row-span-1" },
  { className: "md:col-start-3 md:col-end-4 md:row-span-1" },
  { className: "md:col-start-4 md:col-end-6 md:row-span-1" },
  { className: "md:col-start-6 md:col-end-7 md:row-span-1" },
  { className: "md:col-start-1 md:col-end-2 md:row-span-2" },
  { className: "md:col-start-2 md:col-end-4 md:row-span-2" },
  { className: "md:col-start-4 md:col-end-5 md:row-span-2" },
  { className: "md:col-start-5 md:col-end-7 md:row-span-2" },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpen = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <>
      <section className="col-[full] grid py-20">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          {images.map((img, index) => {
            const item = layout[index];
            return (
              <div
                key={index}
                onClick={() => handleOpen(index)}
                className={`${item.className} overflow-hidden rounded-[20px]`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition hover:scale-105"
                />
              </div>
            );
          })}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            className="max-h-[65vh] max-w-[70vw]! justify-center p-0 md:max-h-[95vh] md:max-w-[55vw]!"
            aria-describedby="gallery-description"
          >
            <DialogTitle className="hidden">Galleri</DialogTitle>
            <Carousel opts={{ startIndex: selectedIndex }}>
              <CarouselPrevious className="z-50 cursor-pointer" />
              <CarouselNext className="z-50 cursor-pointer" />
              <CarouselContent className="max-h-[65vh] max-w-[70vw] md:max-h-[95vh] md:max-w-[55vw]">
                {images.map((img, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1600}
                      height={1000}
                      className="h-full w-full rounded-[20px] object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
};

export default Gallery;
