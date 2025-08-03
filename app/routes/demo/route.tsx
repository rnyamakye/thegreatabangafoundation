export function meta() {
  return [
    { title: "Demo - The Great Abanga Foundation" },
    {
      name: "description",
      content: "Demonstration page for The Great Abanga Foundation.",
    },
  ];
}

export default function Demo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Demo Page</h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to our Demo Page
          </h2>
          <p className="text-gray-600 mb-4">
            This page can be used to showcase various features and components of
            The Great Abanga Foundation website.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-800 mb-2">
                Sample Card
              </h3>
              <p className="text-orange-700">
                This is an example of a card component with our brand colors.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Another Card</h3>
              <p className="text-gray-700">
                This demonstrates how content can be organized in cards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
