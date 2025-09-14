import { useEffect, useRef, useState } from "react";

export default function Mission() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
    img.src = "/our-mission_img.jpg";
  }, []);

  return (
    <>
      <main className="min-h-screen ">
        {/* Hero Section */}
        <section
          className={`relative py-20 bg-center bg-no-repeat bg-cover ${imageLoaded ? "bg-[url('/our-mission_img.jpg')]" : ""}`}
        >
          {/* SVG Background Fallback - only show when image hasn't loaded */}
          {!imageLoaded && (
            <div className="absolute inset-0 hero-svg-background" />
          )}

          {/* Background Color */}
          <div className="absolute inset-0 "></div>

          {/* Black Overlay for better text readability */}
          <div className="absolute inset-0 bg-opacity-50 bg-black/50"></div>

          <div className="absolute text-center text-white transform -translate-x-1/2 left-1/2 md:max-w-6xl md:px-6 md:mx-auto">
            <h1 className="mt-20 text-3xl font-bold md:text-6xl">
              Our Mission
            </h1>
          </div>
          <div className="relative w-full max-w-6xl px-6 mx-auto md:max-w-4xl -bottom-60">
            <img
              src="/communitydevelopment_img.jpg"
              alt="Community development"
              className="object-cover w-full h-64 rounded-lg shadow-lg md:h-96"
            />
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 pt-60">
          <div className="max-w-6xl px-6 mx-auto">
            <div className="grid gap-12 ">
              <div className="flex flex-col items-center justify-center text-center ">
                <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                  Empowering Communities Through Technology
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  The Great Abanga Foundation is dedicated to bridging the
                  digital divide by providing technology access, educational
                  opportunities, and community support programs that transform
                  lives and create lasting positive change in underserved
                  communities worldwide.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We believe that technology should be a tool for empowerment,
                  not exclusion. Our mission drives us to create sustainable
                  solutions that enable communities to thrive in the digital
                  age.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Focus Areas */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-6xl px-6 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 md:text-4xl">
              Our Focus Areas
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 text-center rounded-lg ">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#374a5c] rounded-full">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Digital Education
                </h3>
                <p className="text-gray-600">
                  Providing digital literacy training and educational resources
                  to empower individuals with essential technology skills.
                </p>
              </div>
              <div className="p-6 text-center rounded-lg ">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#374a5c] rounded-full">
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
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Community Development
                </h3>
                <p className="text-gray-600">
                  Supporting sustainable development projects that improve
                  infrastructure and create economic opportunities in
                  underserved areas.
                </p>
              </div>
              <div className="p-6 text-center rounded-lg ">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#374a5c] rounded-full">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Healthcare Access
                </h3>
                <p className="text-gray-600">
                  Improving healthcare accessibility through mobile health
                  initiatives and health education programs in remote
                  communities.
                </p>
              </div>
              <div className="p-6 text-center rounded-lg ">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#374a5c] rounded-full">
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
                      d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Women Empowerment
                </h3>
                <p className="text-gray-600">
                  Supporting women through education, skills training, and
                  economic opportunities to create leadership roles and foster
                  gender equality in communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#374a5c]">
          <div className="max-w-4xl px-6 mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Join Us in Our Mission
            </h2>
            <p className="mb-8 text-xl text-gray-100 ">
              Together, we can create lasting positive change and build a more
              inclusive digital future.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="/contact"
                className="px-8 py-3 font-semibold text-[#4c4c4c] transition-colors bg-white rounded-lg hover:bg-gray-100"
              >
                Get Involved
              </a>
              <a
                href="/impact"
                className="px-8 py-3 font-semibold text-white transition-colors border-2 border-white rounded-lg hover:bg-white hover:text-[#4c4c4c]"
              >
                See Our Impact
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
