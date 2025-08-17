"use client";

import { motion } from "framer-motion";
import { Users, FileText, Github } from "lucide-react";
import Image from "next/image";

const ProtocolInTesting = () => {
  const actions = [
    {
      id: 1,
      title: "Join the Waitlist",
      description: "Get early access to the protocol",
      icon: "/images/protocol1.png",
      link: "#"
    },
    {
      id: 2,
      title: "View the Scoring Docs",
      description: "Understand how verification works",
      icon: "/images/protocol2.png",
      link: "#"
    },
    {
      id: 3,
      title: "Explore GitHub",
      description: "Check out our open-source code",
      icon: "/images/protocol3.png",
      link: "#"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-[#184D3D] to-[#0B2B22] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl lg:text-[52px] font-bold mb-5 font_title">
          Protocol in Testing
        </h2>
        <p className="text-xl font-[400] text-gray-300 mb-12 lg:mb-14">
          Calyx is now in closed testing. Docs are live. Early integrations
          welcome.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map((action) => (
            <motion.a
              key={action.id}
              href={action.link}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="flex gap-7 items-center md:items-start text-center md:text-left 
                         bg-white/10 border border-white/20 rounded-lg p-6 
                         hover:border-white cursor-pointer transition-colors duration-300"
            >
              <div className=" text-white">
                <Image src={action.icon} alt={"icon"} height={50} width={50} />
              </div>
              <div>
                <h3 className="text-2xl font_title font-normal mb-2">
                  {action.title}
                </h3>
                <p className="text-base font-normal text-gray-300">
                  {action.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtocolInTesting;
