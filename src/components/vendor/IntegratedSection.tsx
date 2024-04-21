import Image from "next/image";
import React from "react";

export default function IntegratedSection() {
  return (
    <section className="bg-[#F9F6FF] w-screen">
      <div className="px-4 lg:px-8 py-6 lg:py-10 w-full lg:max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-gilroy-medium text-center my-8">
          Integrated with
        </h3>

        <div className="flex gap-8 flex-wrap items-center justify-around w-[90%] lg:w-[80%] mx-auto">
          <Image
            className="my-6 h-5 lg:h-10 w-[113px]   lg:w-[226px]"
            src={"/icons/paystack.png"}
            alt=""
            width={226}
            height={44}
          />
          <Image
            className="my-6 h-5 lg:h-10 w-[64px] lg:w-[125px]"
            src={"/icons/epson_logo.png"}
            alt=""
            width={125}
            height={40}
          />
          <Image
            className="my-6 h-5 lg:h-10 w-[126px] lg:w-[255px]"
            src={"/icons/flutter.png"}
            alt=""
            width={255}
            height={40}
          />
          <Image
            className="my-6 h-5 lg:h-10 w-[58px] lg:w-[113px]"
            src={"/icons/klummp.png"}
            alt=""
            width={113}
            height={40}
          />
          <Image
            className="my-6 h-5 lg:h-10 size-10 lg:size-20"
            src={"/icons/terminal_x_icon.png"}
            alt=""
            width={80}
            height={80}
          />
          <Image
            className="my-6 h-5 lg:h-10 w-[94px] lg:w-[186px]"
            src={"/icons/sneaklin_logo.png"}
            alt=""
            width={186}
            height={44}
          />
          <Image
            className="my-6 h-5 lg:h-10 w-[128px] lg:w-[257px]"
            src={"/icons/WPL.png"}
            alt=""
            width={257}
            height={44}
          />
          <Image
            className="my-6 h-5 lg:h-10 w-11 lg:w-20"
            src={"/icons/Google_Maps_Logo_2020 1intg.png"}
            alt=""
            width={88}
            height={80}
          />
        </div>
      </div>
    </section>
  );
}
