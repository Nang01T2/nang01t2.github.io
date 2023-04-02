import Link from "next/link";
import styles from "@/styles/Header.module.css";

import React from "react";

export default function Header({ service_title }) {
  return (
    <header className={styles.header}>
      <div className="flex items-center h-16 px-4">
        <h2>
          <Link href="/" className="font-bold text-2xl flex-1">
            {service_title}
          </Link>
        </h2>

        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="#">GitHub Code</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
