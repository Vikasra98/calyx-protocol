"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="bg-[#1A1A1A] text-gray-300 pt-[70px] pb-6 px-6 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-14 lg:gap-96"
        variants={containerVariants}
      >
        {/* Left Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-[18px]">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/Logo/logo_White.png"
                alt="calyx logo"
                width={180}
                height={57}
              />
            </motion.div>
          </div>
          <p className="mb-4 text-xl font-normal">
            Built in the Nordics. Open to the world.
          </p>
          <div className="flex gap-4">
            {["/Icon/GitHub.png", "/Icon/Email_us_on.png", "/Icon/X.png"].map(
              (icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="hover:opacity-80 transition"
                >
                  <Image src={icon} alt="social icon" width={30} height={30} />
                </motion.a>
              )
            )}
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div className="flex-1" variants={itemVariants}>
          <h3 className="text-2xl font-normal mb-5 font_title">Newsletter</h3>
          <form className="flex mb-7">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 px-4 py-3 bg-[#40675A] text-white placeholder-gray-200 focus:outline-none rounded mr-2.5"
            />
            <button
              type="submit"
              className="p-3 bg-[#d99a70] hover:opacity-90 transition rounded cursor-pointer"
            >
              <Image
                src="/images/send.png"
                alt="send icon"
                width={30}
                height={30}
              />
            </button>
          </form>
          <div className="flex gap-6 text-sm flex-wrap">
            {[
              { href: "/contactUs", label: "CONTACT" },
              { href: "/aboutUs", label: "ABOUT" },
              { href: "#", label: "DOCS" },
              { href: "/privacy", label: "PRIVACY" },
              { href: "/termsOfUse", label: "TERMS" },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="hover:text-white text-xl font-normal"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        className="border-t-2 border-[#d9d9d9] mt-8 pt-6 text-center text-base text-[#f5f5f3]"
        variants={itemVariants}
      >
        © Calyx Protocol 2025
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
