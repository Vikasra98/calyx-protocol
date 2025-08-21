import React from "react";
import Header from "../components/Header";
import HeroSecondary from "../components/HeroSecondary";
import TimelineRoadmap from "../components/TimelineRoadmap";
import FoundingStory from "../components/FoundingStory";

const page = () => {
  return (
    <>
      <Header />
      <HeroSecondary
        title="About Us"
        backgroundImage="/images/about_banner.jpg"
      />
      <FoundingStory />
      <TimelineRoadmap />
    </>
  );
};

export default page;
