"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const ContactFormSection = () => {
  return (
    <section className="w-full bg-white lg:py-[100px] py-12 px-6 lg:px-36">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="lg:text-[52px] font_title text-2xl md:text-3xl font-bold text-[#12291E] lg:mb-[30px] mb-4">
            Get a free <br className="lg:block hidden" /> consultation
          </h2>
          <p className="text-[#1C1C1E] text-xl font-normal lg:mb-[40px] mb-6">
            Feel free to ask something we are here
          </p>

          <div className="space-y-6">
            {[
              {
                icon: "/Icon/Call_us_at.png",
                title: "Call us at",
                value: "+ (602) 762 472 96",
              },
              {
                icon: "/Icon/Email_us_on.png",
                title: "Email us on",
                value: "info@calyxprotocol.org",
              },
              {
                icon: "/Icon/Address.png",
                title: "Address",
                value:
                  "Regus Helsinki, Mannerheimintie 12B, 00100 Helsinki, Finland",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap- mb-[30px]"
              >
                <Image
                  className="mr-[30px]"
                  src={item.icon}
                  alt={item.title}
                  height={70}
                  width={70}
                />
                <div>
                  <p className="text-xl font-normal text-[#1C1C1E] leading-8">
                    {item.title}
                  </p>
                  <p className="text-[#1C1C1E] text-2xl font-normal leading-[34px]">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#F5F5F3] px-[26px] py-[50px] rounded-xl cursor-pointer"
          style={{ boxShadow: "0px 4px 20px 0px #00000012" }}
        >
          <form className="space-y-4">
            {["Full Name", "Email Address", "Phone Number"].map(
              (placeholder, i) => (
                <motion.input
                  key={i}
                  type={
                    placeholder === "Email Address"
                      ? "email"
                      : placeholder === "Phone Number"
                      ? "tel"
                      : "text"
                  }
                  placeholder={placeholder}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                  viewport={{ once: true }}
                  className="w-full px-[30px] py-3.5 border-0 rounded-[10px] outline-none bg-white placeholder:text-[#607D70] text-base text-[#607D70]"
                />
              )
            )}

            <motion.textarea
              placeholder="Write your thoughts"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full px-[30px] py-3.5 border-0 rounded-[10px] outline-none bg-white placeholder:text-[#607D70] text-base text-[#607D70]"
            ></motion.textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="w-full bg-[#12291E] text-[#F5F5F3] py-5 px-[30px] rounded-md hover:bg-green-800 transition text-2xl font-[600]"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;
