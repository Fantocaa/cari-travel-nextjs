import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

interface ProductTitleProps {
  // id: number;
  countries: string[];
  cities: string[];
  traveler: string;
  duration: string;
  duration_night: string;
  start_date: string;
  end_date: string;
  title: string;
  // general_info: {
  //   en: string;
  //   id: string;
  // };
  // travel_schedule: {
  //   en: string;
  //   id: string;
  // };
  // additional_info: {
  //   en: string;
  //   id: string;
  // };
  // price: string;
  // yt_links: string;
  // thumb_img: string;
  // image_name: string[];
  // author_phone: string;
}

interface Props {
  product: ProductTitleProps;
}

export default function ProductTitle({ product }: Props) {
  // const locale = useLocale();
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
          <h1>
            {product.duration} Hari {product.duration_night} Malam
          </h1>
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
