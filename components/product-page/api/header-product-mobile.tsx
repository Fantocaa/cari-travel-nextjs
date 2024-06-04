"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

interface ImageProps {
  url: string;
}

interface HeaderProductProps {
  images: ImageProps[];
}

const HeaderProductMobile = ({ images }: HeaderProductProps) => {
  const [index, setIndex] = useState<number>(-1);
  return (
    <>
      <div className="pt-8 flex gap-4 w-full">
        <Carousel>
          <CarouselContent>
            {images.map((image, idx) => (
              <CarouselItem key={idx}>
                <div>
                  <Image
                    alt={`Image${idx + 1}`}
                    width={800}
                    height={400}
                    src={image.url}
                    className="rounded-xl cursor-pointer h-full object-cover"
                    onClick={() => setIndex(idx + 1)}
                  />
                </div>
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

export default HeaderProductMobile;
