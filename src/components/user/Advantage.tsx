import Image from "next/image";
import React from "react";

export default function Advantage() {
  return (
    <div className="py-10">
      <div className="w-10/12 mx-auto mb-6">
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
      <div>
        <Image
          src={"/icons/advsm.png"}
          alt=""
          width={361}
          height={653}
          className="mx-auto lg:hidden"
        />
        <Image
          src={"/icons/advlg.png"}
          alt=""
          width={1200}
          height={794}
          className="mx-auto hidden lg:block"
        />
      </div>
    </div>
  );
}

//
// Secure Clothes with ID Verification
// 24/7 Customer Support
// Seamless WhatsApp Integration
// Secure & Easy Payments

function AdvantageComp() {
  return <div></div>;
}
