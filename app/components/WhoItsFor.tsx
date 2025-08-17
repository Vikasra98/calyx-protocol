"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const WhoItsFor = () => {
  const roles = [
    {
      id: 1,
      title: "Verifiers",
      description:
        "Auditors, certifiers, and credentialed pros who validate ESG claims.",
      icon: "/images/who1.png" // replace with your asset
    },
    {
      id: 2,
      title: "Institutions",
      description:
        "Banks, funds, corporates, and public actors seeking high-integrity sustainability signals.",
      icon: "/images/who2.png"
    },
    {
      id: 3,
      title: "Developers",
      description:
        "Builders creating tools, apps, or integrations with verifiable ESG data.",
      icon: "/images/who3.png"
    }
  ];

  const features = [
    "Regulatory-compliant scoring",
    "Real-time ESG monitoring",
    "Portfolio-level analytics",
    "Integration with existing systems"
  ];

  return (
    <section className="pb-24 pt-14 px-6 lg:px-20 bg-white">
      <h2 className="text-center text-3xl lg:text-7xl font-bold text-gray-900 mb-10 lg:mb-14 font_title">
        Who It's For
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left side cards */}
        <div className="space-y-6">
          {roles.map((role) => (
            <motion.div
              key={role.id}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="flex items-start gap-4 p-6 rounded-lg border border-gray-300 bg-white 
                         hover:border-[#0B2B22] transition-colors duration-300 cursor-pointer"
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

        {/* Right side key features */}
        <div className="bg-[#0B2B22] text-white p-8 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-[28px] font-normal mb-10 font_title">
              Key Features
            </h3>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
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
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
