import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div>
      <section className="bg-slate-50">
        <div className="container py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
            <div className="relative lg:order-last lg:h-full hidden md:block -translate-x-24 2xl:-translate-x-12">
              <Image
                alt=""
                src="/images/bag.png"
                className="absolute inset-x-16 inset-y-8 w-full object-contain"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:py-24 col-span-2 max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Pelayanan terbaik kami!
              </h2>
              <div className="flex mt-8 gap-4 ">
                <div>
                  <Image
                    alt=""
                    src="/images/features.png"
                    className=""
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold pb-2">
                    Pengalaman Tak Terlupakan
                  </h1>
                  <p>
                    Ikuti rasa ingin tahu Anda, rasakan kegembiraan dari
                    penemuan-penemuan nyata, dan jelajahi lebih banyak dari
                    dunia.
                  </p>
                </div>
              </div>
              <div className="flex mt-8 gap-4">
                <div>
                  <Image
                    alt=""
                    src="/images/features.png"
                    className=""
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold pb-2">
                    Pesan dengan satu paket
                  </h1>
                  <p>
                    Menawarkan pengalaman satu paket yang lengkap. Tidak perlu
                    khawatir dengan kerumitan perjalanan dari satu tempat ke
                    tempat lain.
                  </p>
                </div>
              </div>
              <div className="flex mt-8 gap-4">
                <div>
                  <Image
                    alt=""
                    src="/images/features.png"
                    className=""
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold pb-2">
                    Jelajahi dengan penuh kenyamanan
                  </h1>
                  <p>
                    Nikmati rekomendasi travel kami yang dipersonalisasi dengan
                    lebih dari 100+ tour guide. Kamu tinggal berangkat cap cus
                    aja!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
