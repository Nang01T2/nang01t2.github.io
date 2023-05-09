/* eslint-disable jsx-a11y/anchor-has-content */
import { $ } from "@/libs/core";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const baseClassName = "hover:underline";

const CustomLink = ({
  href,
  noExternalIcon = false,
  locale,
  className,
  children,
  ...rest
}) => {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link
        href={href}
        className={$(baseClassName, className)}
        locale={locale}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      data-no-external-icon={noExternalIcon}
      className={$(baseClassName, className)}
      {...rest}
    >
      {children}
      {!noExternalIcon && (
        <FiArrowUpRight className="mx-[1px] inline -translate-y-[1px]" />
      )}
    </a>
  );
};

export default CustomLink;
