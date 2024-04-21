"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  VendorSlide1,
  VendorSlide2,
  VendorSlide3,
  VendorSlide4,
  VendorSlide5,
} from "./VendorSlideComp";

export default function VendorSlider() {
  const images = [
    <VendorSlide1 key="VendorSlide1" />,
    <VendorSlide2 key="VendorSlide2" />,
    <VendorSlide3 key="VendorSlide3" />,
    <VendorSlide4 key="VendorSlide4" />,
    <VendorSlide5 key="VendorSlide5" />,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup function for interval
  }, [images.length]);

  const handlePrevClick = () => {
    const newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const handleNextClick = () => {
    const newSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(newSlide);
  };

  return (
    // <section className="relative h-screen bg-white flex items-end border ">
    //   <div className="bg-getsparklin-purple h-[40%] lg:h-[60%] w-full border-t-4 border-t-black">
    //     {/*  */}
    //     {images[currentSlide]}
    //     <div className="flex justify-between items-center my-10 relative  -top-3/4 lg:-top-1/2 w-[90%] lg:w-[70%] mx-auto">
    //       <div className="flex items-center gap-4 lg:gap-8">
    //         {images.map((_, index) => {
    //           return (
    //             <div
    //               key={index}
    //               className={`fade-in-0 duration-200 border flex items-center justify-center border-black  rounded-3xl w-6 h-5 lg:w-12 lg:h-11 text-[8px] md:text-xl lg:text-3xl  font-bold ${
    //                 currentSlide === index
    //                   ? "bg-getsparklin-yellow"
    //                   : "bg-white"
    //               }`}
    //             >
    //               {index + 1}
    //             </div>
    //           );
    //         })}
    //       </div>
    //       <div className="flex items-center gap-4">
    //         <div className="bg-getsparklin-yellow rounded-full overflow-hidden">
    //           <Image
    //             src={"/icons/Right Button.svg"}
    //             alt="img"
    //             width={120}
    //             height={120}
    //             className="size-16 lg:size-24 rotate-180"
    //           />
    //         </div>
    //         <div className="bg-getsparklin-yellow rounded-full overflow-hidden">
    //           <Image
    //             src={"/icons/Right Button.svg"}
    //             alt="img"
    //             width={120}
    //             height={120}
    //             className="size-16 lg:size-24"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className=" mx-auto w-screen relative h-[50vh] lg:h-screen ">
      <div className="absolute bottom-0 left-0  bg-getsparklin-purple h-[60%] lg:h-[60%] w-full border-t-4 border-t-black"></div>
      <div className="w-full lg:max-w-7xl mx-auto h-full flex flex-col items-center justify-center relative z-10">
        <div className="w-full flex flex-col items-center justify-center gap-y-6 lg:gap-y-10">
          {images[currentSlide]}

          <div className="flex justify-between items-center w-[90%] lg:w-[80%] mx-auto ">
            <div className="flex items-center gap-4 lg:gap-8">
              {images.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`fade-in-0 font-gilroy-medium duration-200 border flex items-center justify-center border-black  rounded-3xl w-6 h-5 lg:w-12 lg:h-11 text-[8px] md:text-xl lg:text-3xl  font-bold ${
                      currentSlide === index
                        ? "bg-getsparklin-yellow"
                        : "bg-white"
                    }`}
                  >
                    {index + 1}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4">
              <div
                className="bg-getsparklin-yellow rounded-full overflow-hidden"
                onClick={handlePrevClick}
              >
                <Image
                  src={"/icons/Right Button.svg"}
                  alt="img"
                  width={120}
                  height={120}
                  className="size-16 lg:size-24 rotate-180"
                />
              </div>
              <div
                className="bg-getsparklin-yellow rounded-full overflow-hidden"
                onClick={handleNextClick}
              >
                <Image
                  src={"/icons/Right Button.svg"}
                  alt="img"
                  width={120}
                  height={120}
                  className="size-16 lg:size-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
