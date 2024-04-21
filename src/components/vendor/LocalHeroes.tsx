import Image from "next/image";
import React from "react";
import { UnionIcon } from "./Icon";

export default function LocalHeroes() {
  return (
    <div className="bg-[#9047FF] w-screen">
      <div className="w-full lg:max-w-7xl mx-auto  h-fit text-black p-6 flex flex-col space-y-6">
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
