import React from "react";
import Image from "next/image";

interface ProductTitleProps {
  title: string;
  cities: string;
  countries: string;
  traveler: string;
  duration: string;
  start_date: string;
  end_date: string;
}

interface Props {
  product: ProductTitleProps;
}

export default function ProductTitle({ product }: Props) {
  return (
    <div className="pt-8">
      <h1 className="font-semibold text-xl md:text-3xl">{product.title}</h1>
      <div className="flex gap-4 md:gap-8 pt-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Image
            alt="pin"
            width={32}
            height={32}
            src="/images/icon/pin.svg"
            className="h-6 w-6"
          />
          <h1>
            {product.cities}, {product.countries}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Image
            alt="pin"
            width={32}
            height={32}
            src="/images/icon/user.svg"
            className="h-6 w-6"
          />
          <h1>{product.traveler} Orang</h1>
        </div>
        <div className="flex items-center gap-2">
          <Image
            alt="pin"
            width={32}
            height={32}
            src="/images/icon/clock.svg"
            className="h-6 w-6"
          />
          <h1>{product.duration} Hari</h1>
        </div>
        <div className="flex items-center gap-2">
          <Image
            alt="pin"
            width={32}
            height={32}
            src="/images/icon/calendar.svg"
            className="h-6 w-6"
          />
          <h1>
            {product.start_date} - {product.end_date}
          </h1>
        </div>
      </div>
    </div>
  );
}
