"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="bg-white text-black px-6 lg:px-36 lg:py-[100px] py-11">
      <div className="mx-auto space-y-16">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 md:gap-6 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full flex justify-end"
          >
            <Image
              src="/images/mission.jpg"
              alt="Mission"
              height={330}
              width={573}
              className="object-cover w-[573px] h-64 lg:h-[330px] rounded-xl overflow-hidden shadow-md"
            />
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full flex justify-start"
          >
            <Image
              src="/images/vision.jpg"
              alt="Vision"
              height={330}
              width={573}
              className="object-cover w-[573px] h-64 lg:h-[330px] rounded-xl overflow-hidden shadow-md"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:mt-0 mt-8"
          >
            <h2 className="text-2xl lg:text-[52px] font-bold lg:mb-10 mb-4 font_title text-[#1C1C1E]">
              Vision
            </h2>
            <p className="text-xl font-normal leading-relaxed text-[#1C1C1E]">
              We envision a future where sustainability claims are never taken
              at face value — because every claim is backed by transparent,
              verifiable data. Our goal is to become the global standard for
              trust in ESG reporting, making greenwashing a thing of the past.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
