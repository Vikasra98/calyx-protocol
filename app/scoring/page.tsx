import React from "react";
import HeaderSecondary from "../components/HeaderSecondary";
import HeroSecondary from "../components/HeroSecondary";
import Footer from "../components/Footer";
import CalyxOverview from "../components/CalyxOverview";
import Specifications from "../components/Specifications";
import Simulations from "../components/Simulations";
import FutureEsg from "../components/FutureEsg";

const page = () => {
  return (
    <>
      <HeaderSecondary />
      <HeroSecondary title="Scoring" backgroundImage="/img/Scoring.png" />
      <CalyxOverview />
      <Specifications />
      <Simulations />
      <FutureEsg />
      <Footer />
    </>
  );
};

export default page;
