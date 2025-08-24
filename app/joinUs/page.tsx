import React from "react";
import HeaderSecondary from "../components/HeaderSecondary";
import HeroSecondary from "../components/HeroSecondary";
import Footer from "../components/Footer";
import JoinUsContent from "../components/JoinUsContent";
import FAQ from "../components/FAQ";

const page = () => {
  const faqData = [
    {
      question: "Who can apply as a verifier?",
      answer:
        "Any credentialed professional or organization with proven ESG, auditing, or certification expertise.",
    },
    {
      question: "What do test partners need to provide?",
      answer: "They must provide required documentation and testing details.",
    },
    {
      question: "Do governance observers get voting rights?",
      answer: "No, they only have observation privileges.",
    },
    {
      question: "Is there a cost to join?",
      answer: "No, joining is completely free.",
    },
  ];
  return (
    <>
      <HeaderSecondary />
      <HeroSecondary title="Join Us" backgroundImage="/img/Join_Us.png" />
      <JoinUsContent />
      <FAQ faqs={faqData} />
      <Footer />
    </>
  );
};

export default page;
