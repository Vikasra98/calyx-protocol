"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
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
      features: [
        "Standardized verification protocols",
        "Credentialed verifier network",
        "Transparent audit trails",
        "Reward mechanisms for quality",
      ],
    },
    {
      id: 2,
      title: "Institutions",
      description:
        "Banks, funds, corporates, and public actors seeking high-integrity sustainability signals.",
      icon: "/images/who2.png",
      features: [
        "RESTful API access",
        "GraphQL endpoints",
        "SDK and documentation",
        "Sandbox environment",
      ],
    },
    {
      id: 3,
      title: "Developers",
      description:
        "Builders creating tools, apps, or integrations with verifiable ESG data.",
      icon: "/images/who3.png",
      features: [
        "API-first approach",
        "Composable ESG components",
        "SDKs & documentation",
        "Seamless integration with Web3 & AI",
      ],
    },
  ];

  const [activeRole, setActiveRole] = useState(roles[0]);

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
              onClick={() => setActiveRole(role)}
              className={`flex items-start gap-4 p-6 rounded-lg border cursor-pointer transition-colors duration-300 ${
                activeRole.id === role.id
                  ? "border-[#0B2B22] bg-[#f4f7f5]"
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
                <h3 className="text-2xl font-semibold text-[#12291e] mb-1 font_title">
                  {role.title}
                </h3>
                <p className="text-[#1C1C1E] text-lg">{role.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right side features (Dynamic based on activeRole) */}
        <motion.div
          key={activeRole.id} // triggers animation on change
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B2B22] text-white p-8 rounded-lg flex flex-col justify-between"
        >
          <div>
            <h3 className="text-[28px] font-normal mb-10 font_title">
              Key Features for {activeRole.title}
            </h3>
            <ul className="space-y-4">
              {activeRole.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-6">
                  <div className="bg-white w-[26px] h-[26px] rounded flex items-center justify-center">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-xl font-normal">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="mt-8 inline-block bg-white text-xl text-[#12291e] font-semibold px-6 py-3 rounded-md shadow-md transition-colors duration-300 w-fit"
          >
            Join the Verification Council →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsFor;
