"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const WhoItsFor = () => {
  const roles = [
    {
      id: 1,
      title: "Verifiers",
      description:
        "Auditors, certifiers, and credentialed pros who validate ESG claims.",
      icon: "/images/who1.png",
    },
    {
      id: 2,
      title: "Institutions",
      description:
        "Banks, funds, corporates, and public actors seeking high-integrity sustainability signals.",
      icon: "/images/who2.png",
    },
    {
      id: 3,
      title: "Developers",
      description:
        "Builders creating tools, apps, or integrations with verifiable ESG data.",
      icon: "/images/who3.png",
    },
  ];

  return (
    <section className="pb-24 pt-14 px-6 lg:px-20 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl lg:text-7xl font-bold text-gray-900 mb-10 lg:mb-14 font_title"
      >
        Who It's For
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left side cards */}
        <div className="space-y-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 p-6 rounded-lg border cursor-pointer transition-colors duration-300 border-gray-300 bg-white hover:border-[#0B2B22]"
            >
              <Image
                src={role.icon}
                alt={role.title}
                width={80}
                height={80}
                className="shrink-0 lg:mt-2"
              />
              <div>
                <h3 className="text-2xl font-semibold text-[#12291e] mb-1 font_title">
                  {role.title}
                </h3>
                <p className="text-[#1C1C1E] text-lg">{role.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right side features (Static content) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B2B22] text-white p-8 rounded-lg flex flex-col justify-between"
        >
          <div>
            <h3 className="text-[28px] font-normal mb-[30px] font_title">
              Key Features for Verifiers
            </h3>
            <ul className="space-y-3.5 text-base font-bold leading-relaxed">
              <li>
                <span className="text-[#D99A70] font-semibold">
                  Enduring Proof –
                </span>{" "}
                Every verification is minted into a record that stands the test
                of time and can be consulted anytime.
              </li>
              <li>
                <span className="text-[#D99A70] font-semibold">
                  Recognition & Value –
                </span>{" "}
                Verifiers gain visibility and lasting credit for the trust they
                create.
              </li>
              <li>
                <span className="text-[#D99A70] font-semibold">
                  Efficiency & Clarity –
                </span>{" "}
                Simple tools and transparent logic make verification faster,
                cleaner, and auditable.
              </li>
              <li>
                <span className="text-[#D99A70] font-semibold">
                  Scalable Impact –
                </span>{" "}
                Verified data compounds within and across entities, amplifying
                the verifier’s role as trust propagates.
              </li>
            </ul>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="mt-[30px] inline-block bg-white text-xl text-[#12291e] font-semibold px-6 py-3 rounded-md shadow-md transition-colors duration-300 w-fit"
          >
            Join the Verification Council →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsFor;
