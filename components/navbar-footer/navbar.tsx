"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "flowbite-react";

const Navigationbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    const handleResize = () => {
      // Periksa lebar layar
      setIsMobile(window.innerWidth <= 768); // Misalnya, di bawah 768 piksel dianggap sebagai layar mobile
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      {isMobile && (
        <Navbar
          fluid
          className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500  ${
            isScrolled
              ? " bg-pinkcaritravel-900 text-white"
              : "bg-white text-blackcaritravel"
          }`}
        >
          <div className="2xl:px-8 max-w-screen-xl w-full mx-auto flex items-center justify-between">
            <Navbar.Brand as={Link} href="/">
              {isScrolled ? (
                <Image
                  src={"/images/logo/Logo CariTravel Putih.png"}
                  width={100}
                  height={32}
                  alt="logo caritravel"
                />
              ) : (
                <Image
                  src={"/images/logo/cari-travel.svg"}
                  width={100}
                  height={32}
                  alt="logo caritravel"
                />
              )}
            </Navbar.Brand>
            <Navbar.Toggle
              className={isScrolled ? "text-white" : "text-pinkcaritravel-900"}
            />
            {/* </div> */}
          </div>
          <div className="w-full">
            <Navbar.Collapse>
              <Navbar.Link
                href="/"
                className={isScrolled ? "text-white" : "text-blackcaritravel"}
              >
                Home
              </Navbar.Link>
              <Navbar.Link
                href="/tour"
                className={isScrolled ? "text-white" : "text-blackcaritravel"}
              >
                Tour Package
              </Navbar.Link>
              <Navbar.Link
                as={Link}
                href="/about"
                className={isScrolled ? "text-white" : "text-blackcaritravel"}
              >
                About
              </Navbar.Link>
              <Navbar.Link
                href="#"
                className={isScrolled ? "text-white" : "text-blackcaritravel"}
              >
                Contact
              </Navbar.Link>
            </Navbar.Collapse>
          </div>
        </Navbar>
      )}

      {!isMobile && (
        <Navbar
          fluid
          className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500  ${
            isScrolled
              ? " bg-pinkcaritravel-900 text-white"
              : "bg-white text-blackcaritravel"
          }`}
        >
          <div className="px-4 2xl:px-8 max-w-screen-xl w-full mx-auto flex items-center justify-between">
            <Navbar.Brand as={Link} href="/">
              {isScrolled ? (
                <Image
                  src={"/images/logo/Logo CariTravel Putih.png"}
                  width={100}
                  height={32}
                  alt="logo caritravel"
                />
              ) : (
                <Image
                  src={"/images/logo/cari-travel.svg"}
                  width={100}
                  height={32}
                  alt="logo caritravel"
                />
              )}
            </Navbar.Brand>
            <Navbar.Collapse>
              <Navbar.Link
                href="/"
                className={isScrolled ? "text-white" : "text-blackcaritravel"}
              >
                Home
              </Navbar.Link>
              <Navbar.Link
                href="/tour"
                className={isScrolled ? "text-white" : "text-blackcaritravel"}
              >
                Tour Package
              </Navbar.Link>
              <Navbar.Link
                as={Link}
                href="/about"
                className={isScrolled ? "text-white" : "text-blackcaritravel"}
              >
                About
              </Navbar.Link>
              <Navbar.Link
                href="#"
                className={isScrolled ? "text-white" : "text-blackcaritravel"}
              >
                Contact
              </Navbar.Link>
            </Navbar.Collapse>
          </div>
          <div className="w-full"></div>
        </Navbar>
      )}
    </header>
  );
};

export default Navigationbar;
