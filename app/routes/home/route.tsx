// Loader function for the home route
export async function loader() {
  return null;
}

// Default export component
export default function Home() {
  return <Welcome />;
}

export function Welcome() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-12 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="The Great Abanga Foundation"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            The Great Abanga Foundation
          </h1>

          <p className="text-2xl md:text-3xl tgaf-orange font-semibold mb-6">
            Helping Hands Brighter Tomorrow
          </p>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation through education. We provide
            scholarships, tuition assistance, and educational support to help
            deserving students achieve their dreams of higher education across
            Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-tgaf-primary">See Our Impact</button>
            <button className="btn-tgaf-secondary">Get Involved</button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl font-bold tgaf-orange mb-2">25+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Students Sponsored
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl font-bold tgaf-orange mb-2">$125K+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Scholarships Awarded
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl font-bold tgaf-orange mb-2">8</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Universities Partnered
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl font-bold tgaf-orange mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Years of Impact
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Transforming Lives Through Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Every student deserves the opportunity to pursue higher education,
            regardless of their financial background. Through our comprehensive
            scholarship programs, we remove financial barriers and open doors to
            academic excellence, empowering the next generation of African
            leaders, innovators, and change-makers.
          </p>
        </div>

        {/* Impact Stories Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Impact Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 tgaf-bg-gradient rounded-full flex items-center justify-center">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Academic Excellence
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Our scholarship recipients maintain an average GPA of 3.8+ and
                have a 95% graduation rate, demonstrating the power of removing
                financial barriers to education.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 tgaf-bg-gradient rounded-full flex items-center justify-center">
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Career Success
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                85% of our graduates secure employment within 6 months of
                graduation, with many starting successful careers in technology,
                healthcare, and business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: "/about",
    text: "Learn About Our Mission",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 14V10M10 6H10.01"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "/programs",
    text: "View Our Programs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M8 12L12 8M8 8L12 12M3 16.5V3.5C3 2.94772 3.44772 2.5 4 2.5H16C16.5523 2.5 17 2.94772 17 3.5V16.5L13.5 14L10 16.5L6.5 14L3 16.5Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "/contact",
    text: "Get In Touch",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M3 4L9 10L15 4M3 16H17C17.5523 16 18 15.5523 18 15V5C18 4.44772 17.5523 4 17 4H3C2.44772 4 2 4.44772 2 5V15C2 15.5523 2.44772 16 3 16Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "/donate",
    text: "Support Our Cause",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
