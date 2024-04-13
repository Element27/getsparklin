import { MobileNavbar, Navbar } from "@/components/user/navbar/Navbar";
import VendorHero from "@/components/vendor/vendorHero";
import React from "react";

export default function VendorHome() {
  return (
    <main className="min-h-screen bg-white w-full">
      <div className=" border-b-2 border-b-black ">
        <Navbar />
        <MobileNavbar />
      </div>
      <VendorHero />
    </main>
  );
}
