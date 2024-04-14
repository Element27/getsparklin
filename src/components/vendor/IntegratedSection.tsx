import Image from "next/image";
import React from "react";

export default function IntegratedSection() {
  return (
    <section>
      <div>
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-gilroy-medium text-center my-8">
          Integrated with
        </h3>

        <div>
          <Image src={"/icons/paystack.png"} alt="" width={226} height={44} />
          <Image
            src={"/icons/epson_logo.pngintg.png"}
            alt=""
            width={226}
            height={40}
          />
          <Image src={"/icons/flutter.png"} alt="" width={125} height={40} />
          <Image src={"/icons/klummp.png"} alt="" width={113} height={40} />
          <Image
            src={"/icons/terminal_x_icon.png"}
            alt=""
            width={40}
            height={40}
          />
          <Image
            src={"/icons/sneaklin_logo.png"}
            alt=""
            width={186}
            height={44}
          />
          <Image
            src={"/icons/Google_Maps_Logo_2020 1intg.png"}
            alt=""
            width={88}
            height={80}
          />
        </div>
      </div>
    </section>
  );
}
