import Header from '@/components/Header';
import React from "react";
import Footer from "../components/Footer";

export default function AppLayout({ children }) {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main className="prose dark:prose-dark mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 py-20">
          AppLayout
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
