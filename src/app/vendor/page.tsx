import Footer from "@/components/user/Footer";
import Subscribe from "@/components/user/Subscribe";
import { MobileNavbar, Navbar } from "@/components/user/navbar/Navbar";
import IntegratedSection from "@/components/vendor/IntegratedSection";
import PreFAQ from "@/components/vendor/PreFAQ";
import VendorFeatures from "@/components/vendor/VendorFeatures";
import VendorSlider from "@/components/vendor/VendorSlider";
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
      <VendorFeatures />
      <VendorSlider />
      <PreFAQ />
      <IntegratedSection />
      <Subscribe />
      <Footer />
    </main>
  );
}
