import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ItemProduct from "./itemproduct/itemproduct";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface DetailProductProps {
  id: number;
  countries: string;
  cities: string;
  traveler: string;
  duration: string;
  duration_night: string;
  start_date: string;
  end_date: string;
  title: string;
  description: string;
  body: JSON;
  author: number;
  price: number;
  attachment: {
    url: string;
  }[];
}

interface Props {
  products: DetailProductProps[];
}

const Product = ({ products }: Props) => {
  return (
    <section className="2xl:pt-32 py-16">
      {/* <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"> */}
      <div className="container">
        <div className="flex justify-between">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Rekomendasi Untuk Kamu 🗺️📌
            </h2>

            <p className="mt-2 max-w-full text-gray-500">
              Jelajahi Destinasi Menarik dengan Rekomendasi Khusus dari Kami!
            </p>
          </header>

          <Link href="/tour">
            <Button className="bg-pink-200 text-pinkcaritravel-900 hidden md:block">
              See All
            </Button>
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full py-6">
          {products.slice(0, 6).map((product, idx) => (
            <div key={idx}>
              <div className="group relative block overflow-hidden rounded-xl border border-darkcmi border-opacity-10 shadow-lg">
                <Link
                  href={{
                    pathname: "/tour/product/detail",
                    query: { id: product?.id },
                  }}
                  key={product.id}
                >
                  <div>
                    <div className="absolute px-4 end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 flex items-center gap-2">
                      <p>
                        {product.duration} Hari {product.duration_night} Malam
                      </p>
                    </div>

                    <Image
                      src={product.attachment[0].url}
                      alt="photo-location"
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 bg-white"
                      width={500}
                      height={500}
                    />
                    <div className="relative border border-gray-100 bg-white p-6">
                      <h3 className="text-xl font-semibold text-gray-900 truncate">
                        {product.title}
                      </h3>
                      <h4 className="text-sm text-gray-500">
                        {product.cities}, {product.countries}
                      </h4>
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="mt-4 text-sm font-medium text-gray-900">
                            Starting From:
                          </h3>
                          <h3 className="text-xl font-bold text-gray-900">
                            Rp. {product.price}
                            {/* <span className="text-sm font-medium text-gray-400">
                              /Orang
                            </span> */}
                          </h3>
                        </div>
                        <Button className="bg-pink-200 text-pinkcaritravel-900 hover:text-pinkcaritravel-300 hover:bg-pink-50">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link href="/tour">
          <Button className="bg-pink-200 text-pinkcaritravel-900 md:hidden text-lg w-full py-6 rounded-full">
            See All
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Product;
