import React from "react";
import { FAQIcon } from "./Icon";
import FAQComponent from "./FAQComponent";

export default function FAQ() {
  return (
    <section className="w-10/12 mx-auto py-8">
      <div>
        <h2 className=" font-gilroy-medium text-4xl   lg:text-7xl">
          <span className="text-[#F8BB1C]">Explore</span> some of our
          <br className="hidden lg:block" />
          Frequently Asked <br className="hidden lg:block" /> Questions{" "}
          <FAQIcon className="inline-flex" />
        </h2>
        <p className="text-base lg:text-2xl font-gilroy-medium">
          Can't find the answer you are looking for? Please reach out to{" "}
          <br className="hidden lg:block" />
          support@getsparklin.com
        </p>
      </div>

      <div className="mt-10 pb-6">
        <FAQComponent
          ques="What does GetSparklin does?"
          ans=" GetSparklin is a SAAS platform that aims to solve the hassles faced
          with laundries putting a sparkling smile on every users face"
        />
        <FAQComponent
          ques="What does GetSparklin does?"
          ans=" GetSparklin is a SAAS platform that aims to solve the hassles faced
          with laundries putting a sparkling smile on every users face"
        />
        <FAQComponent
          ques="What does GetSparklin does?"
          ans=" GetSparklin is a SAAS platform that aims to solve the hassles faced
          with laundries putting a sparkling smile on every users face"
        />
        <FAQComponent
          ques="What does GetSparklin does?"
          ans=" GetSparklin is a SAAS platform that aims to solve the hassles faced
          with laundries putting a sparkling smile on every users face"
        />
        <FAQComponent
          ques="What does GetSparklin does?"
          ans=" GetSparklin is a SAAS platform that aims to solve the hassles faced
          with laundries putting a sparkling smile on every users face"
        />
      </div>
    </section>
  );
}
