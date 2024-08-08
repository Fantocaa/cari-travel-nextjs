"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Props {
  translations: {
    title1: string;
    title2: string;
    title3: string;
    visi: string;
    misi: string;
  };
}

export default function OnHoverVisiMisi({ translations }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className={`p-6 rounded-xl transition-all duration-500 w-1/2 ${
          isHovered ? "bg-pinkcaritravel-900" : "bg-pink-400"
        }`}
      >
        <Image
          src="/images/icon/vision.svg"
          alt="vision"
          width={64}
          height={64}
        />
        <h1 className="font-semibold text-2xl py-4">{translations.title2}</h1>
        <p>{translations.visi}</p>
      </div>
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
        <h1 className="font-semibold text-2xl py-4">{translations.title3}</h1>
        <p>
          {translations.misi}
        </p>
      </div>
    </>
  );
}
