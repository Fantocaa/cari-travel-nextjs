import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <section className="bg-gradient-to-b from-whitecaritravel via-white to-whitecaritravel text-slate-900">
      <div className="mx-auto max-w-screen-xl px-8 lg:flex lg:h-screen lg:items-center">
        <div className="max-w-full text-left">
          <div className="w-full flex items-center">
            <div className="w-full">
              <>
                <p className="max-w-xl sm:text-xl/relaxed">Cari Travel,</p>
                <h1 className="bg-gradient-to-r from-pinkcaritravel-900 to-yellowcaritravel bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl mt-4">
                  Make your Journey&apos;s.
                  <span className="sm:block pt-2">
                    {" "}
                    To The <span className="">Next Level</span>{" "}
                  </span>
                </h1>

                <p className=" mt-4 max-w-[90%] sm:text-xl/relaxed">
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

                  {/* <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a> */}
                </div>
              </>
            </div>

            <div className="">
              <ul className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
                <li>
                  <a href="#" className="group relative block">
                    <Image
                      src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-xl"
                      width={300}
                      height={600}
                    />
                  </a>
                </li>

                <li>
                  <a href="#" className="group relative block">
                    <Image
                      src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-xl"
                      width={300}
                      height={600}
                    />
                  </a>
                </li>

                <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                  <a href="#" className="group relative block">
                    <Image
                      src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-xl"
                      width={300}
                      height={600}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
