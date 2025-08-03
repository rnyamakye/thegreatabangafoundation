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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Career Success
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  85% of our graduates secure meaningful employment within 6
                  months, building successful careers in technology, healthcare,
                  and business.
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
                    Water Donation
                  </h3>
                  {/* <p className="text-gray-600 leading-relaxed mb-4">
                    Sarah, a first-generation college student from a rural
                    community, dreamed of becoming a doctor. With TGAF's
                    scholarship support covering her tuition and living
                    expenses, she graduated summa cum laude with a degree in
                    Biology and is now pursuing her medical degree.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    "TGAF didn't just give me financial support; they gave me
                    hope and showed me that someone believed in my dreams.
                    Today, I'm one step closer to serving my community as a
                    doctor."
                  </p> */}
                  <div className="mt-4 text-orange-600 font-semibold">
                    — Sarah K., Medical Student
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="rounded-lg overflow-hidden h-80">
                    <img
                      src="/donation_img.jpg"
                      alt="Sarah's medical journey - TGAF scholarship recipient"
                      className="w-full h-full object-cover"
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
