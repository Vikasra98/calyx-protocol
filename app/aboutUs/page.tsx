import React from "react";
import Header from "../components/Header";
import HeroSecondary from "../components/HeroSecondary";
import TimelineRoadmap from "../components/TimelineRoadmap";
import FoundingStory from "../components/FoundingStory";
import MissionVision from "../components/MissionVision";
import WhatMakes from "../components/WhatMakes";
import HeaderSecondary from "../components/HeaderSecondary";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <HeaderSecondary />
      <HeroSecondary
        title="About Us"
        backgroundImage="/images/about_banner.jpg"
      />
      <MissionVision />
      <FoundingStory />
      <WhatMakes />
      {/* <TimelineRoadmap /> */}
      <Footer />
    </>
  );
};

export default page;
