import React from "react";
import Image from "next/image";

const HeaderAbout = () => {
  return (
    <div>
      <div className="mx-auto lg:flex lg:h-full relative z-10">
        <Image
          alt="tour"
          height={1080}
          width={1920}
          src="/images/about.svg"
          className="w-full h-full bg-no-repeat object-cover relative"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-50 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className=" sm:text-lg/relaxed text-whitecaritravel">About Us</h1>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-whitecaritravel max-w-lg mt-4">
            Make Your Journey&apos;s To The Next Level
          </h1>
          <p className="mt-4 sm:text-lg/relaxed text-whitecaritravel max-w-2xl">
            Ketahui lebih tentang kami. Kami berdedikasi memberikan pengalaman
            wisata yang tak terlupakan kepada pelanggan kami
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderAbout;
