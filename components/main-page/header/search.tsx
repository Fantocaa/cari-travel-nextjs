"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, X } from "lucide-react";
import useSearchStore from "@/components/useSearchStore";
import LocaleLink from "@/components/locale-link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

interface Props {
  translations: {
    pc: string;
    sc: string;
  };
}

export default function Search({ translations }: Props) {
  const { searchTerm, setSearchTerm } = useSearchStore();
  const [tempSearchTerm, setTempSearchTerm] = useState(searchTerm);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(tempSearchTerm);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTerm(tempSearchTerm);
      router.push(`${locale}/tour`);
    }
  };

  const clearSearch = () => {
    setTempSearchTerm("");
    setSearchTerm("");
  };

  // Reset searchTerm setelah rute berubah
  useEffect(() => {
    clearSearch();
  }, [pathname, searchParams]);

  return (
    <div className="flex gap-4 relative pb-4 md:pb-0">
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
          className="absolute right-32 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={clearSearch}
        />
      )}
      <LocaleLink href="/tour">
        <Button
          onClick={handleSearchClick}
          className="border border-yellowcaritravel bg-yellowcaritravel transition-colors duration-500 px-8 py-6 text-sm font-medium text-blackcaritravel hover:bg-transparent hover:text-yellowcaritravel focus:outline-none focus:ring active:text-opacity-75 sm:w-auto rounded-full"
        >
          {translations.sc}
        </Button>
      </LocaleLink>
    </div>
  );
}
