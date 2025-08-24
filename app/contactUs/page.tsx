"use client";

import React from "react";
import Footer from "../components/Footer";
import HeaderSecondary from "../components/HeaderSecondary";
import HeroSecondary from "../components/HeroSecondary";
import TermsOfUseContent from "../components/TermsOfUseContent";
import ContactFormSection from "../components/ContactFormSection";
import ContactMap from "../components/ContactMap";
import dynamic from "next/dynamic";

const page = () => {
  const Map = dynamic(() => import("../components/ContactMap"), {
    ssr: false, // 👈 disables server-side rendering for this component
  });
  return (
    <>
      <HeaderSecondary />
      <HeroSecondary title="Contact Us" backgroundImage="/img/Contact_Us.png" />
      <ContactFormSection />
      <Map />
      <Footer />
    </>
  );
};

export default page;
