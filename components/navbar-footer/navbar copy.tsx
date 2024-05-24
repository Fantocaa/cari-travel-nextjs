"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "flowbite-react";

const Navigationbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener pada pembongkaran komponen
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <Navbar
      fluid
      className="fixed top-0 left-0 right-0 z-50 bg-transparent p-0 flex flex-nowrap"
    >
      <div
        className={`flex justify-between w-full items-center p-4 ${
          isScrolled || isNavbarOpen ? "bg-white" : "bg-transparent"
        }`}
      >
        <Navbar.Brand as={Link} href="/">
          <Image
            src={"/images/logo/cari-travel.svg"}
            width={100}
            height={32}
            alt="logo caritravel"
          />
        </Navbar.Brand>
        <div onClick={handleNavbarToggle}>
          <Navbar.Toggle />
        </div>
      </div>
      <Navbar.Collapse className="bg-white px-2 md:px-0">
        {/* <Navbar.Link href="/" active> */}
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link as={Link} href="/about">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

    // <header
    //   className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
    //     isScrolled ? "bg-white shadow-md" : "bg-transparent"
    //   }`}
    // >
    //   <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
    //     <div className="flex h-16 items-center justify-between">
    //       <div className="flex-1 md:flex md:items-center md:gap-12">
    //         <Link className="block text-teal-600" href="/">
    //           <span className="sr-only">Home</span>
    //           <Image
    //             src={"/images/logo/cari-travel.svg"}
    //             width={100}
    //             height={32}
    //             alt="logo caritravel"
    //           />
    //         </Link>
    //       </div>

    //       <div className="md:flex md:items-center md:gap-12">
    //         <nav aria-label="Global" className="hidden md:block">
    //           <ul className="flex items-center gap-6 text-sm">
    //             <li>
    //               <Link
    //                 className="text-gray-500 transition hover:text-gray-500/75"
    //                 href="/"
    //               >
    //                 {" "}
    //                 Home{" "}
    //               </Link>
    //             </li>

    //             <li>
    //               <Link
    //                 className="text-gray-500 transition hover:text-gray-500/75"
    //                 href="/tour"
    //               >
    //                 {" "}
    //                 Tour Package{" "}
    //               </Link>
    //             </li>

    //             <li>
    //               <Link
    //                 className="text-gray-500 transition hover:text-gray-500/75"
    //                 href="/about"
    //               >
    //                 {" "}
    //                 About Us{" "}
    //               </Link>
    //             </li>

    //             <li>
    //               <Link
    //                 className="text-gray-500 transition hover:text-gray-500/75"
    //                 href="/contact"
    //               >
    //                 {" "}
    //                 Contact{" "}
    //               </Link>
    //             </li>
    //           </ul>
    //         </nav>

    //         <div className="flex items-center gap-4">
    //           <div className="block md:hidden">
    //             <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="h-5 w-5"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth="2"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M4 6h16M4 12h16M4 18h16"
    //                 />
    //               </svg>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Navigationbar;
