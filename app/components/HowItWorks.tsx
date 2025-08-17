"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HowItWorks = () => {
  const cards = [
    {
      id: 1,
      title: "The Calyx Arc™",
      description:
        "A sigmoid scoring curve that rewards long-term, sustained impact over short-term optics.",
      brownIcon: "/images/how_works1.png", // default PNG
      whiteIcon: "/images/how_works1-hover.png" // hover PNG
    },
    {
      id: 2,
      title: "The Compound Matrix™",
      description:
        "Scores grow exponentially when verified actions align — across time, teams, or geographies.",
      brownIcon: "/images/how_works2.png",
      whiteIcon: "/images/how_works2-hover.png"
    },
    {
      id: 3,
      title: "Verifier-First Design",
      description:
        "No unverifiable data. Every input must be tied to a credentialed verifier and pass protocol checks.",
      brownIcon: "/images/how_works3.png",
      whiteIcon: "/images/how_works3-hover.png"
    }
  ];

  return (
    <section className="pb-16 pt-5 px-6 lg:px-20 bg-white">
      <h2 className="text-center text-4xl lg:text-7xl font-bold text-gray-900 mb-12 font_title">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group rounded-xl shadow-md cursor-pointer px-7 py-12 flex flex-col items-center text-center 
                       bg-[#F9F9F7] text-[#0B2B22] 
                       hover:bg-[#0B2B22] hover:text-white 
                       transition-colors duration-300"
          >
            <div className="mb-10 relative w-[138px] h-[140px]">
              {/* Brown icon (default) */}
              <Image
                src={card.brownIcon}
                alt="Brown Icon"
                fill
                className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              />
              {/* White icon (on hover) */}
              <Image
                src={card.whiteIcon}
                alt="White Icon"
                fill
                className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <h3 className="text-[28px] font-[400] mb-6 font_title text-primary">
              {card.title}
            </h3>
            <p className="text-xl leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
