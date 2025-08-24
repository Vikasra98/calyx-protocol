"use client";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2021",
    text: "Every score is backed by verifiable sources. Every score is backed by verifiable sources.",
  },
  {
    year: "2022",
    text: "Every score is backed by verifiable sources. Every score is backed by verifiable sources.",
  },
  {
    year: "2023",
    text: "Every score is backed by verifiable sources. Every score is backed by verifiable sources.",
  },
  {
    year: "2024",
    text: "Every score is backed by verifiable sources. Every score is backed by verifiable sources.",
  },
  {
    year: "2025",
    text: "Every score is backed by verifiable sources. Every score is backed by verifiable sources.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-white py-16 relative bg-[url('/img/timeline.png')] bg-cover bg-bottom">
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

      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto ">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#D99A70] hidden md:block"></div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {timelineData.map((item, index) => {
            const isTop = index % 2 !== 0; // alternate
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center timeline_nargin w-[223px] h-[154px]"
              >
                {/* Top card */}
                {isTop && (
                  <div className="bg-[#D99A70] text-[#FFFCFC] text-base font-normal rounded-md px-4 pt-5 pb-[30px] mb-4 relative w-[223px] h-[154px]">
                    {item.text}
                    {/* circle */}
                    <div className="absolute h-[12px] w-[12px] left-[calc(50%-6px)] bg-[#D99A70] bottom-[-28px] rounded-full"></div>
                    {/* Arrow pointing down */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#D99A70] bottom-[-9px]"></div>
                  </div>
                )}

                {/* Year */}
                <p className="text-[#1C5D3F] text-2xl font-normal font_title my-2 absolute alt_year">
                  {item.year}
                </p>

                {/* Bottom card */}
                {!isTop && (
                  <div className="bg-[#D99A70] text-[#FFFCFC] text-base font-normal rounded-md px-4 pt-5 pb-[30px] mt-4 relative w-[223px] h-[154px]">
                    {item.text}
                    {/* circle */}
                    <div className="absolute h-[12px] w-[12px] left-[calc(50%-6px)] top-[-29px] bg-[#D99A70] rounded-full"></div>
                    {/* Arrow pointing up */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#D99A70] top-[-9px]"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
