import { useState, useEffect } from "react";
import { Link } from "react-router";

interface HeroSlide {
  id: number;
  type: "image" | "video";
  src: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    type: "image",
    src: "/financial_aid_img.jpg",
  },
  // {
  //   id: 2,
  //   type: "video",
  //   src: "/donation_vid.mp4",
  // },
  {
    id: 3,
    type: "image",
    src: "/donation_img5.jpg",
  },
  {
    id: 4,
    type: "image",
    src: "/donation_img1.jpg",
  },
  {
    id: 5,
    type: "image",
    src: "/donation_img3.jpg",
  },
  {
    id: 6,
    type: "image",
    src: "/donation_img3.jpg",
  },
  {
    id: 7,
    type: "image",
    src: "/donation_img3.jpg",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides with different durations for videos and images
  useEffect(() => {
    if (!isAutoPlaying) return;

    const currentSlideData = heroSlides[currentSlide];
    const duration = currentSlideData.type === "video" ? 20000 : 8000; // 20s for videos, 8s for images

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, duration);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]); // Added currentSlide as dependency to update duration

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 12 seconds (longer pause)
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const slide = heroSlides[currentSlide];

  return (
    <div className="sticky top-0 h-[100vh] overflow-hidden z-0 max-w-screen">
      {/* SVG Background Fallback */}
      <div className="absolute inset-0 hero-svg-background" />

      {/* Background Media */}
      {slide.type === "image" ? (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out`}
          style={{ backgroundImage: `url('${slide.src}')` }}
        />
      ) : (
        <video
          key={slide.id}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-1000"
        >
          <source src={slide.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Winston Churchill Quote */}
      <div className="flex flex-col items-center justify-center h-full p-5 text-start">
        <div className="z-10 flex flex-col mx-auto my-3 space-y-5 lg:px-10 text-start md:w-full md:mt-0">
          {/* <div className="w-[200px]">
            <img src="/logo.png" alt="logo" />
          </div> */}
          <h1 className="text-4xl font-bold text-white transition-all duration-500 md:text-6xl">
            The Great Abanga Foundation
          </h1>
          <h2 className="text-lg italic font-bold text-gray-50 font-cursive md:text-4xl">
            Helping Hands, Brighter Tomorrow
          </h2>
          <p className="mt-4 italic text-gray-100 transition-all duration-500 text-md font-quicksand md:text-2xl lg:w-200 w-70 md:w-120">
            Creating a future where no one is left behind — empowered, uplifted,
            and cared for. Empowering communities across Ghana and Canada
            through comprehensive programs in education, healthcare, and
            sustainable development.
          </p>
          <Link
            to={"/about"}
            className="inline-block px-6 py-3 mt-2 font-semibold text-center text-white transition-colors duration-300 transform bg-[#374a5c] rounded-lg shadow-md w-fit hover:bg-gray-600 hover:shadow-lg "
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* <div className="relative z-10 px-4 mb-5">
        <blockquote className="max-w-4xl mx-auto text-lg italic font-medium text-gray-100 font-quicksand md:text-xl">
          "We make a living by what we get, but we make a life by what we give."
        </blockquote>
        <cite className="block mt-2 text-sm font-semibold text-gray-200 font-quicksand md:text-base">
          – Winston Churchill
        </cite>
      </div> */}

      {/* Slide Indicators with Navigation - Center Right */}
      <div className="absolute z-20 -translate-y-1/2 right-4 top-1/2">
        <div className="flex flex-col items-center space-y-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 transition-all duration-200 rounded-full group"
            aria-label="Previous slide"
          >
            <svg
              className="w-4 h-4 transition-colors duration-200 text-white/70 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex flex-col space-y-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1 h-1 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 transition-all duration-200 rounded-full group"
            aria-label="Next slide"
          >
            <svg
              className="w-4 h-4 transition-colors duration-200 text-white/70 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Scroll Down Arrow */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
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
  );
}
