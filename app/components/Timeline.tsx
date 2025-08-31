"use client";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "June 2025 – Inception",
    text: "Calyx Protocol founded in Finland. Core architecture for the Arc™ and Matrix™ defined.",
  },
  {
    year: "Q3 2025 – Prototype",
    text: "First verifier onboarding flows and scoring simulations tested.",
  },
  {
    year: "Q4 2025 – MVP Demo",
    text: "Live verifier-first platform with on-chain proof. Pilot entities begin issuing tokenized verifications in test environments.",
  },
  {
    year: "2026 – Go Live and Expansion",
    text: "Rapid scaling across industries and geographies. Integrations with reporting frameworks and financial systems.",
  },
  {
    year: "2027+ – Global Standard",
    text: "Calyx recognized as the open protocol for verified ESG data worldwide.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-white lg:py-16 py-12 pt-0 relative lg:bg-[url('/img/timeline.png')] bg-cover bg-bottom">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-[52px] font-bold text-[#12291E] mb-[22px] font_title">
          Timeline & Roadmap
        </h2>
        <p className="text-[#1C1C1E] max-w-xl mx-auto mb-7 lg:mb-[50px] text-xl font-normal">
          While most ESG systems rely on opaque scoring and manual verification,
          Calyx transforms the process with
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="relative max-w-7xl mx-auto hidden md:block">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#D99A70]"></div>

        {/* Items */}
        <div className="grid grid-cols-5 gap-8">
          {timelineData.map((item, index) => {
            const isTop = index % 2 !== 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center timeline_nargin w-[230px] h-[185px]"
              >
                {isTop && (
                  <div className="bg-[#D99A70] text-[#FFFCFC] text-base font-normal rounded-md px-4 pt-5 pb-[30px] mb-4 relative w-[230px] h-[185px] text-center">
                    {item.text}
                    <div className="absolute h-[12px] w-[12px] left-[calc(50%-6px)] bg-[#D99A70] bottom-[-28px] rounded-full"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#D99A70] bottom-[-9px]"></div>
                  </div>
                )}
                <p className="text-[#1C5D3F] text-2xl font-normal font_title my-2 absolute alt_year">
                  {item.year}
                </p>
                {!isTop && (
                  <div className="bg-[#D99A70] text-[#FFFCFC] text-base font-normal rounded-md px-4 pt-5 pb-[30px] mt-4 relative w-[230px] h-[185px]  text-center">
                    {item.text}
                    <div className="absolute h-[12px] w-[12px] left-[calc(50%-6px)] top-[-29px] bg-[#D99A70] rounded-full"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#D99A70] top-[-9px]"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline - Vertical Version */}
      <div className="block md:hidden relative max-w-lg mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#D99A70]"></div>

        {/* Items */}
        <div className="flex flex-col gap-10 pl-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Circle */}
              <div className="absolute -left-[31px] top-2 h-[16px] w-[16px] bg-[#D99A70] rounded-full"></div>

              {/* Card */}
              <p className="text-lg font_title text-[#1C5D3F] mb-2">
                {item.year}
              </p>
              <div className="bg-[#D99A70] text-white rounded-lg p-4 shadow-md max-w-xs">
                <p className="text-base font-normal">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
