import React from "react";
import DarkLogo from "public/logo_dark.svg";
import Image from "next/image";
import LightLogo from "public/logo_white.svg";
import Link from "next/link";
import LogoIcon from "./icons/LogoIcon";

export default function Logo() {
  //   return (
  //     <div className="flex justify-start">
  //       <span className="sr-only">Profile Picture</span>
  //       <Link href="/" passHref>
  //         <LogoIcon width={40} />
  //       </Link>
  //     </div>
  //   );
  return (
    <div className="flex justify-start">
      <span className="sr-only">Profile Picture</span>
      <Link href="/" passHref>
        <span className="block dark:hidden">
          <Image
            alt="Logo"
            height={38}
            width={38}
            src={DarkLogo}
            blurDataURL={DarkLogo}
            className="rounded-full"
          />
        </span>
      </Link>
      <Link href="/" passHref>
        <span className="hidden dark:block">
          <Image
            alt="Logo"
            height={38}
            width={38}
            src={LightLogo}
            blurDataURL={LightLogo}
            className="rounded-full"
          />
        </span>
      </Link>
    </div>
  );
}
