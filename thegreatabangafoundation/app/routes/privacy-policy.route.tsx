import MotionWrapper from "../components/MotionWrapper";
import { fadeInUp, fadeInLeft, fadeInRight } from "../utils/motion";

export function meta() {
  return [
    { title: "Privacy Policy - The Great Abanga Foundation" },
    {
      name: "description",
      content:
        "Learn how The Great Abanga Foundation protects your privacy and handles your personal data.",
    },
  ];
}

export default function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 transition-colors duration-200">
        {/* Hero Section */}
        <MotionWrapper
          variants={fadeInUp}
          className="bg-[#374a5c] text-white py-20"
        >
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring the
                security of your personal information.
              </p>
              <p className="text-sm text-gray-300 mt-4">
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
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Great Abanga Foundation ("we," "our," or "us") is
                  committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or interact with our
                  services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our website and services, you consent to the
                  practices described in this Privacy Policy.
                </p>
              </section>
            </MotionWrapper>

            {/* Information We Collect */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Information We Collect
                </h2>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Personal Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily
                  provide, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Donation information and payment details</li>
                  <li>Volunteer application information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>IP address and browser information</li>
                  <li>Device information and operating system</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>
            </MotionWrapper>

            {/* How We Use Information */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Processing donations and managing donor relationships</li>
                  <li>Communicating about our programs and impact</li>
                  <li>Sending newsletters and updates (with consent)</li>
                  <li>Improving our website and user experience</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Managing volunteer applications and opportunities</li>
                  <li>Responding to inquiries and providing support</li>
                </ul>
              </section>
            </MotionWrapper>

            {/* Information Sharing */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> With trusted third-party
                    service providers who assist us in operating our website and
                    services
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or
                    to protect our rights and safety
                  </li>
                  <li>
                    <strong>Consent:</strong> With your explicit consent for
                    specific purposes
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets
                  </li>
                </ul>
              </section>
            </MotionWrapper>

            {/* Data Security */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Staff training on data protection best practices</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  However, no method of transmission or storage is 100% secure,
                  and we cannot guarantee absolute security.
                </p>
              </section>
            </MotionWrapper>

            {/* Your Rights */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Your Rights and Choices
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Access:</strong> Request access to your personal
                    information we hold
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information (subject to legal requirements)
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing
                    communications at any time
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Request a copy of your
                    data in a structured format
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the
                  information provided below.
                </p>
              </section>
            </MotionWrapper>

            {/* Cookies */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website uses cookies and similar technologies to enhance
                  your experience. These may include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic
                    website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand
                    website usage and improve our services
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings
                    and preferences
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  You can control cookie settings through your browser
                  preferences. Please see our Cookie Policy for more details.
                </p>
              </section>
            </MotionWrapper>

            {/* Third-Party Links */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Third-Party Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of these
                  external sites. We encourage you to review the privacy
                  policies of any third-party websites you visit.
                </p>
              </section>
            </MotionWrapper>

            {/* Children's Privacy */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website is not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If we become aware that we have collected
                  such information, we will take steps to delete it promptly.
                </p>
              </section>
            </MotionWrapper>

            {/* Updates to Policy */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the new Privacy
                  Policy on this page and updating the "Last updated" date. Your
                  continued use of our website after any changes constitutes
                  acceptance of the updated policy.
                </p>
              </section>
            </MotionWrapper>

            {/* Contact Information */}
            <MotionWrapper variants={fadeInUp} className="mb-12">
              <section className="bg-[#374a5c] text-white rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-200 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-200">
                  <p>
                    <strong>The Great Abanga Foundation</strong>
                  </p>
                  <p>Email: greatabangafoundation@gmail.com</p>
                  <p>Phone: 0544902900</p>
                  <p>Address: Sunyani, Ghana, West Africa</p>
                </div>
              </section>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
