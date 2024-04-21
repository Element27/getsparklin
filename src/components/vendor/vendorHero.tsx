import Image from "next/image";
import React from "react";
import Button from "../Button";
import { UnionIcon } from "./Icon";

export default function VendorHero() {
  return (
    <div className="w-screen bg-[#002724]">
      <div className="w-full lg:max-w-7xl mx-auto h-screen text-white font-gilroy relative bg-[url(/icons/curler.svg)]">
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
    </div>
  );
}
