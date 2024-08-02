import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocaleLink from "@/components/locale-link";

const Cta = () => {
  return (
    <>
      <section>
        <div className="container py-16 relative mt-16">
          <div className="hidden md:block">
            <div className="absolute max-w-[21rem] 2xl:max-w-md inset-x-16 inset-y-32">
              <h1 className="text-3xl 2xl:text-4xl font-bold pb-4">
                Your Travel Journey Starts Here
              </h1>
              <p className="pb-4 2xl:max-w-sm">
                Have a healthy & beatiful trirp with us. You have all kinds of
                entertainment here.
              </p>
              <LocaleLink href="/contact">
                <Button className="bg-yellowcaritravel text-blackcaritravel hover:bg-orange-300">
                  Connect with us
                </Button>
              </LocaleLink>
            </div>
            <Image
              alt="CTA"
              height={1440}
              width={1440}
              src="/images/Frame-512-1.webp"
              className="w-full rounded-xl"
            />
          </div>
          <div className="md:hidden">
            <div className="absolute max-w-sm px-4 py-8">
              <h1 className="text-3xl font-bold pb-4 max-w-[85%]">
                Your Travel Journey Starts Here
              </h1>
              <p className="pb-4 max-w-[80%]">
                Have a healthy & beatiful trirp with us. You have all kinds of
                entertainment here.
              </p>
              <Link href="/contact">
                <Button className="bg-yellowcaritravel text-blackcaritravel hover:bg-yellow-300 ">
                  Connect with us
                </Button>
              </Link>
            </div>
            <Image
              alt="CTA"
              height={500}
              width={500}
              src="/images/cta m.png"
              className="w-full rounded-xl shadow-xl h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
