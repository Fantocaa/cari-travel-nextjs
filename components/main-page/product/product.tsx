import React from "react";
import ItemProduct from "./itemproduct/itemproduct";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/locale-link";
import { useLocale } from "next-intl";

interface DetailProductProps {
  id: number;
  countries: string[];
  cities: string[];
  traveler: string;
  duration: string;
  duration_night: string;
  start_date: string;
  end_date: string;
  title: string;
  general_info: {
    en: string;
    id: string;
  };
  travel_schedule: {
    en: string;
    id: string;
  };
  additional_info: {
    en: string;
    id: string;
  };
  price: string;
  yt_links: string;
  thumb_img: string;
  image_name: string[];
  author_phone: string;
}

interface Props {
  products: DetailProductProps[];
}

const Product = ({ products }: Props) => {
  const locale = useLocale();

  // console.log(products);

  return (
    <section className="2xl:pt-32 py-16">
      <div className="container">
        <div className="flex justify-between">
          <header>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Rekomendasi Untuk Kamu 🗺️📌
            </h2>

            <p className="mt-2 max-w-full text-gray-500">
              Jelajahi Destinasi Menarik dengan Rekomendasi Khusus dari Kami!
            </p>
          </header>

          <LocaleLink href="/tour">
            <Button className="bg-pink-200 text-pinkcaritravel-900 hover:text-pinkcaritravel-300 hover:bg-pink-50 hidden md:block">
              See All
            </Button>
          </LocaleLink>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6 ">
          {products.slice(0, 6).map((product, idx) => (
            <div key={idx}>
              <div className="group relative block overflow-hidden rounded-xl shadow-lg">
                <Link
                  href={{
                    pathname: `${locale}/tour/product/detail`,
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
                      src={product.image_name[0]}
                      alt="photo-location"
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 bg-white"
                      width={500}
                      height={500}
                    />
                    <div className="relative border border-gray-100 bg-white p-6">
                      <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                        {product.title}
                      </h3>
                      <h4 className="text-sm text-gray-500 line-clamp-1">
                        {product.cities.join(", ")} |{" "}
                        {product.countries.join(", ")}
                      </h4>
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="mt-4 text-sm font-medium text-gray-900">
                            Starting From:
                          </h3>
                          <h3 className="text-xl font-bold text-gray-900">
                            Rp. {product.price}
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
        <LocaleLink href="/tour">
          <Button className="bg-pink-200 text-pinkcaritravel-900 md:hidden text-lg w-full py-6 rounded-full">
            See All
          </Button>
        </LocaleLink>
      </div>
    </section>
  );
};

export default Product;
