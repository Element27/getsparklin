import Image from "next/image";
import React from "react";
import Button from "../Button";

export default function PrefooterSection() {
  return (
    <section className="font-Gilroy bg-getsparklin-teal w-screen">
      <section className="w-full lg:max-w-7xl mx-auto min-h-screen lg:h-[70vh] flex items-center justify-center relative">
        <div
          style={{ boxShadow: `8px 8px 0 black ` }}
          className="bg-getsparklin-teal-white w-[80%]  h-2/5 lg:h-3/5 mx-auto rounded-3xl overflow-hidden flex flex-col lg:flex-row relative gap-x-8 lg:pt-20 p-4 pb-0"
        >
          <div className="w-fit mx-auto">
            <p className="text-4xl font-bold px-4 pb-8 font-gilroy">
              Download our app <br className="hidden lg:block" /> today and kiss
              laundry <br className="hidden lg:block" />
              goodbye!👋🏼
            </p>

            <div className=" flex flex-wrap gap-2 mx-2 justify-center">
              <Button
                imgSrc="/icons/playstore.svg"
                bg="#9047FF"
                text="Download On GooglePlay"
              />
              <Button
                imgSrc="/icons/appstore.svg"
                bg="#9047FF"
                text="Download On App Store"
              />
            </div>
          </div>

          <div className=" w-fit mx-auto relative">
            <Image
              src="/icons/phone.png"
              alt=""
              width={468}
              height={480}
              className="relative top-20 lg:static lg:top-0"
            />
            {/* background logo */}
            <Image
              src="/icons/Vectorpart.svg"
              // src="/icons/Logo Mark sub.png"
              alt="logo"
              width={731}
              height={400}
              className="absolute -top-1/2 lg:-top-full right-0 lg:-right-1/3 h-[730px] w-[400px]"
            />
          </div>
        </div>
      </section>
      {/*  */}
    </section>
  );
}
