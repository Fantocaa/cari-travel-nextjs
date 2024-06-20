"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function VisiMisi() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="md:py-16">
        <div className="h-screen 2xl:h-full">
          <Image
            src="/images/Rectangle 2342.png"
            alt="about"
            width={1080}
            height={1080}
            className="absolute rounded-r-2xl -z-30 2xl:h-full object-cover 2xl:object-contain 2xl:-translate-y-36 hidden lg:block"
          />
          <div className="container w-full h-full md:flex justify-end items-center lg:pt-12 2xl:pt-0">
            <div className=" text-white">
              <div className="bg-pinkcaritravel-900 z-50 p-6 md:p-8 rounded-xl md:w-[800px]">
                <h1 className="text-lg">Who We Are</h1>
                <h1 className="text-4xl pt-4 pb-8">Company Mission & Vision</h1>
                <div className="md:flex gap-4">
                  {/* <div className="p-8 bg-pink-400 rounded-xl hover:bg-pinkcaritravel-900 transition-all duration-500"> */}
                  <div
                    className={`p-6 rounded-xl transition-all duration-500 w-1/2 ${
                      isHovered ? "bg-pinkcaritravel-900" : "bg-pink-400"
                    }`}
                    // onMouseEnter={() => setIsHovered(true)}
                    // onMouseLeave={() => setIsHovered(false)}
                  >
                    <Image
                      src="/images/icon/vision.svg"
                      alt="vision"
                      width={64}
                      height={64}
                    />
                    <h1 className="font-semibold text-2xl py-4">Our Vision</h1>
                    <p>
                      Menjadi biro perjalanan wisata terkemuka yang mampu
                      memberikan pengalaman perjalanan yang berbeda,
                      berkualitas, dan tak terlupakan, serta menjadi sahabat
                      terpercaya dalam setiap perjalanan wisata pelanggan kami.
                    </p>
                  </div>
                  {/* <div className="p-8 bg-pinkcaritravel-900 rounded-xl hover:bg-pink-400 transition-all duration-500"> */}
                  <div
                    className={`p-6 rounded-xl transition-all duration-500 w-1/2 ${
                      isHovered ? "bg-pink-400" : "bg-pinkcaritravel-900"
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <Image
                      src="/images/icon/mission.svg"
                      alt="vision"
                      width={64}
                      height={64}
                    />
                    <h1 className="font-semibold text-2xl py-4">Our Mission</h1>
                    <p>
                      Menyediakan layanan perjalanan berkualitas tinggi dengan
                      memanfaatkan jaringan luas dan staf ahli, serta memastikan
                      kepuasan pelanggan melalui pelayanan sempurna, harga
                      terjangkau, dan pengalaman liburan yang berkesan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
