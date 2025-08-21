// app/mission-vision/page.tsx (App Router)
// or pages/mission-vision.tsx (Pages Router)

import Image from "next/image";
import React from "react";

const MissionVision = () => {
  return (
    <section className="bg-white text-black px-6 lg:px-36 py-[100px]">
      <div className="mx-auto space-y-16">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 md:gap-6 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-2xl lg:text-[52px] font-bold lg:mb-10 mb-4 font_title text-[#1C1C1E]">
              Our Mission
            </h2>
            <p className="text-xl font-normal leading-relaxed text-[#1C1C1E]">
              At Calyx Protocol, our mission is to verify sustainability at the
              protocol level — transforming ESG data into auditable, tokenized,
              and interoperable value. We empower verifiers, institutions, and
              builders to align incentives and drive long-term impact that
              lasts.
            </p>
          </div>

          {/* Right: Image */}
          {/* <div className="relative w-full h-64 lg:h-[330px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/mission.jpg" // replace with your image
              alt="Solar Panels"
              height={330}
              width={573}
              className="object-cover w-full"
            />
          </div> */}
          <div className="relative w-full flex justify-end">
            <Image
              src="/images/mission.jpg" // replace with your image
              alt="Wind Farm"
              height={330}
              width={573}
              className="object-cover w-[573px] h-64 lg:h-[330px] rounded-xl overflow-hidden shadow-md"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative w-full flex justify-start">
            <Image
              src="/images/vision.jpg" // replace with your image
              alt="Wind Farm"
              height={330}
              width={573}
              className="object-cover w-[573px] h-64 lg:h-[330px] rounded-xl overflow-hidden shadow-md"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-2xl lg:text-[52px] font-bold lg:mb-10 mb-4 font_title text-[#1C1C1E]">
              Vision
            </h2>
            <p className="text-xl font-normal leading-relaxed text-[#1C1C1E]">
              We envision a future where sustainability claims are never taken
              at face value — because every claim is backed by transparent,
              verifiable data. Our goal is to become the global standard for
              trust in ESG reporting, making greenwashing a thing of the past.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
