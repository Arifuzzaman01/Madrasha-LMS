import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

export default function mainLayout({ children }) {
  return (
    <>
     
        <Navbar />
     
      <main>{children}</main>
      <Footer />
    </>
  );
}
