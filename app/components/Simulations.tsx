"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Simulations = () => {
  const roles = [
    {
      id: 1,
      title: "Simulation Example",
      description:
        "Auditors, certifiers, and credentialed pros who validate ESG claims.",
      icon: "/images/who1.png",
      features: [
        "Company A reduces emissions by 15% YoY.",
        "Verified data is logged → Compound Matrix™ calculates ESG uplift.",
        "Transparent audit trails",
        "Result: Tokenized impact credits representing verifiable sustainability gains.",
      ],
    },
  ];

  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <section className="pb-24 pt-14 px-6 lg:px-36 w-full bg-white lg:mt-12">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:text-[52px] font_title text-2xl md:text-3xl font-bold text-[#12291E] lg:mb-[60px] mb-4 text-center"
      >
        Example Simulations
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        {/* Left side cards */}
        <div className="space-y-6 h-full w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="flex items-start gap-4 p-6 rounded-lg border cursor-pointer transition-colors duration-300 border-gray-300 bg-white hover:border-[#0B2B22]"
          >
            <Image
              src={"/Icon/Verifiers.png"}
              alt="Verifiers"
              width={80}
              height={80}
              className="shrink-0 lg:mt-2"
            />
            <div>
              <h3 className="text-2xl font-semibold text-[#12291e] mb-1 font_title">
                Company reports renewable energy usage.
              </h3>
              <p className="text-[#1C1C1E] text-lg">
                → Verifier confirms data source (e.g., audited utility bills).
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="flex items-start gap-4 p-6 rounded-lg border cursor-pointer transition-colors duration-300 border-gray-300 bg-white hover:border-[#0B2B22]"
          >
            <Image
              src={"/Icon/verification.png"}
              alt="verification"
              width={80}
              height={80}
              className="shrink-0 lg:mt-2"
            />
            <div>
              <h3 className="text-2xl font-semibold text-[#12291e] mb-1 font_title">
                Calyx Arc™ logs verification event on-chain.
              </h3>
              <p className="text-[#1C1C1E] text-lg">
                → Compound Matrix™ assigns weighted score.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="flex items-start gap-4 p-6 rounded-lg border cursor-pointer transition-colors duration-300 border-gray-300 bg-white hover:border-[#0B2B22]"
          >
            <Image
              src={"/Icon/api.png"}
              alt="api"
              width={80}
              height={80}
              className="shrink-0 lg:mt-2"
            />
            <div>
              <h3 className="text-2xl font-semibold text-[#12291e] mb-1 font_title">
                Score mints a tokenized "Proof of Impact" asset.
              </h3>
              <p className="text-[#1C1C1E] text-lg">
                → Institutions can track, trade, or integrate in portfolios.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right side features */}
        <motion.div
          key={activeRole.id}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B2B22] text-white p-8 rounded-lg flex lg:flex-row lg:items-stretch flex-col justify-between h-full lg:max-w-[474px] w-full"
        >
          <div>
            <h3 className="text-[28px] font-normal mb-10 font_title">
              {activeRole.title}
            </h3>
            <ul className="space-y-4">
              {activeRole.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6"
                >
                  <div className="bg-white w-[26px] h-[26px] rounded flex items-center justify-center shrink-0">
                    <Check className="w-[16px] h-[16px] text-[#0B2B22]" />
                  </div>
                  <span className="text-xl font-normal">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Simulations;
