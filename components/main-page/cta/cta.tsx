import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 relative">
          {/* <div className=""> */}
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
        {/* </div> */}
      </section>
    </div>
  );
};

export default Cta;
