"use client";
import { motion } from "framer-motion";
import React from "react";

const FutureEsg = () => {
  return (
    <section className="w-full bg-[#F5F5F3] lg:py-[89px] py-12 px-6">
      <div className="flex flex-col items-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:text-[52px] font_title text-2xl md:text-3xl font-bold text-[#12291E] lg:mb-[30px] mb-4 text-center"
        >
          The Future of ESG Scoring
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[#1C1C1E] text-xl font-normal lg:max-w-3xl text-center w-full"
        >
          Calyx Scoring ensures impact isn’t just a number — it’s proof you can
          trust, audit, and build on.
        </motion.p>
      </div>
    </section>
  );
};

export default FutureEsg;
