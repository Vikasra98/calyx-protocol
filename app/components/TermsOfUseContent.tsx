// app/terms/page.tsx (Next.js 13+ App Router)
"use client";

import React from "react";

const TermsOfUseContent = () => {
  return (
    <div className="bg-white text-black min-h-screen flex justify-center px-4 sm:px-8 lg:px-20 lg:py-[100px] py-10">
      <div className="max-w-5xl w-full">
        {/* Title */}
        <h1 className="lg:text-[44px] text-2xl font-bold text-center lg:mb-[30px] mb-2 text-[#12291E] font_title">
          Terms of Use
        </h1>
        <p className="text-center text-xl font-normal mb-8">
          Last updated: 2025
        </p>

        {/* Intro */}
        <p className="lg:mb-[60px] mb-6 text-xl font-normal text-center">
          Welcome to Calyx Protocol. By accessing or using our website,
          applications, and related services (“Services”), you agree to these
          Terms of Use. Please read them carefully, as they form a binding
          agreement between you and Calyx Protocol.
        </p>

        {/* Section 1 */}
        <h2 className="text-4xl font-bold mb-5 font_title">1. Eligibility</h2>
        <p className="lg:mb-[40px] mb-6 text-xl font-normal">
          Our Services are intended for individuals and organizations who are
          legally capable of entering into binding contracts under applicable
          law. By using Calyx Protocol, you confirm that you meet this
          requirement.
        </p>

        {/* Section 2 */}
        <h2 className="text-4xl font-bold mb-5 font_title">
          2. Use of Services
        </h2>
        <p className="lg:mb-[40px] mb-6 text-xl font-normal">
          You agree to use our Services only for lawful purposes and in
          accordance with these Terms. You must not attempt to misuse or disrupt
          the platform, interfere with its functionality, or access data without
          authorization. Any use of Calyx Protocol for fraudulent, misleading,
          or illegal purposes is strictly prohibited.
        </p>

        {/* Section 3 */}
        <h2 className="text-4xl font-bold mb-5 font_title">
          3. Accounts and Applications
        </h2>
        <p className="lg:mb-[40px] mb-6 text-xl font-normal">
          If you submit an application to become a verifier, test partner, or
          governance observer, you are responsible for providing accurate and
          up-to-date information. We reserve the right to review, approve, or
          reject applications at our sole discretion. You are also responsible
          for maintaining the confidentiality of any credentials associated with
          your account.
        </p>

        {/* Section 4 */}
        <h2 className="text-4xl font-bold mb-5 font_title">
          4. Intellectual Property
        </h2>
        <p className="lg:mb-[40px] mb-6 text-xl font-normal">
          All content on the Calyx Protocol website, including text, graphics,
          trademarks, and software, is the property of Calyx Protocol or its
          licensors and is protected under applicable intellectual property
          laws. You may not copy, reproduce, or distribute our materials without
          prior written consent.
        </p>

        {/* Section 5 */}
        <h2 className="text-4xl font-bold mb-5 font_title">5. Disclaimers</h2>
        <p className="lg:mb-[40px] mb-6 text-xl font-normal">
          Our Services are provided “as is” and “as available,” without
          warranties of any kind. While we strive to ensure accuracy and
          reliability, Calyx Protocol does not guarantee that all information or
          scoring outputs will be error-free, uninterrupted, or suitable for
          every use case. ESG scoring and verification involve complex
          processes, and results should not be interpreted as financial or
          investment advice.
        </p>

        {/* Section 6 */}
        <h2 className="text-4xl font-bold mb-5 font_title">
          6. Limitation of Liability
        </h2>
        <p className="lg:mb-[40px] mb-6 text-xl font-normal">
          To the maximum extent permitted by law, Calyx Protocol shall not be
          liable for any indirect, incidental, or consequential damages arising
          from your use of the Services, including but not limited to data loss,
          service interruptions, or reliance on scoring outputs.
        </p>

        {/* Section 7 */}
        <h2 className="text-4xl font-bold mb-5 font_title">7. Governing Law</h2>
        <p className="lg:mb-[40px] mb-6 text-xl font-normal">
          These Terms are governed by and construed in accordance with the laws
          of [Insert Jurisdiction]. Any disputes shall be subject to the
          exclusive jurisdiction of the courts located in [Insert Jurisdiction].
        </p>

        {/* Policy Updates */}
        <h2 className="text-4xl font-bold mb-5 font_title">Policy Updates</h2>
        <p className="lg:mb-[40px] mb-6 text-xl font-normal">
          We may revise this Privacy Policy from time to time. Any updates will
          be reflected on this page, along with a new “Last Updated” date.
        </p>

        {/* Contact */}
        <h2 className="text-4xl font-bold mb-5 font_title text-center">
          Contact
        </h2>
        <p className="mb-10 text-xl font-normal text-center">
          If you have questions or requests regarding this Privacy Policy,
          please reach out to us:
        </p>
        <p className="mb-2 text-xl font-semibold text-center">
          Email: [Insert Contact Email]
        </p>
        <p className="text-xl font-semibold text-center">
          Website: [Insert Website URL]
        </p>
      </div>
    </div>
  );
};

export default TermsOfUseContent;
