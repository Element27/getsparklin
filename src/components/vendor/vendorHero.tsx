import Image from "next/image";
import React from "react";

export default function VendorHero() {
  return (
    <div className="bg-[#002724] w-full h-screen text-white font-gilroy relative">
      <div className="w-full z-10 flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-4xl lg:text-7xl font-bold relative z-30">
            <span className="">
              Level Up <br />
              <span className=" ">
                <Image
                  src="/icons/staticon.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="inline-flex"
                />
              </span>
            </span>
            <span>
              Your <br />
              <Image src="/icons/laundry.svg" alt="" width={64} height={64} />
            </span>
            Laundry Business
          </h1>
        </div>

        <div className="w-1/2">
          <Image src="/icons/iPad Pro.png" alt="" width={670} height={583} />
        </div>
      </div>
      <Image
        src="/icons/curler.svg"
        alt=""
        width={1645}
        height={923}
        className="absolute top-0 right-0 z-0"
      />
    </div>
  );
}
