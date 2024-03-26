import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ItemProduct from "./itemproduct/itemproduct";

const Product = () => {
  return (
    <section className="pt-16">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Rekomendasi Untuk Kamu 🗺️📌
          </h2>

          <p className="mt-2 max-w-full text-gray-500">
            Jelajahi Destinasi Menarik dengan Rekomendasi Khusus dari Kami!
          </p>
        </header>
        <div>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <ItemProduct />
              </CarouselItem>
              <CarouselItem>
                <ItemProduct />
              </CarouselItem>
              <CarouselItem>
                <ItemProduct />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Product;
