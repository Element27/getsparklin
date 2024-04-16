import Image from "next/image";
import React from "react";

export function UserSlider1() {
  return (
    <div className="bg-getsparklin-yellow w-[90%] lg:w-[70%]  h-full relative -top-3/4 lg:-top-1/2 border-4 border-black mx-auto flex items-end justify-end  overflow-hidden rounded-3xl">
      <div className="absolute top-[5%] left-[5%] ">
        <p className="text-xs lg:text-2xl md:text-base font-gilroy-medium">
          Get started with the following steps{" "}
        </p>
        <h3 className="text-3xl md:text-4xl lg:text-[60px] font-gilroy leading-[30px] lg:leading-[50px]">
          Mess monsters got <br /> you down?
        </h3>
      </div>
      <Image
        src={"/icons/bucket.png"}
        alt="img"
        width={1034}
        height={548}
        className=" mb-3 md:mr-3  max-h-[90%] lg:max-h-[80%] "
      />
    </div>
  );
}
export function UserSlider2() {
  return (
    <div className="bg-[#6532B3] w-[90%] lg:w-[70%]  h-full relative -top-3/4 lg:-top-1/2 border-4 border-black mx-auto flex items-end justify-end  overflow-hidden rounded-3xl">
      <div className="absolute top-[5%] left-[5%] text-white">
        <p className="text-xs lg:text-2xl md:text-base font-gilroy-medium">
          Get started with the following steps{" "}
        </p>
        <h3 className="text-3xl md:text-4xl lg:text-[60px] font-gilroy leading-[30px] lg:leading-[50px]">
          Relax and unwind
        </h3>
      </div>
      <Image
        src={"/icons/hitw2.png"}
        alt="img"
        width={586}
        height={328}
        className="h-4/6 "
      />
    </div>
  );
}
export function UserSlider3() {
  return (
    <div className="bg-[#328060] w-[90%] lg:w-[70%]  h-full relative -top-3/4 lg:-top-1/2 border-4 border-black mx-auto flex items-end justify-end  overflow-hidden rounded-3xl">
      <div className="absolute top-[5%] left-[5%] text-white">
        <p className="text-xs lg:text-2xl md:text-base font-gilroy-medium">
          Get started with the following steps{" "}
        </p>
        <h3 className="text-3xl md:text-4xl lg:text-[60px] font-gilroy leading-[30px] lg:leading-[50px]">
          Find your sparkle <br /> squad
        </h3>
      </div>
      <Image
        src={"/icons/hitw3.png"}
        alt="img"
        width={954}
        height={454}
        className="h-4/6"
      />
    </div>
  );
}
export function UserSlider4() {
  return (
    <div className="bg-[#2D7DF5] w-[90%] lg:w-[70%]  h-full relative -top-3/4 lg:-top-1/2 border-4 border-black mx-auto flex items-end justify-end  overflow-hidden rounded-3xl">
      <div className="absolute top-[5%] left-[5%] text-white">
        <p className="text-xs lg:text-2xl md:text-base font-gilroy-medium">
          Get started with the following steps{" "}
        </p>
        <h3 className="text-3xl md:text-4xl lg:text-[60px] font-gilroy leading-[30px] lg:leading-[50px]">
          Book your cleaning <br /> adventure
        </h3>
      </div>

      {/* <div> */}
      <Image
        src={"/icons/hiw4a.png"}
        alt="img"
        width={286}
        height={683}
        className="absolute right-0 lg:right-10 h-3/4 lg:h-full w-fit z-10"
      />
      <Image
        src={"/icons/hiw4b.png"}
        alt="img"
        width={298}
        height={217}
        className="absolute right-20  lg:right-48 h-fit  w-1/3 lg:w-fit z-10 "
      />
      <Image
        src={"/icons/hiw4c.png"}
        alt="img"
        width={803}
        height={27}
        className="absolute w-full lg:w-1/2 h-fit"
      />
      {/* </div> */}
    </div>
  );
}
