import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import ImpactSlider from "../../components/BoltSlider";
import LatestNews from "../../components/LatestNews";
import MissionWorkSection from "../../components/MissionWorkSection";
import HeroSlider from "../../components/HeroSlider";
import MotionWrapper from "../../components/MotionWrapper";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewportOptions,
} from "../../utils/motion";

// Loader function for the home route
export async function loader() {
  return null;
}

// Animated counter component using Framer Motion
function AnimatedCounter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      onViewportEnter={() => {
        // Animate the counter when it comes into view
        const duration = 2000;
        const steps = 60;
        const stepValue = end / steps;
        const stepTime = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;
          setCount(Math.min(Math.round(stepValue * currentStep), end));

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepTime);
      }}
    >
      {count.toLocaleString()}
      {suffix}
    </motion.div>
  );
}

// Default export component
export default function Home() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden transition-colors duration-200 min-w-screen">
        <section
          id="hero-section"
          className="max-w-screen mx-auto bg-[#F5F3ED]/60 min-h-screen"
        >
          <MotionWrapper variants={fadeInUp} className="w-full">
            <HeroSlider />
          </MotionWrapper>
          {/* Content */}
        </section>

        <motion.section
          className="max-w-screen bg-blue-500 relative h-[1000px]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          <motion.div
            className="relative max-w-6xl px-5 pb-5 mx-auto pt-15"
            variants={staggerItem}
          >
            <motion.h2
              className="text-3xl font-bold text-white font-cursive md:text-4xl lg:text-5xl"
              variants={fadeInUp}
            >
              Our Focus Areas
            </motion.h2>
            <motion.p
              className="mt-4 text-white text-md font-quicksand md:text-xl lg:text-2xl"
              variants={fadeInUp}
            >
              Supporting people in need through targeted programs and
              initiatives
            </motion.p>
          </motion.div>
          <MotionWrapper
            variants={scaleIn}
            className="relative px-4 mx-auto max-w-7xl"
          >
            <ImpactSlider />
          </MotionWrapper>
          <MotionWrapper
            variants={fadeInRight}
            className="bg-[url('/continents_img.jpg')] bg-cover bg-center md:h-[600px] h-[500px] max-w-5xl mx-auto relative mt-15"
          >
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
          </MotionWrapper>
        </motion.section>

        <MotionWrapper
          variants={fadeInLeft}
          className="rounded-none bg-[#F5F3ED] mx-auto md:mx-0 md:rounded-none lg:mt-100 mt-80 md:mt-50"
        >
          <MissionWorkSection />
        </MotionWrapper>

        {/* Impact Statistics Section */}
        <motion.section
          className="py-20 bg-gray-900"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          <div className="px-5 mx-auto max-w-7xl">
            <motion.div className="mb-16 text-center" variants={staggerItem}>
              <motion.h2
                className="mb-4 text-4xl font-bold text-white md:text-5xl"
                variants={fadeInUp}
              >
                Our Impact
              </motion.h2>
              <motion.p
                className="max-w-3xl mx-auto text-xl text-gray-300"
                variants={fadeInUp}
              >
                Making a difference in communities across two continents through
                dedicated programs and partnerships.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-3 "
              variants={staggerContainer}
            >
              <motion.div
                className="p-6 text-center bg-gray-800 rounded-lg"
                variants={scaleIn}
              >
                <div className="mb-2 text-5xl font-bold text-orange-400 md:text-6xl">
                  <AnimatedCounter end={4} suffix="+" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Programs
                </h3>
                <p className="text-gray-400">Active community programs</p>
              </motion.div>

              <motion.div
                className="p-6 text-center bg-gray-800 rounded-lg"
                variants={scaleIn}
              >
                <div className="mb-2 text-5xl font-bold text-orange-400 md:text-6xl">
                  <AnimatedCounter end={25000} suffix="+" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Investment
                </h3>
                <p className="text-gray-400">Total investment (GHS)</p>
              </motion.div>

              <motion.div
                className="p-6 text-center bg-gray-800 rounded-lg"
                variants={scaleIn}
              >
                <div className="mb-2 text-5xl font-bold text-orange-400 md:text-6xl">
                  <AnimatedCounter end={2} suffix="+" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Years</h3>
                <p className="text-gray-400">Years of service</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <MotionWrapper
          variants={fadeInUp}
          className="pb-20 bg-white border-t border-b border-gray-200"
        >
          <LatestNews />
        </MotionWrapper>
      </main>
    </>
  );
}
