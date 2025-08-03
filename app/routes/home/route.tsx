import { useEffect, useRef } from "react";

// Loader function for the home route
export async function loader() {
  return null;
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

// Default export component
export default function Home() {
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
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20 reveal-fade-in" ref={addToRefs}>
            <div
              className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-12 flex items-center justify-center reveal-scale"
              ref={addToRefs}
            >
              <img
                src="/logo.png"
                alt="The Great Abanga Foundation"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>

            <h1
              className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 reveal-slide-up"
              ref={addToRefs}
            >
              The Great Abanga Foundation
            </h1>

            <p
              className="text-2xl md:text-3xl tgaf-orange font-semibold mb-6 reveal-slide-up"
              ref={addToRefs}
            >
              Helping Hands Brighter Tomorrow
            </p>

            <p
              className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed reveal-slide-up"
              ref={addToRefs}
            >
              Creating a future where no one is left behind — empowered,
              uplifted, and cared for. We provide scholarships, tuition
              assistance, and educational support to help deserving students
              achieve their dreams of higher education across Africa.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center reveal-slide-up pt-10"
              ref={addToRefs}
            >
              <button className="btn-tgaf-primary">See Our Impact</button>
              <button className="btn-tgaf-secondary">Get Involved</button>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 reveal-fade-in"
            ref={addToRefs}
          >
            <div
              className="text-center p-6 bg-transparent rounded-lg reveal-slide-up"
              ref={addToRefs}
            >
              <div className="text-4xl font-bold tgaf-orange mb-2">8+</div>
              <div className="text-black font-medium">Community Programs</div>
            </div>
            <div
              className="text-center p-6 bg-transparent rounded-lg reveal-slide-up"
              ref={addToRefs}
            >
              <div className="text-4xl font-bold tgaf-orange mb-2">₵25K+</div>
              <div className="text-black font-medium">Community Investment</div>
            </div>
            <div
              className="text-center p-6 bg-transparent rounded-lg reveal-slide-up"
              ref={addToRefs}
            >
              <div className="text-4xl font-bold tgaf-orange mb-2">8</div>
              <div className="text-black font-medium">
                Universities Partnered
              </div>
            </div>
            <div
              className="text-center p-6 bg-transparent rounded-lg reveal-slide-up"
              ref={addToRefs}
            >
              <div className="text-4xl font-bold tgaf-orange mb-2">3</div>
              <div className="text-black font-medium">Years of Impact</div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center mb-16 reveal-fade-in" ref={addToRefs}>
            <h2
              className="text-4xl font-bold text-gray-900 mb-6 reveal-slide-up"
              ref={addToRefs}
            >
              Transforming Lives Through Education
            </h2>
            <p
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed reveal-slide-up"
              ref={addToRefs}
            >
              Every student deserves the opportunity to pursue higher education,
              regardless of their financial background. Through our
              comprehensive scholarship programs, we remove financial barriers
              and open doors to academic excellence, empowering the next
              generation of African leaders, innovators, and change-makers.
            </p>
          </div>

          {/* Impact Stories Section */}
          <div
            className="bg-transparent rounded-2xl p-12 mb-20 reveal-fade-in"
            ref={addToRefs}
          >
            <h3
              className="text-3xl font-bold text-gray-900 mb-12 text-center reveal-slide-up"
              ref={addToRefs}
            >
              Our Impact Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center reveal-slide-up" ref={addToRefs}>
                <div
                  className="w-20 h-20 mx-auto mb-6 tgaf-bg-gradient rounded-full flex items-center justify-center reveal-scale"
                  ref={addToRefs}
                >
                  <svg
                    className="w-10 h-10 text-white"
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
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Academic Excellence
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Our scholarship recipients maintain an average GPA of 3.8+ and
                  have a 95% graduation rate, demonstrating the power of
                  removing financial barriers to education.
                </p>
              </div>
              <div className="text-center reveal-slide-up" ref={addToRefs}>
                <div
                  className="w-20 h-20 mx-auto mb-6 tgaf-bg-gradient rounded-full flex items-center justify-center reveal-scale"
                  ref={addToRefs}
                >
                  <svg
                    className="w-10 h-10 text-white"
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
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Career Success
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  85% of our graduates secure employment within 6 months of
                  graduation, with many starting successful careers in
                  technology, healthcare, and business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
