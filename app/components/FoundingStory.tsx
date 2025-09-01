"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const principles = [
  {
    title: "Transparency",
    description: "No black boxes, just verifiable logic.",
    icon: "/images/transparency.png",
  },
  {
    title: "Verifier-First",
    description: "The source of truth deserves recognition.",
    icon: "/images/verifier.png",
  },
  {
    title: "Interoperability",
    description: "Proof that connects across platforms and geographies.",
    icon: "/images/intero.png",
  },
  {
    title: "Integrity Over Time",
    description: "Signals that endure, compound, and remain consultable.",
    icon: "/images/integrity.png",
  },
];

const FoundingStory = () => {
  return (
    <section className="bg-gradient-to-r from-[#184D3D] to-[#0B2B22] text-white px-6 lg:px-36 py-16 lg:mt-[72px] lg:pb-32">
      <motion.div
        className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Left side - Single Image */}
        <motion.div className="" variants={fadeInUp}>
          <motion.div
            className="relative lg:max-w-full -mt-[95px] lg:-mt-[150px] w-[573px] lg:w-[573px] lg:h-[698px]"
            variants={fadeInUp}
          >
            <Image
              src="/images/principles.png"
              alt="Founder"
              width={573}
              height={672}
              className="object-cover w-[375px] h-[450px] lg:w-[573px] lg:h-[698px] 
                         rounded-2xl overflow-hidden shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Right side - Text */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-2xl lg:text-[44px] font-bold mb-6 lg:mb-[26px] font_title">
            Founding Story &amp; Principles
          </h2>

          <motion.p
            className="mb-6 text-base lg:text-lg font-normal leading-6 lg:leading-8 text-gray-100"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            Calyx Protocol was founded by Marco Guirola to solve a simple but
            critical problem: sustainability and governance data was everywhere,
            but trust in it was nowhere. After years of building financial and
            compliance infrastructure in emerging markets, our founder saw how
            ESG reporting was held back by subjective ratings, closed systems,
            and signals that faded over time.
          </motion.p>

          <motion.p
            className="text-base lg:text-lg font-normal leading-6 lg:leading-8 text-gray-100"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
              },
            }}
          >
            Calyx was born in Finland with a different approach: a protocol that
            transforms verified facts into auditable proof. By giving verifiers
            the tools to mint lasting, math-based signals, Calyx turns trust
            into a public good that scales across companies, systems, and
            borders.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Principles Section */}
      <section className="pt-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-[44px] font-bold text-center mb-[60px] font_title"
        >
          Our Principles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto px-4">
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="flex lg:items-start space-x-4 lg:flex-row flex-col items-center"
            >
              <div className="mr-[15px]">
                <Image
                  src={item.icon}
                  alt={item.icon}
                  height={80}
                  width={80}
                  className="h-20 w-20 text-green-700 lg:mb-0 mb-4"
                />
              </div>

              <div className="lg:text-start text-center">
                <h3 className="font-normal text-2xl font_title mb-1">
                  {item.title}
                </h3>
                <p className="text-lg font-normal">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default FoundingStory;
