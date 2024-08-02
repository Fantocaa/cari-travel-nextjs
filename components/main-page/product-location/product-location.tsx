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
import Link from "next/link";
import ItemProduct from "./itemproduct-location/itemproduct-location";

const ProductLocation = () => {
  return (
    <section>
      <div className="container py-16 xl:pt-32">
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

          <Link href="/tour">
            <Button className="bg-pink-200 text-pinkcaritravel-900 hidden md:block">
              See All
            </Button>
          </Link>
        </div>
        <div className="text-center">
          <Carousel>
            <CarouselContent className="text-left">
              <CarouselItem className="hidden md:block">
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <ItemProduct />
                  <ItemProduct />
                  <ItemProduct />
                  <ItemProduct />
                  <ItemProduct />
                  <ItemProduct />
                </div>
              </CarouselItem>
              <CarouselItem className="md:hidden">
                <div className="grid md:hidden gap-4 mt-8">
                  <ItemProduct />
                </div>
              </CarouselItem>
              <CarouselItem className="md:hidden">
                <div className="grid md:hidden gap-4 mt-8">
                  <ItemProduct />
                </div>
              </CarouselItem>
              <CarouselItem className="md:hidden">
                <div className="grid md:hidden gap-4 mt-8">
                  <ItemProduct />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="md:hidden" />
            <CarouselNext className="md:hidden" />
          </Carousel>
          <Button className="bg-pink-200 text-pinkcaritravel-900 mt-4 md:hidden">
            See All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductLocation;
