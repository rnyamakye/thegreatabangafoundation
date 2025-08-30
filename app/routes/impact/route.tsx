import { useEffect, useRef, useState } from "react";

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

// Custom hook for counter animation
function useCountUp(endValue: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);

      const currentCount = Math.floor(
        startValue + (endValue - startValue) * easedProgress
      );
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, endValue, duration]);

  return { count, elementRef };
}

export default function Impact() {
  const addToRefs = useRevealOnScroll();

  // Initialize counters for impact stats
  const studentsCounter = useCountUp(15);
  const investmentCounter = useCountUp(25000);
  const successRateCounter = useCountUp(100);
  const gpaCounter = useCountUp(30); // Will display as 3.0 (30/10)
  const graduationRateCounter = useCountUp(95);

  // Additional stats from homepage
  const programsCounter = useCountUp(3);
  const communityInvestmentCounter = useCountUp(25000);
  const yearsCounter = useCountUp(2);

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
      <div
        className="min-h-screen mx-auto overflow-x-hidden transition-colors duration-200 bg-gray-100 md:pt-12 min-w-screen"
        style={{ backgroundColor: "" }}
      >
        <div className="max-w-6xl px-6 pt-24 mx-auto md:py-24">
          {/* Header */}
          <div className="mb-16 reveal-fade-in" ref={addToRefs}>
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h1
                  className="mb-6 text-4xl font-bold md:text-5xl reveal-slide-up"
                  style={{ color: "#3E2723" }}
                  ref={addToRefs}
                >
                  Our Impact
                </h1>
                <p
                  className="text-xl leading-relaxed reveal-slide-up"
                  style={{ color: "#3E2723" }}
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

          <div
            className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3 reveal-fade-in"
            ref={addToRefs}
          >
            <div
              className="p-6 text-center bg-white border border-orange-500 rounded-lg reveal-slide-up"
              ref={addToRefs}
            >
              <div
                className="mb-2 text-4xl font-bold text-orange-600"
                ref={programsCounter.elementRef}
              >
                {programsCounter.count}+
              </div>
              <div className="font-medium text-[#3E2723]">
                Community Programs
              </div>
            </div>
            <div
              className="p-6 text-center bg-white border border-orange-500 rounded-lg reveal-slide-up"
              ref={addToRefs}
            >
              <div
                className="mb-2 text-4xl font-bold text-orange-600"
                ref={communityInvestmentCounter.elementRef}
              >
                ₵{communityInvestmentCounter.count.toLocaleString()}+
              </div>
              <div className="font-medium text-[#3E2723]">
                Community Investment
              </div>
            </div>
            <div
              className="p-6 text-center bg-white border border-orange-500 rounded-lg reveal-slide-up"
              ref={addToRefs}
            >
              <div
                className="mb-2 text-4xl font-bold text-orange-600"
                ref={yearsCounter.elementRef}
              >
                {yearsCounter.count}
              </div>
              <div className="font-medium text-[#3E2723]">Years of Impact</div>
            </div>
          </div>
        </div>

       

        {/* Impact Stories */}
        <div className="max-w-6xl p-12 mx-auto my-24 bg-gradient-to-br from-white to-gray-100 rounded-2xl">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#3E2723]">
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
              <h3 className="mb-4 text-xl font-semibold text-[#3E2723]">
                Educational Excellence
              </h3>
              <p className="leading-relaxed text-[#3E2723]">
                Our scholarship recipients consistently achieve academic
                excellence, with an average GPA of{" "}
                <span
                  className="font-bold text-orange-600"
                  ref={gpaCounter.elementRef}
                >
                  {(gpaCounter.count / 10).toFixed(1)}+
                </span>{" "}
                and a{" "}
                <span
                  className="font-bold text-orange-600"
                  ref={graduationRateCounter.elementRef}
                >
                  {graduationRateCounter.count}%
                </span>{" "}
                graduation rate.
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
              <h3 className="mb-4 text-xl font-semibold text-[#3E2723]">
                Sponsoring School Events
              </h3>
              <p className="leading-relaxed text-[#3E2723]">
                We support educational institutions by sponsoring academic
                events, conferences, and competitions that promote learning and
                excellence in various fields of study.
              </p>
            </div>
          </div>

          
        </div>

        {/* Success Stories with Images */}
        <div className="mb-16 ">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#3E2723]">
            Real Stories, Real Impact
          </h2>

          <div className="max-w-6xl px-6 mx-auto space-y-16">
            {/* Story 1 */}
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h3 className="mb-4 text-2xl font-bold text-[#3E2723]">
                  BIOSSA Week Celebration Sponsorship
                </h3>
                <p className="mb-4 leading-relaxed text-[#3E2723]">
                  The BIOSSA Family would like to extend our sincerest
                  appreciation to <strong>Abanga's Foundation</strong> for their
                  generous sponsorship of our BIOSSA Week Celebration!
                </p>
                <p className="mb-4 leading-relaxed text-[#3E2723]">
                  Your support has enabled us to make this event a success, and
                  we are grateful for your commitment to promoting biological
                  sciences in our community.
                </p>
                <p className="mb-4 leading-relaxed text-[#3E2723]">
                  Thank you, Abanga's Foundation, for your kindness and
                  investment in our future!
                </p>
                <p className="italic leading-relaxed text-[#3E2723]">
                  <strong>
                    Together, Let's Continue to Nurture Excellence in Biological
                    Sciences
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
                <h3 className="mb-4 text-2xl font-bold text-[#3E2723]">
                  Biossa Aponkye Cup Sponsorship
                </h3>
                <p className="mb-4 leading-relaxed text-[#3E2723]">
                  The Great Abanga Foundation proudly sponsored the Biossa
                  Aponkye Cup, a thrilling showcase of talent, unity, and
                  departmental spirit. From the electrifying kickoff to the
                  final whistle, the event was nothing short of a masterpiece —
                  filled with passion, energy, and unforgettable moments.
                </p>
                <p className="mb-4 leading-relaxed text-[#3E2723]">
                  A celebration of grassroots sports at its finest! ⚽️🔥
                </p>
                <div className="mt-4 font-semibold text-orange-600">
                  #BiossaAponkyeCup #GreatAbangaFoundation #CommunityMatters
                  #Football
                </div>
              </div>
            </div>
            {/* Blog Link */}
          <div className="mt-12 text-center ">
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
            <p className="mt-2 text-sm text-[#3E2723]">
              Explore our complete collection of photos, articles, and videos
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
