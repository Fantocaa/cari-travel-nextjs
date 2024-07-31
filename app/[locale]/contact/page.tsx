import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="mt-8 relative">
          <div className="absolute top-28 left-6 md:left-10">
            <h1 className="text-4xl font-semibold text-pinkcaritravel-600">
              Contact Us
            </h1>
            <ul className="flex flex-col gap-4 mt-8 ">
              <li className="flex items-center gap-4">
                <Phone />
                <h1 className="2xl:text-lg ">+62 821-4337-9200</h1>
              </li>
              <li className="flex items-center gap-4">
                <Mail />
                <h1 className="2xl:text-lg">sub.operations@caritravel.com</h1>
              </li>
              <li className="flex items-center gap-4">
                <MapPin />
                <h1 className="2xl:text-lg md:max-w-md 2xl:max-w-lg w-64 md:w-full">
                  Jl. Dharmahusada Indah Blok I Nomor Ruko 16 E, RT.01, RW.09,
                  Kec. Mulyorejo, Kel. Mulyorejo Surabaya Kode pos : 60115
                </h1>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block py-16">
          <Image
            src="/images/contact.webp"
            alt="contact"
            width={1080}
            height={1080}
            className="w-full h-full rounded-xl"
          />
        </div>
        <div className="md:hidden py-16">
          <Image
            src="/images/Frame 170.png"
            alt="contact"
            width={1080}
            height={1080}
            className="w-full h-[28rem] rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
