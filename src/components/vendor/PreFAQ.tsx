import React from "react";
import Button from "../Button";
import Image from "next/image";

export default function PreFAQ() {
  return (
    <div>
      {" "}
      <section className="w-full bg-white min-h-screen lg:h-[70vh] flex items-center justify-around relative p-8 lg:p-24">
        <div
          style={{ boxShadow: `8px 8px 0 black ` }}
          className="bg-getsparklin-purple w-full mx-auto rounded-3xl overflow-hidden flex flex-col lg:flex-row relative gap-x-8 lg:pt-20 p-4 pb-0"
        >
          <div className="w-fit mx-auto flex flex-col items-center justify-center text-left mb-20">
            <div>
              <h3 className="text-2xl lg:text-4xl px-4 mb-2  font-gilroy-medium text-white">
                Ready to transform your <br className="hidden lg:block" />{" "}
                laundry business and <br className="hidden lg:block" />
                become a local hero?
              </h3>
              <p className="text-xs lg:text-base px-4 mb-4 font-gilroy-medium text-white">
                Start your free trial today and experience the difference!
              </p>

              <div className=" flex gap-2 mx-2 justify-center items-center bg-[#2B154D] px-4 py-2 rounded-full w-fit">
                <p className="font-gilroy-medium text-white text-xs">
                  Start your free trial
                </p>
                <Image
                  src="/icons/freetrail.png"
                  alt=""
                  width={32}
                  height={32}
                  className=""
                />
              </div>
            </div>
          </div>

          <div className=" w-fit mx-auto">
            <div className="relative">
              <Image
                src="/icons/subphone.png"
                alt=""
                width={346}
                height={346}
                className="relative top-0 lg:static lg:top-0"
              />
              <Image
                src="/icons/submachine.png"
                alt=""
                width={228}
                height={228}
                className="absolute bottom-0 -left-1/4 size-[188px] lg:size-[218px]"
              />
            </div>
            {/* background logo */}
            <Image
              src="/icons/Vectorpart.svg"
              // src="/icons/Logo Mark sub.png"
              alt="logo"
              width={731}
              height={400}
              className="absolute -bottom-1/4   lg:-top-1/2 lg:right-0 h-[730px] w-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
