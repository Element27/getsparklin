import Button from "@/components/Button";
import Advantage from "@/components/user/Advantage";
import UserFeatures from "@/components/user/Features";
import Footer from "@/components/user/Footer";
import UserHero from "@/components/user/Hero";
import PrefooterSection from "@/components/user/PrefooterSection";
import { MobileNavbar, Navbar } from "@/components/user/navbar/Navbar";
import Image from "next/image";
import React from "react";

export default function UserLandingPage() {
  return (
    <div className="min-h-screen bg-white ">
      {/* navbar */}
      <div className=" border-b-2 border-b-black p-4 md:px-8 lg:px-10">
        <Navbar />
        <MobileNavbar />
      </div>
      <UserHero />
      <UserFeatures />
      {/* <Advantage /> */}
      <PrefooterSection />
      <Footer />
    </div>
  );
}
