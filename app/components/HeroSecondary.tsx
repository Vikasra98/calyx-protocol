"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

interface IProps {
  title: string;
  backgroundImage: string;
  breadcrumb?: { label: string; href?: string }[];
}

const HeroSecondary = (props: IProps) => {
  const {
    backgroundImage,
    title,
    breadcrumb = [{ label: "Home", href: "/" }, { label: title }],
  } = props;

  return (
    <section className="relative w-full h-[220px] md:h-[300px] flex items-center justify-center">
      {/* Background image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 bg-black"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-white mb-[30px] font_title font-bold lg:text-[52px]"
        >
          {title}
        </motion.h1>

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-sm md:text-base border-2 backdrop-blur-md px-4 py-3 rounded-md text-white"
        >
          <Home size={16} className="text-[#D99A70] w-[24px] h-[24px]" />
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-orange-400 text-xl"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-xl">{item.label}</span>
              )}
              {index < breadcrumb.length - 1 && (
                <Image
                  src={"/images/icons/arrow_right_alt.png"}
                  alt="arrow"
                  height={24}
                  width={24}
                />
              )}
            </React.Fragment>
          ))}
        </motion.nav>
      </div>
    </section>
  );
};

export default HeroSecondary;
