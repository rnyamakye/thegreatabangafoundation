import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { viewportOptions } from "../utils/motion";

interface MotionWrapperProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  duration?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number;
  };
}

export default function MotionWrapper({
  children,
  variants,
  className = "",
  delay = 0,
  duration = 0.6,
  viewport = viewportOptions,
}: MotionWrapperProps) {
  // Default animation if no variants provided
  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants || defaultVariants}
    >
      {children}
    </motion.div>
  );
}
