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
      <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16 reveal-fade-in" ref={addToRefs}>
            <h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 reveal-slide-up"
              ref={addToRefs}
            >
              Our Impact
            </h1>
            <p
              className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed reveal-slide-up"
              ref={addToRefs}
            >
              See how The Great Abanga Foundation is transforming lives through
              education and creating lasting change in communities across
              Africa.
            </p>
          </div>

          {/* Impact Stats Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal-fade-in"
            ref={addToRefs}
          >
            <div
              className="text-center p-8 bg-transparent rounded-xl reveal-slide-up"
              ref={addToRefs}
            >
              <div
                className="text-5xl font-bold text-orange-600 mb-2 reveal-scale"
                ref={addToRefs}
              >
                15+
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                Students Supported
              </div>
              <div className="text-gray-600">
                Scholarships and educational assistance provided
              </div>
            </div>

            <div
              className="text-center p-8 bg-transparent rounded-xl reveal-slide-up"
              ref={addToRefs}
            >
              <div
                className="text-5xl font-bold text-orange-600 mb-2 reveal-scale"
                ref={addToRefs}
              >
                ₵45K+
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                Total Investment
              </div>
              <div className="text-gray-600">
                Financial support in education and development
              </div>
            </div>

            <div
              className="text-center p-8 bg-transparent rounded-xl reveal-slide-up"
              ref={addToRefs}
            >
              <div
                className="text-5xl font-bold text-orange-600 mb-2 reveal-scale"
                ref={addToRefs}
              >
                100%
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                Success Rate
              </div>
              <div className="text-gray-600">
                Students completing their educational goals
              </div>
            </div>
          </div>

          {/* Impact Stories */}
          <div className="bg-transparent rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Stories of Transformation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-600 rounded-full flex items-center justify-center">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Educational Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our scholarship recipients consistently achieve academic
                  excellence, with an average GPA of 3.8+ and a 95% graduation
                  rate.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-600 rounded-full flex items-center justify-center">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sponsoring School Events
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We support educational institutions by sponsoring academic events,
                  conferences, and competitions that promote learning and excellence
                  in various fields of study.
                </p>
              </div>
            </div>
          </div>

          {/* Success Stories with Images */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Real Stories, Real Impact
            </h2>

            <div className="space-y-16">
              {/* Story 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    BIOSSA Week Celebration Sponsorship
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The BIOSSA Family would like to extend our sincerest
                    appreciation to <strong>Abanga's Foundation</strong> for
                    their generous sponsorship of our BIOSSA Week Celebration!
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Your support has enabled us to make this event a success,
                    and we are grateful for your commitment to promoting
                    biological sciences in our community.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Thank you, Abanga's Foundation, for your kindness and
                    investment in our future!
                  </p>
                  <p className="text-gray-600 leading-relaxed italic">
                    <strong>
                      Together, Let's Continue to Nurture Excellence in
                      Biological Sciences
                    </strong>
                  </p>
                  <div className="mt-4 text-orange-600 font-semibold">
                    — BIOSSA Family
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="rounded-lg overflow-hidden h-80">
                    <img
                      src="/biossasponserflyer_img.jpg"
                      alt="BIOSSA Week Celebration sponsorship by Abanga's Foundation"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg overflow-hidden h-80">
                  <img
                    src="/soboloparty_img.jpg"
                    alt="Sarah's medical journey - TGAF scholarship recipient"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Sobolo Party
                  </h3>
                  {/* <p className="text-gray-600 leading-relaxed mb-4">
                    Emmanuel came from a family where technology seemed out of
                    reach. Through TGAF's support, he pursued Computer Science
                    and developed a mobile app that helps farmers connect with
                    buyers directly, increasing their income by 40%.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    "The foundation taught me that with education and
                    determination, I could not only change my life but also
                    impact my entire community. My app now serves over 500
                    farmers."
                  </p> */}
                  <div className="mt-4 text-orange-600 font-semibold">
                    — Emmanuel O., Software Developer & Entrepreneur
                  </div>
                </div>
              </div>

              {/* Story 3 */}
              {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Grace's Educational Leadership
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Grace always wanted to become a teacher but financial
                    constraints made it seem impossible. With TGAF's
                    scholarship, she completed her Education degree and now
                    leads a rural school, inspiring the next generation of
                    students.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    "TGAF showed me that education is a gift meant to be shared.
                    Now I ensure that every child in my school knows that their
                    dreams are valid and achievable."
                  </p>
                  <div className="mt-4 text-orange-600 font-semibold">
                    — Grace A., School Principal
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 h-80 flex items-center justify-center"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
