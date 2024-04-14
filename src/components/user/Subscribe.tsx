import Image from "next/image";
import React from "react";

export default function Subscribe() {
  return (
    <section className="bg-getsparklin-main-black p-4 py-16 lg:p-16 relative h-[80vh] lg:h-[70vh]">
      <div>
        <h4 className="text-white text-5xl lg:text-6xl my-4 font-gilroy font-medium">
          Stay <span className="text-getsparklin-blue"> sparkling</span> <br />
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
  );
}
