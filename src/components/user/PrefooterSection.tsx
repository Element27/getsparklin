import Image from "next/image";
import React from "react";
import Button from "../Button";

export default function PrefooterSection() {
  return (
    <section className="font-Gilroy">
      <section className="relative h-screen bg-white flex items-end border ">
        <div className="bg-getsparklin-purple h-[40%] lg:h-[60%] w-full border-t-4 border-t-black">
          <div className="bg-getsparklin-yellow w-[90%] lg:w-[70%]  h-full relative -top-3/4 lg:-top-1/2 border-4 border-black mx-auto flex items-end justify-end  overflow-hidden rounded-3xl">
            <div className="absolute top-[5%] left-[5%] ">
              <p className="text-xs lg:text-2xl md:text-base font-gilroy">
                Get started with the following steps{" "}
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-[60px] font-Gilroy font-semibold">
                Mess monsters got <br /> you down?
              </h3>
            </div>
            <Image
              src={"/icons/bucket.png"}
              alt="img"
              width={1034}
              height={548}
              className=" mb-3 md:mr-3  max-h-[90%] lg:max-h-[80%] "
            />
          </div>

          <div className="flex justify-between items-center my-10 relative  -top-3/4 lg:-top-1/2 w-[90%] lg:w-[70%] mx-auto">
            <div className="flex items-center gap-4 lg:gap-8">
              <div className="border flex items-center justify-center border-black bg-getsparklin-yellow rounded-3xl w-6 h-5 lg:w-12 lg:h-11 text-[8px] md:text-xl lg:text-3xl  font-bold">
                <p>1</p>
              </div>
              <div className="border flex items-center justify-center border-black bg-white rounded-3xl w-6 h-5 lg:w-12 lg:h-11 text-[8px] md:text-xl lg:text-3xl font-bold">
                <p>2</p>
              </div>
              <div className="border flex items-center justify-center border-black bg-white rounded-3xl w-6 h-5 lg:w-12 lg:h-11 text-[8px] md:text-xl lg:text-3xl font-bold">
                <p>3</p>
              </div>
              <div className="border flex items-center justify-center border-black bg-white rounded-3xl w-6 h-5 lg:w-12 lg:h-11 text-[8px] md:text-xl lg:text-3xl font-bold">
                <p>4</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-getsparklin-yellow rounded-full overflow-hidden">
                <Image
                  src={"/icons/Right Button.svg"}
                  alt="img"
                  width={120}
                  height={120}
                  className="size-16 lg:size-24 rotate-180"
                />
              </div>
              <div className="bg-getsparklin-yellow rounded-full overflow-hidden">
                <Image
                  src={"/icons/Right Button.svg"}
                  alt="img"
                  width={120}
                  height={120}
                  className="size-16 lg:size-24"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-getsparklin-teal h-screen lg:h-[60vh] flex items-center justify-center relative">
        <div
          style={{ boxShadow: `8px 8px 0 black ` }}
          className="bg-getsparklin-teal-white w-[80%] h-[74%] mx-auto rounded-3xl overflow-hidden flex flex-col lg:flex-row relative"
        >
          <div className="w-fit mx-auto">
            <p className="text-4xl font-bold px-4 py-8 font-gilroy">
              Download our app <br /> today and kiss{" "}
              <br className="hidden lg:block" />
              laundry goodbye!👋🏼
            </p>

            <div className="flex gap-2 mx-2 justify-center">
              <Button
                imgSrc="/icons/playstore.svg"
                bg="#9047FF"
                text="Download On Google Play"
                shadow="black"
              />
              <Button
                imgSrc="/icons/appstore.svg"
                bg="#9047FF"
                text="Download On App Store"
                shadow="black"
              />
            </div>
          </div>

          <div className="mt-12 w-fit mx-auto relative">
            <Image
              src="/icons/Vectorpart.svg"
              // src="/icons/Logo Mark sub.png"
              alt="logo"
              width={731}
              height={400}
              className="absolute -top-1/2 lg:-top-full right-0 lg:-right-1/3 h-[730px] w-[400px]"
            />
            <Image src="/icons/phone.png" alt="" width={468} height={480} />
          </div>
        </div>
      </section>
      <section className="bg-getsparklin-main-black p-16 relative h-[80vh] lg:h-[70vh]">
        <div>
          <h4 className="text-white text-5xl lg:text-6xl my-4 font-gilroy font-medium">
            Stay <span className="text-getsparklin-blue"> sparkling</span>{" "}
            <br />
            informed!
          </h4>
          <p className="text-white text-base lg:text-2xl font-gilroy-medium">
            Get the latest updates on Getsparklin delivered straight <br />
            to your inbox. Subscribe now!
          </p>
        </div>

        <div className="flex w-full md:w-1/2 justify-between items-center rounded-full border-2 border-white p-4 my-4">
          <p className="text-white text-sm lg:text-base">Youremail@gmail.com</p>
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
