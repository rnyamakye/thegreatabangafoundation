import { useState, useEffect } from "react";
import { getData } from "~/lib";
import { config } from "~/config";

export function meta() {
  return [
    { title: "Gallery - The Great Abanga Foundation" },
    {
      name: "description",
      content:
        "Explore the visual stories of The Great Abanga Foundation's impact in education, health, and community development.",
    },
  ];
}

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  description?: string;
};

const categories = ["All", "Education", "Health", "Community", "Finance"];

export default function Gallery() {
  const [galleryData, setGalleryData] = useState<GalleryImage[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseURL}/gallery`;
      console.log("Fetching from endpoint:", endpoint);
      try {
        const data = await getData(endpoint);
        console.log("Gallery data received:", data);
        setGalleryData(data);
      } catch (error) {
        console.error("Error fetching gallery data", error);
        setGalleryData([]);
      }
    };
    fetchData();
  }, []);

  const filteredImages =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-[url('/gallery_img.jpg')] bg-cover bg-center bg-no-repeat h-[80vh]">
        <div className="px-5 mx-auto md:max-w-7xl lg:px-8">
          <div className="text-center mt-30">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Impact Gallery
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-100">
              Visual stories of transformation, hope, and community impact
              through our various initiatives across education, health, and
              community development.
            </p>
          </div>
        </div>
        {/* Scroll Down Arrow */}
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <div
            className="flex flex-col items-center text-white cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <span className="mb-2 text-sm font-medium opacity-80">
              Scroll Down
            </span>
            <svg
              className="w-6 h-6 transition-opacity duration-300 opacity-80 hover:opacity-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="px-5 mx-auto md:max-w-7xl lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-[#374a5c] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          {galleryData.length > 0 && (
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                Showing {filteredImages.length} of {galleryData.length} images
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryData.length === 0 ? (
              <div className="py-12 text-center text-gray-500 col-span-full">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-16 h-16 mb-4 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900">
                    Loading gallery...
                  </h3>
                  <p className="text-gray-500">
                    Please wait while we fetch the images
                  </p>
                </div>
              </div>
            ) : filteredImages.length === 0 ? (
              <div className="py-12 text-center text-gray-500 col-span-full">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-16 h-16 mb-4 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900">
                    No images found
                  </h3>
                  <p className="text-gray-500">
                    No images found for "{selectedCategory}" category. Try
                    selecting a different category.
                  </p>
                </div>
              </div>
            ) : (
              filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-sm cursor-pointer group hover:shadow-lg hover:border-gray-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="overflow-hidden aspect-square">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative w-full max-w-5xl overflow-hidden bg-white rounded-lg shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute z-10 p-2 transition-colors bg-white rounded-full shadow-lg top-4 right-4 hover:bg-gray-100"
              aria-label="Close modal"
              title="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal content */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="object-cover w-full h-64 md:h-96"
                />
              </div>
              <div className="p-6 md:w-1/3">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {selectedImage.title}
                </h3>
                {selectedImage.description && (
                  <p className="leading-relaxed text-gray-600">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
