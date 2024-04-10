import React, { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeaturesProps {
  imageSrc: string;
  title: ReactNode;
  description: string;
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
        <h2 className="text-2xl md:text-3xl lg:text-4xl py-2 font-bold">
          {title}
        </h2>

        <p className="text-sm md:text-base">{description}</p>
      </div>

      <div className="w-full lg:w-1/2">
        <Image
          src={imageSrc}
          width={420}
          height={180}
          alt="reliable"
          className="w-[80%] mx-auto h-[126px] lg:h-[176px]"
        />
      </div>
    </div>
  );
};

export default FeaturesComponent;
