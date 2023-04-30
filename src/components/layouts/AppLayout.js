import React from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <header>
        <nav className="flex fixed w-full h-12 items-center px-4 justify-between backdrop-filter backdrop-blur-lg shadow-md">
          <HeaderNav />
        </nav>
      </header>

      <main className="mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
