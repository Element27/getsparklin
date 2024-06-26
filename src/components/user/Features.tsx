import React from "react";
import FeaturesComponent from "./FeaturesComponent";
import Image from "next/image";

export default function UserFeatures() {
  return (
    <section className="w-screen bg-white p-4">
      <section className="py-8 mb-10 font-gilroy-medium w-full lg:max-w-7xl mx-auto my-10 lg:my-14 bg-white">
        <div className="items-center py-[2%]">
          <h5 className="text-xl font-gilroy-medium text-center py-[1%] text-[#00C3B3] ">
            OUR FEATURES
          </h5>
          <h3 className="text-3xl lg:text-6xl text-center font-gilroy">
            Here is how we make laundry <br className="lg:block hidden" /> a
            <span className="text-getsparklin-purple"> breeze</span>{" "}
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
            description={
              <span>
                Find local laundry businesses catering to your area, offering
                convenient pickup <br className="lg:block hidden" /> and
                delivery options. Support your community and enjoy personalized
                service!
              </span>
            }
            reverse={false}
          />
          <FeaturesComponent
            imageSrc="/icons/feature2.svg"
            title={
              <span>
                Crystal Clear <br className="lg:block hidden" /> Pricing
              </span>
            }
            description={
              <span>
                See upfront costs and compare different cleaning packages to
                find the perfect fit <br className="lg:block hidden" />
                for your budget. No hidden fees, just transparent pricing you
                can trust.{" "}
              </span>
            }
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
            description={
              <span>
                Never wonder where your clothes are again! Track your laundry in
                real-time, <br className="lg:block hidden" /> from pickup to
                delivery, with live updates on every step of the journey.
              </span>
            }
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
            description={
              <span>
                Every wash counts! Earn points with every order and unlock
                exclusive discounts, <br className="lg:block hidden" /> special
                offers, and surprise treats. The more you laundry, the more you
                smile!
              </span>
            }
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
            description={
              <span>
                Never worry about mix-ups again! Our secure ID verification
                system ensures <br className="lg:block hidden" />
                your clothes are collected and delivered to the rightful owner
                providing peace of mind.
              </span>
            }
            reverse={false}
          />
        </div>
      </section>
    </section>
  );
}
