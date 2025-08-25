"use client";
import { motion } from "framer-motion";
import React from "react";

const Specifications = () => {
  return (
    <section className="w-full bg-[#fff] px-6 lg:px-36">
      <div className="bg-[#F5F5F3] px-6 lg:px-[234px] lg:py-[100px] py-12">
        <div className="flex flex-col items-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:text-[52px] font_title text-2xl md:text-3xl font-bold text-[#12291E] lg:mb-[30px] mb-4 text-center"
          >
            Scoring Specifications
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[#1C1C1E] text-xl font-normal lg:max-w-3xl text-center lg:mb-[60px] mb-10 w-full"
          >
            The protocol is open-source and fully documented.
          </motion.p>
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full text-center"
        >
          <button
            type="submit"
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
