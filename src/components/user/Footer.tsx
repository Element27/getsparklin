import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section className="bg-white px-4 pt-12 relative">
      <div className="flex flex-col lg:flex-row-reverse justify-around">
        <div className="gap-6 flex flex-col mb-12">
          <div className="flex gap-2 lg:gap-4 items-center justify-center w-fit">
            <div className="w-3 h-3 bg-[#2D7DF5] rounded-full border-2 border-black"></div>
            <h4 className="font-Gilroy font-medium text-2xl">Laundry Empire</h4>
          </div>

          <div className="bg-black rounded-full text-white gap-4 flex items-center justify-center py-2 px-4 w-fit">
            <Image
              src="/icons/X Logo.svg"
              alt="xlogo"
              width={12}
              height={12}
              className="mx-auto"
            />
            <h4 className="font-gilroy text-sm font-medium">
              Join our X Community
            </h4>
          </div>
        </div>

        <div className="flex gap-6 flex-col lg:flex-row">
          <div className="flex flex-row lg:flex-row-reverse   ">
            <div className="flex flex-col gap-6 w-[180px]">
              <h6 className="font-Gilroy font-semibold text-[#667085]">
                Near Me
              </h6>
              <p className="font-Gilroy font-semibold ">Dry Cleaners</p>
              <p className="font-Gilroy font-semibold ">Laundromat</p>
              <p className="font-Gilroy font-semibold ">Laundry Shops</p>
              <p className="font-Gilroy font-semibold ">Shoe Repair</p>
              <p className="font-Gilroy font-semibold ">Laundry Delivery</p>
            </div>
            <div className="flex flex-col gap-6 w-[180px]">
              <h6 className="font-Gilroy font-semibold text-[#667085]">
                Products
              </h6>
              <p className="font-Gilroy font-semibold ">Consumers</p>
              <p className="font-Gilroy font-semibold ">Vendors</p>
            </div>
          </div>
          <div className="flex flex-row lg:flex-row-reverse  ">
            <div className="flex flex-col gap-6 w-[180px]">
              <h6 className="font-Gilroy font-semibold text-[#667085]">
                Support
              </h6>
              <p className="font-Gilroy font-semibold ">About Us</p>
              <p className="font-Gilroy font-semibold ">FAQs</p>
              <p className="font-Gilroy font-semibold ">Contact Us</p>
            </div>
            <div className="flex flex-col gap-6 w-[180px]">
              <h6 className="font-Gilroy font-semibold text-[#667085]">
                Legal
              </h6>
              <p className="font-Gilroy font-semibold ">Privacy Policy</p>
              <p className="font-Gilroy font-semibold ">Terms and Conditions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 mx-4 lg:mx-12">
        <Image
          src="/icons/footerLogo.png"
          alt="footer logo"
          width={236}
          height={60}
          className=""
        />

        <p className="text-sm font-gilroy">
          © 2024. Getsparklin. All rights reserved.
        </p>

        <div className="flex items-center gap-6 my-12 relative">
          <Image
            src="/icons/fb.svg"
            alt="instagram logo"
            width={32}
            height={32}
            className=""
          />
          <Image
            src="/icons/instagram.svg"
            alt="footer logo"
            width={32}
            height={32}
            className=""
          />
          <Image
            src="/icons/x.svg"
            alt="footer logo"
            width={32}
            height={32}
            className=""
          />
          <Image
            src="/icons/Tic tok.svg"
            alt="footer logo"
            width={32}
            height={32}
            className=""
          />

          <Image
            src="/icons/Logo Mark-1.svg"
            alt="footer logo"
            width={432}
            height={600}
            className="absolute bottom-[100%] left-[-5%]"
          />
        </div>
      </div>
    </section>
  );
}
