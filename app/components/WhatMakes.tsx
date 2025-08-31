"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const WhatMakes = () => {
  const cards = [
    {
      src: "/images/icons/math.png",
      title: "Mathematical Non-Linearity",
      subTitle:
        "Proof doesn’t just add up, it compounds. Verified actions that align grow exponentially stronger, rewarding consistency and integrity across time, teams, and systems.",
    },
    {
      src: "/images/icons/whatMakes3.png",
      title: "Interoperability",
      subTitle:
        "Proof flows across reporting frameworks (GRI, SASB, CSRD), financial systems (banks, investors, insurers), and digital infrastructures (blockchains, APIs, registries). No lock-ins, no silos.",
    },
    {
      src: "/images/icons/whatMakes4.png",
      title: "Aligned Incentives",
      subTitle:
        "Verifiers, companies, and stakeholders all benefit when verified proof compounds and circulates, creating shared value.",
    },
    {
      src: "/images/icons/whatMakes2.png",
      title: "On-Chain Proof",
      subTitle:
        "Each data point is anchored on-chain, ensuring permanence and tamper-resistance.",
    },
    {
      src: "/images/icons/whatMakes1.png",
      title: "Auditable Data",
      subTitle: "Every score is backed by verifiable sources.",
    },
  ];

  // Animation Variants
  const containerVariants: any = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="text-black px-6 lg:px-36 py-12 lg:py-[100px]">
      {/* Heading Animation */}
      <motion.div
        className="flex flex-col items-center lg:mb-[60px] mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl lg:text-[52px] font-bold lg:mb-[30px] mb-4 font_title text-[#1C1C1E]">
          What Makes Calyx Different
        </h2>
        <p className="text-xl font-normal leading-relaxed text-[#1C1C1E] lg:w-[656px] text-center">
          While most ESG systems rely on opaque scoring and manual verification,
          Calyx transforms the process with
        </p>
      </motion.div>

      {/* Cards Animation */}
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cards.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="flex items-center justify-start flex-col mb-[18px] py-5 lg:py-[30px] px-4 rounded-[10px] w-full sm:w-[300px] md:w-[381px] lg:w-[374px]"
            style={{ boxShadow: "0px 4px 20px 0px #0000001F" }}
          >
            <Image
              className="h-20 w-20 mb-[18px]"
              src={item.src}
              alt={item.src}
              height={80}
              width={80}
            />
            <h6 className="font_title text-2xl font-normal leading-8 text-[#12291E] mb-2.5 text-center">
              {item.title}
            </h6>
            <p className="text-lg font-normal leading-7 text-[#1C1C1E] text-center">
              {item.subTitle}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhatMakes;
