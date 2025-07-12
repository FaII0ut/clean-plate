import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-between bg-white">
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </>
  );
}
