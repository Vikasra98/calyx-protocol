// app/founding-story/page.tsx (App Router)
// or pages/founding-story.tsx (Pages Router)

import Image from "next/image";
import React from "react";

const FoundingStory = () => {
  return (
    <section className="bg-gradient-to-r from-[#184D3D] to-[#0B2B22] text-white px-6 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left side - Images */}
        <div className="flex items-center space-y-6">
          {/* First Image */}
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg -mt-[72px]">
            <Image
              src="/images/story1.jpg" // replace with your actual image
              alt="Founder"
              width={275}
              height={610}
              className="object-cover w-[275px] h-[610px]"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/story2.jpg" // replace with your actual image
              alt="Sustainability Principles"
              width={275}
              height={610}
              className="object-cover w-[275px] h-[610px]"
            />
          </div>
        </div>

        {/* Right side - Text */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Founding Story &amp; Principles
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-100">
            Calyx was founded by a team of sustainability advocates, blockchain
            engineers, and data scientists who saw a recurring problem: ESG
            scores were often inconsistent, unverifiable, and disconnected from
            real impact. We set out to build a protocol where trust is built
            into the system itself.
          </p>
          <p className="text-base leading-relaxed text-gray-100">
            Calyx was founded by a team of sustainability advocates, blockchain
            engineers, and data scientists who saw a recurring problem: ESG
            scores were often inconsistent, unverifiable, and disconnected from
            real impact. We set out to build a protocol where trust is built
            into the system itself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundingStory;
