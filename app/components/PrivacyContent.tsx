"use client";

import React from "react";

const PrivacyContent = () => {
  return (
    <div className="bg-white text-black min-h-screen flex justify-center px-4 sm:px-6 md:px-12 lg:px-20 lg:py-[100px] py-8">
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <h1 className="lg:text-[44px] md:text-3xl text-2xl font-bold text-center lg:mb-[30px] mb-4 text-[#12291E] font_title">
          Privacy Policy
        </h1>
        <p className="text-center md:text-lg text-base font-normal mb-6">
          Last updated: 2025
        </p>

        {/* Intro */}
        <p className="lg:mb-[60px] mb-6 md:text-lg text-base font-normal text-center leading-relaxed">
          Calyx Protocol is committed to protecting your privacy and being
          transparent about how we handle your data. This Privacy Policy
          explains what information we collect, how we use it, and the choices
          available to you.
        </p>

        {/* Section */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 font_title">
          Information We Collect
        </h2>
        <p className="lg:mb-[40px] mb-6 md:text-lg text-base font-normal leading-relaxed">
          When you interact with our website, applications, or services, we may
          collect information that you voluntarily provide, such as your name,
          email address, organizational details, or other contact information
          through forms like website sign-ups or webinar applications. We also
          automatically gather certain technical details, including IP
          addresses, browser version, device information, and analytics related
          to how you use our sites. Additionally, we process on-chain data such
          as public blockchain wallet addresses and transactions related to your
          participation in Calyx Protocol, which remain publicly accessible by
          design.
        </p>

        {/* Section */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 font_title">
          How We Use Your Information
        </h2>
        <p className="lg:mb-[40px] mb-6 md:text-lg text-base font-normal leading-relaxed">
          The information we collect helps us provide and improve Calyx
          services. It may be used to process applications, manage verifier or
          governance staker onboarding, communicate protocol updates, and
          maintain security and compliance. We may also use your details to send
          newsletters or updates if you choose to receive them.
        </p>

        {/* Section */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 font_title">
          Data Sharing
        </h2>
        <p className="lg:mb-[40px] mb-6 md:text-lg text-base font-normal leading-relaxed">
          We do not sell or rent your personal data. However, we may share it
          with trusted service providers that support hosting, analytics, or
          communications. Information may also be shared with relevant
          regulators if required for onboarding and compliance. In certain
          circumstances, we may disclose data if required by law or to protect
          the network from malicious activity in situations where using
          blockchain transactions cannot be sufficient. Please note that all
          on-chain activity is viewable on-chain.
        </p>

        {/* Section */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 font_title">
          Data Security
        </h2>
        <p className="lg:mb-[40px] mb-6 md:text-lg text-base font-normal leading-relaxed">
          We employ industry-standard safeguards, including encryption and
          secure hosting, to protect your information. However, no system is
          entirely secure, and blockchain-based data cannot be changed or
          deleted once recorded.
        </p>

        {/* Section */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 font_title">
          Your Rights and Choices
        </h2>
        <p className="lg:mb-[40px] mb-6 md:text-lg text-base font-normal leading-relaxed">
          You can choose to unsubscribe from our communications at any time. If
          you wish to access, correct, or delete personal data you have shared
          with us, you may contact us directly. You also have the option to
          disable cookies through your browser settings, although doing so may
          affect certain features of our website.
        </p>

        {/* Section */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 font_title">
          International Users
        </h2>
        <p className="lg:mb-[40px] mb-6 md:text-lg text-base font-normal leading-relaxed">
          Calyx Protocol is based in the Nordics but operates globally. By using
          our services, you consent to the transfer and processing of your data
          across jurisdictions where we and our service partners are located.
        </p>

        {/* Section */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 font_title">
          Policy Updates
        </h2>
        <p className="lg:mb-[40px] mb-6 md:text-lg text-base font-normal leading-relaxed">
          We may revise this Privacy Policy from time to time. Any updates will
          be reflected on this page, along with a new "Last Updated" date.
        </p>

        {/* Section */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 font_title text-center">
          Contact
        </h2>
        <p className="mb-6 md:text-lg text-base font-normal text-center leading-relaxed">
          If you have questions or requests regarding this Privacy Policy,
          please reach out to us:
        </p>
        <p className="mb-2 md:text-lg text-base font-semibold text-center">
          Email: [Insert Contact Email]
        </p>
        <p className="md:text-lg text-base font-semibold text-center">
          Website: [Insert Website URL]
        </p>
      </div>
    </div>
  );
};

export default PrivacyContent;
