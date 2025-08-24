"use client";

import React from "react";
import SelectDropdown from "./SelectDropdown";

const JoinUsContent = () => {
  const userTypes = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
  ];

  const handleSelectChange = (value: string) => {
    console.log("Selected:", value);
  };
  return (
    <>
      <section className="w-full bg-white lg:py-[100px] py-12 px-6 lg:px-36">
        <div
          className="bg-[#F5F5F3] px-[26px] py-[50px] rounded-xl"
          style={{ boxShadow: "0px 4px 20px 0px #00000012" }}
        >
          <div className="w-full flex items-center flex-col">
            <h2 className="lg:text-[52px] font_title text-2xl md:text-3xl font-bold text-[#12291E] lg:mb-[30px] mb-4">
              Join the Calyx Waitlist Today
            </h2>
            <p className="text-[#1C1C1E] text-xl font-normal lg:mb-[40px] mb-6 lg:max-w-3xl text-center">
              Join our waitlist to get early updates, exclusive access, and play
              a role in building auditable ESG standards.
            </p>
          </div>
          <form className="space-y-4">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-[30px] py-3.5 border-0 rounded-[10px] outline-none bg-white placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-[30px] py-3.5 border-0 rounded-[10px] outline-none bg-white placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70]"
              />
              <input
                type="text"
                placeholder="Organization / Company"
                className="w-full px-[30px] py-3.5 border-0 rounded-[10px] outline-none bg-white placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70]"
              />
              <input
                type="text"
                placeholder="Role / Title"
                className="w-full px-[30px] py-3.5 border-0 rounded-[10px] outline-none bg-white placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70]"
              />
              <SelectDropdown
                options={userTypes}
                placeholder="User Type"
                onChange={handleSelectChange}
              />
            </div>
            <input
              type="text"
              placeholder="LinkedIn / Website (optional)"
              className="w-full px-[30px] py-3.5 border-0 rounded-[10px] outline-none bg-white placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70] mb-6"
            />
            <textarea
              placeholder="Short Motivation (optional)"
              cols={25}
              rows={6}
              className="w-full px-[30px] py-3.5 border-0 rounded-[10px] outline-none bg-white placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70] mb-6"
            ></textarea>
            <div className="flex items-end justify-center w-full mb-6">
              <input
                type="checkbox"
                name="agree"
                placeholder="LinkedIn / Website (optional)"
                className="w-[18px] h-[18px] px-[30px] py-3.5 border-0 rounded-[10px] outline-none bg-white placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70] mb-1 mr-[11px]"
              />
              <label
                htmlFor="agree"
                className="w-full text-[#1C1C1E] text-base font-normal leading-[26px]"
              >
                I agree to be contacted about Calyx updates and understand this
                is a waitlist, not an account creation.
              </label>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                type="submit"
                className="w-full lg:w-[521px] bg-[#12291E] text-[#F5F5F3] py-5 px-[30px] rounded-md hover:bg-green-800 transition text-2xl font-[600]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default JoinUsContent;
