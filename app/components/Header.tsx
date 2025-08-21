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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // add shadow when scroll > 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between py-4 px-6 lg:px-36 sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "bg-[#0B2B22] shadow-md" : "bg-[#0B2B22]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="calyx logo"
          width={187}
          height={59}
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex gap-8 text-white">
          <Link href="/" className="hover:text-gray-300 text-xl">
            Home
          </Link>
          <Link href="/aboutUs" className="hover:text-gray-300 text-xl">
            About
          </Link>
          <a href="#" className="hover:text-gray-300 text-xl">
            GitHub
          </a>
          <a href="#" className="hover:text-gray-300 text-xl">
            Docs
          </a>
        </nav>
        <button className="bg-[#d99a70] text-white px-5 py-3 rounded-md hover:bg-[#d18761] text-xl font-[600] cursor-pointer">
          Join Waitlist
        </button>
      </div>

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
            <a href="#" className="hover:text-gray-300 text-lg text-white">
              Home
            </a>
            <a href="#" className="hover:text-gray-300 text-lg text-white">
              About
            </a>
            <a href="#" className="hover:text-gray-300 text-lg text-white">
              GitHub
            </a>
            <a href="#" className="hover:text-gray-300 text-lg text-white">
              Docs
            </a>
            <button className="bg-[#d99a70] text-white px-5 py-3 rounded-md hover:bg-[#d18761] text-lg cursor-pointer">
              Join Waitlist
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
