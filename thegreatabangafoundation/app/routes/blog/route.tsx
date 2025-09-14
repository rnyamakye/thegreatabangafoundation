import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getData } from "~/lib";
import { config } from "~/config";

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
    if (story.image) {
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
            src={story.image}
            alt={story.title}
            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      );
    } else {
      // Graphic/placeholder
      const colors: Record<string, string> = {
        education: "from-orange-100 to-orange-200 text-gray-600",
        healthcare: "from-green-100 to-green-200 text-green-600",
        infrastructure: "from-cyan-100 to-cyan-200 text-cyan-600",
        empowerment: "from-pink-100 to-pink-200 text-pink-600",
        environment: "from-emerald-100 to-emerald-200 text-emerald-600",
        sports: "from-purple-100 to-purple-200 text-purple-600",
        community: "from-purple-100 to-purple-200 text-purple-600",
      };

      const colorClass =
        colors[story._base] || "from-gray-100 to-gray-200 text-gray-600";

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
      community: "text-purple-600",
      infrastructure: "text-purple-600",
      empowerment: "text-pink-600",
      environment: "text-emerald-600",
      video: "text-indigo-600",
    };
    return colors[category] || "text-gray-600";
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
          className={`mb-2 text-xs font-semibold uppercase tracking-wide ${getCategoryColor(story._base)}`}
        >
          {story._base.replace("-", " ")}
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
            to={`/blog/${story.slug}`}
            onClick={handleNavigate}
            className="text-gray-600 transition-colors duration-200 hover:text-gray-700"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  const [blogsData, setBlogsData] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [filteredStories, setFilteredStories] = useState<any[]>([]);

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Stories" },
    // { id: "education", name: "Education" },
    // { id: "community", name: "Community" },
    // { id: "sports", name: "Sports" },
    // { id: "healthcare", name: "Healthcare" },
    // { id: "empowerment", name: "Empowerment" },
  ];

  // Load data from backend API
  useEffect(() => {
    const loadBlogsData = async () => {
      try {
        const endpoint = `${config?.baseURL}/blogs`;
        const data = await getData(endpoint);

        // Simulate minimum loading time of 1000ms
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setBlogsData(data);
        setFilteredStories(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading blogs data:", error);
        setIsLoading(false);
      }
    };

    loadBlogsData();
  }, []);

  // Filter stories when category changes
  useEffect(() => {
    if (blogsData.length > 0) {
      const filtered =
        selectedCategory === "all"
          ? blogsData
          : blogsData.filter((story: any) => story._base === selectedCategory);
      setFilteredStories(filtered);
    }
  }, [selectedCategory, blogsData]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="min-h-screen transition-colors duration-200">
        {/* Hero Section with Background Image */}
        <div className="relative min-h-100">
          {/* SVG Background Fallback */}
          <div className="absolute inset-0 hero-svg-background" />

          {/* Background Image */}
          <div className="absolute inset-0 bg-no-repeat bg-top bg-cover bg-[url('/graduation_img.jpg')] ">
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/80" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-[100vh] px-6 py-20 mx-auto">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="mb-6 text-6xl font-extrabold leading-tight text-gray-100 md:text-7xl drop-shadow-lg">
                Stories & Updates
              </h1>
            </div>

            {/* Quote positioned at bottom */}
            <div className="">
              <div className="relative z-10 flex flex-col text-center">
                <blockquote className="text-lg italic font-medium text-gray-100 font-quicksand md:text-xl">
                  "Giving is not just about making a donation, it's about making
                  a difference."
                </blockquote>
                <cite className="block mt-2 text-sm font-semibold text-gray-200 font-quicksand md:text-base">
                  – Native American Proverb
                </cite>
              </div>
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
        </div>

        {/* Main Content */}
        <main className="min-h-screen ">
          <div className="px-3 py-8 pt-10 mx-auto bg-white max-w-7xl md:px-6">
            {/* Header */}
            <div className="mb-8 text-center">
              <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-700">
                Discover the inspiring stories, photos, and videos that showcase
                the real impact of our work in communities across Ghana and
                beyond.
              </p>
            </div>

            {/* Blog Categories */}
            <div className="mb-8">
              <div className="flex justify-center gap-2 ">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-6 py-2 text-sm  transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? "underline "
                        : "text-gray-700"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Stories List - Latest News Style */}
            <div className="px-2 border-t border-gray-200 ">
              <div className="py-10 text-start">
                <h2 className="mb-4 text-4xl font-bold text-gray-900">
                  All Stories
                </h2>
                <p className="mx-auto text-sm text-gray-600 md:px-0 md:mx-0 font-quicksand">
                  Explore our complete collection of impact stories, updates,
                  and community highlights
                </p>
              </div>

              {/* Stories List */}
              <div className="grid grid-cols-1 gap-10 pb-10 md:gap-5 md:grid-cols-3">
                {filteredStories.map((story) => (
                  <article key={story._id} className="group">
                    <a
                      href={`/blog/${story.slug}`}
                      className="block py-5 md:max-w-100"
                    >
                      <div className="flex flex-col space-x-4 space-y-5 ">
                        <div className="flex-shrink-0">
                          <img
                            src={story.image || "/placeholder-impact.jpg"}
                            alt={story.title}
                            className="object-cover w-full h-40 transition-transform duration-200"
                            onError={(e) => {
                              e.currentTarget.src =
                                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiM5QjlCOTMiLz4KUGF0aCBkPSJNOTAgMTYwQzkwIDM1LjggMTE2LjIgMTIwIDE1MCAxMjBTMjEwIDEzNS44IDIxMCAxNjBWMTgwSDkwVjE2MFoiIGZpbGw9IiM5QjlCOTMiLz4KPHRleHQgeD0iMTUwIiB5PSIxOTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5QjlCOTMiIGZvbnQtc2l6ZT0iMTQiPkltcGFjdCBTdG9yeTwvdGV4dD4KPC9zdmc+";
                            }}
                          />
                        </div>

                        <div className="flex-1 md:max-w-3xl">
                          <h4 className="mb-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-600 line-clamp-2 md:line-clamp-none group-hover:underline">
                            {story.title}
                          </h4>

                          <p className="mb-2 text-gray-600 truncate text-md line-clamp-2">
                            {story.excerpt}
                          </p>

                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <time dateTime={story.date}>
                              {new Date(story.date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </time>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                ))}

                {/* Show message if no stories */}
                {filteredStories.length === 0 && !isLoading && (
                  <div className="py-12 text-center">
                    <p className="text-lg text-gray-500">
                      No stories found in this category.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* <div className="p-8 text-center bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Stay Updated with Our Impact Stories
            </h3>
            <p className="mb-6 text-lg text-gray-100">
              Subscribe to our newsletter to receive the latest updates on our
              programs, success stories, and community impact.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 text-gray-900 bg-white rounded-lg sm:w-auto focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button className="w-full px-6 py-3 font-semibold text-gray-600 transition-colors duration-200 bg-white rounded-lg sm:w-auto hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div> */}

            {/* Back to Impact */}
            <div className="mt-8 text-center">
              <a
                href="/impact"
                className="inline-flex items-center text-gray-600 transition-colors duration-200 hover:text-gray-700 hover:underline"
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
      </div>
    </>
  );
}
