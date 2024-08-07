import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { useTransition } from "react";
import ReactFlagsSelect from "react-flags-select";

interface LocalSwitcherProps {
  isScrolled: boolean;
}

export default function LocalSwitcher({ isScrolled }: LocalSwitcherProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const onSelectChange = (code: string) => {
    const nextLocale = code === "ID" ? "id" : "en";

    // Replace the locale in the current pathname
    const newPathname = pathname.replace(`/${localActive}`, `/${nextLocale}`);

    startTransition(() => {
      router.replace(newPathname, { scroll: false });
    });
  };

  return (
    <ReactFlagsSelect
      selected={localActive === "id" ? "ID" : "GB"} // Indonesia and English flags
      onSelect={onSelectChange}
      countries={["GB", "ID"]} // GB for English (UK flag), ID for Indonesia
      //   customLabels={{ GB: "English", ID: "Indonesia" }}
      showSelectedLabel={false}
      showOptionLabel={false}
      selectedSize={14}
      optionsSize={14}
      placeholder="Select Language"
      disabled={isPending}
      className={` h-9 rounded ${
        isScrolled
          ? "bg-pink-100 transition-colors duration-300"
          : " bg-white transition-colors duration-300"
      }`}
    />
  );
}
