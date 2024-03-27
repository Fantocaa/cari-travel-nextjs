import React from "react";
import Image from "next/image";
import Features from "./content/features";

const AboutContent = () => {
  return (
    <div className="mb-24">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="w-full flex items-center justify-between">
          <div className="max-w-xl">
            <h1 className="font-bold text-5xl max-w-lg">
              The{" "}
              <span className="bg-gradient-to-r from-pinkcaritravel-900 to-yellowcaritravel bg-clip-text text-transparent">
                Perfect Travel
              </span>{" "}
              Place for you!
            </h1>
            <p className="text-gray-500 pt-6">
              Bergerak di dunia biro perjalanan wisata CARI TRAVEL memiki
              jaringan bisnis yang luas sehingga memudahkan kami untuk
              memberikan pelayanan terbaik diantaranya tiket penerbangan,kereta
              api,hotel,pegurusan dokumen perjalanan,tour domestik dan
              internasional,incentive tour,cruises,asuransi perjalanan,rental
              kendaraan.
            </p>
          </div>
          <Image
            src="/images/aboutimage.svg"
            alt="About"
            width={480}
            height={200}
            className="rounded-xl"
          />
        </div>
        <div className="w-full flex flex-row-reverse items-center justify-between py-16">
          <div className="max-w-xl">
            <h1 className="font-bold text-5xl max-w-full">
              Kami percaya setiap dari anda bisa melakukan perjalanan tanpa
              batasan.
            </h1>
            <p className="text-gray-500 pt-6">
              Kami selalu meningkatkan kualitas pelayanan dan kenyamanan
              pelanggan dengan motto kami yang ingin mejadikan perjalanan anda
              menjadi pengalaman yang berbeda kami berkomitmen memberikan
              service dengan sempurna,harga yang terjangkau dan pengalaman yang
              baru dalan berlibur dan memorable memories.
            </p>
          </div>
          <Image
            src="/images/aboutimage.svg"
            alt="About"
            width={480}
            height={200}
            className="rounded-xl"
          />
        </div>
      </div>
      <Features />
    </div>
  );
};

export default AboutContent;
