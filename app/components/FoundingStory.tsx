"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
        {/* Left side - Images */}
        <motion.div
          className="flex items-center gap-6 justify-center lg:justify-start"
          variants={fadeInUp}
        >
          {/* First Image */}
          <motion.div
            className="relative max-w-sm -mt-[150px] lg:-mt-[250px] w-[200px] lg:w-[275px] 
                       after:w-[190px] lg:after:w-[268px] after:h-2 after:rounded-[10px] 
                       after:absolute after:bg-[#D99A70] after:-bottom-5 after:left-1/2 
                       after:-translate-x-1/2"
            variants={fadeInUp}
          >
            <Image
              src="/images/story1.jpg"
              alt="Founder"
              width={275}
              height={610}
              className="object-cover w-[200px] h-[450px] lg:w-[275px] lg:h-[610px] 
                         rounded-2xl overflow-hidden shadow-lg"
            />
          </motion.div>

          {/* Second Image */}
          <motion.div
            className="relative w-[200px] h-[450px] lg:w-[275px] lg:h-[610px] max-w-sm"
            variants={fadeInUp}
          >
            <Image
              src="/images/story2.jpg"
              alt="Sustainability Principles"
              width={275}
              height={610}
              className="object-cover w-full h-full rounded-2xl overflow-hidden shadow-lg"
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
            Calyx was founded by a team of sustainability advocates, blockchain
            engineers, and data scientists who saw a recurring problem: ESG
            scores were often inconsistent, unverifiable, and disconnected from
            real impact. We set out to build a protocol where trust is built
            into the system itself.
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
            Calyx was founded by a team of sustainability advocates, blockchain
            engineers, and data scientists who saw a recurring problem: ESG
            scores were often inconsistent, unverifiable, and disconnected from
            real impact. We set out to build a protocol where trust is built
            into the system itself.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FoundingStory;
