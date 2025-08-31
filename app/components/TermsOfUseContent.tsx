"use client";

import React from "react";

const TermsOfUseContent = () => {
  return (
    <div className="bg-white text-black min-h-screen flex justify-center px-4 sm:px-8 lg:px-20 lg:py-[100px] py-10">
      <div className="max-w-5xl w-full">
        {/* Title */}
        <h1 className="lg:text-[44px] text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-[#12291E] font_title">
          Terms of Use
        </h1>

        {/* Sections */}
        <div className="space-y-12">
          {/* Eligibility */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px]">
              Eligibility
            </h2>
            <p className="mb-6 text-base sm:text-lg font-normal">
              To use the Calyx Protocol and related services, you must meet the
              following criteria:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font_title font-bold lg:text-[36px] text-xl mb-2">
                  1. Legal Capacity
                </h3>
                <p className="text-xl">
                  You must be at least 18 years old, or the legal age of
                  majority in your jurisdiction, and have the capacity to enter
                  into binding agreements.
                </p>
              </div>
              <div>
                <h3 className="font_title font-bold lg:text-[36px] text-xl mb-2">
                  2. Entity Eligibility
                </h3>
                <p className="text-xl">
                  If you are accessing the protocol on behalf of a company,
                  organization, or institution, you must have the authority to
                  bind that entity to these Terms.
                </p>
              </div>
              <div>
                <h3 className="font_title font-bold lg:text-[36px] text-xl mb-2">
                  3. Verifier Accreditation
                </h3>
                <p className="text-xl">
                  To act as a verifier, you must complete the Calyx
                  accreditation process, including identity verification,
                  compliance checks, and agreement to the Calyx Verifier
                  Agreement.
                </p>
              </div>
              <div>
                <h3 className="font_title font-bold lg:text-[36px] text-xl mb-2">
                  4. Compliance
                </h3>
                <p className="text-xl">
                  You may not use the protocol if you are:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Located in a jurisdiction where use of blockchain-based
                    services is prohibited,
                  </li>
                  <li>
                    Subject to sanctions or restrictions under applicable laws,
                    or
                  </li>
                  <li>
                    Barred from using Calyx services under any previous
                    suspension or removal.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font_title font-bold lg:text-[36px] text-xl mb-2">
                  5. Good Faith Use
                </h3>
                <p className="text-xl">
                  Access to Calyx requires adherence to its principles of
                  transparency, integrity, and accurate reporting.
                  Misrepresentation or fraudulent use of the protocol is
                  strictly prohibited.
                </p>
              </div>
            </div>
          </section>

          {/* Use of Services */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px]">
              Use of Services
            </h2>
            <div className="space-y-6">
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  1. Purpose –
                </span>{" "}
                The Calyx Protocol provides infrastructure for the creation,
                issuance, and consultation of BUDS (Blockchain Units of Derived
                Signal). These services are intended for use in verifying,
                recording, and propagating trusted data.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  2. Permitted Use –
                </span>{" "}
                You may use the protocol, APIs, dashboards, and documentation
                solely for lawful purposes, in accordance with these Terms, and
                only in the manner expressly permitted by Calyx.
              </p>
              <div>
                <p className="text-xl">
                  <span className="font_title lg:text-[36px] font-bold text-xl">
                    3. Prohibited Conduct –
                  </span>{" "}
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tamper with or falsify verification data,</li>
                  <li>
                    Attempt to manipulate BUDS issuance, compounding, or
                    propagation,
                  </li>
                  <li>
                    Interfere with or disrupt the security, integrity, or
                    performance of the protocol,
                  </li>
                  <li>
                    Reverse-engineer, decompile, or extract proprietary elements
                    of the protocol except where explicitly permitted by
                    open-source licenses,
                  </li>
                  <li>
                    Use the services in violation of applicable laws, sanctions,
                    or regulatory obligations.
                  </li>
                </ul>
              </div>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  4. Verifier-Specific Use –
                </span>{" "}
                Accredited verifiers must act with professional diligence,
                accuracy, and impartiality. Verifications submitted through the
                protocol are binding representations and may be subject to audit
                or challenge.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  5. Reservation of Rights –
                </span>{" "}
                Calyx reserves the right to monitor, restrict, suspend, or
                terminate access to the services if misuse, fraudulent activity,
                or violations of these Terms are detected.
              </p>
            </div>
          </section>

          {/* Accounts and Applications */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px]">
              Accounts and Applications
            </h2>
            <div className="space-y-6">
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  1. Account Creation –
                </span>{" "}
                To access certain features of the Calyx Protocol (including
                verifier dashboards, APIs, and integration tools), you may be
                required to create an account. You agree to provide accurate,
                current, and complete information during registration and to
                keep your account details updated at all times.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  2. Access Credentials –
                </span>{" "}
                You are responsible for maintaining the confidentiality of your
                login credentials, API keys, and authentication tokens. Any
                activity carried out under your account will be deemed your
                responsibility.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  3. Application Submissions –
                </span>{" "}
                Entities applying for verifier status or other roles within the
                protocol must provide supporting documentation as required by
                Calyx. All applications are subject to review and approval, and
                Calyx reserves the right to accept, reject, or revoke
                participation at its sole discretion.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  4. Use by Authorized Representatives –
                </span>{" "}
                If you open an account on behalf of an organization, only
                authorized employees, agents, or representatives may access the
                protocol under that account. You are responsible for ensuring
                that such users comply with these Terms.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  5. Suspension or Termination –
                </span>{" "}
                Calyx may suspend or terminate your account if you breach these
                Terms, fail to meet eligibility criteria, or engage in
                fraudulent, unlawful, or harmful activity.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px]">
              Intellectual Property
            </h2>
            <div className="space-y-6">
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  1. Ownership of the Protocol –
                </span>{" "}
                All rights, title, and interest in and to the Calyx Protocol,
                including but not limited to its design, architecture, formulas
                (including the Calyx Arc™, Compound Matrix™, and Inter-Entity
                Attribution Ledger), software, documentation, trademarks, and
                visual identity, are owned by Calyx or its licensors.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  2. License to Users –
                </span>{" "}
                Subject to compliance with these Terms, Calyx grants you a
                limited, non-exclusive, non-transferable, and revocable license
                to access and use the protocol solely for lawful purposes and in
                accordance with the functionality made available to you.
              </p>
              <div>
                <p className="text-xl">
                  <span className="font_title lg:text-[36px] font-bold text-xl">
                    3. Restrictions –
                  </span>{" "}
                  Except where explicitly permitted under open-source licenses
                  or separate agreements, you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Copy, modify, distribute, or create derivative works of the
                    protocol,
                  </li>
                  <li>
                    Attempt to extract proprietary algorithms or formulas,
                  </li>
                  <li>
                    Use trademarks, logos, or brand elements of Calyx without
                    prior written consent.
                  </li>
                </ul>
              </div>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  4. Verifier Contributions –
                </span>{" "}
                Verifications submitted by accredited verifiers remain the
                intellectual output of the verifier, but once minted into BUDS
                (Blockchain Units of Derived Signal), those records become part
                of the Calyx ledger and are licensed under the protocol for
                public audit and interoperability.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  5. Third-Party Content –
                </span>{" "}
                The protocol may interoperate with third-party frameworks, APIs,
                or datasets. Such content remains the property of its respective
                owners and may be subject to separate terms and conditions.
              </p>
            </div>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px]">
              Disclaimers
            </h2>
            <div className="space-y-6">
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  1. No Guarantee of Outcomes –
                </span>{" "}
                The Calyx Protocol provides infrastructure for the issuance and
                consultation of BUDS (Blockchain Units of Derived Signal). Calyx
                does not guarantee financial outcomes, investment returns,
                regulatory approval, or business performance based on the use of
                BUDS or the protocol.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  2. No Ratings or Advice –
                </span>{" "}
                BUDS are not ratings, scores, or investment recommendations.
                They represent derived, verifiable signals of confirmed facts,
                and should not be construed as financial, legal, or
                sustainability advice.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  3. Technology Provided “As Is” –
                </span>{" "}
                The protocol, APIs, dashboards, and on-chain integrations are
                provided on an “as is” and “as available” basis. Calyx makes no
                warranties, express or implied, regarding uninterrupted access,
                security, error-free performance, or suitability for any
                specific purpose.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  4. Third-Party Services –
                </span>{" "}
                Calyx may rely on third-party infrastructure (including
                blockchains, storage solutions, and APIs). Calyx does not
                control and is not responsible for the performance,
                availability, or security of such third-party services.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  5. Regulatory Status –
                </span>{" "}
                BUDS are not a currency, financial instrument, or regulated
                security. They are cryptographic representations of verified
                trust. Your use of the protocol is subject to applicable laws
                and regulations in your jurisdiction.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px]">
              Limitation of Liability
            </h2>
            <div className="space-y-6">
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  1. Exclusion of All Liability –
                </span>{" "}
                To the fullest extent permitted by applicable law, Calyx, its
                affiliates, directors, officers, employees, agents, contractors,
                and licensors disclaim all liability, whether in contract, tort,
                statute, equity, or otherwise, for any direct, indirect,
                incidental, consequential, punitive, exemplary, or special
                damages, including without limitation loss of profits, loss of
                revenue, loss of goodwill, loss of business opportunities, loss
                of data, or business interruption, arising from or relating in
                any way to your access to or use of the Calyx Protocol.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  2. Absolute Cap –
                </span>{" "}
                In no event shall Calyx’s aggregate liability for any and all
                claims, damages, losses, liabilities, or costs arising under or
                relating to these Terms or the protocol exceed one hundred (100)
                U.S. dollars, regardless of the nature of the claim, the number
                of incidents, or the theory of liability.
              </p>
              <div>
                <p className="text-xl">
                  <span className="font_title lg:text-[36px] font-bold text-xl">
                    3. No Responsibility for Third Parties –
                  </span>{" "}
                  Calyx bears no responsibility for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    The acts, omissions, or representations of verifiers,
                    entities, or third parties;
                  </li>
                  <li>
                    The accuracy or validity of any data, verification, or proof
                    minted into BUDS;
                  </li>
                  <li>
                    The performance, security, or availability of third-party
                    services, blockchains, APIs, or networks upon which the
                    protocol relies.
                  </li>
                </ul>
              </div>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  4. Assumption of Risk –
                </span>{" "}
                By accessing or using the protocol, you acknowledge that you do
                so at your sole risk. You understand and agree that the issuance
                and use of BUDS (Blockchain Units of Derived Signal) carries
                inherent technological, regulatory, and market risks, for which
                Calyx bears no responsibility.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  5. Non-Waiver of Protections –
                </span>{" "}
                The exclusions and limitations above apply to all claims,
                regardless of whether Calyx has been advised of the possibility
                of such damages, and regardless of whether any remedy fails of
                its essential purpose.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  6. Mandatory Limitations –
                </span>{" "}
                In jurisdictions where exclusions or limitations of liability
                are restricted, Calyx’s liability shall be limited to the
                maximum extent permitted by law, and all other disclaimers
                herein shall remain in full force and effect.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px]">
              Governing Law
            </h2>
            <div className="space-y-6">
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  1. Controlling Law –
                </span>{" "}
                These Terms, and any dispute, claim, or controversy arising out
                of or relating to them, the Calyx Protocol, or the issuance or
                use of BUDS (Blockchain Units of Derived Signal), shall be
                governed exclusively by, and construed in accordance with, the
                laws of Finland, without regard to its conflict-of-law
                principles.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  2. Exclusive Jurisdiction –
                </span>{" "}
                Any legal action or proceeding arising under or relating to
                these Terms shall be brought exclusively in the competent courts
                of Helsinki, Finland. You irrevocably consent to the personal
                jurisdiction of such courts and waive any objection to venue or
                forum on grounds of inconvenience or otherwise.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  3. No Class or Collective Actions –
                </span>{" "}
                You agree that disputes with Calyx may only be resolved on an
                individual basis, and that you shall not participate in or bring
                claims as a plaintiff, class member, or representative in any
                purported class, consolidated, or collective action.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  4. Arbitration Option –
                </span>{" "}
                At Calyx’s sole discretion, any dispute may alternatively be
                referred to and finally resolved by binding arbitration under
                the Rules of the Arbitration Institute of the Finland Chamber of
                Commerce. The arbitration shall be seated in Helsinki, conducted
                in English, and the award shall be final and binding.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  5. Mandatory Law Carve-Out –
                </span>{" "}
                If you are located in a jurisdiction where certain rights cannot
                be waived or restricted by contract, nothing in these Terms
                shall operate to waive such mandatory protections; however, all
                other provisions of these Terms shall remain enforceable to the
                fullest extent permitted by law.
              </p>
            </div>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font_title lg:text-[36px]">
              Policy Updates
            </h2>
            <div className="space-y-6">
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  1. Right to Amend –
                </span>{" "}
                Calyx reserves the sole and absolute right to modify, update, or
                replace these Terms of Use, the Privacy Policy, and any other
                related policies at any time, with or without notice, and for
                any reason in its sole discretion.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  2. Effective Upon Posting –
                </span>{" "}
                Unless otherwise specified, any changes become effective
                immediately upon posting to the Calyx website or protocol
                interface. Your continued access to or use of the protocol after
                such posting constitutes your full acceptance of the updated
                Terms.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  3. No Obligation to Notify –
                </span>{" "}
                Calyx may, but is not obligated to, provide direct notice (e.g.,
                email, dashboard notification) of material changes. You are
                responsible for reviewing the Terms regularly to remain informed
                of current obligations and restrictions.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  4. Retroactive Application –
                </span>{" "}
                Updates may, to the fullest extent permitted by law, apply to
                all prior, current, and future uses of the protocol.
              </p>
              <p className="text-xl">
                <span className="font_title lg:text-[36px] font-bold text-xl">
                  5. Severability of Amendments –
                </span>{" "}
                If any amendment is held invalid or unenforceable, the remaining
                provisions shall continue in full force and effect, and the
                invalid portion shall be enforced to the maximum extent
                permissible.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUseContent;
