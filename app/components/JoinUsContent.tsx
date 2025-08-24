"use client";

import React from "react";
import SelectDropdown from "./SelectDropdown";
import { waitlistSchema } from "../helper/validationSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const JoinUsContent = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(waitlistSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };
  const userTypes = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
  ];

  const countryList = [
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
            <h2 className="lg:text-[52px] font_title text-2xl md:text-3xl font-bold text-[#12291E] lg:mb-[30px] mb-4 text-center">
              Join the Calyx Waitlist Today
            </h2>
            <p className="text-[#1C1C1E] text-xl font-normal lg:mb-[40px] mb-6 lg:max-w-3xl text-center">
              Join our waitlist to get early updates, exclusive access, and play
              a role in building auditable ESG standards.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
              <div>
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder="Full Name"
                  className={`w-full px-[30px] py-3.5 border-1 rounded-[10px] outline-none  placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70] ${
                    errors.fullName
                      ? "border-[#FF6969] bg-[#FFF6F6]"
                      : "border-0 bg-white border-white"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[#FF1F23] text-sm font-normal mt-1.5">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                  className={`w-full px-[30px] py-3.5 border-1 rounded-[10px] outline-none  placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70] ${
                    errors.email
                      ? "border-[#FF6969] bg-[#FFF6F6]"
                      : "border-0 bg-white border-white"
                  }`}
                />
                {errors.email && (
                  <p className="text-[#FF1F23] text-sm font-normal mt-1.5">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("organization")}
                  type="text"
                  placeholder="Organization / Company"
                  className={`w-full px-[30px] py-3.5 border-1 rounded-[10px] outline-none  placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70] ${
                    errors.organization
                      ? "border-[#FF6969] bg-[#FFF6F6]"
                      : "border-0 bg-white border-white"
                  }`}
                />
                {errors.organization && (
                  <p className="text-[#FF1F23] text-sm font-normal mt-1.5">
                    {errors.organization.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("role")}
                  type="text"
                  placeholder="Role / Title"
                  className={`w-full px-[30px] py-3.5 border-1 rounded-[10px] outline-none  placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70] ${
                    errors.role
                      ? "border-[#FF6969] bg-[#FFF6F6]"
                      : "border-0 bg-white border-white"
                  }`}
                />
                {errors.role && (
                  <p className="text-[#FF1F23] text-sm font-normal mt-1.5">
                    {errors.role.message}
                  </p>
                )}
              </div>
              <SelectDropdown
                options={userTypes}
                placeholder="User Type"
                onChange={handleSelectChange}
              />
              <SelectDropdown
                options={countryList}
                placeholder="Country"
                onChange={handleSelectChange}
              />
            </div>
            <div>
              <input
                {...register("website")}
                type="text"
                placeholder="LinkedIn / Website (optional)"
                className={`w-full px-[30px] py-3.5 border-1 rounded-[10px] outline-none  placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70] mb-6 ${
                  errors.website
                    ? "border-[#FF6969] bg-[#FFF6F6]"
                    : "border-0 bg-white border-white"
                }`}
              />
              {errors.website && (
                <p className="text-[#FF1F23] text-sm font-normal mt-1.5">
                  {errors.website.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                {...register("motivation")}
                placeholder="Short Motivation (optional)"
                cols={25}
                rows={6}
                className={`w-full px-[30px] py-3.5 border-1 rounded-[10px] outline-none  placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70] mb-6 ${
                  errors.motivation
                    ? "border-[#FF6969] bg-[#FFF6F6]"
                    : "border-0 bg-white border-white"
                }`}
              ></textarea>
              {errors.motivation && (
                <p className="text-[#FF1F23] text-sm font-normal mt-1.5">
                  {errors.motivation.message}
                </p>
              )}
            </div>
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
                className="w-full lg:w-[521px] bg-[#12291E] text-[#F5F5F3] py-5 px-[30px] rounded-md hover:bg-green-800 transition text-2xl font-[600] cursor-pointer"
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
