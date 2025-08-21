"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#0B2B22] text-white flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-36 py-12 lg:py-20">
      {/* Left Content */}
      <div className="max-w-[673px] text-center lg:text-left mt-8 lg:mt-0">
        <h1 className="font-libre text-4xl md:text-[70px] font-bold leading-tight font_title sm:mb-9">
          We verify sustainability at <br /> the protocol level.
        </h1>
        <p className="font-sans text-gray-300 mt-4 text-sm sm:text-[22px] ">
          Auditable ESG data | Composable scores | Aligned incentives.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-[#E59B73] px-6 py-3 rounded-md hover:bg-[#d18761] text-sm sm:text-xl font-[600]">
            View Docs →
          </button>
          <button className="bg-[#174d3d] px-6 py-3 rounded-md hover:bg-[#1d5f4a] text-sm sm:text-xl font-[600]">
            Join the Waitlist
          </button>
        </div>
      </div>

      {/* Right Graphic */}
      <div className="flex justify-center lg:justify-end relative hero_section">
        <Image
          src="/images/hero_img.png"
          alt="protocol graphic"
          width={574}
          height={544}
          className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[571px]"
        />
        {/* <Image
          src="/images/hero2.png"
          alt="protocol graphic"
          width={178}
          height={133}
          className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[178px] absolute top-[calc(50%-66px)] left-[calc(50%-88px)] round_animate"
        />
        <Image
          src="/images/hero3.png"
          alt="protocol graphic"
          width={374}
          height={259}
          className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[374px] absolute -bottom-20 -right-24 round_animate"
        /> */}
      </div>
    </section>
  );
};

export default Hero;
