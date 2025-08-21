import Image from "next/image";
import React from "react";

const WhatMakes = () => {
  const cards = [
    {
      src: "/images/icons/whatMakes1.png",
      title: "Auditable Data",
      subTitle: "Every score is backed by verifiable sources."
    },
    {
      src: "/images/icons/whatMakes2.png",
      title: "On-Chain Proof",
      subTitle: "Impact is tokenized into measurable, transferable value."
    },
    {
      src: "/images/icons/whatMakes3.png",
      title: "Interoperability",
      subTitle:
        "Works seamlessly across protocols, geographies, and industries."
    },
    {
      src: "/images/icons/whatMakes4.png",
      title: "Aligned Incentives",
      subTitle: "Rewards are built for those who create lasting change."
    }
  ];
  return (
    <>
      <section className=" text-black px-6 lg:px-36 py-16 lg:py-[100px]">
        <div className="flex flex-col items-center lg:mb-[60px] mb-8">
          <h2 className="text-2xl lg:text-[52px] font-bold lg:mb-[30px] mb-4 font_title text-[#1C1C1E]">
            What Makes Calyx Different
          </h2>
          <p className="text-xl font-normal leading-relaxed text-[#1C1C1E] lg:w-[656px] text-center">
            While most ESG systems rely on opaque scoring and manual
            verification, Calyx transforms the process with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-start flex-col mb-[18px] py-5 px-4 rounded-[10px]"
              style={{ boxShadow: "0px 4px 20px 0px #0000001F" }}
            >
              <Image
                className="h-20 w-20 mb-[18px]"
                src={item.src}
                alt={item.src}
                height={80}
                width={80}
              />
              <h6 className="font_title text-2xl font-normal leading-8 text-[#12291E] mb-2.5">
                {item.title}
              </h6>
              <p className="text-lg font-normal leading-7 text-[#1C1C1E] text-center">
                {item.subTitle}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhatMakes;
