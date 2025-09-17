import MotionWrapper from "../components/MotionWrapper";
import { fadeInUp, fadeInLeft, fadeInRight } from "../utils/motion";

export function meta() {
  return [
    { title: "Cookie Policy - The Great Abanga Foundation" },
    {
      name: "description",
      content:
        "Learn about how The Great Abanga Foundation uses cookies and similar technologies on our website.",
    },
  ];
}

export default function CookiePolicy() {
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
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                This policy explains how we use cookies and similar technologies
                to enhance your experience on our website.
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
            {/* What Are Cookies */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your computer
                  or mobile device when you visit a website. They are widely
                  used to make websites work more efficiently and to provide
                  information to website owners.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cookies contain information that is transferred to your
                  device's hard drive. They help us recognize your device and
                  store some information about your preferences or past actions
                  on our website.
                </p>
              </section>
            </MotionWrapper>

            {/* Types of Cookies */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Types of Cookies We Use
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      Essential Cookies
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      These cookies are necessary for the website to function
                      properly. They enable core functionality such as security,
                      network management, and accessibility.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      These cookies cannot be disabled as they are essential for
                      the website to work.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      Analytics Cookies
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      These cookies help us understand how visitors interact
                      with our website by collecting and reporting information
                      anonymously. This helps us improve our website's
                      performance and user experience.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Examples: Google Analytics, visitor statistics, page
                      views, bounce rate
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      Functional Cookies
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      These cookies allow the website to remember choices you
                      make and provide enhanced, more personal features. They
                      may be set by us or by third-party providers.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Examples: Language preferences, region selection, user
                      interface customizations
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      Marketing Cookies
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      These cookies track your online activity to help
                      advertisers deliver more relevant advertising or to limit
                      how many times you see an ad.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Examples: Social media integration, targeted advertising,
                      marketing analytics
                    </p>
                  </div>
                </div>
              </section>
            </MotionWrapper>

            {/* How We Use Cookies */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  How We Use Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Great Abanga Foundation uses cookies for the following
                  purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Website Functionality:</strong> To ensure our
                    website works properly and efficiently
                  </li>
                  <li>
                    <strong>User Experience:</strong> To remember your
                    preferences and provide personalized content
                  </li>
                  <li>
                    <strong>Analytics:</strong> To understand how visitors use
                    our website and improve our services
                  </li>
                  <li>
                    <strong>Security:</strong> To protect against fraud and
                    enhance website security
                  </li>
                  <li>
                    <strong>Communication:</strong> To enable social media
                    sharing and integration
                  </li>
                  <li>
                    <strong>Donation Processing:</strong> To facilitate secure
                    donation transactions
                  </li>
                </ul>
              </section>
            </MotionWrapper>

            {/* Third-Party Cookies */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Third-Party Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Some cookies on our website are set by third-party services.
                  These may include:
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Google Analytics
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Helps us understand website traffic and user behavior to
                      improve our services.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Social Media Platforms
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Enables sharing of content on social media platforms and
                      may track your interactions.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">
                      Payment Processors
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Facilitates secure donation processing and may use cookies
                      for fraud prevention.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-4">
                  These third-party services have their own privacy policies and
                  cookie practices. We recommend reviewing their policies to
                  understand how they use cookies.
                </p>
              </section>
            </MotionWrapper>

            {/* Managing Cookies */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Managing Your Cookie Preferences
                </h2>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Browser Settings
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can control and manage cookies through your browser
                  settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>View which cookies are stored on your device</li>
                  <li>Delete all cookies or specific cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies from being set</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Browser-Specific Instructions
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Chrome</h4>
                    <p className="text-sm text-gray-700">
                      Settings → Privacy and Security → Cookies and other site
                      data
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Firefox</h4>
                    <p className="text-sm text-gray-700">
                      Options → Privacy & Security → Cookies and Site Data
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Safari</h4>
                    <p className="text-sm text-gray-700">
                      Preferences → Privacy → Manage Website Data
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Edge</h4>
                    <p className="text-sm text-gray-700">
                      Settings → Site permissions → Cookies and site data
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> Blocking all cookies may impact your
                    experience on our website and prevent some features from
                    working properly.
                  </p>
                </div>
              </section>
            </MotionWrapper>

            {/* Opt-Out Options */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Opt-Out Options
                </h2>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Analytics Opt-Out
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can opt out of Google Analytics tracking by installing the
                  Google Analytics Opt-out Browser Add-on or by adjusting your
                  cookie preferences.
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Marketing Cookies
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can opt out of interest-based advertising by visiting:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    Digital Advertising Alliance (DAA):
                    www.aboutads.info/choices
                  </li>
                  <li>
                    Network Advertising Initiative (NAI):
                    www.networkadvertising.org/choices
                  </li>
                  <li>
                    European Interactive Digital Advertising Alliance:
                    www.youronlinechoices.eu
                  </li>
                </ul>
              </section>
            </MotionWrapper>

            {/* Cookie Consent */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cookie Consent
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you first visit our website, you may see a cookie consent
                  banner. This banner explains our use of cookies and allows you
                  to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Accept all cookies</li>
                  <li>Customize your cookie preferences</li>
                  <li>Reject non-essential cookies</li>
                  <li>Learn more about our cookie practices</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  You can change your cookie preferences at any time by
                  accessing the cookie settings in your browser or by contacting
                  us directly.
                </p>
              </section>
            </MotionWrapper>

            {/* Mobile Devices */}
            <MotionWrapper variants={fadeInRight} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cookies on Mobile Devices
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mobile browsers also support cookies, and you can manage them
                  through your mobile browser settings. The process varies by
                  device and browser:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">
                      iOS Safari
                    </h4>
                    <p className="text-sm text-gray-700">
                      Settings → Safari → Privacy & Security
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Android Chrome
                    </h4>
                    <p className="text-sm text-gray-700">
                      Chrome app → Settings → Site settings → Cookies
                    </p>
                  </div>
                </div>
              </section>
            </MotionWrapper>

            {/* Updates to Policy */}
            <MotionWrapper variants={fadeInLeft} className="mb-12">
              <section className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Changes to This Cookie Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons. We will notify you of any material changes
                  by posting the updated policy on this page and updating the
                  "Last updated" date.
                </p>
              </section>
            </MotionWrapper>

            {/* Contact Information */}
            <MotionWrapper variants={fadeInUp} className="mb-12">
              <section className="bg-[#374a5c] text-white rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Questions About Cookies?
                </h2>
                <p className="text-gray-200 leading-relaxed mb-4">
                  If you have any questions about our use of cookies or this
                  Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-200">
                  <p>
                    <strong>The Great Abanga Foundation</strong>
                  </p>
                  <p>Email: greatabangafoundation@gmail.com</p>
                  <p>Phone: 0544902900</p>
                  <p>Address: Sunyani, Ghana, West Africa</p>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm text-gray-200">
                    For more information about cookies in general, you can visit
                    <span className="font-medium">
                      {" "}
                      www.allaboutcookies.org
                    </span>{" "}
                    or
                    <span className="font-medium">
                      {" "}
                      www.youronlinechoices.eu
                    </span>
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
