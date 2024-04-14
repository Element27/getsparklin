"use client";
import React, { useState } from "react";
import { DashIcon, PlusIcon } from "./Icon";

export default function FAQComponent({
  ques,
  ans,
}: {
  ques: string;
  ans: string;
}) {
  const [showAns, setShowAns] = useState(false);

  return (
    <div
      className="h-fit w-full rounded-2xl bg-[#F8BB1C] flex flex-col justify-between px-6 lg:px-10 py-4 my-4"
      onClick={() => setShowAns(!showAns)}
    >
      <div className="w-full flex items-center justify-between">
        <h4 className="text-base lg:text-xl font-gilroy-medium">{ques}</h4>
        <div>{showAns ? <DashIcon /> : <PlusIcon />}</div>
      </div>
      {showAns && (
        <p className="duration-500 w-full font-gilroy-medium text-xs lg:text-base mt-4 text-white">
          {ans}
        </p>
      )}
    </div>
  );
}
