"use client";

import React from "react";

const PrivacyContent = () => {
  return (
    <div className="bg-white text-black min-h-screen flex justify-center px-4 sm:px-6 md:px-12 lg:px-20 lg:py-[100px] py-8">
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <h1 className="lg:text-[44px] md:text-3xl text-2xl font-bold text-center lg:mb-[50px] mb-4 text-[#12291E] font_title">
          Privacy Policy
        </h1>

        {/* <p className="text-center md:text-lg text-base font-normal mb-6">
          Last updated: 2025
        </p> */}

        {/* Intro */}

        {/* Information We Collect */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-6 font_title">
          Information We Collect
        </h2>
        <p className="lg:mb-[40px] mb-6 md:text-lg text-base font-normal text-start leading-relaxed">
          Calyx collects only the information necessary to operate the protocol,
          fulfill legal and compliance obligations, and protect the integrity of
          BUDS (Blockchain Units of Derived Signal). This Privacy Policy and
          Terms of Use explain what information we collect, how we use it, and
          the choices available to you.
        </p>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-none list-inside">
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              1. Account Information <br />
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              When you register, we may collect your name, email address,
              organization details, verifier accreditation records, and
              credentials.
            </p>
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E]">
              2. Verification Data <br />
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              For verifiers, we collect details of submitted verifications,
              including entity identifiers, metrics, supporting evidence, and
              timestamps.
            </p>
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E]">
              3. Technical Information <br />
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              We may automatically collect IP addresses, device identifiers,
              browser type, system logs, and interaction data with the Calyx
              website, APIs, and dashboards.
            </p>
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E]">
              4. On-Chain Records <br />
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Verification events, BUDS issuance, and propagation events are
              anchored immutably on blockchain networks. These records may
              include cryptographic hashes, wallet addresses, and transaction
              metadata.
            </p>
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              5. Compliance Data <br />
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              For regulatory purposes, we may collect and process KYC/AML
              information, including government-issued IDs, corporate
              registrations, and sanction screening results.
            </p>
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              6. Communications <br />
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              If you contact Calyx, we may retain your communications (email,
              support requests, submissions) for record-keeping, training, and
              compliance.
            </p>
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              7. Cookies & Analytics <br />
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Our website may use cookies and analytics tools to monitor
              traffic, usage, and performance. You can control cookie
              preferences via your browser settings.
            </p>
          </li>
        </ul>

        {/* How We Use Your Information */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-6 font_title">
          How We Use Your Information
        </h2>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-decimal list-inside">
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Service Provision <br />
            </strong>{" "}
            To register accounts, enable verifier accreditation, issue BUDS, and
            provide access to dashboards and protocol functions.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Protocol Integrity <br />
            </strong>{" "}
            To authenticate verifiers, prevent fraud, validate verifications,
            and ensure issuance is accurate and tamper-resistant.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Compliance <br />
            </strong>{" "}
            To satisfy legal, regulatory, and contractual obligations, including
            KYC/AML checks and lawful requests.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Security <br />
            </strong>{" "}
            To monitor, detect, and prevent unauthorized access or malicious
            activity.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Improvement & Analytics <br />
            </strong>{" "}
            To analyze protocol usage, performance, and adoption.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Communication <br />
            </strong>{" "}
            To respond to inquiries, notify you of changes, or provide protocol
            updates.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Enforcement <br />
            </strong>{" "}
            To investigate and enforce compliance with these Terms of Use.
          </li>
        </ul>

        {/* Data Sharing */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-6 font_title">
          Data Sharing
        </h2>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-decimal list-inside">
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              With Verifiers <br />
            </strong>{" "}
            Shared for confirming facts, minting BUDS, and maintaining records.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              On-Chain Publication <br />
            </strong>{" "}
            Certain events are recorded immutably on blockchain and cannot be
            altered or deleted.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              With Service Providers <br />
            </strong>{" "}
            Contractors, cloud providers, and partners under confidentiality
            agreements.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              For Legal Compliance <br />
            </strong>{" "}
            Disclosure where required by regulators, courts, or law enforcement.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Corporate Transactions <br />
            </strong>{" "}
            Data may transfer in case of merger or restructuring.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              To Protect Rights and Security <br />
            </strong>{" "}
            Shared when necessary to prevent fraud or safeguard users.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Anonymized & Aggregated Data <br />
            </strong>{" "}
            May be shared for research or benchmarking without identifying
            individuals.
          </li>
        </ul>

        {/* Data Security */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-6 font_title">
          Data Security
        </h2>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-decimal list-inside">
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Security Measures <br />
            </strong>{" "}
            Encryption, access controls, audit logs, and regular reviews.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              On-Chain Anchoring <br />
            </strong>{" "}
            Immutable records on blockchain cannot be deleted.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Verifier Responsibility <br />
            </strong>{" "}
            Verifiers must secure their own credentials and devices.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              No Absolute Security <br />
            </strong>{" "}
            Data transmission carries inherent risks.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Third-Party Dependencies <br />
            </strong>{" "}
            Calyx disclaims liability for failures of third-party
            infrastructure.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Incident Response <br />
            </strong>{" "}
            We will investigate and comply with notification requirements in
            case of a breach.
          </li>
        </ul>

        {/* Your Rights */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-6 font_title">
          Your Rights and Choices
        </h2>
        <p className="mb-6 md:text-lg text-base font-normal leading-relaxed">
          If you are located in the EU, EEA, or similar jurisdictions, you may
          have rights under applicable data protection laws:
        </p>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-decimal list-inside">
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Access <br />
            </strong>{" "}
            Request confirmation of whether we process your data and obtain a
            copy.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Rectification <br />
            </strong>{" "}
            Correct inaccurate or incomplete data.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Erasure <br />
            </strong>{" "}
            Request deletion, except immutable blockchain records.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Restriction <br />
            </strong>{" "}
            Request processing restriction under certain circumstances.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Data Portability <br />
            </strong>{" "}
            Receive data in a structured format and transfer it elsewhere.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Objection <br />
            </strong>{" "}
            Object to processing, including for analytics or communication.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Withdrawal of Consent <br />
            </strong>{" "}
            Withdraw consent at any time.
          </li>
        </ul>

        {/* International Users */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-6 font_title">
          International Users
        </h2>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-decimal list-inside">
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Global Operations <br />
            </strong>{" "}
            Your data may be transferred and processed internationally.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Cross-Border Transfers <br />
            </strong>{" "}
            SCCs or safeguards may be applied where required by law.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              On-Chain Records <br />
            </strong>{" "}
            Immutable blockchain records are globally accessible.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Responsibility of Users <br />
            </strong>{" "}
            You are responsible for compliance with local laws when using Calyx.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              No Liability <br />
            </strong>{" "}
            Calyx disclaims responsibility for conflicts between immutable
            protocol operations and local laws.
          </li>
        </ul>

        {/* Policy Updates */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-6 font_title">
          Policy Updates
        </h2>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-decimal list-inside">
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Right to Amend <br />
            </strong>{" "}
            Calyx may update or replace this policy at any time.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Effective Upon Posting <br />
            </strong>{" "}
            Updates become effective immediately once posted.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              No Obligation to Notify <br />
            </strong>{" "}
            Calyx may notify but is not required to.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Retroactive Application <br />
            </strong>{" "}
            Updates may apply to all past and future data.
          </li>
          <li>
            <strong className="font_title lg:text-4xl text-xl font-bold text-[#12291E] ">
              Severability <br />
            </strong>{" "}
            If any part is invalid, the rest remains enforceable.
          </li>
        </ul>

        {/* Contact */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 font_title text-center">
          Contact
        </h2>
        <p className="mb-6 md:text-lg text-base font-normal text-center leading-relaxed">
          If you have questions, requests, or concerns regarding this Privacy
          Policy or the handling of your information, you may contact Calyx at:
        </p>
        <p className="mb-2 md:text-lg text-base font-semibold text-center">
          Email: privacy@calyxprotocol.com
        </p>
        <p className="md:text-lg text-base font-semibold text-center">
          Address: Regus Helsinki, Mannerheimintie 12B, 00100 Helsinki, Finland
        </p>
        <p className="md:text-lg text-base font-semibold text-center">
          Attention: Data Protection Officer
        </p>
      </div>
    </div>
  );
};

export default PrivacyContent;
