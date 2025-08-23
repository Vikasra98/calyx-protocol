"use client";

import Image from "next/image";
import { Github, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-[70px] pb-6 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-14 lg:gap-96">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-[18px]">
            <Image
              src="/Logo/logo_White.png"
              alt="calyx logo"
              width={180}
              height={57}
            />
          </div>
          <p className="mb-4 text-xl font-normal">
            Built in the Nordics. Open to the world.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80 transition">
              <Image
                src="/images/git.png"
                alt="calyx logo"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Image
                src="/images/mail.png"
                alt="calyx logo"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Image
                src="/images/twitter.png"
                alt="calyx logo"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
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
                alt="calyx logo"
                width={30}
                height={30}
              />
              {/* ➤ */}
            </button>
          </form>
          <div className="flex gap-6 text-sm flex-wrap">
            <a
              href="/contactUs"
              className="hover:text-white text-xl font-normal"
            >
              CONTACT
            </a>
            <a href="/aboutUs" className="hover:text-white text-xl font-normal">
              ABOUT
            </a>
            <a href="#" className="hover:text-white text-xl font-normal">
              DOCS
            </a>
            <a href="/privacy" className="hover:text-whit text-xl font-normale">
              PRIVACY
            </a>
            <a
              href="/termsOfUse"
              className="hover:text-white text-xl font-normal"
            >
              TERMS
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t-2 border-[#d9d9d9] mt-8 pt-6 text-center text-base text-[#f5f5f3]">
        © Calyx Protocol 2025
      </div>
    </footer>
  );
};

export default Footer;
