import Link from "next/link";

import { $ } from "@/libs/core";

export default function LinkHover({
  ref: _,
  className,
  href,
  children,
  ...props
}) {
  return (
    <Link
      {...props}
      href={href ?? "/"}
      className={$(
        "flex items-center rounded-lg transition-all hover:bg-secondary",
        className
      )}
    >
      {children}
    </Link>
  );
}
