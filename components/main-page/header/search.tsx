"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, X } from "lucide-react";
import useSearchStore from "@/components/useSearchStore";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

interface Props {
  translations: {
    pc: string;
    sc: string;
    emptySearchError: string; // Tambahkan pesan kesalahan jika input kosong
  };
}

export default function Search({ translations }: Props) {
  const { searchTerm, setSearchTerm } = useSearchStore();
  const [tempSearchTerm, setTempSearchTerm] = useState(searchTerm);
  const [error, setError] = useState<string | null>(null); // Menyimpan pesan kesalahan
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearchTerm(e.target.value);
    setError(null); // Hapus pesan kesalahan saat input diubah
  };

  const handleSearchClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault(); // Mencegah navigasi default tombol
    if (tempSearchTerm.trim() === "") {
      setError(translations.emptySearchError); // Set pesan kesalahan jika input kosong
      return;
    }
    setSearchTerm(tempSearchTerm);
    router.push(`${locale}/tour?search=${encodeURIComponent(tempSearchTerm)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Mencegah perpindahan halaman
      if (tempSearchTerm.trim() === "") {
        setError(translations.emptySearchError); // Set pesan kesalahan jika input kosong
        return;
      }
      setSearchTerm(tempSearchTerm);
      router.push(
        `${locale}/tour?search=${encodeURIComponent(tempSearchTerm)}`
      );
    }
  };

  const clearSearch = () => {
    setTempSearchTerm("");
    setSearchTerm("");
    setError(null); // Hapus pesan kesalahan saat pencarian dibersihkan
  };

  // Reset searchTerm setelah rute berubah
  useEffect(() => {
    clearSearch();
  }, [pathname, searchParams]);

  return (
    <>
      <div className="md:flex gap-4 pb-4 md:pb-0">
        <div className="relative">
          <SearchIcon className="absolute translate-y-3 translate-x-4" />
          <Input
            id="search"
            type="text"
            placeholder={translations.pc}
            className="h-12 w-full md:w-96 rounded-full px-4 pl-12 bg-white"
            value={tempSearchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          {tempSearchTerm && (
            <X
              className="absolute right-4 top-6 md:top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={clearSearch}
            />
          )}
          {error && <p className="text-red-500 mt-2 md:hidden">{error}</p>}
        </div>
        {/* Menampilkan pesan kesalahan */}
        <Button
          onClick={handleSearchClick}
          className="mt-4 md:mt-0 border border-yellowcaritravel bg-yellowcaritravel transition-colors duration-500 w-full h-12 md:px-8 text-sm font-medium text-blackcaritravel hover:bg-transparent hover:text-yellowcaritravel focus:outline-none focus:ring active:text-opacity-75 sm:w-auto rounded-full"
        >
          {translations.sc}
        </Button>
      </div>
      {error && <p className="text-red-500 mt-2 hidden md:block">{error}</p>}
    </>
  );
}
