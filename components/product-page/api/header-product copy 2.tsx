"use client";

import { useState } from "react";
import Lightbox, { Slide } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import YouTube from "../youtube";
import Image from "next/image";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageProps {
  url: string;
  type: "png" | "mp4";
}

interface HeaderProductProps {
  images: ImageProps[];
  videoUrl?: string;
  thumbnailUrl?: string;
}

type CarouselItemType =
  | {
      type: "youtube";
      src: string;
      title: string;
      width: number;
      height: number;
    }
  | { src: string };

const HeaderProduct = ({
  images,
  videoUrl,
  thumbnailUrl,
}: HeaderProductProps) => {
  const [index, setIndex] = useState<number>(-1);

  // Generate slides
  const slides: Slide[] = [
    videoUrl
      ? {
          type: "youtube",
          src: videoUrl,
          title: "YouTube Video",
          width: 1280,
          height: 720,
        }
      : null,
    ...images.map((image) => ({
      src: image.url,
    })),
  ].filter(Boolean) as Slide[];

  const carouselItems: CarouselItemType[] = videoUrl
    ? [
        {
          type: "youtube",
          src: videoUrl,
          title: "YouTube Video",
          width: 1280,
          height: 720,
        },
        ...images.map((image) => ({
          src: image.url,
        })),
      ]
    : images.map((image) => ({
        src: image.url,
      }));

  const isYouTubeItem = (
    item: CarouselItemType
  ): item is {
    type: "youtube";
    src: string;
    title: string;
    width: number;
    height: number;
  } => {
    return (item as { type: string }).type === "youtube";
  };

  return (
    <>
      <div className="pt-8 md:flex gap-4 w-full h-[27rem] 2xl:h-[35rem] hidden">
        {videoUrl ? (
          <div className="relative w-1/2">
            <Image
              src={thumbnailUrl || "/path/to/default-thumbnail.jpg"}
              alt="Video Thumbnail"
              width={800}
              height={400}
              className="rounded-xl cursor-pointer h-full object-cover"
              onClick={() => setIndex(0)}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Play
                size={64}
                color="white"
                className="bg-black bg-opacity-50 rounded-full pointer-events-auto cursor-pointer p-3"
                onClick={() => setIndex(0)}
              />
            </div>
          </div>
        ) : (
          images[0] && (
            <Image
              src={images[0].url}
              alt="Image Thumbnail"
              width={800}
              height={400}
              className="rounded-xl cursor-pointer h-full object-cover w-1/2"
              onClick={() => setIndex(0)}
            />
          )
        )}
        <div className="grid grid-cols-2 gap-4 h-full">
          {images
            .slice(videoUrl ? 0 : 1, videoUrl ? 4 : 5)
            .map((image, idx) => (
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
            {carouselItems.map((item, idx) => (
              <CarouselItem key={idx}>
                {isYouTubeItem(item) ? (
                  <div className="relative w-full h-[40vh]">
                    <Image
                      src={thumbnailUrl || "/path/to/default-thumbnail.jpg"}
                      alt="Video Thumbnail"
                      width={1280}
                      height={720}
                      className="rounded-xl cursor-pointer h-full object-cover"
                      onClick={() => setIndex(idx)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <Play
                        size={64}
                        color="white"
                        className="bg-black bg-opacity-50 rounded-full pointer-events-auto cursor-pointer p-3"
                        onClick={() => setIndex(idx)}
                      />
                    </div>
                  </div>
                ) : (
                  <Image
                    alt={`Image${idx + 1}`}
                    width={800}
                    height={800}
                    src={item.src}
                    className="rounded-xl cursor-pointer h-[40vh] object-cover"
                    onClick={() => setIndex(idx)}
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Lightbox
        plugins={[Fullscreen, Zoom, YouTube]}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
};

export default HeaderProduct;
