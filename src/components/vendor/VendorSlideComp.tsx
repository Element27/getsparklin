import Image from "next/image";
import React from "react";

export function VendorSlide1() {
  return (
    <div className="bg-getsparklin-yellow w-[90%] lg:w-[80%]  h-40 lg:h-96 relative border-4 border-black mx-auto flex items-end justify-end  overflow-hidden rounded-3xl">
      <div className="absolute top-[5%] left-[5%] ">
        <p className="text-xs lg:text-2xl md:text-base font-gilroy-medium">
          Get started with the following steps{" "}
        </p>
        <h3 className="text-3xl md:text-4xl lg:text-[60px] font-gilroy leading-[30px] lg:leading-[50px]">
          Laundry Pile Panic
        </h3>
      </div>
      <Image
        src={"/icons/lsld.png"}
        alt="img"
        width={971}
        height={600}
        className=" md:mr-3  max-h-[90%] lg:max-h-[80%] "
      />
    </div>
  );
}
export function VendorSlide2() {
  return (
    <div className="bg-getsparklin-yellow w-[90%] lg:w-[80%]  h-40 lg:h-96 relative border-4 border-black mx-auto flex items-end justify-end  overflow-hidden rounded-3xl">
      <div className="absolute top-[5%] left-[5%] ">
        <p className="text-xs lg:text-2xl md:text-base font-gilroy-medium">
          Get started with the following steps{" "}
        </p>
        <h3 className="text-1xl md:text-3xl lg:text-[52px] font-gilroy leading-[30px] lg:leading-[50px]">
          Send fresh laundry back with a <br /> winning smile!
        </h3>
      </div>
      <Image
        src={"/icons/vds2.png"}
        alt="img"
        width={1431}
        height={565}
        className="h-4/5"
      />
    </div>
  );
}
export function VendorSlide3() {
  return (
    <div className="bg-[#2D7DF5] w-[90%] lg:w-[80%]  h-40 lg:h-96 relative border-4 border-black mx-auto flex items-end justify-end  overflow-hidden rounded-3xl">
      <div className="absolute top-[5%] left-[5%] text-white">
        <p className="text-xs lg:text-2xl md:text-base font-gilroy-medium">
          Get started with the following steps{" "}
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-[52px] font-gilroy leading-[30px] lg:leading-[50px]">
          Build your laundry <br /> legion!
        </h3>
      </div>
      <Image
        src={"/icons/vds3.png"}
        alt="img"
        width={582}
        height={700}
        className="h-4/5"
      />
    </div>
  );
}
export function VendorSlide4() {
  return (
    <div className="bg-[#6532B3] w-[90%] lg:w-[80%]  h-40 lg:h-96 relative border-4 border-black mx-auto flex items-end justify-end  overflow-hidden rounded-3xl">
      <div className="absolute top-[5%] left-[5%] text-white">
        <p className="text-xs lg:text-2xl md:text-base font-gilroy-medium">
          Get started with the following steps{" "}
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-[52px] font-gilroy leading-[30px] lg:leading-[50px]">
          Laundry on autopilot
        </h3>
      </div>
      <Image
        src={"/icons/vds1.png"}
        alt="img"
        width={1052}
        height={500}
        className="h-4/5 w-4/5 mx-auto"
      />
    </div>
  );
}
export function VendorSlide5() {
  return (
    <div className="bg-[#165D3B] w-[90%] lg:w-[80%]  h-40 lg:h-96 relative border-4 border-black mx-auto flex items-end justify-end  overflow-hidden rounded-3xl">
      <div className="absolute top-[5%] left-[5%] text-white">
        <p className="text-xs lg:text-2xl md:text-base font-gilroy-medium">
          Get started with the following steps{" "}
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-[52px] font-gilroy leading-[30px] lg:leading-[50px]">
          Become a Laundry <br />
          Legend!
        </h3>
      </div>
      <Image
        src={"/icons/vds4a.png"}
        alt="img"
        width={511}
        height={500}
        className="relative top-[20%] left-[25%] lg:left-0"
      />
      <Image
        src={"/icons/vds4b.png"}
        alt="img"
        width={598}
        height={400}
        className="h-4/5 relative lg:right-[15%] right-0"
      />
    </div>
  );
}
