"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";
// import { link } from "fs";

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

  // const navLinks = [
  //   { name: "Home", href: "/" },
  //   { name: "Tour Package", href: "/tour" },
  //   { name: "About Us", href: "/about" },
  //   { name: "Contact", href: "/contact" },
  // ];

  const pathname = usePathname();

  return (
    <header>
      {isMobile && (
        <Navbar
          fluid
          className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 px-4  ${
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
                className={
                  isScrolled
                    ? "text-white"
                    : "text-blackcaritravel hover:text-pinkcaritravel-900"
                }
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
                href="/visa"
                className={isScrolled ? "text-white" : "text-blackcaritravel"}
              >
                Document & Visa
              </Navbar.Link>
              <Navbar.Link
                as={Link}
                href="/about"
                className={isScrolled ? "text-white" : "text-blackcaritravel"}
              >
                About
              </Navbar.Link>
              <Navbar.Link
                href="/contact"
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
            isScrolled ? "bg-pinkcaritravel-900" : "bg-white"
          }`}
        >
          <div className="2xl:container xl:px-4 2xl:px-8 w-full flex items-center justify-between">
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
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "active text-pinkcaritravel-900"
                    : !isScrolled
                    ? "text-blackcaritravel transition-colors duration-500"
                    : "text-whitecaritravel opacity-75 hover:text-whitecaritravel hover:opacity-100 transition-colors duration-500"
                } ${
                  pathname === "/" && isScrolled
                    ? "text-white transition-colors duration-500"
                    : "Ztext-pinkcaritravel-900 transition-colors duration-500"
                }`}
              >
                Home
              </Link>

              <Link
                href="/tour"
                className={`${
                  pathname === "/tour"
                    ? "active text-pinkcaritravel-900"
                    : !isScrolled
                    ? "text-blackcaritravel transition-colors duration-500"
                    : "text-whitecaritravel opacity-75 hover:text-whitecaritravel hover:opacity-100 transition-colors duration-500"
                } ${
                  pathname === "/tour" && isScrolled
                    ? "text-white transition-colors duration-500"
                    : "hover:text-pinkcaritravel-900 hover:opacity-100 transition-colors duration-500"
                }`}
              >
                Tour Package
              </Link>

              <Link
                href="/visa"
                className={`${
                  pathname === "/visa"
                    ? "active text-pinkcaritravel-900"
                    : !isScrolled
                    ? "text-blackcaritravel transition-colors duration-500"
                    : "text-whitecaritravel opacity-75 hover:text-whitecaritravel hover:opacity-100 transition-colors duration-500"
                } ${
                  pathname === "/visa" && isScrolled
                    ? "text-white transition-colors duration-500"
                    : "hover:text-pinkcaritravel-900 hover:opacity-100 transition-colors duration-500"
                }`}
              >
                Document & Visa
              </Link>

              <Link
                href="/about"
                className={`${
                  pathname === "/about"
                    ? "active text-pinkcaritravel-900"
                    : !isScrolled
                    ? "text-blackcaritravel transition-colors duration-500"
                    : "text-whitecaritravel opacity-75 hover:text-whitecaritravel hover:opacity-100 transition-colors duration-500"
                } ${
                  pathname === "/about" && isScrolled
                    ? "text-white transition-colors duration-500"
                    : "hover:text-pinkcaritravel-900 hover:opacity-100 transition-colors duration-500"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact"
                    ? "active text-pinkcaritravel-900"
                    : !isScrolled
                    ? "text-blackcaritravel transition-colors duration-500"
                    : "text-whitecaritravel opacity-75 hover:text-whitecaritravel hover:opacity-100 transition-colors duration-500"
                } ${
                  pathname === "/contact" && isScrolled
                    ? "text-white transition-colors duration-500"
                    : "hover:text-pinkcaritravel-900 hover:opacity-100 transition-colors duration-500"
                }`}
              >
                Contact
              </Link>
            </Navbar.Collapse>
          </div>
        </Navbar>
      )}
    </header>
  );
};

export default Navigationbar;
