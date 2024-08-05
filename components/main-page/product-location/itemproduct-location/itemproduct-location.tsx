"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/locale-link";
import useSearchStore from "@/components/useSearchStore";

type ItemProductProps = {
  product: {
    id: number;
    countries: string;
    cities: string;
    img_name: string;
  };
};

const ItemProduct = ({ product }: ItemProductProps) => {
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);

  const handleClick = () => {
    setSearchTerm(product.countries);
  };

  return (
    <LocaleLink
      href="/tour"
      className="group relative block overflow-hidden rounded-xl"
      onClick={handleClick}
    >
      <Image
        // src="/images/product-images/bali.webp"
        src={`http://cms-caritravel-filament.test/storage/${product.img_name}`}
        // alt="photo-locatioin"
        alt={`${product.countries} - ${product.cities}`}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        width={600}
        height={600}
      />

      <div className="relative border border-gray-200 bg-white p-6 rounded-b-xl">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 line-clamp-1">
              {product.countries}
            </h3>
            <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
              {product.cities}
            </h3>
          </div>
          <Button>View Details</Button>
        </div>
      </div>
    </LocaleLink>
  );
};

export default ItemProduct;
