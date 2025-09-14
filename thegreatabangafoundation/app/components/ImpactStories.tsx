import { Link } from "react-router";
import { NavLink } from "react-router";

import { useEffect, useState } from "react";

type Blog = {
  _id: string;
  image: string;
  title: string;
  _base: string;
  description: string;
  excerpt: string;
  date: string;
  slug: string;
  author: string;
  featured: boolean;
  impact: boolean;
};
import { getData } from "../lib";
import { config } from "../config";

export default function ImpactStories() {
  const [blogsData, setBlogsData] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseURL}/blogs`;
      try {
        const data = await getData(endpoint);
        setBlogsData(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Filter and sort impact stories by date descending
  const impactStories = blogsData
    .filter((blog) => blog.impact === true)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <section className="pt-16 pb-10 bg-white">
      <div className="mx-auto md:max-w-7xl lg:px-8">
        <div className="pb-10 text-start">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 font-cursive md:text-4xl">
            Our Impact Stories
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-gray-600 md:px-0 md:mx-0 ">
            Discover the real stories of change, transformation, and community
            impact through our various initiatives
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogsData.length === 0 ? (
            <div className="text-center text-gray-500 col-span-full">
              Loading...
            </div>
          ) : (
            impactStories.map((item) => (
              <article key={item._id} className="group">
                <Link to={`/blog/${item.slug}`} className="block py-5">
                  <div className="flex flex-col space-y-5">
                    <div className="flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.jpg"}
                        alt={item.title}
                        className="object-cover w-full h-40 transition-transform duration-200 "
                      />
                    </div>
                    <div>
                      <div className="mb-2"></div>
                      <h4 className="mb-1 text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-600 group-hover:underline">
                        {item.title}
                      </h4>
                      <p className="mb-2 text-gray-600 text-md line-clamp-3">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <time dateTime={item.date}>
                            {new Date(item.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))
          )}
          {impactStories.length === 0 && blogsData.length > 0 && (
            <div className="text-center text-gray-500 col-span-full">
              No impact stories available at the moment.
            </div>
          )}
          <div className="pt-2 col-span-full">
            <NavLink
              to="/blog"
              className="flex items-center justify-start w-full py-3 font-medium text-gray-600 transition-colors rounded-lg text-start hover:text-gray-700 hover:underline "
            >
              View All Stories
              <svg
                className="w-4 h-4 ml-2"
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
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
