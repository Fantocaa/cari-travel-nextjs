import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function Discover() {
  return (
    <>
      <div className="pt-16 md:py-16  2xl:pb-96">
        <div className="2xl:h-full">
          <div className="container w-full md:flex 2xl:h-full justify-start items-center">
            <div className="md:w-1/2 2xl:translate-y-64">
              <p className="text-lg">Discover More</p>
              <h1 className="font-bold text-5xl leading-tight py-4">
                <span className="bg-gradient-to-r from-pinkcaritravel-900 to-yellowcaritravel bg-clip-text text-transparent">
                  Better Travel to Change{" "}
                </span>
                your Better Emotions
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed md:w-[35rem] 2xl:w-[39rem] pb-6">
                Kami selalu meningkatkan kualitas pelayanan dan kenyamanan
                pelanggan dengan motto kami yang ingin mejadikan perjalanan anda
                menjadi pengalaman yang berbeda kami berkomitmen memberikan
                service dengan sempurna,harga yang terjangkau dan pengalaman
                yang baru dalan berlibur dan memorable memories.
              </p>
              <Link href="/tour">
                <Button className="bg-pinkcaritravel-900 hover:bg-pinkcaritravel-500 rounded-full p-6 text-lg">
                  <div className="flex gap-2 items-center">
                    <h1>See Our Tour</h1> <ArrowRight />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="/images/image 37.png"
            alt="disocver"
            width={1080}
            height={768}
            className="md:absolute -z-30 2xl:h-full object-cover 2xl:object-contain -translate-y-[27rem] 2xl:-translate-y-[26rem] right-0 w-1/2 hidden md:block"
          />
        </div>
      </div>
    </>
  );
}
