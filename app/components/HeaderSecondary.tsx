"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Parent animation for menu
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.5 },
  },
};

// Animation for menu items
const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Logo animation
const logoVariants: any = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeaderSecondary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutUs" },
    { name: "GitHub", href: "https://github.com", external: true },
    { name: "Docs", href: "/docs" },
  ];

  return (
    <header
      className={`flex items-center justify-between py-4 px-6 lg:px-36 sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "bg-[#F5F5F3] shadow-md" : "bg-[#F5F5F3]"
      }`}
    >
      {/* Logo with animation */}
      <motion.a
        variants={logoVariants}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2"
        href="/"
      >
        <Image
          src="/Logo/fullcolor_horizontal_calyx_logo.png"
          alt="calyx logo"
          width={187}
          height={59}
          priority
        />
      </motion.a>

      {/* Desktop Nav with staggered animation */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="show"
        className="hidden md:flex items-center gap-8 text-[#1C1C1E]"
      >
        {navLinks.map((link, index) => (
          <motion.div key={index} variants={itemVariants}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1C1C1E] text-xl"
              >
                {link.name}
              </a>
            ) : (
              <Link href={link.href} className="hover:text-[#1C1C1E] text-xl">
                {link.name}
              </Link>
            )}
          </motion.div>
        ))}
        <motion.div variants={itemVariants}>
          <a
            href="/joinUs"
            className="bg-[#d99a70] text-white px-5 py-3 rounded-md hover:bg-[#d18761] text-xl font-[600] cursor-pointer"
          >
            Join Waitlist
          </a>
        </motion.div>
      </motion.nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#12291E] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown with stagger animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={navVariants}
            className="absolute top-full left-0 w-full bg-[#0B2B22] flex flex-col items-center gap-6 py-6 shadow-lg md:hidden z-50"
          >
            {navLinks.map((link, index) => (
              <motion.div key={index} variants={itemVariants}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 text-lg text-white"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="hover:text-gray-300 text-lg text-white"
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <a
                href="/joinUs"
                className="bg-[#d99a70] text-white px-5 py-3 rounded-md hover:bg-[#fff] hover:text-[#174d3d] hover:transition-all cursor-pointer] text-lg cursor-pointer"
              >
                Join Waitlist
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderSecondary;
