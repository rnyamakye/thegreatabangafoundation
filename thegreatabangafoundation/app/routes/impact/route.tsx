import { useEffect, useRef, useState } from "react";
import ImpactStories from "~/components/ImpactStories";
import ImpactGallery from "~/components/ImpactGallery";

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
      <div className="min-h-screen transition-colors duration-200">
        {/* Hero Section with Background Image */}
        <div className="relative min-h-100">
          {/* SVG Background Fallback */}
          <div className="absolute inset-0 hero-svg-background" />

          {/* Background Image */}
          <div className="absolute inset-0 bg-no-repeat bg-center bg-cover bg-[url('/impact_hero_img.jpg')] ">
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/80" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 mx-auto h-[100vh]">
            <div className="flex flex-col items-center justify-center pb-5 text-center">
              <h1 className="mb-6 text-6xl font-extrabold leading-tight text-gray-100 md:text-7xl drop-shadow-lg">
                Our Impact
              </h1>
              <p className="max-w-5xl text-xl leading-relaxed text-white ">
                See how The Great Abanga Foundation is transforming lives
                through education and creating lasting change in communities
                across Africa.
              </p>
            </div>

            {/* Quote positioned at bottom */}
            <div className="relative z-10 flex flex-col w-full max-w-5xl text-center md:-bottom-50 -bottom-20">
              <div className="">
                <blockquote className="italic font-medium text-gray-100 text-md font-quicksand md:text-xl">
                  "The best way to find yourself is to lose yourself in the
                  service of others."
                </blockquote>
                <cite className="block mt-2 text-sm font-semibold text-gray-200 font-quicksand md:text-base">
                  – Mahatma Gandhi
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
        <div
          className="min-h-screen mx-auto overflow-x-hidden transition-colors duration-200 md:pt-12 min-w-screen"
          style={{ backgroundColor: "" }}
        >
          <div className="px-6 pt-24 mx-auto max-w-7xl md:py-24">
            {/* Header */}
            <div className="mb-16 ">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Text Content */}

                {/* Image Content */}
                <div className=""></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3 ">
              <div className="text-center bg-white shadow-lg ">
                <div className="w-full h-40">
                  <img
                    src="/donation_img2.jpg"
                    alt="Community Investment"
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <div className="py-5">
                  <div
                    className="mb-2 text-4xl font-bold text-gray-800"
                    ref={programsCounter.elementRef}
                  >
                    {programsCounter.count}+
                  </div>
                  <div className="font-medium text-[#3E2723]">
                    Community Programs
                  </div>
                </div>
              </div>
              <div className="text-center bg-white shadow-lg ">
                <div className="w-full h-40">
                  <img
                    src="/financial_aid_img.jpg"
                    alt="Community Investment"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="py-5">
                  <div
                    className="mb-2 text-4xl font-bold text-gray-800"
                    ref={communityInvestmentCounter.elementRef}
                  >
                    ₵{communityInvestmentCounter.count.toLocaleString()}+
                  </div>
                  <div className="font-medium text-[#3E2723]">Investment</div>
                </div>
              </div>
              <div className="text-center bg-white shadow-lg ">
                <div className="w-full h-40">
                  <img
                    src="/mission_img1.jpg"
                    alt="Community Investment"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="py-5">
                  <div
                    className="mb-2 text-4xl font-bold text-gray-800"
                    ref={yearsCounter.elementRef}
                  >
                    {yearsCounter.count}+
                  </div>
                  <div className="font-medium text-[#3E2723]">
                    Years of Impact
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Impact Gallery Section */}
          <div className="mx-auto ">
            <ImpactGallery />
          </div>
          <div className="px-5 mx-auto bg-white border-t border-gray-200 ">
            <div>
              <ImpactStories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
