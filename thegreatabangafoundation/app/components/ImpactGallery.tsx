import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getData } from "../lib";
import { config } from "../config";

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  description?: string;
};

const categories = ["All", "Education", "Health", "Community", "Finance"];

export default function ImpactGallery() {
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
        // Fallback to empty array to show loading state
        setGalleryData([]);
      }
    };
    fetchData();
  }, []);

  const filteredImages =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === selectedCategory);

  // Limit to 6 images for the impact page preview
  const previewImages = filteredImages.slice(5, 11);

  return (
    <section className="py-16 bg-[#374a5c]">
      <div className="px-5 mx-auto md:max-w-7xl lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-50 font-cursive md:text-4xl">
            Impact Gallery
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-100">
            Visual stories of transformation, hope, and community impact through
            our various initiatives
          </p>
        </div>

        {/* Category Filter
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
          {galleryData.length === 0 ? (
            <div className="py-12 text-center text-gray-500 col-span-full">
              Loading gallery...
            </div>
          ) : previewImages.length === 0 ? (
            <div className="py-12 text-center text-gray-500 col-span-full">
              No images found for "{selectedCategory}" category.
            </div>
          ) : (
            previewImages.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden transition-all duration-300 bg-white shadow-sm cursor-pointer group hover:shadow-lg"
                onClick={() => setSelectedImage(image)}
              >
                <div className="overflow-hidden aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* <div className="p-4">
                  <div className="mb-2"></div>
                  <h3 className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                    {image.title}
                  </h3>
                </div> */}
              </div>
            ))
          )}
        </div>

        {/* See More Button */}
        {galleryData.length > 6 && (
          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white transition-all duration-200 hover:underline"
            >
              See More Photos
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
            <div className="relative w-full max-w-4xl overflow-hidden bg-white">
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
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
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

        {/* Empty state */}
        {filteredImages.length === 0 && galleryData.length > 0 && (
          <div className="py-12 text-center">
            <div className="text-lg text-gray-500">
              No images found for "{selectedCategory}" category.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
