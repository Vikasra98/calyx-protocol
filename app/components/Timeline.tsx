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
    <section className="bg-white py-16 relative">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Timeline & Roadmap</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          While most ESG systems rely on opaque scoring and manual verification,
          Calyx transforms the process with
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 hidden md:block"></div>

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
                className="relative flex flex-col items-center"
              >
                {/* Top card */}
                {isTop && (
                  <div className="bg-orange-400 text-white text-sm rounded-md p-4 max-w-[180px] mb-4 relative">
                    {item.text}
                    {/* Arrow pointing down */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-orange-400 bottom-[-10px]"></div>
                  </div>
                )}

                {/* Year */}
                <p className="text-green-800 font-semibold my-2">{item.year}</p>

                {/* Bottom card */}
                {!isTop && (
                  <div className="bg-orange-400 text-white text-sm rounded-md p-4 max-w-[180px] mt-4 relative">
                    {item.text}
                    {/* Arrow pointing up */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-orange-400 top-[-10px]"></div>
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
