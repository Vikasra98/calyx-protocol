import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import EsgScores from "../components/EsgScores";
import HowItWorks from "../components/HowItWorks";
import WhoItsFor from "../components/WhoItsFor";
import ProtocolInTesting from "../components/ProtocolInTesting";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <EsgScores />
      <HowItWorks />
      <WhoItsFor />
      <ProtocolInTesting />
      <Footer />
    </>
  );
};

export default Landing;
