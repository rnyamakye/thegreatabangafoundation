import { useEffect, useRef } from "react";

export function meta() {
  return [
    { title: "Impact - The Great Abanga Foundation" },
    {
      name: "description",
      content:
        "See the impact of The Great Abanga Foundation's work in education and community development.",
    },
  ];
}

// Custom hook for reveal on scroll animation
function useRevealOnScroll() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addToRefs;
}

export default function Impact() {
  const addToRefs = useRevealOnScroll();

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .reveal-element {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          
          .reveal-visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .reveal-fade-in {
            opacity: 0;
            transition: opacity 1s ease-out;
          }
          
          .reveal-fade-in.reveal-visible {
            opacity: 1;
          }
          
          .reveal-slide-up {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease-out;
          }
          
          .reveal-slide-up.reveal-visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .reveal-slide-left {
            opacity: 0;
            transform: translateX(-50px);
            transition: all 0.8s ease-out;
          }
          
          .reveal-slide-left.reveal-visible {
            opacity: 1;
            transform: translateX(0);
          }
          
          .reveal-slide-right {
            opacity: 0;
            transform: translateX(50px);
            transition: all 0.8s ease-out;
          }
          
          .reveal-slide-right.reveal-visible {
            opacity: 1;
            transform: translateX(0);
          }
          
          .reveal-scale {
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.8s ease-out;
          }
          
          .reveal-scale.reveal-visible {
            opacity: 1;
            transform: scale(1);
          }
        `,
        }}
      />
      <main className="min-h-screen transition-colors duration-200 bg-gradient-to-br from-gray-50 via-white to-white">
        <div className="max-w-6xl px-6 py-16 mx-auto">
          {/* Header */}
          <div className="mb-16 reveal-fade-in" ref={addToRefs}>
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h1
                  className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl reveal-slide-up"
                  ref={addToRefs}
                >
                  Our Impact
                </h1>
                <p
                  className="text-xl leading-relaxed text-gray-700 reveal-slide-up"
                  ref={addToRefs}
                >
                  See how The Great Abanga Foundation is transforming lives
                  through education and creating lasting change in communities
                  across Africa.
                </p>
              </div>

              {/* Image Content */}
              <div className="reveal-slide-right" ref={addToRefs}>
                <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                  <img
                    src="/donation_img.jpg"
                    alt="Foundation Impact"
                    className="object-cover w-full h-80 md:h-96"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Stats Grid */}
          <div
            className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3 reveal-fade-in"
            ref={addToRefs}
          >
            <div
              className="p-8 text-center bg-gradient-to-br from-white to-gray-100 rounded-xl reveal-slide-up"
              ref={addToRefs}
            >
              <div
                className="mb-2 text-5xl font-bold text-orange-600 reveal-scale"
                ref={addToRefs}
              >
                15+
              </div>
              <div className="mb-2 text-xl font-semibold text-gray-900">
                Students Supported
              </div>
              <div className="text-gray-600">
                Scholarships and educational assistance provided
              </div>
            </div>

            <div
              className="p-8 text-center bg-gradient-to-br from-white to-gray-100 rounded-xl reveal-slide-up"
              ref={addToRefs}
            >
              <div
                className="mb-2 text-5xl font-bold text-orange-600 reveal-scale"
                ref={addToRefs}
              >
                ₵25K+
              </div>
              <div className="mb-2 text-xl font-semibold text-gray-900">
                Total Investment
              </div>
              <div className="text-gray-600">
                Financial support in education and development
              </div>
            </div>

            <div
              className="p-8 text-center bg-gradient-to-br from-white to-gray-100 rounded-xl reveal-slide-up"
              ref={addToRefs}
            >
              <div
                className="mb-2 text-5xl font-bold text-orange-600 reveal-scale"
                ref={addToRefs}
              >
                100%
              </div>
              <div className="mb-2 text-xl font-semibold text-gray-900">
                Success Rate
              </div>
              <div className="text-gray-600">
                Students completing their educational goals
              </div>
            </div>
          </div>

          {/* Impact Stories */}
          <div className="p-12 bg-gradient-to-br from-white to-gray-100 rounded-2xl">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
              Stories of Transformation
            </h2>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-orange-600 rounded-full">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Educational Excellence
                </h3>
                <p className="leading-relaxed text-gray-600">
                  Our scholarship recipients consistently achieve academic
                  excellence, with an average GPA of 3.0+ and a 95% graduation
                  rate.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-orange-600 rounded-full">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4M8 7h8M8 7l-2 9a2 2 0 002 2h8a2 2 0 002-2L16 7M9 11v6m6-6v6"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Sponsoring School Events
                </h3>
                <p className="leading-relaxed text-gray-600">
                  We support educational institutions by sponsoring academic
                  events, conferences, and competitions that promote learning
                  and excellence in various fields of study.
                </p>
              </div>
            </div>

            {/* Blog Link */}
            <div className="mt-12 text-center">
              <a
                href="/blog"
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
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                Read More Impact Stories & Watch Videos
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Explore our complete collection of photos, articles, and videos
              </p>
            </div>
          </div>

          {/* Success Stories with Images */}
          <div className="mb-16">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
              Real Stories, Real Impact
            </h2>

            <div className="space-y-16">
              {/* Story 1 */}
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    BIOSSA Week Celebration Sponsorship
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    The BIOSSA Family would like to extend our sincerest
                    appreciation to <strong>Abanga's Foundation</strong> for
                    their generous sponsorship of our BIOSSA Week Celebration!
                  </p>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    Your support has enabled us to make this event a success,
                    and we are grateful for your commitment to promoting
                    biological sciences in our community.
                  </p>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    Thank you, Abanga's Foundation, for your kindness and
                    investment in our future!
                  </p>
                  <p className="italic leading-relaxed text-gray-600">
                    <strong>
                      Together, Let's Continue to Nurture Excellence in
                      Biological Sciences
                    </strong>
                  </p>
                  <div className="mt-4 font-semibold text-orange-600">
                    — BIOSSA Family
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="overflow-hidden rounded-lg h-80">
                    <img
                      src="/biossasponserflyer_img.jpg"
                      alt="BIOSSA Week Celebration sponsorship by Abanga's Foundation"
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="overflow-hidden rounded-lg h-80">
                  <img
                    src="/soboloparty_img.jpg"
                    alt="Biossa Aponkye Cup - TGAF sponsored football event"
                    className="object-cover w-full h-full "
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    Biossa Aponkye Cup Sponsorship
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    The Great Abanga Foundation proudly sponsored the Biossa
                    Aponkye Cup, a thrilling showcase of talent, unity, and
                    departmental spirit. From the electrifying kickoff to the
                    final whistle, the event was nothing short of a masterpiece
                    — filled with passion, energy, and unforgettable moments.
                  </p>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    A celebration of grassroots sports at its finest! ⚽️🔥
                  </p>
                  <div className="mt-4 font-semibold text-orange-600">
                    #BiossaAponkyeCup #GreatAbangaFoundation #CommunityMatters
                    #Football
                  </div>
                </div>
              </div>

              {/* Story 3 */}
              {/* <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    Grace's Educational Leadership
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    Grace always wanted to become a teacher but financial
                    constraints made it seem impossible. With TGAF's
                    scholarship, she completed her Education degree and now
                    leads a rural school, inspiring the next generation of
                    students.
                  </p>
                  <p className="leading-relaxed text-gray-600">
                    "TGAF showed me that education is a gift meant to be shared.
                    Now I ensure that every child in my school knows that their
                    dreams are valid and achievable."
                  </p>
                  <div className="mt-4 font-semibold text-orange-600">
                    — Grace A., School Principal
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center justify-center p-8 rounded-lg bg-gradient-to-br from-green-100 to-green-200 h-80"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
