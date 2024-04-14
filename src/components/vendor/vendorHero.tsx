import Image from "next/image";
import React from "react";
import Button from "../Button";
import { UnionIcon } from "./Icon";

export default function VendorHero() {
  return (
    <div>
      <div className="bg-[#002724] w-full h-screen text-white font-gilroy relative bg-[url(/icons/curler.svg)]">
        <div className="w-[90%] mx-auto lg:w-full z-10 flex flex-col lg:flex-row items-center justify-center h-full ">
          <div className="">
            <h1 className="text-[32px] lg:text-7xl font-bold relative z-30 leading-[20px]">
              <span className="">
                Level Up
                <span className=" ">
                  <Image
                    src="/icons/staticon.svg"
                    alt=""
                    width={64}
                    height={64}
                    className="inline-flex w-[39px] h-[46px] lg:size-[64px]"
                  />
                </span>
              </span>{" "}
              <br />
              <span className="">Your</span>
              <br />
              <span>
                Laundry Business
                <span>
                  <Image
                    src="/icons/laundry.svg"
                    alt=""
                    width={64}
                    height={64}
                    className="inline-flex w-[36px] h-[36px] lg:size-[64px]"
                  />
                </span>
              </span>
            </h1>

            <p className="lg:text-2xl  font-gilroy-medium lg:font-gilroy-medium ">
              Delight Customers and Become a Local Hero!
            </p>

            <div className="flex space-x-8 items-center mt-10">
              <Button
                bg="#9047FF"
                text="Book a Demo"
                // shadow="black"
              />
              <p className="font-gilroy-medium text-xs lg:text-base">
                Start your free trial
              </p>
            </div>
          </div>

          {/* <div className=" w-full lg:w-2/5 flex flex-row-reverse"> */}
          <Image
            src="/icons/iPad Pro.png"
            alt=""
            width={670}
            height={583}
            className=""
          />
          {/* </div> */}
        </div>
        {/* <Image
        src="/icons/curler.svg"
        alt=""
        width={1645}
        height={923}
        className="absolute top-0 right-0 z-0"
      /> */}
      </div>

      <div className="bg-[#9047FF] w-full h-fit text-black p-6 flex flex-col space-y-6">
        <p className="flex items-center justify-center gap-x-4 font-gilroy-medium text-base lg:text-2xl text-center">
          <UnionIcon className="w-fit inline-flex size-16 lg:size-2xl" /> By
          Local heroes
        </p>

        <div className="flex items-center justify-evenly flex-wrap-reverse">
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/1.png"
              alt=""
              width={48}
              height={48}
              className=""
            />
            <p className="text-xs lg:text-lg font-gilroy text-white">Layers</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/2.png"
              alt=""
              width={48}
              height={48}
              className=""
            />
            <p className="text-xs lg:text-lg font-gilroy text-white">Catalog</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/3.png"
              alt=""
              width={48}
              height={48}
              className=""
            />
            <p className="text-xs lg:text-lg font-gilroy text-white">
              Quotient
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/4.png"
              alt=""
              width={48}
              height={48}
              className=""
            />
            <p className="text-xs lg:text-lg font-gilroy text-white">
              Circooles
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/5.png"
              alt=""
              width={26}
              height={48}
              className=""
            />
            <p className="text-xs lg:text-lg font-gilroy text-white">
              Sisyphus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
