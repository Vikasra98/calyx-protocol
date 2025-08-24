"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EsgScores = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white text-black px-4 sm:px-6 lg:px-36 py-10 sm:py-12 lg:py-20"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center flex-col mb-6 sm:mb-8 lg:mb-10 text-center"
      >
        <h1 className="font_title text-2xl sm:text-4xl lg:text-[52px] font-bold leading-snug">
          ESG Scores Are Broken
        </h1>
        <p className="text-sm sm:text-lg lg:text-xl max-w-xl mt-2 sm:mt-3 font-normal">
          Greenwashing, unverifiable claims, and fragmented standards have
          eroded trust.
        </p>
      </motion.div>

      {/* Image + Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col lg:flex-row justify-around items-center lg:items-start gap-8 sm:gap-10 mb-10 sm:mb-14"
      >
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <Image
            src="/images/esg.png"
            alt="esg_img"
            height={364}
            width={375}
            className="w-[220px] sm:w-[300px] lg:w-[375px] h-auto"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center lg:text-left"
        >
          <h3 className="text-xl sm:text-[26px] lg:text-[28px] font-normal mb-4 sm:mb-6 lg:mb-10 font_title">
            Calyx changes that:
          </h3>
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7">
            {[
              {
                title: "Auditable",
                desc: "Every score is backed by verifiable data.",
              },
              {
                title: "Tokenized",
                desc: "Impact becomes measurable on-chain value.",
              },
              {
                title: "Interoperable",
                desc: "Standards-aligned, composable, and open.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                className="flex items-start gap-3 sm:gap-4"
              >
                <Image
                  src="/images/check_bg.png"
                  alt="check"
                  height={39}
                  width={39}
                  className="w-6 sm:w-8 lg:w-9 h-auto"
                />
                <div className="flex flex-col items-start gap-1">
                  <h4 className="text-lg sm:text-xl lg:text-[28px] font_title leading-6 sm:leading-7 lg:leading-8">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-lg lg:text-xl font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center px-4"
      >
        <p
          className="w-full sm:w-[500px] lg:w-[722px] px-4 py-5 sm:py-6 lg:py-8 text-base sm:text-xl lg:text-[28px] font-normal font_title italic text-white rounded-2xl text-center"
          style={{
            background: "linear-gradient(90deg, #1E6444 0%, #11281D 100%)",
          }}
        >
          “We measure what matters. We reward what lasts.”
        </p>
      </motion.div>
    </motion.section>
  );
};

export default EsgScores;
