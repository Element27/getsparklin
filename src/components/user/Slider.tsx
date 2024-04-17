"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  UserSlider1,
  UserSlider2,
  UserSlider3,
  UserSlider4,
} from "./SliderComp";

export default function Slider({}) {
  const images = [
    <UserSlider1 key="userSlider1" />,
    <UserSlider2 key="userSlider2" />,
    <UserSlider3 key="userSlider3" />,
    <UserSlider4 key="userSlider4" />,
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
    <section className="relative h-screen bg-white flex items-end border ">
      <div className="bg-getsparklin-purple h-[40%] lg:h-[60%] w-full border-t-4 border-t-black">
        {images[currentSlide]}

        <div className="flex justify-between items-center my-10 relative  -top-3/4 lg:-top-1/2 w-[90%] lg:w-[70%] mx-auto">
          <div className="flex items-center gap-4 lg:gap-8">
            {images.map((_, index) => {
              return (
                <div
                  key={index}
                  className={`fade-in-0 duration-200 border flex items-center justify-center border-black  rounded-3xl w-6 h-5 lg:w-12 lg:h-11 text-[8px] md:text-xl lg:text-3xl  font-bold ${
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
    </section>
  );
}
