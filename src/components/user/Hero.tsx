import Image from "next/image";
import React from "react";
import Button from "../Button";

export default function UserHero() {
  return (
    <div>
      {/* hero section */}
      <div className="w-full lg:w-[70%] mx-auto my-10 lg:my-14 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center  leading-[48px] lg:leading-[72px] font-gilroy text-black">
          Say{" "}
          <span className="relative text-getsparklin-purple">
            bye
            <span className="absolute top-[-28px] right-[-10px] size-[32px] lg:top-[-36px]">
              <Image
                src="/icons/bye.png"
                alt="bye"
                width={32}
                height={35}
                className="inline-flex "
              />
            </span>
          </span>{" "}
          to laundry troubles. <br className="lg:block hidden" />
          <span className="relative text-getsparklin-cyan">
            Sparkling
            <span className="absolute top-[-20px] left-[-20px] size-[32px] lg:size-[48px] lg:top-[-36px] lg:left-[-28px]">
              <Image
                src="/icons/sparkling.png"
                alt="spark"
                width={62}
                height={62}
                className="inline-flex"
              />
            </span>
          </span>{" "}
          clothes delivered with a{" "}
          <span className="relative text-getsparklin-yellow">
            smile<span className="absolute rotate-12">!</span>
            {/* <span className=" absolute right-0 size-[24px]">
            <Image
              src="/icons/exclamationmark.png"
              alt="logo"
              width={7}
              height={31}
              className="inline-flex"
            />
          </span> */}
            <span className=" absolute right-[-36px] size-[24px] lg:size-[44px] lg:right-[-60px]">
              <Image
                src="/icons/Smiling Man.svg"
                alt="logo"
                width={48}
                height={60}
                className="inline-flex"
              />
            </span>
          </span>
        </h1>

        <p className="text-sm  mx-4 my-12 text-center font-gilroy">
          Imagine this: crisp, clean clothes delivered straight to your door,
          leaving you free to pursue the things you love. No more weekend
          laundry marathons, no more overflowing hampers, just freshness on
          demand with our revolutionary laundry app!
        </p>
        <div className="flex gap-2 mx-2 justify-center">
          <Button
            imgSrc="/icons/playstore.svg"
            bg="#9047FF"
            text="Download On Google Play"
            shadow="black"
          />
          <Button
            imgSrc="/icons/appstore.svg"
            bg="#9047FF"
            text="Download On App Store"
            shadow="black"
          />
        </div>
      </div>

      <div className="h-[40vh] md:h-[50vh] lg:h-[70vh] relative w-full mt-8">
        <Image
          src="/icons/Wave.png"
          alt="hero"
          width={1544}
          height={784}
          className="absolute w-full bottom-0"
        />
        <Image
          src="/icons/phone.png"
          alt="hero"
          width={504}
          height={511}
          className="mx-auto z-10 absolute bottom-0 left-[50%] translate-x-[-50%] w-[80%] max-w-[240px] md:max-w-[342px] md:w-[50%] lg:w-[45%] lg:max-w-[482px]"
        />
      </div>
    </div>
  );
}
