import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ItemProduct from "./itemproduct-location/itemproduct-location";

const ProductLocation = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex justify-between">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Petualangan yang Tak Terlupakan Menanti! 🌍🌟
            </h2>

            <p className="mt-2 max-w-full text-gray-500">
              Rencanakan Liburan Impianmu dengan Ide-ide Seru, Penginapan
              Terbaik, dan Informasi Berguna Lainnya! 🏖️🚗🏨
            </p>
          </header>

          <Button>See All</Button>
        </div>
        <div>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <ItemProduct />
                <ItemProduct />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductLocation;
