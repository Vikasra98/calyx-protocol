import React from "react";
import PrivacyContent from "../components/PrivacyContent";
import Footer from "../components/Footer";
import HeaderSecondary from "../components/HeaderSecondary";
import HeroSecondary from "../components/HeroSecondary";

const page = () => {
  return (
    <>
      <HeaderSecondary />
      <HeroSecondary
        title="Privacy Policy"
        backgroundImage="/images/about_banner.jpg"
      />
      <PrivacyContent />
      {/* <TimelineRoadmap /> */}
      <Footer />
    </>
  );
};

export default page;
