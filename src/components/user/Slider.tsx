"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Slider({}) {
  const images = [
    {
      imgSrc: "/icons/How it works Card.png",
      imgAlt: "",
    },
    {
      imgSrc: "/icons/How it works Card-2.png",
      imgAlt: "",
    },
    {
      imgSrc: "/icons/How it works Card-3.png",
      imgAlt: "",
    },
    {
      imgSrc: "/icons/bucket.png",
      imgAlt: "",
    },
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

        <div className="flex justify-between items-center my-10 relative  -top-3/4 lg:-top-1/2 w-[90%] lg:w-[70%] mx-auto">
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="border flex items-center justify-center border-black bg-getsparklin-yellow rounded-3xl w-6 h-5 lg:w-12 lg:h-11 text-[8px] md:text-xl lg:text-3xl  font-bold">
              <p>1</p>
            </div>
            <div className="border flex items-center justify-center border-black bg-white rounded-3xl w-6 h-5 lg:w-12 lg:h-11 text-[8px] md:text-xl lg:text-3xl font-bold">
              <p>2</p>
            </div>
            <div className="border flex items-center justify-center border-black bg-white rounded-3xl w-6 h-5 lg:w-12 lg:h-11 text-[8px] md:text-xl lg:text-3xl font-bold">
              <p>3</p>
            </div>
            <div className="border flex items-center justify-center border-black bg-white rounded-3xl w-6 h-5 lg:w-12 lg:h-11 text-[8px] md:text-xl lg:text-3xl font-bold">
              <p>4</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-getsparklin-yellow rounded-full overflow-hidden">
              <Image
                src={"/icons/Right Button.svg"}
                alt="img"
                width={120}
                height={120}
                className="size-16 lg:size-24 rotate-180"
              />
            </div>
            <div className="bg-getsparklin-yellow rounded-full overflow-hidden">
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
