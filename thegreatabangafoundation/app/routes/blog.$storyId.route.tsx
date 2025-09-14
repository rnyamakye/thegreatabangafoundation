import { useParams, Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getData } from "~/lib";
import { config } from "~/config";

// Category color helper function
const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    education: "text-blue-600 bg-blue-100",
    sports: "text-green-600 bg-green-100",
    healthcare: "text-red-600 bg-red-100",
    community: "text-purple-600 bg-purple-100",
    infrastructure: "text-purple-600 bg-purple-100",
    empowerment: "text-pink-600 bg-pink-100",
    environment: "text-emerald-600 bg-emerald-100",
    video: "text-indigo-600 bg-indigo-100",
  };
  return colors[category] || "text-gray-600 bg-gray-100";
};

export function meta({ params }: { params: { storyId: string } }) {
  return [
    { title: `Story Details - The Great Abanga Foundation` },
    {
      name: "description",
      content: "Read the full impact story from The Great Abanga Foundation.",
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

// Related Stories component
function RelatedStories({
  currentStoryId,
  currentCategory,
}: {
  currentStoryId: string;
  currentCategory: string;
}) {
  const [relatedStories, setRelatedStories] = useState<any[]>([]);

  useEffect(() => {
    const loadRelatedStories = async () => {
      try {
        // Fetch all stories from backend
        const endpoint = `${config?.baseURL}/blogs`;
        const allStories = await getData(endpoint);

        // Get stories from the same category, excluding the current story
        const sameCategory = allStories
          .filter(
            (story: any) =>
              story._base === currentCategory && story._id !== currentStoryId
          )
          .slice(0, 2);

        // If we need more stories, get others from different categories
        const otherStories = allStories
          .filter(
            (story: any) =>
              story._base !== currentCategory && story._id !== currentStoryId
          )
          .slice(0, 3 - sameCategory.length);

        setRelatedStories([...sameCategory, ...otherStories].slice(0, 3));
      } catch (error) {
        console.error("Error loading related stories:", error);
      }
    };

    loadRelatedStories();
  }, [currentStoryId, currentCategory]);

  if (relatedStories.length === 0) {
    return null;
  }

  return (
    <div className="pt-8 mt-12 border-t border-gray-200">
      <h3 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">
        Related Stories
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedStories.map((relatedStory: any) => (
          <Link
            key={relatedStory._id}
            to={`/blog/${relatedStory.slug}`}
            className="block overflow-hidden transition-transform duration-200 hover:underline"
          >
            <div className="relative h-48">
              {relatedStory.image ? (
                <img
                  src={relatedStory.image}
                  alt={relatedStory.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
                  <svg
                    className="w-12 h-12 text-gray-400"
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
            <div className="py-4">
              <h4
                className="mb-2 text-base font-semibold text-gray-900 md:text-lg"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {relatedStory.title}
              </h4>
              <p
                className="mb-3 text-xs text-gray-600 md:text-sm"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {relatedStory.excerpt}
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                {new Date(relatedStory.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function BlogDetail() {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Handle back navigation
  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1); // Go back to previous page
    } else {
      navigate("/blog"); // Fallback to blog page
    }
  };

  useEffect(() => {
    const loadStory = async () => {
      try {
        // Fetch story from backend API
        const endpoint = `${config?.baseURL}/blogs/${storyId}`;
        console.log("Fetching story from:", endpoint);

        const foundStory = await getData(endpoint);
        console.log("Found story:", foundStory);

        setStory(foundStory);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading story:", error);
        setStory(null);
        setIsLoading(false);
      }
    };

    loadStory();
  }, [storyId]);

  // Social media sharing functions
  const getShareUrl = () => {
    return typeof window !== "undefined" ? window.location.href : "";
  };

  const shareOnWhatsApp = () => {
    const url = getShareUrl();
    const text = `Check out this inspiring story: ${story?.title}\n\n${story?.excerpt}\n\nRead more: ${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "width=600,height=400");
  };

  const shareOnFacebook = () => {
    const url = getShareUrl();
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const shareOnLinkedIn = () => {
    const url = getShareUrl();
    const title = story?.title || "";
    const summary = story?.excerpt || "";
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;
    window.open(linkedinUrl, "_blank", "width=600,height=400");
  };

  const copyToClipboard = async () => {
    const url = getShareUrl();
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Link copied to clipboard!");
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!story) {
    return (
      <>
        {/* Hide navbar for this page */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            nav, header nav, .navbar, [data-navbar] {
              display: none !important;
            }
            body {
              padding-top: 0 !important;
              margin-top: 0 !important;
            }
          `,
          }}
        />

        <main className="min-h-screen bg-gray-50">
          <div className="max-w-4xl px-6 py-16 mx-auto text-center">
            <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-4xl">
              Story Not Found
            </h1>
            <p className="mb-8 text-base text-gray-600 md:text-xl">
              The story you're looking for doesn't exist.
            </p>
            <button
              onClick={handleBackClick}
              className="inline-flex items-center px-6 py-3 text-white transition-colors duration-200 bg-orange-600 rounded-lg hover:bg-orange-700"
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
              Back
            </button>
          </div>
        </main>
      </>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      education: "text-blue-600 bg-blue-100",
      sports: "text-green-600 bg-green-100",
      healthcare: "text-red-600 bg-red-100",
      infrastructure: "text-purple-600 bg-purple-100",
      empowerment: "text-pink-600 bg-pink-100",
      environment: "text-emerald-600 bg-emerald-100",
      video: "text-indigo-600 bg-indigo-100",
    };
    return colors[category] || "text-gray-600 bg-orange-100";
  };

  const renderMedia = () => {
    if (story.image) {
      return (
        <img
          src={story.image}
          alt={story.title}
          className="object-contain w-full rounded-lg shadow-lg md:w-[80%]"
          loading="lazy"
        />
      );
    } else {
      // Placeholder when no image
      const colors: Record<string, string> = {
        education: "from-orange-100 to-orange-200 text-gray-600",
        healthcare: "from-green-100 to-green-200 text-green-600",
        community: "from-purple-100 to-purple-200 text-purple-600",
        sports: "from-green-100 to-green-200 text-green-600",
        infrastructure: "from-cyan-100 to-cyan-200 text-cyan-600",
        empowerment: "from-pink-100 to-pink-200 text-pink-600",
        environment: "from-emerald-100 to-emerald-200 text-emerald-600",
      };

      const colorClass =
        colors[story._base] || "from-gray-100 to-gray-200 text-gray-600";

      return (
        <div
          className={`flex items-center justify-center h-96 bg-gradient-to-br ${colorClass} rounded-lg shadow-lg`}
        >
          <svg
            className="w-24 h-24"
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

  return (
    <>
      {/* Hide navbar for this page */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          nav, header nav, .navbar, [data-navbar] {
            display: none !important;
          }
          body {
            padding-top: 0 !important;
            margin-top: 0 !important;
          }
        `,
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <div className="px-6 py-10 mx-auto max-w-7xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <button
              onClick={handleBackClick}
              className="inline-flex items-center text-gray-600 transition-colors duration-200 hover:text-gray-700"
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
              Back
            </button>
          </div>

          {/* Article Header and Media */}
          <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-2">
            {/* Header Content */}
            <header className="order-2 lg:order-1">
              <h1 className="mb-4 text-xl font-bold text-gray-900 md:text-3xl lg:text-4xl xl:text-5xl">
                {story.title}
              </h1>

              <div className="flex items-center mb-6 text-gray-600">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="mr-4">
                  {new Date(story.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                {story.author && (
                  <>
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>By {story.author}</span>
                  </>
                )}
              </div>

              <p className="text-base leading-relaxed text-gray-700 md:text-lg lg:text-xl">
                {story.excerpt}
              </p>
            </header>

            {/* Featured Media */}
            <div className="order-1 lg:order-2">{renderMedia()}</div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="leading-relaxed text-gray-800">
              {story.description
                .split("\n\n")
                .map((paragraph: string, index: number) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
            </div>
          </article>

          {/* Tags */}
          {story.tags && story.tags.length > 0 && (
            <div className="pt-8 mt-12 border-t border-gray-200">
              <h3 className="mb-4 text-base font-semibold text-gray-900 md:text-lg">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm text-gray-600 transition-colors duration-200 bg-gray-100 rounded-full hover:bg-gray-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="pt-8 mt-12 border-t border-gray-200">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Share This Story
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={shareOnWhatsApp}
                className="flex items-center px-4 py-2 text-white transition-colors duration-200 bg-green-600 rounded-lg hover:bg-green-700"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </button>
              <button
                onClick={shareOnFacebook}
                className="flex items-center px-4 py-2 text-white transition-colors duration-200 bg-blue-800 rounded-lg hover:bg-blue-900"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center px-4 py-2 text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </button>
              <button
                onClick={copyToClipboard}
                className="flex items-center px-4 py-2 text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg hover:bg-gray-300"
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
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy Link
              </button>
            </div>
          </div>

          {/* Related Stories */}
          <RelatedStories
            currentStoryId={story._id}
            currentCategory={story._base}
          />
        </div>
      </main>
    </>
  );
}
