import { useEffect, useState } from "react";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  slides?: Slide[];
  autoPlayInterval?: number;
  height?: string;
}

const defaultSlides: Slide[] = [
  {
    image: "/education_img.jpg",
    title: "Educational Excellence",
    description: "Supporting students in their academic journey",
  },
  {
    image: "/graduation_img.jpg",
    title: "Graduation Success",
    description: "Celebrating achievements and milestones",
  },
  {
    image: "/dinner_img.jpg",
    title: "Community Gathering",
    description: "Building stronger community bonds",
  },
  {
    image: "/donation_img.jpg",
    title: "Making a Difference",
    description: "Your contributions create lasting impact",
  },
];

export default function ImageSlider({
  slides = defaultSlides,
  autoPlayInterval = 4000,
  height = "h-80 md:h-96",
}: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative overflow-hidden shadow-2xl rounded-2xl">
      {/* Main slider container */}
      <div className={`relative ${height}`}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                  ? "-translate-x-full"
                  : "translate-x-full"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="mb-2 font-bold md:text-2xl">{slide.title}</h3>
              <p className="md:text-lg opacity-90">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {/* Desktop navigation - sides */}
      <button
        onClick={prevSlide}
        className="absolute hidden p-2 text-white transition-all duration-200 transform -translate-y-1/2 rounded-full left-4 top-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
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
        className="absolute hidden p-2 text-white transition-all duration-200 transform -translate-y-1/2 rounded-full right-4 top-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
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

      {/* Dot indicators */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2 md:bottom-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 md:block hidden ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile dot indicators - positioned higher to avoid navigation buttons */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-3 md:hidden left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play toggle */}
      {/* <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute p-2 text-white transition-all duration-200 rounded-full top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
        title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 9v6m4-6v6"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-6-10a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        )}
      </button> */}
    </div>
  );
}
