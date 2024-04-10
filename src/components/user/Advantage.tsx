import Image from "next/image";
import React from "react";

export default function Advantage() {
  return (
    <div className="">
      <div className="w-10/12 mx-auto">
        <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold my-2">
          Our <span className="text-getsparklin-blue">advantages</span>{" "}
          <br className="lg:hidden block" />
          over <br className="lg:block hidden" />
          competitors
        </h4>

        <p className="text-getsparklin-gray lg:text-xl font-medium">
          Making it easier for you. See how our features simplify your
          experience.
        </p>
      </div>

      <table className="w-10/12 mx-auto">
        <thead>
          <tr>
            <th className="text-[8px] md:text-lg lg:text-2xl font-bold max-w-[73px] max-h-[73px] px-2 "></th>
            <th className="text-[8px] md:text-lg lg:text-2xl font-bold max-w-[73px] max-h-[73px] px-2  bg-getsparklin-yellow rounded-tl-[36px] border-2 border-black">
              Other <br className="block lg:hidden" /> Companies
            </th>
            <th className="text-[8px] md:text-lg lg:text-2xl font-bold max-w-[73px] max-h-[73px] px-2  bg-getsparklin-yellow border-2 border-black">
              Other <br className="block lg:hidden" /> Companies
            </th>
            <th className="text-[8px] md:text-lg lg:text-2xl font-bold max-w-[73px] max-h-[73px] px-2  bg-getsparklin-purple rounded-tl-[36px] border-2 border-black">
              <Image src="/sparklin.png" alt="logo" width={62} height={62} />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-xs font-medium text-getsparklin-grey-800 max-w-[142px]">
              Unlock exclusive discounts, special offers, and surprise treats.
            </td>
            <td>
              <span className="bg-getsparklin-green-fade px-6 py-2">
                <Image
                  className="w-14 h-6 lg:w-28 lg:h-12"
                  src="/icons/close-bar.svg"
                  alt="logo"
                  width={120}
                  height={50}
                />
              </span>
            </td>
            <td>
              <span>
                <Image
                  className="w-14 h-6 lg:w-28 lg:h-12"
                  src="/icons/close-bar.svg"
                  alt="logo"
                  width={120}
                  height={50}
                />
              </span>
            </td>
            <td>
              <span>
                <Image
                  className="w-14 h-6 lg:w-28 lg:h-12"
                  src="/icons/check-bar.svg"
                  alt="logo"
                  width={120}
                  height={50}
                />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

//
// Secure Clothes with ID Verification
// 24/7 Customer Support
// Seamless WhatsApp Integration
// Secure & Easy Payments
