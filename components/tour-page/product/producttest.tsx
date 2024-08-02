"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { BeatLoader } from "react-spinners";
import { useLocale } from "next-intl";
// import useProductStore from "@/components/store/useProductStore";

interface DetailProductProps {
  id: number;
  countries: string;
  cities: string;
  traveler: string;
  duration: string;
  duration_night: string;
  start_date: string;
  end_date: string;
  title: string;
  description: string;
  body: JSON;
  author: number;
  price: number;
  attachment: {
    url: string;
  }[];
}

interface Props {
  products: DetailProductProps[];
  categories: any[];
}

// export default function ProductPage({ products, categories }: Props) {
export default function ProductPage({ products }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [tempSearchTerm, setTempSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true); // Tambahkan keadaan loading
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const [sortBy, setSortBy] = useState("new");
  // const setProduct = useProductStore((state) => state.setProduct);

  useEffect(() => {
    // Contoh: Menunggu 2 detik sebelum mengatur loading menjadi false
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const parsePrice = (priceString: string): number => {
    // Remove all non-numeric characters except periods and commas
    // Handle multiple periods by keeping only the last one for decimal points
    // Replace commas with periods for decimal points
    const cleanedString = priceString
      .replace(/[^0-9.,]+/g, "") // Remove all non-numeric characters except periods and commas
      .replace(/(\..*)\./g, "$1") // Keep only the last period for decimal points
      .replace(/,/g, "") // Remove all commas as thousand separators
      .replace(/\.(?=\d{3})/g, ""); // Remove dots used as thousand separators

    return parseFloat(cleanedString);
  };

  useEffect(() => {
    setLoading(true); // Set loading to true when loading data

    let updatedProducts = [...products];

    if (searchTerm) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.cities.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.countries.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (pageParam) {
      setCurrentPage(parseInt(pageParam) || 1);
    }

    if (sortBy === "new") {
      updatedProducts.sort((a, b) => b.id - a.id);
    } else if (sortBy === "old") {
      updatedProducts.sort((a, b) => a.id - b.id);
    } else if (sortBy === "lowPrice") {
      updatedProducts.sort(
        (a, b) =>
          parsePrice(a.price.toString()) - parsePrice(b.price.toString())
      );
    } else if (sortBy === "highPrice") {
      updatedProducts.sort(
        (a, b) =>
          parsePrice(b.price.toString()) - parsePrice(a.price.toString())
      );
    }

    setFilteredProducts(updatedProducts);

    // Set loading to false after all state changes
    setLoading(false);

    // console.log(
    //   "Sorting by lowPrice:",
    //   updatedProducts.map((p) => parsePrice(p.price.toString()))
    // );
    // console.log(
    //   "Sorting by highPrice:",
    //   updatedProducts.map((p) => parsePrice(p.price.toString()))
    // );
  }, [searchTerm, pageParam, products, sortBy, selectedCategory]);

  const handleSortChange = (value: string) => {
    setSortBy(value);
    let sortedProducts = [...filteredProducts];
    if (value === "new") {
      sortedProducts.sort((a, b) => b.id - a.id);
    } else if (value === "old") {
      sortedProducts.sort((a, b) => a.id - b.id);
    } else if (value === "lowPrice") {
      sortedProducts.sort(
        (a, b) =>
          parsePrice(a.price.toString()) - parsePrice(b.price.toString())
      );
    } else if (value === "highPrice") {
      sortedProducts.sort(
        (a, b) =>
          parsePrice(b.price.toString()) - parsePrice(a.price.toString())
      );
    }
    setFilteredProducts(sortedProducts);
  };

  // const handleCategoryChange = (category: string) => {
  //   setSelectedCategory(category);
  //   setCurrentPage(1); // Set halaman ke 1 setiap kali kategori berubah

  //   // Membangun URL baru dengan halaman di-reset ke 1
  //   const newUrl = `${pathname}?category=${encodeURIComponent(
  //     category
  //   )}&page=1`;

  //   if (category === "all") {
  //     router.push(`${pathname}?page=1`); // Pastikan untuk reset halaman ke 1
  //     setFilteredProducts(products); // Reset ke semua produk jika kategori adalah 'all'
  //   } else {
  //     router.push(newUrl);
  //     // const filtered = products.filter(
  //     //   (product) => product.category === category
  //     // );
  //     // setFilteredProducts(filtered);
  //   }
  // };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setTempSearchTerm(newSearchTerm);

    if (newSearchTerm === "") {
      setSearchTerm(""); // Kosongkan searchTerm
      setFilteredProducts(products); // Tampilkan semua produk
      setCurrentPage(1); // Set halaman ke 1
      router.push(`${pathname}?page=1`, {
        scroll: false,
      }); // Perbarui URL ke page=1
    }
  };

  const handleSearchClick = () => {
    setSearchTerm(tempSearchTerm);
    router.push(`${pathname}?search=${tempSearchTerm}`, {
      scroll: false,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const clearSearch = () => {
    setTempSearchTerm("");
    setSearchTerm("");
    // setFilteredProducts(products);
    setCurrentPage(1); // Set halaman ke 1
    // router.push(`${pathname}?page=1`); // Perbarui URL ke page=1
    router.push(`${pathname}`, { scroll: false }); // Perbarui URL ke page=1
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  //   const currentPosts = products.slice(firstPostIndex, lastPostIndex);
  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(products.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const locale = useLocale();

  const constructUrl = (path: string) => {
    // Pastikan locale tidak ditambahkan dua kali
    const normalizedPath = path.startsWith(`/${locale}`)
      ? path.slice(locale.length + 1)
      : path;
    return `/${locale}${
      normalizedPath.startsWith("/") ? "" : "/"
    }${normalizedPath}`;
  };

  return (
    <>
      <div className=" p-8 rounded-xl mt-4 w-full container">
        <h1 className="text-2xl pb-4">Kamu mau kemana?</h1>
        <div className="md:flex justify-between">
          <div className="flex gap-4 relative pb-4 md:pb-0">
            <Search className="absolute translate-y-3 translate-x-4" />
            <Input
              id="search"
              type="text"
              placeholder="Cari lokasi travel kamu disini"
              className="h-12 w-full md:w-96 rounded-full px-4 pl-12 bg-white"
              value={tempSearchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            ></Input>
            {tempSearchTerm && (
              <X
                className="absolute right-28 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={clearSearch}
              />
            )}
            <Button
              onClick={handleSearchClick}
              className="h-12 bg-pink-500 text-white hover:bg-pink-400 rounded-full px-4"
            >
              Search
            </Button>
          </div>
          <div className="flex gap-2 md:gap-4">
            <Select onValueChange={(value: string) => handleSortChange(value)}>
              <SelectTrigger className="w-[180px] h-12 rounded-full px-4 bg-white">
                {/* <SelectValue placeholder="Sort By" /> */}
                <SelectValue
                  placeholder={
                    sortBy === "new"
                      ? "Paling Baru"
                      : sortBy === "old"
                      ? "Paling Lama"
                      : sortBy === "lowPrice"
                      ? "Termurah"
                      : sortBy === "highPrice"
                      ? "Termahal"
                      : "Sort By"
                  }
                ></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort By</SelectLabel>
                  <SelectItem value="new">Paling Baru</SelectItem>
                  <SelectItem value="old">Paling Lama</SelectItem>
                  <SelectItem value="lowPrice">Termurah</SelectItem>
                  <SelectItem value="highPrice">Termahal</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="container sm:pb-12">
        <>
          <>
            {loading ? ( // Tampilkan elemen loading jika loading adalah true
              <div className="flex flex-col justify-center items-center h-screen gap-2">
                <BeatLoader loading={loading} color="#EE66A9" size={10} />
                <h1 className="text-xl">Loading</h1>
              </div>
            ) : (
              <>
                {currentPosts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full py-6">
                    {currentPosts.map((product, idx) => (
                      <div key={idx}>
                        <div className="group relative block overflow-hidden rounded-xl shadow-lg">
                          <Link
                            href={{
                              pathname: constructUrl("/tour/product/detail"),
                              query: { id: product?.id },
                            }}
                            key={product.id}
                          >
                            <div>
                              <div className="absolute px-4 end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 flex items-center gap-2">
                                <p>
                                  {product.duration} Hari{" "}
                                  {product.duration_night} Malam
                                </p>
                              </div>

                              <Image
                                src={product.attachment[0].url}
                                alt="photo-location"
                                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 bg-white"
                                width={500}
                                height={500}
                              />
                              <div className="relative border border-gray-100 bg-white p-6">
                                <h3 className="text-xl font-semibold text-gray-900 truncate">
                                  {product.title}
                                </h3>
                                <h4 className="text-sm text-gray-500">
                                  {product.cities}, {product.countries}
                                </h4>
                                <div className="flex justify-between items-end">
                                  <div>
                                    <h3 className="mt-4 text-sm font-medium text-gray-900">
                                      Starting From:
                                    </h3>
                                    <h3 className="text-xl font-bold text-gray-900">
                                      Rp. {product.price}
                                    </h3>
                                  </div>
                                  <Button className="bg-pink-200 text-pinkcaritravel-900 hover:text-pinkcaritravel-300 hover:bg-pink-50">
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-center items-center h-64">
                    <h1 className="text-2xl font-bold text-gray-500">
                      Tidak ada produk yang ditemukan
                    </h1>
                  </div>
                )}
              </>
            )}
          </>

          <PaginationSection
            // products={products.length}
            products={filteredProducts} // Menggunakan filteredProducts yang berisi produk yang sudah difilter
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </>
      </div>
    </>
  );
}

function PaginationSection({
  products, // Gunakan products yang sudah difilter
  postsPerPage,
  currentPage,
  setCurrentPage,
  handlePrevPage,
  handleNextPage,
}: {
  products: any[];
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}) {
  const router = useRouter();

  // Hitung total jumlah produk setelah difilter
  const totalFilteredProducts = products.length;

  // Hitung jumlah halaman berdasarkan jumlah produk yang sesuai dengan filter pencarian
  const totalPages = Math.ceil(totalFilteredProducts / postsPerPage);

  // Lakukan slice pada array produk yang sesuai dengan halaman saat ini
  const currentPosts = products.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Render halaman-halaman
  const renderPages = () => {
    if (totalPages === 1) {
      return null; // Jika hanya ada satu halaman, tidak perlu menampilkan angka halaman
    }

    // Render nomor halaman dan titik-titik jika perlu
    // Sesuaikan dengan currentPage untuk menentukan kelas aktif
    const renderedPages = [];
    for (let i = 1; i <= totalPages; i++) {
      renderedPages.push(
        <PaginationItem
          key={i}
          className={
            currentPage === i
              ? "rounded-md bg-pink-50 text-pinkcaritravel-900"
              : ""
          }
        >
          <PaginationLink
            onClick={() => {
              setCurrentPage(i);
              router.push(`?page=${i}`, {
                scroll: false,
              });
            }}
            className="bg-darkcmi opacity-50"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return renderedPages;
  };

  // Menonaktifkan tombol prev jika currentPage adalah halaman pertama
  const isPrevDisabled = currentPage === 1;

  // Menonaktifkan tombol next jika currentPage adalah halaman terakhir
  const isNextDisabled = currentPage === totalPages;

  // Menampilkan pagination hanya jika jumlah produk yang ditemukan lebih dari 6
  if (totalFilteredProducts <= postsPerPage) {
    return null;
  }

  return (
    <div className="cursor-pointer">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault(); // Mencegah perilaku default dari event onClick
                handlePrevPage();
                if (!isPrevDisabled) {
                  router.push(`?page=${currentPage - 1}`, {
                    scroll: false,
                  });
                }
              }}
              isActive={currentPage === 1}
              aria-disabled={isPrevDisabled}
              className={
                isPrevDisabled
                  ? "pointer-events-none opacity-50 bg-darkcmi"
                  : undefined
              }
            />
          </PaginationItem>

          {renderPages()}

          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault(); // Mencegah perilaku default dari event onClick
                handleNextPage();
                if (!isNextDisabled) {
                  router.push(`?page=${currentPage + 1}`, {
                    scroll: false,
                  });
                }
              }}
              isActive={currentPage === totalPages}
              aria-disabled={isNextDisabled}
              className={
                isNextDisabled
                  ? "pointer-events-none opacity-50 bg-darkcmi"
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
