import { useEffect, useState } from "react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Blog - The Great Abanga Foundation" },
    {
      name: "description",
      content:
        "Read inspiring stories, see photos, and watch videos showcasing the impact of The Great Abanga Foundation's work in communities.",
    },
  ];
}

// Loading component
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-orange-200 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-orange-600 rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
}

// Article card component
function ArticleCard({ story }: { story: any }) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageError = () => {
    setIsImageLoading(false);
  };

  const handleNavigate = () => {
    setIsNavigating(true);
  };

  const renderMedia = () => {
    if (story.media.type === "image" && story.media.url) {
      return (
        <div className="relative">
          {isImageLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-50">
              <div className="relative">
                <div className="w-8 h-8 border-2 border-orange-200 rounded-full animate-spin"></div>
                <div className="absolute top-0 left-0 w-8 h-8 border-2 border-orange-600 rounded-full animate-spin border-t-transparent"></div>
              </div>
            </div>
          )}
          <img
            src={story.media.url}
            alt={story.media.alt}
            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      );
    } else if (story.media.type === "video") {
      return (
        <div className="relative flex items-center justify-center h-48 bg-gradient-to-br from-blue-100 to-blue-200">
          <div className="relative">
            <svg
              className="w-16 h-16 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full bg-opacity-20"></div>
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded">
              VIDEO
            </span>
          </div>
        </div>
      );
    } else {
      // Graphic/placeholder
      const colors: Record<string, string> = {
        education: "from-orange-100 to-orange-200 text-orange-600",
        healthcare: "from-green-100 to-green-200 text-green-600",
        infrastructure: "from-cyan-100 to-cyan-200 text-cyan-600",
        empowerment: "from-pink-100 to-pink-200 text-pink-600",
        environment: "from-emerald-100 to-emerald-200 text-emerald-600",
        sports: "from-purple-100 to-purple-200 text-purple-600",
      };

      const colorClass =
        colors[story.category] || "from-gray-100 to-gray-200 text-gray-600";

      return (
        <div
          className={`flex items-center justify-center h-48 bg-gradient-to-br ${colorClass}`}
        >
          <svg
            className="w-16 h-16"
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
      );
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      education: "text-blue-600",
      sports: "text-green-600",
      healthcare: "text-red-600",
      infrastructure: "text-purple-600",
      empowerment: "text-pink-600",
      environment: "text-emerald-600",
      video: "text-indigo-600",
    };
    return colors[category] || "text-orange-600";
  };

  return (
    <article className="relative overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg group">
      {/* Navigation Loading Overlay */}
      {isNavigating && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/90 backdrop-blur-sm">
          <div className="relative">
            <div className="w-12 h-12 border-orange-200 rounded-full border-3 animate-spin"></div>
            <div className="absolute top-0 left-0 w-12 h-12 border-orange-600 rounded-full border-3 animate-spin border-t-transparent"></div>
          </div>
        </div>
      )}

      <div className="overflow-hidden">{renderMedia()}</div>
      <div className="p-4">
        <div
          className={`mb-2 text-xs font-semibold uppercase tracking-wide ${getCategoryColor(story.category)}`}
        >
          {story.category.replace("-", " ")}
        </div>
        <h3 className="mb-3 text-xl font-bold text-gray-900">{story.title}</h3>
        <p className="mb-3 text-gray-600 truncate">{story.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            {new Date(story.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <Link
            to={`/blog/${story.id}`}
            onClick={handleNavigate}
            className="text-orange-600 transition-colors duration-200 hover:text-orange-700"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  const [impactStories, setImpactStories] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [featuredStory, setFeaturedStory] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [filteredStories, setFilteredStories] = useState<any[]>([]);

  // Load data from the .mjs file on page load
  useEffect(() => {
    const loadImpactStories = async () => {
      try {
        // Dynamic import from the .ts file instead
        const dataModule = await import("../../data/impactStories");

        // Simulate minimum loading time of 1000ms
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setImpactStories(dataModule.impactStories);
        setCategories(dataModule.categories);
        setFeaturedStory(dataModule.getFeaturedStory());
        setFilteredStories(dataModule.impactStories);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading impact stories:", error);
        setIsLoading(false);
      }
    };

    loadImpactStories();
  }, []);

  // Filter stories when category changes
  useEffect(() => {
    if (impactStories.length > 0) {
      const filtered =
        selectedCategory === "all"
          ? impactStories
          : impactStories.filter(
              (story) => story.category === selectedCategory
            );
      setFilteredStories(filtered);
    }
  }, [selectedCategory, impactStories]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl px-6 py-8 mx-auto pt-28">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Impact Stories Blog
            </h1>
            <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-700">
              Discover the inspiring stories, photos, and videos that showcase
              the real impact of our work in communities across Ghana and
              beyond.
            </p>
          </div>

          {/* Featured Story */}
          {featuredStory && (
            <Link to={`/blog/${featuredStory.id}`} className="block">
              <div className="p-8 mb-12 transition-transform duration-300 shadow-xs rounded-2xl hover:scale-[1.01]">
                <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="overflow-hidden rounded-lg">
                    {featuredStory.media.url ? (
                      <div className="relative">
                        <img
                          src={featuredStory.media.url}
                          alt={featuredStory.media.alt}
                          className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-64 bg-gradient-to-br from-orange-100 to-orange-200">
                        <svg
                          className="w-16 h-16 text-orange-600"
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
                    )}
                  </div>
                  <div>
                    <div className="mb-3 text-sm font-semibold tracking-wide text-orange-600 uppercase">
                      Featured Story
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 transition-colors duration-200 hover:text-orange-600">
                      {featuredStory.title}
                    </h2>
                    <p className="mb-4 leading-relaxed text-gray-600">
                      {featuredStory.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {new Date(featuredStory.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </div>
                      <span className="font-medium text-orange-600">
                        Read Full Story →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            
          )}

          {/* Blog Categories */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? "text-white bg-orange-600 hover:bg-orange-700"
                      : "text-gray-700 bg-white hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid - Impact Stories Display */}
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
            {filteredStories.map((story) => (
              <ArticleCard key={story.id} story={story} />
            ))}

            {/* Show message if no stories */}
            {filteredStories.length === 0 && !isLoading && (
              <div className="py-12 text-center col-span-full">
                <p className="text-lg text-gray-500">
                  No stories found in this category.
                </p>
              </div>
            )}
          </div>

          {/* Newsletter Signup */}
          {/* <div className="p-8 text-center bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Stay Updated with Our Impact Stories
            </h3>
            <p className="mb-6 text-lg text-orange-100">
              Subscribe to our newsletter to receive the latest updates on our
              programs, success stories, and community impact.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 text-gray-900 bg-white rounded-lg sm:w-auto focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button className="w-full px-6 py-3 font-semibold text-orange-600 transition-colors duration-200 bg-white rounded-lg sm:w-auto hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div> */}

          {/* Back to Impact */}
          <div className="mt-8 text-center">
            <a
              href="/impact"
              className="inline-flex items-center text-orange-600 transition-colors duration-200 hover:text-orange-700"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Impact Overview
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
