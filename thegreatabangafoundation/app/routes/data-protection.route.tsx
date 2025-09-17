import MotionWrapper from "../components/MotionWrapper";
import { fadeInUp, fadeInLeft, fadeInRight } from "../utils/motion";

export function meta() {
  return [
    { title: "Data Protection - The Great Abanga Foundation" },
    {
      name: "description",
      content:
        "Learn about The Great Abanga Foundation's commitment to data protection and compliance with privacy regulations.",
    },
  ];
}

export default function DataProtection() {
  return (
    <>
      <div className="min-h-screen transition-colors duration-200 bg-gray-50">
        {/* Hero Section */}
        <MotionWrapper
          variants={fadeInUp}
          className="bg-[#374a5c] text-white py-20"
        >
          <div className="container px-6 mx-auto">
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Data Protection
              </h1>
              <p className="max-w-3xl mx-auto text-xl text-gray-200">
                Our commitment to protecting your personal data and complying
                with global privacy regulations.
              </p>
              <p className="mt-4 text-sm text-gray-300">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </MotionWrapper>

        {/* Main Content */}
        <div className="container px-6 py-16 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Our Commitment */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="p-8 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Our Commitment to Data Protection
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  The Great Abanga Foundation is committed to protecting the
                  privacy and security of personal data. We recognize that trust
                  is fundamental to our relationship with donors, volunteers,
                  beneficiaries, and all stakeholders.
                </p>
                <p className="leading-relaxed text-gray-700">
                  This Data Protection Policy outlines our approach to handling
                  personal data in compliance with applicable privacy laws,
                  including the General Data Protection Regulation (GDPR),
                  California Consumer Privacy Act (CCPA), and other relevant
                  regulations.
                </p>
              </section>
            </MotionWrapper>

            {/* Legal Framework */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="p-8 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Legal Framework and Compliance
                </h2>

                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-gray-300">
                    <h3 className="mb-2 text-lg font-medium text-gray-800">
                      GDPR Compliance (EU)
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      For individuals in the European Union, we comply with the
                      General Data Protection Regulation, ensuring lawful
                      processing, data minimization, and respect for individual
                      rights.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-gray-300">
                    <h3 className="mb-2 text-lg font-medium text-gray-800">
                      CCPA Compliance (California)
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      For California residents, we comply with the California
                      Consumer Privacy Act, providing transparency about data
                      collection and respecting consumer rights.
                    </p>
                  </div>

                  <div className="pl-4 border-l-4 border-gray-300">
                    <h3 className="mb-2 text-lg font-medium text-gray-800">
                      Ghana Data Protection Laws
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      As a Ghana-based foundation, we primarily comply with
                      Ghana's Data Protection Act and other applicable privacy
                      laws in jurisdictions where we operate or serve
                      individuals.
                    </p>
                  </div>
                </div>
              </section>
            </MotionWrapper>

            {/* Data Protection Principles */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="p-8 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Data Protection Principles
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  We adhere to the following core principles in all our data
                  processing activities:
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-4 rounded-lg bg-gray-50">
                    <h3 className="mb-2 font-medium text-gray-800">
                      Lawfulness and Fairness
                    </h3>
                    <p className="text-sm text-gray-700">
                      We process personal data lawfully, fairly, and in a
                      transparent manner.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-50">
                    <h3 className="mb-2 font-medium text-gray-800">
                      Purpose Limitation
                    </h3>
                    <p className="text-sm text-gray-700">
                      We collect data for specified, explicit, and legitimate
                      purposes only.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-50">
                    <h3 className="mb-2 font-medium text-gray-800">
                      Data Minimization
                    </h3>
                    <p className="text-sm text-gray-700">
                      We collect only the minimum data necessary for our
                      purposes.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-50">
                    <h3 className="mb-2 font-medium text-gray-800">Accuracy</h3>
                    <p className="text-sm text-gray-700">
                      We keep personal data accurate and up to date where
                      necessary.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-50">
                    <h3 className="mb-2 font-medium text-gray-800">
                      Storage Limitation
                    </h3>
                    <p className="text-sm text-gray-700">
                      We retain data only as long as necessary for our
                      legitimate purposes.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-50">
                    <h3 className="mb-2 font-medium text-gray-800">Security</h3>
                    <p className="text-sm text-gray-700">
                      We implement appropriate technical and organizational
                      security measures.
                    </p>
                  </div>
                </div>
              </section>
            </MotionWrapper>

            {/* Your Rights */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="p-8 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Your Data Protection Rights
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Depending on your location and applicable laws, you may have
                  the following rights regarding your personal data:
                </p>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="mb-2 font-medium text-gray-800">
                      🔍 Right to Information
                    </h3>
                    <p className="text-sm text-gray-700">
                      You have the right to know what personal data we collect,
                      how we use it, and who we share it with.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="mb-2 font-medium text-gray-800">
                      Right of Access
                    </h3>
                    <p className="text-sm text-gray-700">
                      You can request a copy of the personal data we hold about
                      you.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="mb-2 font-medium text-gray-800">
                      Right to Rectification
                    </h3>
                    <p className="text-sm text-gray-700">
                      You can request that we correct any inaccurate or
                      incomplete personal data.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="mb-2 font-medium text-gray-800">
                      Right to Erasure
                    </h3>
                    <p className="text-sm text-gray-700">
                      You can request deletion of your personal data in certain
                      circumstances.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="mb-2 font-medium text-gray-800">
                      Right to Restrict Processing
                    </h3>
                    <p className="text-sm text-gray-700">
                      You can request that we limit how we process your personal
                      data.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="mb-2 font-medium text-gray-800">
                      Right to Data Portability
                    </h3>
                    <p className="text-sm text-gray-700">
                      You can request a copy of your data in a structured,
                      machine-readable format.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="mb-2 font-medium text-gray-800">
                      Right to Object
                    </h3>
                    <p className="text-sm text-gray-700">
                      You can object to certain types of processing, including
                      direct marketing.
                    </p>
                  </div>
                </div>
              </section>
            </MotionWrapper>

            {/* Security Measures */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="p-8 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Technical and Organizational Security Measures
                </h2>

                <h3 className="mb-3 text-lg font-medium text-gray-800">
                  Technical Safeguards
                </h3>
                <ul className="pl-6 mb-6 space-y-2 text-gray-700 list-disc">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Access controls and authentication systems</li>
                  <li>Regular security updates and patches</li>
                  <li>Firewall and intrusion detection systems</li>
                  <li>Secure backup and recovery procedures</li>
                  <li>Regular security vulnerability assessments</li>
                </ul>

                <h3 className="mb-3 text-lg font-medium text-gray-800">
                  Organizational Safeguards
                </h3>
                <ul className="pl-6 space-y-2 text-gray-700 list-disc">
                  <li>Staff training on data protection best practices</li>
                  <li>Data protection impact assessments</li>
                  <li>Clear data handling policies and procedures</li>
                  <li>
                    Limited access to personal data on a need-to-know basis
                  </li>
                  <li>Regular audits and compliance monitoring</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
              </section>
            </MotionWrapper>

            {/* Data Transfers */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="p-8 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  International Data Transfers
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  When we transfer personal data outside your country or region,
                  we ensure appropriate safeguards are in place:
                </p>

                <div className="space-y-4">
                  <div className="p-4 ">
                    <h3 className="mb-2 font-medium ">Adequacy Decisions</h3>
                    <p className="text-sm">
                      We transfer data to countries that have been deemed to
                      provide adequate protection by relevant authorities.
                    </p>
                  </div>

                  <div className="p-4 ">
                    <h3 className="mb-2 font-medium ">
                      Standard Contractual Clauses
                    </h3>
                    <p className="text-sm ">
                      We use approved standard contractual clauses with third
                      parties to ensure data protection.
                    </p>
                  </div>

                  <div className="p-4 ">
                    <h3 className="mb-2 font-medium ">
                      Binding Corporate Rules
                    </h3>
                    <p className="text-sm ">
                      We implement binding corporate rules for intra-group
                      transfers where applicable.
                    </p>
                  </div>
                </div>
              </section>
            </MotionWrapper>

            {/* Data Retention */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="p-8 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Data Retention Policy
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  We retain personal data only for as long as necessary to
                  fulfill the purposes for which it was collected:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-collapse border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left border border-gray-300">
                          Data Type
                        </th>
                        <th className="px-4 py-2 text-left border border-gray-300">
                          Retention Period
                        </th>
                        <th className="px-4 py-2 text-left border border-gray-300">
                          Legal Basis
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border border-gray-300">
                          Donor Information
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          7 years after last donation
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          Legal/Tax requirements
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 border border-gray-300">
                          Volunteer Records
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          3 years after involvement ends
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          Legitimate interest
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border border-gray-300">
                          Marketing Contacts
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          Until consent withdrawn
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          Consent
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 border border-gray-300">
                          Website Analytics
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          26 months
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          Legitimate interest
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </MotionWrapper>

            {/* Breach Notification */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="p-8 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Data Breach Response
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  In the unlikely event of a data breach, we have procedures in
                  place to:
                </p>
                <ul className="pl-6 space-y-2 text-gray-700 list-disc">
                  <li>Assess and contain the breach within 24 hours</li>
                  <li>
                    Notify relevant supervisory authorities within 72 hours
                    (where required)
                  </li>
                  <li>
                    Inform affected individuals without undue delay (where
                    required)
                  </li>
                  <li>
                    Investigate the cause and implement preventive measures
                  </li>
                  <li>Document the incident and our response</li>
                </ul>
              </section>
            </MotionWrapper>

            {/* Contact DPO */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="p-8 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Data Protection Officer
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  Our Data Protection Officer is responsible for overseeing our
                  data protection strategy and ensuring compliance with
                  applicable privacy laws.
                </p>
                <div className="p-4 rounded-lg bg-gray-50">
                  <p className="text-gray-700">
                    <strong>Contact our DPO:</strong>
                  </p>
                  <p className="text-gray-600">
                    Email: greatabangafoundation@gmail.com
                  </p>
                  <p className="text-gray-600">Phone: 0544902900</p>
                </div>
              </section>
            </MotionWrapper>

            {/* Supervisory Authority */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="p-8 bg-white rounded-lg shadow-sm">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Supervisory Authority
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  If you believe we have not handled your personal data
                  properly, you have the right to lodge a complaint with the
                  relevant supervisory authority in your jurisdiction.
                </p>
                <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                  <p className="text-sm text-yellow-800">
                    We encourage you to contact us first so we can address your
                    concerns directly. However, you have the right to contact a
                    supervisory authority at any time.
                  </p>
                </div>
              </section>
            </MotionWrapper>

            {/* Contact Information */}
            <MotionWrapper variants={fadeInUp} className="mb-12">
              <section className="bg-[#374a5c] text-white rounded-lg p-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Contact Us About Data Protection
                </h2>
                <p className="mb-4 leading-relaxed text-gray-200">
                  If you have any questions about this Data Protection Policy or
                  wish to exercise your rights, please contact us:
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 font-medium text-white">
                      General Inquiries
                    </h3>
                    <div className="space-y-1 text-sm text-gray-200">
                      <p>Email: greatabangafoundation@gmail.com</p>
                      <p>Phone: 0544902900</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-white">
                      Data Protection Officer
                    </h3>
                    <div className="space-y-1 text-sm text-gray-200">
                      <p>Email: greatabangafoundation@gmail.com</p>
                      <p>Phone: 0544902900</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-200">
                    <strong>Postal Address:</strong>
                    <br />
                    The Great Abanga Foundation
                    <br />
                    Data Protection Officer
                    <br />
                    Sunyani, Ghana
                    <br />
                    West Africa
                  </p>
                </div>
              </section>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
