"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Simulations = () => {
  const roles = [
    {
      id: 1,
      title: "Single Verification (Calyx Arc™)",
      icon: "/images/simulation1.png",
      content: `A verifier confirms one action — for instance, a company’s reported reduction in electricity use. The Arc mints a fixed issuance of 100 BUDS, creating a proof that endures and remains consultable over time.`,
    },
    {
      id: 2,
      title: "Intra-Entity Alignment (Compound Matrix™)",
      icon: "/images/simulation2.png",
      content: `The same company also verifies reductions in emissions and water usage. Because these actions align, the issuance compounds. Instead of simply receiving 3 × 100 = 300 BUDS, the company’s account mints 450 BUDS. Alignment multiplies value.`,
    },
    {
      id: 3,
      title: "Inter-Entity Alignment (Compound Matrix™)",
      icon: "/images/simulation3.png",
      content: `A supplier verifies its emission reductions, and the buyer verifies that it purchased those low-emission goods. Both verifications align across entities. Instead of 200 BUDS each, the supplier and buyer each receive 300 BUDS, reflecting the amplified trust created by connected proof.`,
    },
  ];

  const [activeRole, setActiveRole] = useState(roles[0]);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [equalHeight, setEqualHeight] = useState<number | undefined>(undefined);

  // Equalize left & right heights
  useEffect(() => {
    if (leftRef.current && rightRef.current) {
      const leftHeight = leftRef.current.offsetHeight;
      const rightHeight = rightRef.current.offsetHeight;
      setEqualHeight(Math.max(leftHeight, rightHeight));
    }
  }, [activeRole]);

  return (
    <section className="pb-24 pt-14 px-6 lg:px-36 w-full bg-white lg:mt-12">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:text-[52px] font_title text-2xl md:text-3xl font-bold text-[#12291E] lg:mb-[30px] mb-4 text-center"
      >
        Example Simulations
      </motion.h2>

      {/* Intro paragraph */}
      <p className="text-[#1C1C1E] lg:text-xl font-normal text-lg text-center lg:mb-[60px] mb-4">
        BUDS Tokens <br />
        Every verified action in Calyx mints BUDS — Blockchain Units of Derived
        Signal. BUDS are not a currency or a rating; they are cryptographic
        tokens of verified trust. Each unit is derived mathematically from a
        confirmed fact, consultable over time, and compounding in value when
        aligned actions reinforce one another.
      </p>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left side cards */}
        <div
          ref={leftRef}
          style={{ height: equalHeight }}
          className="space-y-6 w-full mb-8 lg:mb-0"
        >
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveRole(role)}
              className={`flex lg:items-center items-start gap-4 lg:py-[14px] lg:px-[20px] p-6 rounded-lg border cursor-pointer transition-colors duration-300 
                ${
                  activeRole.id === role.id
                    ? "border-[#0B2B22] bg-gray-50"
                    : "border-gray-300 bg-white hover:border-[#0B2B22]"
                }`}
            >
              <Image
                src={role.icon}
                alt={role.title}
                width={80}
                height={80}
                className="shrink-0 lg:mt-2"
              />
              <div>
                <h3 className="lg:text-[22px] text-xl font-normal text-[#12291e] font_title">
                  {role.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right side content */}
        <motion.div
          ref={rightRef}
          style={{ height: equalHeight }}
          key={activeRole.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B2B22] text-white lg:py-[90px] lg:px-[48px] p-8 rounded-lg flex flex-col justify-between lg:max-w-[474px] w-full"
        >
          <motion.p
            key={activeRole.content}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-normal"
          >
            {activeRole.content}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Simulations;
