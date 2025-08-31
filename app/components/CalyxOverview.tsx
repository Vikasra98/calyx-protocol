"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CalyxOverview = () => {
  return (
    <section className="w-full bg-white lg:py-[100px] py-12 px-6 lg:px-36">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto lg:mb-[60px] mb-8"
      >
        <h2 className="lg:text-[44px] font_title text-2xl md:text-3xl font-bold text-[#12291E] lg:mb-[30px] mb-4 text-center">
          Overview of Calyx Arc™ and Compound Matrix™
        </h2>
        <p className="text-[#1C1C1E] text-xl font-normal lg:max-w-3xl text-center">
          Calyx Protocol introduces a new standard for ESG scoring — built to be
          verifiable, interoperable, and adaptive to real-world impact.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calyx Arc */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-[10px] bg-white overflow-hidden lg:py-10 lg:px-6 p-5"
          style={{ boxShadow: "0px 4px 20px 0px #0000001F" }}
        >
          <Image
            src="/img/Calyx_Arc_Image.png"
            alt="Calyx Arc"
            width={525}
            height={329}
            className="w-full object-cover rounded-[10px] mb-10"
          />
          <div className="">
            <h3 className="text-4xl font-semibold text-[#12291E] mb-5">
              Calyx Arc™
            </h3>
            <p className="mt-2 text-[#1C1C1E]  text-xl font-normal">
              A dynamic framework that tracks, records, and updates ESG
              performance in real time. Arc ensures that every sustainability
              claim is backed by data sources that can be independently verified
              and audited.
            </p>
          </div>
        </motion.div>

        {/* Compound Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="rounded-[10px] bg-white overflow-hidden lg:py-10 lg:px-6 p-5"
          style={{ boxShadow: "0px 4px 20px 0px #0000001F" }}
        >
          <Image
            src="/img/Compound_Matrix.png"
            alt="Compound Matrix"
            width={525}
            height={329}
            className="w-full object-cover rounded-[10px] mb-10"
          />
          <div className="">
            <h3 className="text-4xl font-semibold text-[#12291E] mb-5">
              Compound Matrix™
            </h3>
            <p className="mt-2 text-[#1C1C1E]  text-xl font-normal">
              A multi-dimensional scoring engine that weights environmental,
              social, and governance factors across sectors. It enables
              flexible, standards-aligned scoring while remaining transparent
              and composable on-chain.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer Note */}
      <div className="w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="lg:mt-[60px] mt-10 w-full px-4 py-5 sm:py-6 lg:py-[30px] lg:px-[37px] text-base lg:text-xl lg:font-medium font-normal font_title italic text-white rounded-[10px] text-center max-w-5xl"
          style={{
            background: "linear-gradient(90deg, #1E6444 0%, #11281D 100%)",
          }}
        >
          Together, Arc™ and Compound Matrix™ create a transparent scoring
          backbone for ESG impact — one that institutions, verifiers, and
          partners can trust.
        </motion.div>
      </div>
    </section>
  );
};

export default CalyxOverview;
