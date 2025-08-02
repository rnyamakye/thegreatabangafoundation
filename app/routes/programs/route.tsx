export function meta() {
  return [
    { title: "Programs - Abanga Foundation" },
    {
      name: "description",
      content:
        "Discover our comprehensive programs in education, healthcare, and community development.",
    },
  ];
}

export default function Programs() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive initiatives designed to create lasting impact in
            education, healthcare, and economic development across African
            communities.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education Programs */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education Initiatives
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  School Construction
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Building modern, well-equipped schools in underserved areas
                  with proper infrastructure including libraries, computer labs,
                  and science facilities.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Teacher Training
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Comprehensive professional development programs for educators,
                  focusing on modern teaching methods and technology
                  integration.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Scholarship Program
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Merit-based scholarships for outstanding students from
                  low-income families to pursue higher education and
                  professional development.
                </p>
              </div>
            </div>
          </div>

          {/* Healthcare Programs */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Healthcare Services
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Mobile Clinics
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Bringing essential healthcare services directly to remote
                  communities through our fleet of well-equipped mobile medical
                  units.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Maternal Health
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Specialized programs focused on prenatal care, safe delivery
                  practices, and postnatal support for mothers and newborns.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Health Education
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Community-based health education programs covering disease
                  prevention, nutrition, and hygiene practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Economic Development */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Economic Empowerment
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Microfinance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Small loans and financial services to help community members
                start and grow their businesses.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Skills Training
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Vocational training programs in agriculture, technology, and
                crafts to build marketable skills.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Market Access
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Connecting local producers with broader markets to increase
                income and economic opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Every contribution makes a difference. Partner with us to expand
            these life-changing programs to more communities.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200">
            Get Involved
          </button>
        </div>
      </div>
    </main>
  );
}
