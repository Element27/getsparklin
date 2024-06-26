"use client";
import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "../../Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathName = usePathname();
  // console.log(pathName);
  return (
    <div className="w-screen bg-white p-4 ">
      <nav
        className={`w-full lg:max-w-7xl mx-auto hidden font-gilroy lg:flex justify-between items-center px-4 py-4 bg-white`}
      >
        <div className="flex items-baseline ">
          <Image src="/sparklin.png" alt="logo" width={23} height={32} />
          <h4 className="text-[24px] font-medium  font-gilroy  text-black">
            GetSparklin
          </h4>
        </div>

        <div className="flex gap-4 items-center text-black">
          <Link
            href="/"
            className={`my-2 font-gilroy text-[14px] px-5 py-2 rounded-full font-medium ${
              pathName === "/"
                ? "bg-[#9047FF33] text-getsparklin-purple"
                : "text-black"
            } `}
          >
            For Consumers
          </Link>

          <Link
            href="/vendor"
            className={`my-2 font-gilroy text-[14px] px-5 py-2 rounded-full font-medium ${
              pathName === "/vendor"
                ? "bg-[#9047FF33] text-getsparklin-purple"
                : "text-black"
            } `}
          >
            For Vendors
          </Link>

          <Link
            href="/"
            className="my-2 font-gilroy text-[14px] px-5 py-2 rounded-full font-medium"
          >
            Our features
          </Link>

          <Link
            href="/"
            className="my-2 font-gilroy text-[14px] px-5 py-2 rounded-full font-medium"
          >
            blogs
          </Link>
        </div>

        <Button
          bg="#9047FF"
          text="Contact us on whatsapp"
          imgSrc="/icons/whatsapp.svg"
        />
      </nav>
    </div>
  );
}

export function MobileNavbar() {
  const path = usePathname();
  return (
    <nav className="flex font-gilroy items-center justify-between lg:hidden bg-white px-4">
      <div className="flex items-baseline  text-black">
        <Image src="/sparklin.png" alt="logo" width={23} height={32} />
        <h4 className="text-[24px] font-medium font-gilroy text-black">
          GetSparklin
        </h4>
      </div>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src="/icons/Vectormenu.svg"
              alt="menu-icon"
              width={23}
              height={32}
            />
          </SheetTrigger>
          <SheetContent side="left" className="bg-white text-black">
            <div className="flex items-baseline my-8">
              <Image src="/sparklin.png" alt="logo" width={23} height={32} />
              <h4 className="text-[24px] font-medium ">GetSparklin</h4>
            </div>

            <div className="flex flex-col justify-between items-start ">
              <SheetClose className="my-2">
                <Link
                  href="/"
                  // className="cursor-pointer my-2 text-[14px] px-5 py-2 rounded-full font-medium bg-getsparklin-light-purple text-getsparklin-purple"
                  className={`my-2 font-gilroy text-[14px] px-5 py-2 rounded-full font-medium ${
                    path === "/"
                      ? "bg-[#9047FF33] text-getsparklin-purple"
                      : "text-black"
                  } `}
                >
                  For Consumers
                </Link>
              </SheetClose>
              <SheetClose className="my-2">
                <Link
                  href="/vendor"
                  // className="cursor-pointer my-2 text-[14px] px-5 py-2 rounded-full font-medium"
                  className={`my-2 font-gilroy text-[14px] px-5 py-2 rounded-full font-medium ${
                    path === "/vendor"
                      ? " bg-[#9047FF33] text-getsparklin-purple"
                      : "text-black"
                  } `}
                >
                  For Vendors
                </Link>
              </SheetClose>
              <SheetClose className="my-2">
                <Link
                  href="/"
                  className="cursor-pointer font-gilroy  my-2 text-[14px] px-5 py-2 rounded-full font-medium"
                >
                  Our features
                </Link>
              </SheetClose>
              <SheetClose className="my-2">
                <Link
                  href="/"
                  className="cursor-pointer  font-gilroy my-2 text-[14px] px-5 py-2 rounded-full font-medium"
                >
                  blogs
                </Link>
              </SheetClose>
              <SheetClose>
                <Button
                  bg="#9047FF"
                  text="Contact us on whatsapp"
                  imgSrc="/icons/whatsapp.svg"
                />
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
