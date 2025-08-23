"use client";

import Image from "next/image";
import { MapContainer, TileLayer } from "react-leaflet";
import React from "react";
import { LatLngExpression } from "leaflet";

const ContactFormSection = () => {
  const center: LatLngExpression = [40.7128, -74.006]; // New York
  return (
    <>
      <section className="w-full bg-white lg:py-[100px] py-12 px-6 lg:px-36">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="lg:text-[52px] font_title text-2xl md:text-3xl font-bold text-[#12291E] lg:mb-[30px] mb-4">
              Get a free <br /> consultation
            </h2>
            <p className="text-[#1C1C1E] text-xl font-normal lg:mb-[40px] mb-6">
              Feel free to ask something we are here
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap- mb-[30px]">
                <Image
                  className="mr-[30px]"
                  src="/Icon/Call_us_at.png"
                  alt="Call_us_at"
                  height={70}
                  width={70}
                />
                <div>
                  <p className="text-xl font-normal text-[#1C1C1E] leading-8 ">
                    Call us at
                  </p>
                  <p className="text-[#1C1C1E] text-2xl font-normal leading-[34px]">
                    + (602) 762 472 96
                  </p>
                </div>
              </div>

              <div className="flex items-center gap- mb-[30px]">
                <Image
                  className="mr-[30px]"
                  src="/Icon/Email_us_on.png"
                  alt="Email_us_on"
                  height={70}
                  width={70}
                />
                <div>
                  <p className="text-xl font-normal text-[#1C1C1E] leading-8 mb-0.5">
                    Email us on
                  </p>
                  <p className="text-[#1C1C1E] text-2xl font-normal leading-[34px]">
                    company@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap- mb-[30px]">
                <Image
                  className="mr-[30px]"
                  src="/Icon/Address.png"
                  alt="Address"
                  height={70}
                  width={70}
                />
                <div>
                  <p className="text-xl font-normal text-[#1C1C1E] leading-8 mb-0.5">
                    Address
                  </p>
                  <p className="text-[#1C1C1E] text-2xl font-normal leading-[34px]">
                    102 Washington, New York
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className="bg-[#F5F5F3] px-[26px] py-[50px] rounded-xl"
            style={{ boxShadow: "0px 4px 20px 0px #00000012" }}
          >
            <form className="space-y-4">
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
                type="tel"
                placeholder="Phone Number"
                className="w-full px-[30px] py-3.5 border-0 rounded-[10px] outline-none bg-white placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70]"
              />
              <textarea
                placeholder="Write your thoughts"
                className="w-full px-[30px] py-3.5 border-0 rounded-[10px] outline-none bg-white placeholder:text-[#607D70] placeholder:text-base text-base text-[#607D70]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#12291E] text-[#F5F5F3] py-5 px-[30px] rounded-md hover:bg-green-800 transition text-2xl font-[600]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="w-full h-[500px]">
        <MapContainer
          center={center}
          zoom={10}
          className="w-full h-full rounded-lg shadow-md"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          />
        </MapContainer>
      </div>
    </>
  );
};

export default ContactFormSection;
