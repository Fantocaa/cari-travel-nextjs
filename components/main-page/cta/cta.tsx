import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 relative">
          <div className="hidden md:block">
            <div className="absolute max-w-xs inset-x-16 inset-y-32">
              <h1 className="text-3xl font-bold pb-4">
                Your Travel Journey Starts Here
              </h1>
              <p className="pb-4">
                Have a healthy & beatiful trirp with us. You have all kinds of
                entertainment here.
              </p>
              <Button>Connect with us</Button>
            </div>
            <Image
              alt="CTA"
              height={500}
              width={500}
              src="/images/cta.png"
              className="w-full rounded-xl"
            />
          </div>
          <div className="md:hidden">
            <div className="absolute max-w-sm px-4">
              <h1 className="text-3xl font-bold pb-4 max-w-[80%]">
                Your Travel Journey Starts Here
              </h1>
              <p className="pb-4 max-w-[80%]">
                Have a healthy & beatiful trirp with us. You have all kinds of
                entertainment here.
              </p>
              <Button className="bg-yellowcaritravel text-blackcaritravel hover:bg-yellow-300 ">
                Connect with us
              </Button>
            </div>
            <Image
              alt="CTA"
              height={500}
              width={500}
              src="/images/cta m.png"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
