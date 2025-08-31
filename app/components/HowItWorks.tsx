"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const HowItWorks = () => {
  const [selectedCard, setSelectedCard] = useState<any | null>(null);

  const cards = [
    {
      id: 1,
      title: "The Calyx Arc™",
      description:
        "The Calyx Arc™ transforms verified facts into tamper-proof digital proof. Instead of ratings or opinions, it provides a stable, auditable signal that others can trust instantly. By capturing time, consistency, and alignment, the Arc gives verifiers the power to mint lasting proof that travels across systems, geographies, and future transactions.",
      brownIcon: "/Icon/The_Calyx_Arc.png",
      whiteIcon: "/Icon/The_Calyx_Arc_white.png",
    },
    {
      id: 2,
      title: "The Compound Matrix™",
      description: `Intra-Entity\nWithin an organization, the Compound Matrix™ strengthens proof by compounding verified actions across teams, projects, and reporting cycles. Instead of isolated data points, it generates a unified, exponential signal of performance. The more consistent and aligned the actions, the more powerful and credible the proof becomes over time.\n\nInter-Entity\nAcross organizations, the Compound Matrix™ allows verified proof to travel and connect. When one entity’s actions align with another’s — in supply chains, partnerships, or funding flows — the proof compounds again. This creates a traceable, transferable signal of shared integrity, enabling trust to scale seamlessly between independent parties.`,
      brownIcon: "/images/how_works2.png",
      whiteIcon: "/images/how_works2-hover.png",
    },
    {
      id: 3,
      title: "Verifier-First Design",
      description:
        "Calyx is built around the verifier. Every feature is designed to make their work auditable, efficient, and valued. Instead of being hidden in the background, verifiers are the source of truth — minting proof that carries forward across systems. Verifiers gain visibility, recognition, and ongoing value from every data point they certify. Their verification endures the passage of time, remaining consultable and reliable long after the initial check. By putting verifiers first, the protocol ensures credibility begins at the origin.",
      brownIcon: "/images/how_works3.png",
      whiteIcon: "/images/how_works3-hover.png",
    },
  ];

  // Close modal on outside click
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        overlayRef.current &&
        event.target instanceof Node &&
        overlayRef.current === event.target
      ) {
        setSelectedCard(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Render Compound Matrix with subtitles
  const renderDescription = (card: any) => {
    if (card.id === 2) {
      return (
        <div className="text-lg leading-relaxed space-y-4">
          <div>
            <h4 className="text-[#D99A70] font-semibold mb-1">Intra-Entity</h4>
            <p>
              Within an organization, the Compound Matrix™ strengthens proof by
              compounding verified actions across teams, projects, and reporting
              cycles. Instead of isolated data points, it generates a unified,
              exponential signal of performance. The more consistent and aligned
              the actions, the more powerful and credible the proof becomes over
              time.
            </p>
          </div>
          <div>
            <h4 className="text-[#D99A70] font-semibold mb-1">Inter-Entity</h4>
            <p>
              Across organizations, the Compound Matrix™ allows verified proof
              to travel and connect. When one entity’s actions align with
              another’s — in supply chains, partnerships, or funding flows — the
              proof compounds again. This creates a traceable, transferable
              signal of shared integrity, enabling trust to scale seamlessly
              between independent parties.
            </p>
          </div>
        </div>
      );
    }
    return (
      <p className="text-lg leading-relaxed whitespace-pre-line">
        {card.description}
      </p>
    );
  };

  return (
    <section className="pb-16 pt-5 px-6 lg:px-20 bg-white">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl lg:text-7xl font-bold text-gray-900 mb-12 font_title"
      >
        How It Works
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="group rounded-xl shadow-md cursor-pointer px-7 py-12 flex flex-col items-center text-center 
                       bg-[#F9F9F7] text-[#0B2B22] 
                       hover:bg-[#0B2B22] hover:text-white 
                       transition-colors duration-300 relative"
          >
            <div className="mb-10 relative w-[138px] h-[140px]">
              <Image
                src={card.brownIcon}
                alt="Brown Icon"
                fill
                className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              />
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

            {/* Show only first 100 chars */}
            <p className="text-xl leading-relaxed mb-4">
              {card.description.slice(0, 100)}...
            </p>

            {/* Read More button */}
            <button
              onClick={() => setSelectedCard(card)}
              className="text-[#D99A70] font-medium cursor-pointer lg:absolute bottom-7 left-[calc(50%-48px)]"
            >
              Read More...
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            ref={overlayRef}
            className="fixed inset-0 bg-[#00000066] flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0B2B22] text-white rounded-2xl p-8 max-w-2xl w-full relative flex flex-col items-center text-center"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-3 text-white text-2xl font-bold"
              >
                ×
              </button>

              {/* Icon */}
              <div className="mb-6 relative w-[100px] h-[100px]">
                <Image
                  src={selectedCard.whiteIcon}
                  alt="Popup Icon"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-3xl lg:text-4xl mb-6 font_title">
                {selectedCard.title}
              </h3>

              {/* Description */}
              {renderDescription(selectedCard)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HowItWorks;
