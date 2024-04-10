import React from "react";
import FeaturesComponent from "./FeaturesComponent";
import Image from "next/image";

export default function UserFeatures() {
  return (
    <section className="py-8 mb-10">
      <div className="items-center py-[2%]">
        <h5 className="text-xl text-center py-[1%] text-getsparklin-cyan">
          OUR FEATURES
        </h5>
        <h3 className="text-3xl sm:text-6xl text-center font-bold">
          Here is how we make laundry
          <br /> <span className="text-getsparklin-purple">a breeze</span>{" "}
        </h3>
      </div>

      <div className="my-10">
        <FeaturesComponent
          imageSrc="/icons/feature1.svg"
          title={
            <span>
              Your Neighborhood <br className="lg:block hidden" /> Heroes
            </span>
          }
          description="Find local laundry businesses catering to your area, offering convenient pickup and delivery options. Support your community and enjoy personalized service!"
          reverse={false}
        />
        <FeaturesComponent
          imageSrc="/icons/feature2.svg"
          title={
            <span>
              Crystal Clear <br className="lg:block hidden" /> Pricing
            </span>
          }
          description="See upfront costs and compare different cleaning packages to find the perfect fit for your budget. No hidden fees, just transparent pricing you can trust. "
          reverse={true}
        />
        <FeaturesComponent
          imageSrc="/icons/feature3.svg"
          title={
            <span>
              Laundry Live Tracker
              <br className="lg:block hidden" />
            </span>
          }
          description="Never wonder where your clothes are again! Track your laundry in real-time, from pickup to delivery, with live updates on every step of the journey."
          reverse={false}
        />
        <FeaturesComponent
          imageSrc="/icons/feature4.svg"
          title={
            <span>
              Loyalty Love
              <br className="lg:block hidden" />
            </span>
          }
          description="Every wash counts! Earn points with every order and unlock exclusive discounts, special offers, and surprise treats. The more you laundry, the more you smile!"
          reverse={true}
        />
        <FeaturesComponent
          imageSrc="/icons/feature5.svg"
          title={
            <span>
              Secure Clothes with <br className="lg:block hidden" />
              ID {/* <br className="lg:block hidden" />  */}
              Verification
            </span>
          }
          description="Never worry about mix-ups again! Our secure ID verification system
          ensures your clothes are collected and delivered to the rightful owner,
          providing peace of mind."
          reverse={false}
        />

        <div className="flex justify-between items-baseline my-10 w-10/12 mx-auto">
          <div className="flex justify-between items-center gap-4">
            <Image
              src="/icons/Left Circle.svg"
              alt="circle"
              width={20}
              height={20}
              className="size-3 md:size-4 lg:size-5"
            />
            <Image
              src="/icons/Right Circle.svg"
              alt="circle"
              width={20}
              height={20}
              className="size-3 md:size-4 lg:size-5"
            />
          </div>
          <div className="flex justify-between items-center gap-10">
            <Image
              src="/icons/Left Button.svg"
              alt="button"
              width={120}
              className="size-20 md:size-[100px] lg:size-[120px]"
              height={120}
            />
            <Image
              src="/icons/Right Button.svg"
              alt="button"
              width={120}
              height={120}
              className="size-20 md:size-[100px] lg:size-[120px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
