import React from "react";
import Footer from "../components/Footer";
import HeaderSecondary from "../components/HeaderSecondary";
import HeroSecondary from "../components/HeroSecondary";
import TermsOfUseContent from "../components/TermsOfUseContent";

const page = () => {
  return (
    <>
      <HeaderSecondary />
      <HeroSecondary
        title="Terms of Use"
        backgroundImage="/images/privacy_bg.jpg"
      />
      <TermsOfUseContent />
      {/* <TimelineRoadmap /> */}
      <Footer />
    </>
  );
};

export default page;
