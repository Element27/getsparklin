"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

interface ButtonProps {
  imgSrc?: string;
  bg: string;
  text: string;
}

export default function Button({ bg, text, imgSrc }: ButtonProps) {
  const path = usePathname();

  return (
    // <button className="px-10 py-3 border-black border-2 rounded-full bg-blue-200 button-shadow">
    <button
      className={`px-5 py-2 font-gilroy text-xs md:text-start border-2   border-black rounded-full flex flex-row items-center gap-2 text-white `}
      style={{
        backgroundColor: bg,
        boxShadow: "4px 4px 0 black",
      }}
    >
      {imgSrc && (
        <Image src={imgSrc} alt="button icon" width={24} height={24} />
      )}
      {text}
    </button>
  );
}
