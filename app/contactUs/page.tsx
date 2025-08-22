import React from "react";
import Footer from "../components/Footer";
import HeaderSecondary from "../components/HeaderSecondary";
import HeroSecondary from "../components/HeroSecondary";
import TermsOfUseContent from "../components/TermsOfUseContent";
import ContactFormSection from "../components/ContactFormSection";

const page = () => {
  return (
    <>
      <HeaderSecondary />
      <HeroSecondary
        title="Contact Us"
        backgroundImage="/images/contact_banner.jpg"
      />
      <ContactFormSection />
      <Footer />
    </>
  );
};

export default page;
