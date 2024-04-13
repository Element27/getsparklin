import React, { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeaturesProps {
  imageSrc: string;
  title: ReactNode;
  description: ReactNode;
  reverse: boolean;
}

const FeaturesComponent = ({
  imageSrc,
  title,
  description,
  reverse,
}: FeaturesProps) => {
  return (
    // <div
    //   className={cn(
    //     "w-10/12 mx-auto my-2 flex flex-col items-center justify-between px-4 gap-4",
    //     reverse === true ? "lg:flex-row-reverse" : "lg:flex-row"
    //   )}
    // >
    <div
      className={`w-10/12 mx-auto mb-8 flex flex-col items-center justify-between px-4 gap-x-8 gap-y-4  ${
        reverse === true ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl py-2 font-gilroy font-medium">
          {title}
        </h2>

        <p className="text-sm md:text-base text-[#475467] font-gilroy-medium ">
          {description}
        </p>
      </div>

      <div className={`w-full lg:w-fit flex ${reverse ? "" : "flex-end"}`}>
        <Image
          src={imageSrc}
          width={320}
          height={180}
          alt="reliable"
          className={` h-[126px] lg:h-[176px] ${
            reverse ? "" : ""
          } lg:w-[360px]`}
        />
      </div>
    </div>
  );
};

export default FeaturesComponent;
