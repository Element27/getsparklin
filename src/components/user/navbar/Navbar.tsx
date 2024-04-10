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

export function Navbar() {
  return (
    <nav className="hidden lg:flex justify-between items-center">
      <div className="flex items-baseline ">
        <Image src="/sparklin.png" alt="logo" width={23} height={32} />
        <h4 className="text-[24px] font-medium ">GetSparklin</h4>
      </div>

      <div className="flex gap-4 items-center ">
        <p className="my-2 text-[14px] px-5 py-2 rounded-full font-medium bg-getsparklin-light-purple text-getsparklin-purple">
          For Consumers
        </p>

        <p className="my-2 text-[14px] px-5 py-2 rounded-full font-medium">
          For Vendors
        </p>

        <p className="my-2 text-[14px] px-5 py-2 rounded-full font-medium">
          Our features
        </p>

        <p className="my-2 text-[14px] px-5 py-2 rounded-full font-medium">
          blogs
        </p>
      </div>

      <Button
        bg="#9047FF"
        text="Contact us on whatsapp"
        shadow="black"
        imgSrc="/icons/whatsapp.svg"
      />
    </nav>
  );
}

export function MobileNavbar() {
  return (
    <nav className="flex items-center justify-between lg:hidden bg-white">
      <div className="flex items-baseline">
        <Image src="/sparklin.png" alt="logo" width={23} height={32} />
        <h4 className="text-[24px] font-medium ">GetSparklin</h4>
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
          <SheetContent side="left" className="bg-white">
            <div className="flex items-baseline my-8">
              <Image src="/sparklin.png" alt="logo" width={23} height={32} />
              <h4 className="text-[24px] font-medium ">GetSparklin</h4>
            </div>

            <div className="flex flex-col justify-between items-start ">
              <SheetClose>
                <p className="cursor-pointer my-2 text-[14px] px-5 py-2 rounded-full font-medium bg-getsparklin-light-purple text-getsparklin-purple">
                  For Consumers
                </p>
              </SheetClose>
              <SheetClose>
                <p className="cursor-pointer my-2 text-[14px] px-5 py-2 rounded-full font-medium">
                  For Vendors
                </p>
              </SheetClose>
              <SheetClose>
                <p className="cursor-pointer my-2 text-[14px] px-5 py-2 rounded-full font-medium">
                  Our features
                </p>
              </SheetClose>
              <SheetClose>
                <p className="cursor-pointer my-2 text-[14px] px-5 py-2 rounded-full font-medium">
                  blogs
                </p>
              </SheetClose>
              <SheetClose>
                <Button
                  bg="#9047FF"
                  text="Contact us on whatsapp"
                  shadow="black"
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
