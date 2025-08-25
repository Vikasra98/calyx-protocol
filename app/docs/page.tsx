import React from "react";
import HeaderSecondary from "../components/HeaderSecondary";
import HeroSecondary from "../components/HeroSecondary";
import Footer from "../components/Footer";
import DocsContent from "../components/DocsContent";

const page = () => {
  return (
    <>
      <HeaderSecondary />
      <HeroSecondary title="Docs" backgroundImage="/img/Docs.png" />
      <DocsContent />
      <Footer />
    </>
  );
};

export default page;
