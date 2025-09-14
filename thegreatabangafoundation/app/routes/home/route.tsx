import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import ImpactSlider from "../../components/BoltSlider";
import LatestNews from "../../components/LatestNews";
import MissionWorkSection from "../../components/MissionWorkSection";
import HeroSlider from "../../components/HeroSlider";

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

// Default export component
export default function Home() {
  const addToRefs = useRevealOnScroll();

  // Initialize counters for stats
  const programsCounter = useCountUp(3);
  const investmentCounter = useCountUp(25000);
  const partnersCounter = useCountUp(1);
  const yearsCounter = useCountUp(2);

  return (
    <>
      <main className="min-h-screen overflow-x-hidden transition-colors duration-200 min-w-screen">
        <section
          id="hero-section"
          className="max-w-screen mx-auto bg-[#F5F3ED]/60 min-h-screen"
        >
          <HeroSlider />
          {/* Content */}
        </section>

        <section className="max-w-screen bg-[#374a5c] relative h-[1000px]">
          <div className="relative max-w-6xl px-5 pb-5 mx-auto pt-15">
            <h2 className="text-3xl font-bold text-white font-cursive md:text-4xl lg:text-5xl">
              Our Focus Areas
            </h2>
            <p className="mt-4 text-white text-md font-quicksand md:text-xl lg:text-2xl">
              Supporting people in need through targeted programs and
              initiatives
            </p>
          </div>
          <div className="relative px-4 mx-auto max-w-7xl">
            <ImpactSlider />
          </div>
          <div className="bg-[url('/continents_img.jpg')] bg-cover bg-center md:h-[600px] h-[500px] max-w-5xl mx-auto relative mt-15">
            <div className="relative flex items-end justify-start h-full max-w-4xl p-5 py-10 text-left md:p-10">
              <div className="flex flex-col md:space-y-4 leading-2">
                <h3 className="text-5xl italic font-medium leading-tight text-white md:text-6xl lg:text-7xl">
                  Operating across two continents{" "}
                </h3>
                <Link
                  to={"/about"}
                  className="px-6 py-4 mt-3 text-black transition-colors duration-200 bg-yellow-400 rounded-md hover:bg-yellow-500 w-fit md:px-8 md:py-5 md:text-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-none bg-[#F5F3ED] mx-auto md:mx-0 md:rounded-none lg:mt-100 mt-80 md:mt-50">
          <MissionWorkSection />
        </section>
        <section>{/* our focus areas */}</section>
        <section className="pb-20 bg-white border-t border-b border-gray-200">
          <LatestNews />
        </section>
      </main>
    </>
  );
}
