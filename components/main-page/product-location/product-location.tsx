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
import LocaleLink from "@/components/locale-link";

async function getData() {
  const res = await fetch(
    "http://cms-caritravel-filament.test/product_location",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw console.log("Error failed to fetch");
  }

  const products = await res.json();

  return { products };
}

type ProductProps = {
  id: number;
  countries: string;
  cities: string;
  img_name: string;
};

export default async function ProductLocation() {
  const { products } = await getData();

  return (
    <>
      <section>
        <div className="container py-16 xl:pt-32">
          <div className="flex justify-between">
            <header>
              <h2 className="text-2xl font-bold text-gray-900 leading-normal">
                Petualangan yang Tak Terlupakan Menanti! 🌍🌟
              </h2>

              <p className="mt-2 max-w-full text-gray-500">
                Rencanakan Liburan Impianmu dengan Ide-ide Seru, Penginapan
                Terbaik, dan Informasi Berguna Lainnya! 🏖️🚗🏨
              </p>
            </header>

            <LocaleLink href="/tour">
              <Button className="bg-pink-200 text-pinkcaritravel-900 hover:text-pinkcaritravel-300 hover:bg-pink-50 hidden md:block">
                See All
              </Button>
            </LocaleLink>
          </div>
          <div className="text-center">
            <Carousel>
              <CarouselContent className="text-left">
                <CarouselItem>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8 md:mb-0">
                    {products.slice(0, 6).map((product: ProductProps) => (
                      <ItemProduct key={product.id} product={product} />
                    ))}
                  </div>
                </CarouselItem>
              </CarouselContent>
              {/* <CarouselPrevious className="md:hidden" />
              <CarouselNext className="md:hidden" /> */}
            </Carousel>
            <LocaleLink href="/tour">
              <Button className="bg-pink-200 text-pinkcaritravel-900 hover:text-pinkcaritravel-300 hover:bg-pink-50 md:hidden text-lg w-full py-6 rounded-full">
                See All
              </Button>
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  );
}
