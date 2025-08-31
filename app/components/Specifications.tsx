"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const cardData = [
  {
    icon: "/images/icons/objective.png",
    title: "Objective",
    desc: "Rooted in verified data, not opinions.",
  },
  {
    icon: "/images/icons/audit.png",
    title: "Auditable",
    desc: "Open to inspection at any time.",
  },
  {
    icon: "/images/icons/math.png",
    title: "Mathematically Certified",
    desc: "Governed by transparent formulas, not black boxes.",
  },
  {
    icon: "/images/icons/enduring.png",
    title: "Enduring",
    desc: "Signals remain consultable and reliable long after the initial check.",
  },
];

const Specifications = () => {
  return (
    <section className="w-full bg-[#fff] px-6 lg:px-36">
      <div className="bg-[#F5F5F3] px-6 lg:px-[100px] lg:py-[100px] py-12 rounded-lg">
        <div className="flex flex-col items-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:text-[52px] font_title text-2xl md:text-3xl font-bold text-[#12291E] lg:mb-[60px] mb-4 text-center"
          >
            Scoring Specifications
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[#1C1C1E] text-lg lg:text-xl font-normal text-center lg:mb-[60px] mb-10 w-full"
          >
            Calyx does not rank, rate, or interpret. Instead, it transforms each
            verified fact into a transparent signal that can be carried forward.
            The foundation is the <b>Calyx Arc™</b>, which defines how a single
            verification behaves over time: stable, auditable, and non-linear.
            <br />
            <br />
            When multiple verifications align, the <b>Compound Matrix™</b>{" "}
            compounds them. Proof within an entity strengthens as consistency
            grows across teams and reporting cycles; proof across entities
            strengthens when supplier, buyer, funder, or partner actions confirm
            each other.
          </motion.p>

          {/* Every score is therefore */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:text-4xl md:text-2xl text-xl font_title font-bold text-[#12291E] mb-10 text-center"
          >
            Every score is therefore:
          </motion.h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 lg:mb-[40px] mb-12">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="rounded-2xl flex flex-col lg:items-start items-center space-y-3 transition lg:flex lg:flex-row gap-3 "
            >
              {/* <div className=""> */}
              <Image
                src={card.icon}
                alt={card.icon}
                height={80}
                width={80}
                className="h-[80px] w-[80px]"
              />
              {/* </div> */}
              <div className="lg:text-start text-center">
                <h4 className="font_title text-lg lg:text-2xl font-normal text-[#12291E] mb-1">
                  {card.title}
                </h4>
                <p className="text-[#1C1C1E] text-lg font-normal">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[#1C1C1E] text-center text-lg md:text-xl font-normal lg:mb-[60px] mb-10"
        >
          The result is a protocol where trust is quantified without distortion;
          a score that proves itself.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full text-center"
        >
          <button
            type="button"
            className="w-full lg:w-[521px] bg-[#154E35] text-[#F5F5F3] py-[18px] px-[30px] rounded-md hover:bg-green-800 transition text-xl font-[600] cursor-pointer"
          >
            View GitHub Specs →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Specifications;
