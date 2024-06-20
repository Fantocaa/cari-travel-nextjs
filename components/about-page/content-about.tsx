import React from "react";
import Image from "next/image";
import Features from "./content/features";
import VisiMisi from "./content/visimisi";
import Discover from "./content/discover";

const AboutContent = () => {
  return (
    <>
      <div className="mx-auto container py-16 md:pt-32">
        <div className="w-full md:flex items-center justify-between md:gap-32">
          <div className="md:w-1/2">
            <p className="text-lg">About Us</p>
            <h1 className="font-bold text-5xl pt-4 leading-tight">
              <span className="bg-gradient-to-r from-pinkcaritravel-900 to-yellowcaritravel bg-clip-text text-transparent">
                Global Travel Solutions{" "}
              </span>
              for Every Journey
            </h1>
          </div>
          <p className="text-gray-500 md:w-1/2 text-lg leading-loose pt-8 md:pt-0">
            Bergerak di dunia biro perjalanan wisata CARI TRAVEL memiki jaringan
            bisnis yang luas sehingga memudahkan kami untuk memberikan pelayanan
            terbaik diantaranya tiket penerbangan, kereta api, hotel, pegurusan
            dokumen perjalanan,tour domestik dan internasional, incentive tour,
            cruises, asuransi perjalanan, rental kendaraan.
          </p>
        </div>
      </div>
      {/* <VisiMisi /> */}
      {/* <Discover /> */}
      {/* <Features /> */}
    </>
  );
};

export default AboutContent;
