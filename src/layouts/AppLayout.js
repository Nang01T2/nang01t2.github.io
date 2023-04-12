import Header from "@/components/Header";
import React from "react";
import AppContainer from "../components/AppContainer";
import Footer from "../components/Footer";

export default function AppLayout({ children }) {
  return (
    <>
      <AppContainer>
        <div className="flex h-screen flex-col justify-between">
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </AppContainer>
    </>
  );
}
