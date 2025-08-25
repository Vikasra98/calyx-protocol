"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation Variants
  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.5 + i * 0.1 },
    }),
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex items-center justify-between py-4 px-6 lg:px-36 sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "bg-[#0B2B22] shadow-md " : "bg-[#0B2B22]"
      }`}
    >
      {/* Logo Animation */}
      <motion.a
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-2"
        href="/"
      >
        <Image
          src="/Logo/logo_White.png"
          alt="calyx logo"
          width={187}
          height={59}
        />
      </motion.a>

      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hidden md:flex items-center gap-8"
      >
        <nav className="flex gap-8 text-white">
          {["Home", "About", "GitHub", "Docs"].map((item, index) => (
            <motion.div
              key={item}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
            >
              <Link
                href={item === "About" ? "/aboutUs" : "#"}
                className="hover:text-gray-300 text-xl"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="bg-[#d99a70] text-white px-5 py-3 rounded-md hover:bg-[#d18761] text-xl font-[600] cursor-pointer"
          href="/joinUs"
        >
          Join Waitlist
        </motion.a>
      </motion.div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#0B2B22] flex flex-col items-center gap-6 py-6 shadow-lg md:hidden z-50"
          >
            {["Home", "About", "GitHub", "Docs"].map((item, index) => (
              <motion.a
                key={item}
                href={item === "About" ? "/aboutUs" : "#"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:text-gray-300 text-lg text-white"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-[#d99a70] text-white px-5 py-3 rounded-md hover:bg-[#fff] hover:text-[#174d3d] hover:transition-all text-lg cursor-pointer"
              href="/joinUs"
            >
              Join Waitlist
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
