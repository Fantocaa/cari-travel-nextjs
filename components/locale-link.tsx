import React, { ReactNode, forwardRef } from "react";
import { useLocale } from "next-intl";
import Link, { LinkProps } from "next/link";

interface LocaleLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(
  ({ href, children, className, ...props }, ref) => {
    const locale = useLocale();
    const localizedHref = `/${locale}${href}`;

    return (
      <Link href={localizedHref} className={className} ref={ref} {...props}>
        {children}
      </Link>
    );
  }
);

LocaleLink.displayName = "LocaleLink";

export default LocaleLink;
