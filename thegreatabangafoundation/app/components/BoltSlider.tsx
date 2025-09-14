import { useState, useEffect } from "react";
import { Link } from "react-router";

interface SliderItem {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  imageAlt: string;
}

const sliderData: SliderItem[] = [
  {
    id: 1,
    title: "Quality Education",
    description:
      "Providing quality education to empower future leaders. By providing good quality learning material ",
    buttonText: "View Program",
    buttonLink: "/impact",
    image: "/donation_img1.jpg",
    imageAlt: "Community programs in action",
  },
  {
    id: 2,
    title: "Provision of Student Aid",
    description:
      "Direct financial assistance to families in need, helping cover essential expenses like tuition fees, medical bills, and basic living costs during challenging times. ",
    buttonText: "View Program",
    buttonLink: "/impact",
    image: "/financial_aid_img.jpg",
    imageAlt: "Community investment and development",
  },
  {
    id: 3,
    title: "Sponsoring School Events",
    description:
      "We support educational institutions by sponsoring academic events, conferences, and competitions that promote learning and excellence in various fields of study.",
    buttonText: "View Program",
    buttonLink: "/about",
    image: "/School_event_img.jpg",
    imageAlt: "Years of foundation impact",
  },
  {
    id: 4,
    title: "Women Empowerment Initiatives",
    description:
      "We empower women through various initiatives. Such as skills training, microfinance programs, and leadership development workshops.",
    buttonText: "View Program",
    buttonLink: "/about",
    image: "/women_empowerment_img.jpg",
    imageAlt: "Women empowerment",
  },
];

export default function ImpactSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderData.length) % sliderData.length
    );
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const currentItem = sliderData[currentSlide];

  return (
    <div className="relative w-full py-5 overflow-hidden max-w-7xl md:h-96">
      {/* Main slider content */}
      <div className="h-full max-w-5xl mx-auto md:flex">
        {/* Image section - Left side */}
        <div className="h-full md:w-1/2">
          <img
            src={currentItem.image}
            alt={currentItem.imageAlt}
            className="object-cover w-full md:h-full h-50"
          />
        </div>

        {/* Content section - Right side */}
        <div className="flex flex-col items-center justify-center h-full p-8 text-center text-white bg- md:w-5/7 lg:px-12 md:items-start md:text-start">
          <h2 className="mb-4 text-lg font-bold leading-tight md:text-2xl lg:text-3xl xl:text-4xl">
            {currentItem.title}
          </h2>

          <p className="mb-6 text-base leading-relaxed font-quicksand lg:text-lg opacity-90">
            {currentItem.description}
          </p>

          <Link
            to={currentItem.buttonLink}
            className="inline-block px-6 py-3 font-semibold text-center text-black transition-colors duration-200 bg-yellow-400 rounded-lg hover:bg-yellow-400 max-w-fit"
          >
            {currentItem.buttonText}
          </Link>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute p-2 text-white transition-all duration-200 transform -translate-y-1/2 rounded-full left-4 top-1/2"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute p-2 text-white transition-all duration-200 transform -translate-y-1/2 rounded-full right-4 top-1/2"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-0 flex justify-center w-full space-x-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`md:w-2 md:h-2 h-1 w-1 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-orange-300"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
