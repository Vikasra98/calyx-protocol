"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#0B2B22] text-white flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-36 py-8 sm:py-12 lg:py-20"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[673px] text-center lg:text-left mt-6 sm:mt-8 lg:mt-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-libre text-3xl sm:text-4xl md:text-[50px] lg:text-[70px] font-bold leading-tight font_title sm:mb-6"
        >
          We verify sustainability at <br /> the protocol level.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-sans text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-[22px]"
        >
          Auditable ESG data | Composable scores | Aligned incentives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
        >
          <a
            href="/stayUpdated"
            className="bg-[#E59B73] px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-[#fff] hover:text-[#174d3d] hover:transition-all cursor-pointer text-sm sm:text-base md:text-xl font-[600]"
          >
            Stay Updated →
          </a>
          <a
            href="/joinUs"
            className="bg-[#174d3d] px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-[#fff] hover:text-[#174d3d] hover:transition-all cursor-pointer text-sm sm:text-base md:text-xl font-[600]"
          >
            Join
          </a>
        </motion.div>
      </motion.div>

      {/* Right Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center lg:justify-end relative hero_section mt-6 sm:mt-8 lg:mt-0"
      >
        <Image
          src="/images/hero_gif.gif"
          alt="protocol graphic"
          width={574}
          height={544}
          className="w-[240px] sm:w-[350px] md:w-[450px] lg:w-[571px]"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
