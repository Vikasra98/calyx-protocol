"use client";

import { motion } from "framer-motion";

const documents = [
  {
    src: "/Icon/Protocol_Logic.png",
    title: "Protocol Logic",
    description: "How Calyx Arc® & Compound Matrix™ power ESG scoring.",
    pdf: "/doc/Protocol_Logic.pdf",
    button: "Open Document",
  },
  {
    src: "/Icon/Technical_Integration.png",
    title: "Technical Integration",
    description: "APIs, setup steps, and best practices.",
    pdf: "/doc/Technical_Integration.pdf",
    button: "Open Document",
  },
  {
    src: "/Icon/Governance.png",
    title: "Governance",
    description: "Explore the model and community participation.",
    pdf: "/doc/Governance.pdf",
    button: "Open Document",
  },
  {
    src: "/Icon/Use_Cases.png",
    title: "Use Cases",
    description: "Real-world applications across industries.",
    pdf: "/doc/Use_Cases.pdf",
    button: "Open Document",
  },
];

const DocsContent = () => {
  return (
    <section className="w-full bg-white lg:py-[100px] py-12 px-6 lg:px-36">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col items-center lg:mb-[60px] mb-10"
      >
        <h2 className="lg:text-[52px] font_title text-2xl md:text-3xl font-bold text-[#12291E] lg:mb-[30px] mb-4 text-center">
          Everything you need to build, verify, and integrate with Calyx.
        </h2>
        <p className="text-[#1C1C1E] text-xl font-normal lg:max-w-3xl text-center">
          Calyx Protocol introduces a new standard for ESG scoring — built to be
          verifiable, interoperable, and adaptive to real-world impact.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="px-4 py-5 rounded-[10px] bg-white transition-shadow duration-300 flex flex-col justify-between items-center"
            style={{ boxShadow: "0px 4px 20px 0px #0000001F" }}
          >
            <div className="flex flex-col items-center">
              <img
                src={doc.src}
                alt={doc.src}
                height={80}
                width={80}
                className="mb-[18px]"
              />
              <h3 className="text-2xl font-normal font_title text-[#12291E] mb-2.5 text-center">
                {doc.title}
              </h3>
              <p className="mb-6 text-[#1C1C1E] text-base font-normal text-center">
                {doc.description}
              </p>
            </div>
            <button
              className="cursor-pointer bg-[#154E35] text-white px-[26px] py-3.5 rounded-md hover:bg-green-800 transition"
              onClick={() => window.open(doc.pdf, "_blank")}
            >
              {doc.button}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DocsContent;
