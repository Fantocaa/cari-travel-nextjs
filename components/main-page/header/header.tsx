import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <section className="bg-gradient-to-b from-whitecaritravel via-white to-whitecaritravel text-slate-900">
      <div className="mx-auto max-w-screen-xl px-8 lg:flex lg:h-screen 2xl:h-full 2xl:pt-16 lg:items-end">
        {/* <div className="max-w-full text-left"> */}
        <div className="w-full flex items-center ">
          <div className="w-full">
            <>
              <p className="max-w-xl sm:text-xl/relaxed">Cari Travel,</p>
              <h1 className="w-full text-3xl font-extrabold sm:text-5xl mt-4">
                Make your Journey&apos;s.
                <span className="sm:block pt-2 bg-gradient-to-r from-pinkcaritravel-900 to-yellowcaritravel bg-clip-text text-transparent">
                  {" "}
                  To The <span className="">Next Level</span>{" "}
                </span>
              </h1>

              <p className=" mt-4 max-w-md sm:text-base/relaxed">
                Menjadi biro perjalanan wisata yang bisa membawa anda untuk
                mengalami pengalaman perjalanan berlibur yang berbeda adalah
                motto kami.
              </p>

              <div className="mt-8 flex flex-wrap justify-start gap-4">
                <Link
                  className="block w-full rounded border border-yellowcaritravel bg-yellowcaritravel px-12 py-3 text-sm font-medium text-blackcaritravel hover:bg-transparent hover:text-yellowcaritravel focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="/tour"
                >
                  Let&apos;s Travel
                </Link>
              </div>
            </>
          </div>
          <Image
            src="/images/hero.svg"
            alt="Hero"
            width={1280}
            height={960}
            // className="lg:translate-x-12"
          />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Header;
