import MotionWrapper from "../components/MotionWrapper";
import { fadeInUp, fadeInLeft, fadeInRight } from "../utils/motion";

export function meta() {
  return [
    { title: "Terms of Service - The Great Abanga Foundation" },
    {
      name: "description",
      content:
        "Review the terms and conditions for using The Great Abanga Foundation website and services.",
    },
  ];
}

export default function TermsOfService() {
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
                Terms of Service
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Please read these terms carefully before using our website and
                services.
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
            {/* Acceptance of Terms */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using The Great Abanga Foundation website
                  ("Site") and services, you accept and agree to be bound by the
                  terms and provisions of this agreement. If you do not agree to
                  abide by these terms, please do not use this service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding
                  agreement between you and The Great Abanga Foundation
                  ("Foundation," "we," "us," or "our").
                </p>
              </section>
            </MotionWrapper>

            {/* Use of Website */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Use of Website
                </h2>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Permitted Use
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may use our website for lawful purposes only. You agree to
                  use the website in a manner that:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Complies with all applicable laws and regulations</li>
                  <li>Does not infringe on the rights of others</li>
                  <li>Does not interfere with the website's functionality</li>
                  <li>Does not transmit harmful or malicious content</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Prohibited Activities
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Use the website for any fraudulent or illegal purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Distribute viruses, malware, or other harmful code</li>
                  <li>Harvest or collect user information without consent</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with or disrupt the website's operation</li>
                </ul>
              </section>
            </MotionWrapper>

            {/* Donations and Payments */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Donations and Payments
                </h2>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Donation Policy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All donations to The Great Abanga Foundation are voluntary and
                  are used to support our charitable mission. By making a
                  donation, you acknowledge that:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Donations are final and generally non-refundable</li>
                  <li>You have the legal authority to make the donation</li>
                  <li>
                    The donation is made voluntarily without expectation of
                    goods or services
                  </li>
                  <li>
                    We will use donations in accordance with our charitable
                    purposes
                  </li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Refund Policy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Refunds may be considered in exceptional circumstances, such
                  as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Technical errors resulting in duplicate charges</li>
                  <li>Fraudulent transactions</li>
                  <li>Donations made in error with immediate notification</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Refund requests must be submitted within 30 days of the
                  donation date.
                </p>
              </section>
            </MotionWrapper>

            {/* Intellectual Property */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Intellectual Property Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The content on this website, including but not limited to
                  text, graphics, logos, images, audio clips, video, data
                  compilations, and software, is the property of The Great
                  Abanga Foundation or its content suppliers and is protected by
                  copyright and other intellectual property laws.
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Limited License
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We grant you a limited, non-exclusive, non-transferable
                  license to access and use the website for personal,
                  non-commercial purposes. This license does not include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    Resale or commercial use of the website or its contents
                  </li>
                  <li>
                    Collection and use of product listings or descriptions
                  </li>
                  <li>
                    Making derivative uses of the website and its contents
                  </li>
                  <li>
                    Use of data mining, robots, or similar data gathering tools
                  </li>
                </ul>
              </section>
            </MotionWrapper>

            {/* User Content */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  User-Generated Content
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may have the opportunity to submit content such as
                  comments, testimonials, or feedback. By submitting content,
                  you grant us a non-exclusive, worldwide, royalty-free license
                  to use, modify, and display such content in connection with
                  our charitable activities.
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Content Standards
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Any content you submit must:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Be accurate and truthful</li>
                  <li>Not violate any third-party rights</li>
                  <li>
                    Not contain offensive, defamatory, or inappropriate material
                  </li>
                  <li>Not promote illegal activities or violence</li>
                  <li>Not contain confidential or proprietary information</li>
                </ul>
              </section>
            </MotionWrapper>

            {/* Privacy and Data Protection */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Privacy and Data Protection
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Our collection and use of
                  personal information is governed by our Privacy Policy, which
                  is incorporated into these Terms by reference. By using our
                  website, you consent to the collection and use of your
                  information as described in our Privacy Policy.
                </p>
              </section>
            </MotionWrapper>

            {/* Disclaimers */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Disclaimers and Limitations
                </h2>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Website Availability
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We strive to maintain website availability but cannot
                  guarantee uninterrupted access. The website may be temporarily
                  unavailable due to maintenance, technical issues, or other
                  factors beyond our control.
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Information Accuracy
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we make every effort to ensure the accuracy of
                  information on our website, we cannot guarantee that all
                  information is complete, current, or error-free. We reserve
                  the right to correct any errors or omissions.
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Third-Party Links
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are
                  not responsible for the content, privacy practices, or
                  availability of these external sites.
                </p>
              </section>
            </MotionWrapper>

            {/* Limitation of Liability */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the fullest extent permitted by law, The Great Abanga
                  Foundation shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including but not
                  limited to loss of profits, data, use, or goodwill, arising
                  from your use of the website.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our total liability for any claims related to the website
                  shall not exceed the amount of donations you have made to the
                  Foundation in the 12 months preceding the claim.
                </p>
              </section>
            </MotionWrapper>

            {/* Indemnification */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Indemnification
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold harmless The Great Abanga
                  Foundation, its officers, directors, employees, and agents
                  from any claims, damages, obligations, losses, liabilities,
                  costs, or debt arising from your use of the website or
                  violation of these Terms.
                </p>
              </section>
            </MotionWrapper>

            {/* Termination */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Termination
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to terminate or suspend your access to
                  the website at any time, without notice, for conduct that we
                  believe violates these Terms or is harmful to other users, the
                  Foundation, or third parties.
                </p>
              </section>
            </MotionWrapper>

            {/* Governing Law */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Governing Law and Jurisdiction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance
                  with the laws of Ghana, without regard to its conflict of law
                  provisions. Any disputes arising under these Terms shall be
                  subject to the exclusive jurisdiction of the courts in Ghana.
                </p>
              </section>
            </MotionWrapper>

            {/* Changes to Terms */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Changes to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We
                  will notify users of material changes by posting the updated
                  Terms on this page and updating the "Last updated" date. Your
                  continued use of the website after any changes constitutes
                  acceptance of the updated Terms.
                </p>
              </section>
            </MotionWrapper>

            {/* Contact Information */}
            <MotionWrapper variants={fadeInUp} className="mb-12">
              <section className="bg-[#374a5c] text-white rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-200 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
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
