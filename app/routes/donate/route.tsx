export function meta() {
  return [
    { title: "Donate - The Great Abanga Foundation" },
    {
      name: "description",
      content: "Support The Great Abanga Foundation's mission.",
    },
  ];
}

export default function Donate() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Support Our Mission
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Your donation helps us continue our important work in the community.
            Every contribution, no matter the size, makes a difference.
          </p>

          <div className="bg-transparent p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              How Your Donation Helps
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• ₵90 can provide school supplies for one student</li>
              <li>• ₵180 can fund a health screening for a family</li>
              <li>• ₵360 can support a community development project</li>
              <li>• ₵1,800 can provide a scholarship for one semester</li>
            </ul>
          </div>

          <div className="bg-transparent p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Make a Donation
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <button className="bg-gray-100 hover:bg-orange-100 border border-gray-300 hover:border-orange-300 px-4 py-2 rounded text-center transition-colors text-gray-900">
                ₵90
              </button>
              <button className="bg-gray-100 hover:bg-orange-100 border border-gray-300 hover:border-orange-300 px-4 py-2 rounded text-center transition-colors text-gray-900">
                ₵180
              </button>
              <button className="bg-gray-100 hover:bg-orange-100 border border-gray-300 hover:border-orange-300 px-4 py-2 rounded text-center transition-colors text-gray-900">
                ₵360
              </button>
              <button className="bg-gray-100 hover:bg-orange-100 border border-gray-300 hover:border-orange-300 px-4 py-2 rounded text-center transition-colors text-gray-900">
                ₵1,800
              </button>
            </div>

            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Custom Amount
              </label>
              <input
                type="number"
                id="amount"
                placeholder="Enter amount"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="relative overflow-hidden w-full bg-orange-600 text-white py-3 px-4 rounded-md font-medium transition-all duration-300 group">
              <span className="relative z-10">Donate Now</span>
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
