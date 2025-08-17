import React from "react";
import Image from "next/image";

const EsgScores = () => {
  return (
    <section className="bg-white text-black px-4 sm:px-6 lg:px-36 py-12 lg:py-20">
      {/* Heading */}
      <div className="flex items-center justify-center flex-col mb-8 lg:mb-10 text-center">
        <h1 className="font_title text-3xl sm:text-4xl lg:text-[52px] font-bold leading-snug">
          ESG Scores Are Broken
        </h1>
        <p className="text-base sm:text-lg lg:text-xl max-w-xl mt-3 font-normal">
          Greenwashing, unverifiable claims, and fragmented standards have
          eroded trust.
        </p>
      </div>

      {/* Image + Content */}
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start gap-10 mb-14">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/images/esg.png"
            alt="esg_img"
            height={364}
            width={375}
            className="w-[250px] sm:w-[300px] lg:w-[375px] h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left">
          <h3 className="text-2xl sm:text-[26px] lg:text-[28px] font-normal mb-6 lg:mb-10 font_title">
            Calyx changes that:
          </h3>
          <div className="flex flex-col gap-6 sm:gap-7">
            {[
              {
                title: "Auditable",
                desc: "Every score is backed by verifiable data."
              },
              {
                title: "Tokenized",
                desc: "Impact becomes measurable on-chain value."
              },
              {
                title: "Interoperable",
                desc: "Standards-aligned, composable, and open."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 sm:gap-5">
                <Image
                  src="/images/check_bg.png"
                  alt="check"
                  height={39}
                  width={39}
                  className="w-7 sm:w-9 h-auto"
                />
                <div className="flex flex-col items-start gap-1">
                  <h4 className="text-lg sm:text-xl lg:text-[28px] font_title leading-7 lg:leading-8">
                    {item.title}
                  </h4>
                  <p className="text-base sm:text-lg lg:text-xl font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="flex items-center justify-center px-4">
        <p
          className="w-full sm:w-[500px] lg:w-[722px] px-4 py-6 sm:py-6 lg:py-8 text-lg sm:text-xl lg:text-[28px] font-normal font_title italic text-white rounded-2xl text-center"
          style={{
            background: "linear-gradient(90deg, #1E6444 0%, #11281D 100%)"
          }}
        >
          “We measure what matters. We reward what lasts.”
        </p>
      </div>
    </section>
  );
};

export default EsgScores;
