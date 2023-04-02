import Link from "next/link";
//import styles from "@/styles/Header.module.css";

import React from "react";

export default function Header({ service_title }) {
  return (
    <div className="flex items-center h-16 px-4 border-b border-slate-200">
      <Link href="/" className="font-bold text-xl flex-1">
        {service_title}
      </Link>
    </div>
  );
}
