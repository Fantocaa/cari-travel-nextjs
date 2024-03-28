import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 pb-24 md:pb-0 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full hidden md:block">
              <Image
                alt=""
                // src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                src="/images/bag.png"
                className="absolute inset-x-16 inset-y-16 w-96 object-contain"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Pelayanan terbaik kami!
              </h2>

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
