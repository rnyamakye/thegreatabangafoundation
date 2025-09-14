import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { getData } from "~/lib";
import { config } from "~/config";

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
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-orange-200 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-orange-600 rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
}

export default function BlogDetail() {
  const { storyId } = useParams();
  const [story, setStory] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStory = async () => {
      try {
        // Fetch story from backend API using the storyId (which should be a slug)
        const endpoint = `${config?.baseURL}/blogs/${storyId}`;
        const foundStory = await getData(endpoint);

        setStory(foundStory);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading story:", error);
        setIsLoading(false);
      }
    };

    loadStory();
  }, [storyId]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!story) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl px-6 py-16 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Story Not Found
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            The story you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
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
            Back to Blog
          </Link>
        </div>
      </main>
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
    if (story.media.type === "image" && story.media.url) {
      return (
        <img
          src={story.media.url}
          alt={story.media.alt}
          className="object-cover w-full h-96 rounded-lg shadow-lg"
          loading="lazy"
        />
      );
    } else if (story.media.type === "video") {
      return (
        <div className="relative flex items-center justify-center h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg">
          <div className="relative">
            <svg
              className="w-24 h-24 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full"></div>
            </div>
          </div>
          <div className="absolute top-6 left-6">
            <span className="px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded">
              VIDEO
            </span>
          </div>
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
      };

      const colorClass =
        colors[story.category] || "from-gray-100 to-gray-200 text-gray-600";

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
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl px-6 py-8 mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to="/blog"
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
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getCategoryColor(story.category)}`}
            >
              {story.category.replace("-", " ").toUpperCase()}
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
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

          <p className="text-xl leading-relaxed text-gray-700">
            {story.excerpt}
          </p>
        </header>

        {/* Featured Media */}
        <div className="mb-12">{renderMedia()}</div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="text-gray-800 leading-relaxed">
            {story.content
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
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {story.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Share This Story
          </h3>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              Twitter
            </button>
            <button className="flex items-center px-4 py-2 text-white bg-blue-800 rounded-lg hover:bg-blue-900 transition-colors duration-200">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
            <button className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </button>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
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
            Back to All Stories
          </Link>
        </div>
      </div>
    </main>
  );
}
