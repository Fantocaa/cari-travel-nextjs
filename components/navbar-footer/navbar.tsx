import MainNavbar from "./navbar-comp/MainNavbar";
import { useLocale, useTranslations } from "next-intl";

const Navigationbar = () => {
  const t = useTranslations("Navigation-Bar");
  const locale = useLocale();

  const navLinks = [
    { id: 1, name: `${t("home")}`, href: "/" },
    { id: 2, name: `${t("service")}`, href: "/tour" },
    { id: 3, name: `${t("document")}`, href: "/visa" },
    { id: 4, name: `${t("about")}`, href: "/about" },
    { id: 5, name: `${t("contact")}`, href: "/contact" },
  ];

  return (
    <header>
      <MainNavbar navLinks={navLinks} locale={locale} />
    </header>
  );
};

export default Navigationbar;
