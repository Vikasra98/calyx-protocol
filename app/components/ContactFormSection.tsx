// components/ConsultationForm.tsx
"use client";

import React from "react";

const ContactFormSection = () => {
  return (
    <section className="w-full bg-white lg:py-[100px] py-12 px-6 lg:px-36">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="lg:text-[52px] font_title text-2xl md:text-3xl font-bold text-[#12291E] lg:mb-[30px] mb-4">
            Get a free consultation
          </h2>
          <p className="text-[#1C1C1E] text-xl font-normal lg:mb-[40px] mb-6">
            Feel free to ask something we are here
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-900 text-white p-3 rounded-lg">📞</div>
              <p className="text-gray-800">+ (602) 762 472 96</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-900 text-white p-3 rounded-lg">📧</div>
              <p className="text-gray-800">company@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-900 text-white p-3 rounded-lg">📍</div>
              <p className="text-gray-800">102 Washington, New York</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-900 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-900 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-900 outline-none"
            />
            <textarea
              placeholder="Write your thoughts"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-900 outline-none h-28"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-900 text-white py-3 rounded-md hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
