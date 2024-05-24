import React from "react";
import Image from "next/image";

// type ProductProps = {
//   products: any[];
// };

// export default function Header({ products }: ProductProps) {
// const Header = () => {
export default function Header() {
  return (
    <section className="relative">
      <div className="mx-auto lg:flex lg:h-full relative z-10 h-96">
        <Image
          alt="tour"
          width={1920}
          height={1080}
          src="/images/tour.png"
          className="w-full h-full bg-no-repeat object-cover relative"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-50 px-4 sm:px-6 lg:px-8 pt-12 md:pt-0">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-whitecaritravel">
              Let Us Plan Your Perfect Gateway
            </h1>
            <p className="mt-4 sm:text-lg/relaxed text-whitecaritravel max-w-2xl text-center">
              Leave the Details to Us and Embark on your Ideal Escape. Our
              Expert Team Will Curate A Personalized Itinerary For A Seamless
              And Unforgettable Journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default Header;
