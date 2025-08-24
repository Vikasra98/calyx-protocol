import React from "react";
import Header from "../components/Header";
import HeroSecondary from "../components/HeroSecondary";
import TimelineRoadmap from "../components/Timeline";
import FoundingStory from "../components/FoundingStory";
import MissionVision from "../components/MissionVision";
import WhatMakes from "../components/WhatMakes";
import HeaderSecondary from "../components/HeaderSecondary";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

const page = () => {
  return (
    <>
      <HeaderSecondary />
      <HeroSecondary title="About Us" backgroundImage="/img/About_Us.png" />
      <MissionVision />
      <FoundingStory />
      <WhatMakes />
      <Timeline />
      <Footer />
    </>
  );
};

export default page;
