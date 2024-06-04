"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageProps {
  url: string;
}

interface HeaderProductProps {
  images: ImageProps[];
}

const HeaderProduct = ({ images }: HeaderProductProps) => {
  const [index, setIndex] = useState<number>(-1);
  return (
    <>
      <div className="pt-8 md:flex gap-4 w-full h-[27rem] 2xl:h-[35rem] hidden">
        {images[0] && (
          <div className="relative w-1/2">
            <Image
              alt="Image1"
              width={800}
              height={400}
              src={images[0].url}
              className="rounded-xl cursor-pointer h-full object-cover"
              onClick={() => setIndex(0)}
            />
          </div>
        )}
        <div className="grid grid-cols-2 gap-4 h-full">
          {images.slice(1, 5).map((image, idx) => (
            <div key={idx} className="relative h-48 2xl:h-64">
              <Image
                alt={`Image${idx + 2}`}
                width={400}
                height={400}
                src={image.url}
                className="rounded-xl object-cover h-full cursor-pointer"
                onClick={() => setIndex(idx + 1)}
              />
              {idx === 3 && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold cursor-pointer rounded-xl"
                  onClick={() => setIndex(4)}
                >
                  Lihat semua foto
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-8 flex gap-4 w-full h-full md:hidden">
        <Carousel>
          <CarouselContent>
            {images.map((image, idx) => (
              <CarouselItem key={idx}>
                <Image
                  alt={`Image${idx + 1}`}
                  width={800}
                  height={800}
                  src={image.url}
                  className="rounded-xl cursor-pointer h-[40vh] object-cover"
                  onClick={() => setIndex(idx + 1)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Lightbox
        plugins={[Fullscreen, Zoom]}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((image) => ({ src: image.url }))}
      />
    </>
  );
};

export default HeaderProduct;
