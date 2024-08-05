"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";
import LocaleLink from "@/components/locale-link";

interface navLinks {
  id: number;
  name: string;
  href: string;
}

interface locale {
  locale: string;
}

export default function MainNavbar({
  navLinks,
  locale,
}: {
  navLinks: navLinks[];
  locale: string;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    const handleResize = () => {
      // Periksa lebar layar
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pathname = usePathname();

  return (
    <>
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
          </div>
          <div className="w-full">
            {navLinks.map((link) => (
              <Navbar.Collapse key={link.id}>
                <LocaleLink
                  href={link.href}
                  className={
                    isScrolled
                      ? "text-white"
                      : // : "text-blackcaritravel hover:text-pinkcaritravel-900"
                        "text-blackcaritravel"
                  }
                >
                  {link.name}
                </LocaleLink>
              </Navbar.Collapse>
            ))}
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
              <LocaleLink
                href="/"
                className={`${
                  pathname === `/${locale}`
                    ? "active text-pinkcaritravel-900"
                    : !isScrolled
                    ? "text-blackcaritravel transition-colors duration-500"
                    : "text-whitecaritravel opacity-75 hover:text-whitecaritravel hover:opacity-100 transition-colors duration-500"
                } ${
                  pathname === `/${locale}` && isScrolled
                    ? "text-white transition-colors duration-500"
                    : "hover:text-pinkcaritravel-900 transition-colors duration-500"
                }`}
              >
                Home
              </LocaleLink>

              <LocaleLink
                href="/tour"
                className={`${
                  // pathname === `/${locale}/tour`
                  pathname.startsWith(`/${locale}/tour`)
                    ? "active text-pinkcaritravel-900"
                    : !isScrolled
                    ? "text-blackcaritravel transition-colors duration-500"
                    : "text-whitecaritravel opacity-75 hover:text-whitecaritravel hover:opacity-100 transition-colors duration-500"
                } ${
                  // pathname === `/${locale}/tour` && isScrolled
                  pathname.startsWith(`/${locale}/tour`) && isScrolled
                    ? "text-white transition-colors duration-500"
                    : "hover:text-pinkcaritravel-900 hover:opacity-100 transition-colors duration-500"
                }`}
              >
                Tour Package
              </LocaleLink>

              <LocaleLink
                href="/visa"
                className={`${
                  pathname === `/${locale}/visa`
                    ? "active text-pinkcaritravel-900"
                    : !isScrolled
                    ? "text-blackcaritravel transition-colors duration-500"
                    : "text-whitecaritravel opacity-75 hover:text-whitecaritravel hover:opacity-100 transition-colors duration-500"
                } ${
                  pathname === `/${locale}/visa` && isScrolled
                    ? "text-white transition-colors duration-500"
                    : "hover:text-pinkcaritravel-900 hover:opacity-100 transition-colors duration-500"
                }`}
              >
                Document & Visa
              </LocaleLink>

              <LocaleLink
                href="/about"
                className={`${
                  pathname === `/${locale}/about`
                    ? "active text-pinkcaritravel-900"
                    : !isScrolled
                    ? "text-blackcaritravel transition-colors duration-500"
                    : "text-whitecaritravel opacity-75 hover:text-whitecaritravel hover:opacity-100 transition-colors duration-500"
                } ${
                  pathname === `/${locale}/about` && isScrolled
                    ? "text-white transition-colors duration-500"
                    : "hover:text-pinkcaritravel-900 hover:opacity-100 transition-colors duration-500"
                }`}
              >
                About Us
              </LocaleLink>
              <LocaleLink
                href="/contact"
                className={`${
                  pathname === `/${locale}/contact`
                    ? "active text-pinkcaritravel-900"
                    : !isScrolled
                    ? "text-blackcaritravel transition-colors duration-500"
                    : "text-whitecaritravel opacity-75 hover:text-whitecaritravel hover:opacity-100 transition-colors duration-500"
                } ${
                  pathname === `/${locale}/contact` && isScrolled
                    ? "text-white transition-colors duration-500"
                    : "hover:text-pinkcaritravel-900 hover:opacity-100 transition-colors duration-500"
                }`}
              >
                Contact
              </LocaleLink>
            </Navbar.Collapse>
          </div>
        </Navbar>
      )}
    </>
  );
}
