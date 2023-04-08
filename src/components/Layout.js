import Header from "@/components/Header";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Header service_title="PressBlog" />
        <main className="pt-10">
          <div className="p-4 flex justify-center">{children}</div>
        </main>
      </div>
    </>
  );
}
