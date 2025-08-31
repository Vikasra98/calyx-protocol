"use client";

import React from "react";

const PrivacyContent = () => {
  return (
    <div className="bg-white text-black min-h-screen flex justify-center px-4 sm:px-6 md:px-12 lg:px-20 lg:py-[100px] py-8">
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <h1 className="lg:text-[52px] text-4xl sm:text-3xl md:text-4xl font-bold text-center text-[#12291E] font_title lg:mb-[50px] mb-4">
          Privacy Policy
        </h1>

        {/* <p className="text-center md:text-lg text-base font-normal mb-6">
          Last updated: 2025
        </p> */}

        {/* Intro */}

        {/* Information We Collect */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px] text-[#12291E]">
          Information We Collect
        </h2>
        <p className="lg:mb-[40px] mb-6 md:text-lg lg:text-xl text-base font-normal text-start leading-relaxed">
          Calyx collects only the information necessary to operate the protocol,
          fulfill legal and compliance obligations, and protect the integrity of
          BUDS (Blockchain Units of Derived Signal). This Privacy Policy and
          Terms of Use explain what information we collect, how we use it, and
          the choices available to you.
        </p>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-none list-inside lg:ps-11 ps-9 lg:mt-[40px] mt-6">
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              1. Account Information
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              When you register, we may collect your name, email address,
              organization details, verifier accreditation records, and
              credentials.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              2. Verification Data
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              For verifiers, we collect details of submitted verifications,
              including entity identifiers, metrics, supporting evidence, and
              timestamps.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              3. Technical Information
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              We may automatically collect IP addresses, device identifiers,
              browser type, system logs, and interaction data with the Calyx
              website, APIs, and dashboards.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              4. On-Chain Records
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Verification events, BUDS issuance, and propagation events are
              anchored immutably on blockchain networks. These records may
              include cryptographic hashes, wallet addresses, and transaction
              metadata.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              5. Compliance Data
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              For regulatory purposes, we may collect and process KYC/AML
              information, including government-issued IDs, corporate
              registrations, and sanction screening results.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              6. Communications
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              If you contact Calyx, we may retain your communications (email,
              support requests, submissions) for record-keeping, training, and
              compliance.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              7. Cookies & Analytics
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Our website may use cookies and analytics tools to monitor
              traffic, usage, and performance. You can control cookie
              preferences via your browser settings.
            </p>
          </li>
        </ul>

        {/* How We Use Your Information */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px] text-[#12291E]">
          How We Use Your Information
        </h2>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-none list-inside lg:ps-11 ps-9 lg:mt-[40px] mt-6">
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              1. Service Provision
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              To register accounts, enable verifier accreditation, issue BUDS,
              and provide access to dashboards and protocol functions.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              2. Protocol Integrity
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              To authenticate verifiers, prevent fraud, validate verifications,
              and ensure issuance is accurate and tamper-resistant.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              3. Compliance
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              To satisfy legal, regulatory, and contractual obligations,
              including KYC/AML checks and lawful requests.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              4. Security
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              To monitor, detect, and prevent unauthorized access or malicious
              activity.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              5. Improvement & Analytics
            </strong>{" "}
            To analyze protocol usage, performance, and adoption.
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              6. Communication
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              To respond to inquiries, notify you of changes, or provide
              protocol updates.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              7. Enforcement
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              To investigate and enforce compliance with these Terms of Use.
            </p>
          </li>
        </ul>

        {/* Data Sharing */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px] text-[#12291E]">
          Data Sharing
        </h2>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-none list-inside lg:ps-11 ps-9 lg:mt-[40px] mt-6">
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              1. With Verifiers
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Shared for confirming facts, minting BUDS, and maintaining
              records.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              2. On-Chain Publication
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Certain events are recorded immutably on blockchain and cannot be
              altered or deleted.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              3. With Service Providers
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Contractors, cloud providers, and partners under confidentiality
              agreements.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              4. For Legal Compliance
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Disclosure where required by regulators, courts, or law
              enforcement.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              5. Corporate Transactions
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Data may transfer in case of merger or restructuring.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              6. To Protect Rights and Security
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Shared when necessary to prevent fraud or safeguard users.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              7. Anonymized & Aggregated Data
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              May be shared for research or benchmarking without identifying
              individuals.
            </p>
          </li>
        </ul>

        {/* Data Security */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px] text-[#12291E]">
          Data Security
        </h2>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-none list-inside lg:ps-11 ps-9 lg:mt-[40px] mt-6">
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              1. Security Measures
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Encryption, access controls, audit logs, and regular reviews.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              2. On-Chain Anchoring
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Immutable records on blockchain cannot be deleted.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              3. Verifier Responsibility
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Verifiers must secure their own credentials and devices.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              4. No Absolute Security
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Data transmission carries inherent risks.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              5. Third-Party Dependencies
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Calyx disclaims liability for failures of third-party
              infrastructure.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              6. Incident Response
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              We will investigate and comply with notification requirements in
              case of a breach.
            </p>
          </li>
        </ul>

        {/* Your Rights */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px] text-[#12291E]">
          Your Rights and Choices
        </h2>
        <p className="mb-6 md:text-lg text-base font-normal leading-relaxed">
          If you are located in the EU, EEA, or similar jurisdictions, you may
          have rights under applicable data protection laws:
        </p>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-none list-inside lg:ps-11 ps-9 lg:mt-[40px] mt-6">
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              1. Access
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Request confirmation of whether we process your data and obtain a
              copy.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              2. Rectification
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Correct inaccurate or incomplete data.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              3. Erasure
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Request deletion, except immutable blockchain records.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              4. Restriction
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Request processing restriction under certain circumstances.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              5. Data Portability
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Receive data in a structured format and transfer it elsewhere.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              6. Objection
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Object to processing, including for analytics or communication.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              7. Withdrawal of Consent
            </strong>{" "}
            <p className="lg:mt-5 mt-3">Withdraw consent at any time.</p>
          </li>
        </ul>

        {/* International Users */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px] text-[#12291E]">
          International Users
        </h2>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-none list-inside lg:ps-11 ps-9 lg:mt-[40px] mt-6">
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              1. Global Operations
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Your data may be transferred and processed internationally.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              2. Cross-Border Transfers
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              SCCs or safeguards may be applied where required by law.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              3. On-Chain Records
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Immutable blockchain records are globally accessible.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              4. Responsibility of Users
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              You are responsible for compliance with local laws when using
              Calyx.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              5. No Liability
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Calyx disclaims responsibility for conflicts between immutable
              protocol operations and local laws.
            </p>
          </li>
        </ul>

        {/* Policy Updates */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px] text-[#12291E]">
          Policy Updates
        </h2>
        <ul className="space-y-6 md:text-lg text-base font-normal leading-relaxed mb-[60px] list-none list-inside lg:ps-11 ps-9 lg:mt-[40px] mt-6">
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              1. Right to Amend
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Calyx may update or replace this policy at any time.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              2. Effective Upon Posting
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Updates become effective immediately once posted.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              3. No Obligation to Notify
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Calyx may notify but is not required to.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              4. Retroactive Application
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              Updates may apply to all past and future data.
            </p>
          </li>
          <li>
            <strong className="font_title font-bold lg:text-[28px] text-xl mb-4 text-[#12291E] ">
              5. Severability
            </strong>{" "}
            <p className="lg:mt-5 mt-3">
              If any part is invalid, the rest remains enforceable.
            </p>
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
