import Image from "next/image";
import React from "react";

export default function Advantage() {
  return (
    <section className="w-screen">
      <div className="py-10 w-full lg:max-w-7xl mx-auto">
        <div className="w-10/12 mx-auto mb-6">
          <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold my-2 font-gilroy">
            Our <span className="text-getsparklin-blue">advantages</span>{" "}
            <br className="lg:hidden block" />
            over <br className="lg:block hidden" />
            competitors
          </h4>

          <p className="text-getsparklin-gray lg:text-xl font-medium font-gilroy-medium">
            Making it easier for you. See how our features simplify your
            experience.
          </p>
        </div>
        <div>
          {/* table headers */}
          <div className="w-4/5 mx-auto ">
            <div className="flex items-center justify-between">
              <div className="w-1/4 h-11 lg:h-20"> </div>
              <div className="w-1/4 h-11 lg:h-20 border border-black bg-getsparklin-yellow rounded-tl-3xl flex items-center justify-center">
                <p className="text-[8px] lg:text-lg text-white font-gilroy">
                  Other <br className="block lg:hidden" />
                  Company
                </p>
              </div>
              <div className="w-1/4 h-11 lg:h-20 border border-black bg-getsparklin-yellow flex items-center justify-center">
                <p className="text-[8px] lg:text-lg text-white font-gilroy">
                  Other <br className="block lg:hidden" />
                  Company
                </p>
              </div>
              <div className="w-1/4 h-11 lg:h-20 border border-black bg-getsparklin-purple rounded-tr-3xl">
                <div className="flex items-center justify-center w-full h-full">
                  {" "}
                  <Image
                    src="/logo-white.svg"
                    alt="logo"
                    width={23}
                    height={32}
                  />
                  <p className="font-gilroy text-white hidden lg:block text-lg">
                    GetSparklin
                  </p>
                </div>
              </div>
            </div>
            {/* table row 1 */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-t-black border-b-gray-300 flex items-center justify-center rounded-tl-3xl p-1 lg:p-3">
                <p className="text-[8px] lg:text-lg text-black font-gilroy">
                  Unlock exclusive discounts, special offers, and surprise
                  treats.
                </p>
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-t-black border-b-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 39.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-t-black border-b-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 39.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-t-black border-b-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 37.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
            </div>
            {/* table row 2 */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-y-gray-300 flex items-center lg:justify-start justify-center p-1 lg:p-3">
                <p className="text-[8px] lg:text-lg text-black font-gilroy">
                  Secure Clothes with ID Verification
                </p>
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-y-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 39.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-y-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 39.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-y-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 37.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
            </div>
            {/* table row 3 */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-y-gray-300 flex items-center lg:justify-start justify-center p-1 lg:p-3">
                <p className="text-[8px] lg:text-lg text-black font-gilroy">
                  24/7 Customer Support
                </p>
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-y-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 39.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-y-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 37.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-y-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 37.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
            </div>
            {/* table row 4 */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-y-gray-300 flex items-center lg:justify-start justify-center p-1 lg:p-3">
                <p className="text-[8px] lg:text-lg text-black font-gilroy">
                  Seamless WhatsApp Integration
                </p>
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-y-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 39.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-y-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 37.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-y-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 37.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
            </div>
            {/* table row 5 */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-b-black border-t-gray-300 flex items-center lg:justify-start justify-center p-1 lg:p-3 rounded-bl-3xl">
                <p className="text-[8px] lg:text-lg text-black font-gilroy">
                  Secure & Easy Payments
                </p>
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-b-black border-t-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 39.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-b-black border-t-gray-300 flex items-center justify-center">
                <Image
                  src="/icons/Frame 39.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
              <div className="w-1/4 h-20 lg:h-24 border border-x-black border-b-black border-t-gray-300 flex items-center justify-center rounded-br-3xl">
                <Image
                  src="/icons/Frame 37.png"
                  alt=""
                  width={57}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
