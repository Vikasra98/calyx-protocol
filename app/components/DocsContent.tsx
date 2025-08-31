"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { map } from "lodash";
import { getDocsPage } from "../helper/api";
import { API_BASE_URL_NO_API } from "@/config";

interface DocItem {
  title: string;
  description: string;
  button: string;
  src: string;
}

const DocsContent = () => {
  const [documents, setDocuments] = useState<DocItem[]>([]);
  const [pageTitle, setPageTitle] = useState("");
  const [pageSubtitle, setPageSubtitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocsPage();
        console.log("Docs API Response:", data); // Debugging

        const attributes = data?.data;
        setPageTitle(attributes?.title || "");
        setPageSubtitle(attributes?.sub_title || "");

        const docsArray = attributes?.docs || [];

        const formattedDocs = docsArray.map((doc: any) => ({
          title: doc.title || "",
          description: doc.sub_title || "",
          button: "Open Document",
          src: doc.icon?.url ? `${API_BASE_URL_NO_API}${doc.icon.url}` : "",
        }));

        setDocuments(formattedDocs);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchData();
  }, []);

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
          {pageTitle}
        </h2>
        <p className="text-[#1C1C1E] text-xl font-normal lg:max-w-3xl text-center">
          {pageSubtitle}
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {map(documents, (doc, index) => (
          <motion.div
            key={`${doc.title}-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="px-4 py-5 rounded-[10px] bg-white transition-shadow duration-300 flex flex-col justify-between items-center"
            style={{ boxShadow: "0px 4px 20px 0px #0000001F" }}
          >
            <div className="flex flex-col items-center">
              {doc.src && (
                <img
                  src={doc.src}
                  alt={doc.title}
                  height={80}
                  width={80}
                  className="mb-[18px]"
                />
              )}
              <h3 className="text-2xl font-normal font_title text-[#12291E] mb-2.5 text-center">
                {doc.title}
              </h3>
              <p className="mb-6 text-[#1C1C1E] text-base font-normal text-center">
                {doc.description}
              </p>
            </div>
            <button className="bg-[#154E35] text-white px-[26px] py-3.5 rounded-md hover:bg-green-800 transition">
              {doc.button}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DocsContent;
