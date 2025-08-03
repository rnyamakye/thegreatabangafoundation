export function meta() {
  return [
    { title: "About - The Great Abanga Foundation" },
    {
      name: "description",
      content:
        "Learn about our founder's passion for education and how TGAF is transforming lives through scholarships and educational support.",
    },
  ];
}

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About Our Foundation
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Founded by a visionary philanthropist with a deep commitment to
            education, TGAF has been transforming lives through scholarship
            opportunities and educational support for over 2 years.
          </p>
        </div>

        {/* Founder's Story Section */}
        <div className="mb-16 bg-transparent rounded-2xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Our Founder's Vision
              </h2>
              <p className="text-lg text-black mb-4">
                Born from the belief that education is the most powerful tool
                for social change, The Great Abanga Foundation was established
                by a passionate philanthropist who understood firsthand the
                barriers that financial constraints can create for aspiring
                students.
              </p>
              <p className="text-lg text-black mb-6">
                Having witnessed countless talented young minds unable to pursue
                higher education due to financial limitations, our founder
                dedicated their life to removing these barriers and creating
                pathways to academic excellence.
              </p>
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6 rounded-lg">
                <p className="text-lg font-medium italic">
                  "Creating a future where no one is left behind — empowered,
                  uplifted, and cared for."
                </p>
                <p className="mt-4 font-semibold">- Vision, TGAF</p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                <svg
                  className="w-32 h-32 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Dedicated to Education
              </h3>
              <p className="text-black">
                Over 2 years of unwavering commitment to educational excellence
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
            <p className="text-lg text-black mb-4">
              To break the cycle of educational inequality by providing
              comprehensive scholarship programs that enable talented students
              to pursue higher education, regardless of their financial
              background.
            </p>
            <p className="text-lg text-black mb-6">
              We believe that investing in education is investing in Africa's
              future. Every scholarship we provide creates a ripple effect that
              transforms not just individual lives, but entire communities.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Our Impact</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">15+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">
                    Students Sponsored
                  </h4>
                  <p className="text-black">At 1 university</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">₵45K</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">
                    Total Investment
                  </h4>
                  <p className="text-black">In student tuition</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">100%</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">
                    Success Rate
                  </h4>
                  <p className="text-black">Of tuition assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Overview */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-12">
            Our Scholarship Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-transparent p-8 rounded-xl">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Full Tuition Support
              </h3>
              <p className="text-black">
                Complete tuition coverage for exceptional students from
                disadvantaged backgrounds at university level.
              </p>
            </div>
            <div className="bg-transparent p-8 rounded-xl">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Partial Tuition Support
              </h3>
              <p className="text-black">
                Flexible financial support covering tuition fees and educational
                expenses based on individual needs.
              </p>
            </div>
            <div className="bg-transparent p-8 rounded-xl">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Academic Support
              </h3>
              <p className="text-black">
                Beyond tuition assistance, we provide academic guidance and
                educational resources to help students succeed.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 bg-transparent rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-black mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Integrity</h3>
              <p className="text-sm text-black">
                Transparency in all our operations and decisions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Compassion</h3>
              <p className="text-sm text-black">
                Understanding and addressing real community needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Excellence</h3>
              <p className="text-sm text-black">
                Striving for the highest quality in everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Collaboration</h3>
              <p className="text-sm text-black">
                Working together with communities and partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
