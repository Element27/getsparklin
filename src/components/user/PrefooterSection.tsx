import Image from "next/image";
import React from "react";
import Button from "../Button";

export default function PrefooterSection() {
  return (
    <section className="font-Gilroy">
      <section className="w-full bg-getsparklin-teal min-h-screen lg:h-[70vh] flex items-center justify-center relative">
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
      <section className="bg-getsparklin-main-black p-4 py-16 lg:p-16 relative h-[80vh] lg:h-[70vh]">
        <div>
          <h4 className="text-white text-5xl lg:text-6xl my-4 font-gilroy font-medium">
            Stay <span className="text-getsparklin-blue"> sparkling</span>{" "}
            <br />
            informed!
          </h4>
          <p className="text-white text-base lg:text-2xl font-gilroy-medium">
            Get the latest updates on Getsparklin delivered straight{" "}
            <br className="hidden lg:block" />
            to your inbox. Subscribe now!
          </p>
        </div>

        <div className="flex w-full md:w-1/2 justify-between items-center rounded-full border-2 border-white p-4 my-4">
          <p className="text-white text-sm lg:text-base font-gilroy-regular ">
            Youremail@gmail.com
          </p>
          <Image
            src="/icons/subarr.svg"
            alt=""
            width={50}
            height={50}
            className="size-5 lg:size-8"
          />
        </div>

        <Image
          // src="/icons/logo mark.png"
          src="/icons/sublm.svg"
          alt="logo"
          width={504}
          height={700}
          className="absolute bottom-0 left-1/2 translate-x-[-50%] lg:left-3/4 w-[380px] h-[480px] lg:w-[504] lg:h-[700]"
        />
      </section>
    </section>
  );
}
