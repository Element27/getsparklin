/* eslint-disable react/no-unescaped-entities */
import React from "react";
import FeaturesComponent from "../user/FeaturesComponent";

export default function VendorFeatures() {
  return (
    <section className="py-8 mb-10 font-gilroy-medium">
      <div className="items-center py-[2%]">
        <h5 className="text-xl text-center py-[1%] text-[#00C3B3] ">
          OUR FEATURES
        </h5>
        <h3 className="text-3xl lg:text-6xl text-center font-Gilroy">
          {/* Here is how we make laundry <br className="lg:block hidden" /> a
          <span className="text-getsparklin-purple"> breeze</span>{" "} */}
          Here's how we <span className="text-getsparklin-purple">empower</span>{" "}
          your <br className="lg:block hidden" /> laundry business to soar
        </h3>
      </div>

      <div className="bg-[#E5F9F7] mx-w-[594px]  w-fit mx-auto flex items-center justify-center rounded-full p-2 gap-x-2 my-8">
        <div className="bg-[#00C3B3] p-4 rounded-full text-center border-2 border-black">
          <p>Active Features</p>
        </div>
        <div className=" p-4 rounded-full flex flex-center">
          <p>Features Coming Soon</p>
        </div>
      </div>

      <div>
        <FeaturesComponent
          imageSrc="/icons/image.png"
          title={<span>Hyper-Local Hero</span>}
          description={
            <span>
              Target specific neighborhoods and communities with customized
              pricing <br className="lg:block hidden" /> and promotions,
              attracting customers right where they are. Become the local{" "}
              <br className="lg:block hidden" /> laundry legend!
            </span>
          }
          reverse={false}
        />
        <FeaturesComponent
          imageSrc="/icons/image-1.png"
          title={
            <span>
              {" "}
              Pay-Per-Wash <br className="lg:block hidden" /> Flexibility
            </span>
          }
          description={
            <span>
              Ditch fixed fees and enjoy a flexible subscription model based on
              actual usage.
              <br className="lg:block hidden" /> Perfect for growing businesses,
              it scales with your success.
            </span>
          }
          reverse={true}
        />
        <FeaturesComponent
          imageSrc="/icons/image-2.png"
          title={
            <span>
              Inventory on <br className="lg:block hidden" /> Autopilot
            </span>
          }
          description={
            <span>
              Track supplies, automate reorders, and maintain optimal inventory
              levels with <br className="lg:block hidden" />
              our inventory & stock management tools. Never run out of detergent
              again!
            </span>
          }
          reverse={false}
        />
        <FeaturesComponent
          imageSrc="/icons/image-3.png"
          title={<span>Loyalty Loop</span>}
          description={
            <span>
              Build lasting relationships with customers through integrated
              loyalty programs.
              <br className="lg:block hidden" /> Reward their love for clean
              clothes and keep them coming back for more.
            </span>
          }
          reverse={true}
        />

        <FeaturesComponent
          imageSrc="/icons/image-4.png"
          title={
            <span>
              Data-Driven <br className="lg:block hidden" />
              Decisions
            </span>
          }
          description={
            <span>
              Gain valuable insights into order volume, customer demographics,
              and <br className="lg:block hidden" />
              operational efficiency. Make informed choices and boost your
              bottom line.
            </span>
          }
          reverse={false}
        />
      </div>
    </section>
  );
}
