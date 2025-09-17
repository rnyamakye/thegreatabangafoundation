import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import MotionWrapper from "~/components/MotionWrapper";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewportOptions,
} from "~/utils/motion";

export function meta() {
  return [
    { title: "Contact - Abanga Foundation" },
    {
      name: "description",
      content: "Get in touch with the Abanga Foundation team.",
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

export default function Contact() {
  const addToRefs = useRevealOnScroll();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Get EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug: Log environment variables
    // console.log("Environment variables:");
    // console.log("serviceId:", serviceId);
    // console.log("templateId:", templateId);
    // console.log("publicKey:", publicKey ? "Present" : "Missing");

    // Debug: Log form data to ensure it's captured correctly
    const formData = new FormData(form.current);
    // console.log("Form data being sent:");
    // console.log("user_name:", formData.get("user_name"));
    // console.log("user_email:", formData.get("user_email"));
    // console.log("message:", formData.get("message"));
    // console.log("reply_to:", formData.get("reply_to"));

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration missing", {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey,
      });
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitStatus("success");
          setIsSubmitting(false);
          if (form.current) {
            form.current.reset();
            // Also reset the hidden reply_to field
            const replyToField = form.current.querySelector(
              'input[name="reply_to"]'
            ) as HTMLInputElement;
            if (replyToField) {
              replyToField.value = "";
            }
          }
        },
        (error) => {
          console.error("EmailJS Error Details:", error);
          console.error("Error text:", error.text);
          console.error("Error status:", error.status);
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <main className="min-h-screen transition-colors duration-200 bg-gray-50">
        <MotionWrapper
          variants={fadeInUp}
          className="relative overflow-hidden h-[70vh] md:h-[100vh] flex items-center justify-center"
        >
          {/* SVG Background Fallback */}
          <div className="absolute inset-0 hero-svg-background" />

          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/dinner_img.jpg')] bg-cover bg-center md:bg-top bg-no-repeat">
            <div className="absolute inset-0 bg-black/80"></div>
          </div>
          <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center ">
              {/* Logo and Heading Container */}
              <div className="flex flex-col items-center justify-center mb-6 md:gap-6">
                {/* Logo */}
                <div className="flex items-center justify-center w-20 h-20 mb-4 md:w-24 md:h-24 md:mb-0 ">
                  <img
                    src="/logo.png"
                    alt="The Great Abanga Foundation"
                    className="object-contain w-full h-full drop-shadow-lg"
                  />
                </div>

                {/* Heading */}
                <h1 className="text-5xl font-bold text-white md:text-6xl ">
                  Contact Us
                </h1>
              </div>

              <p className="max-w-3xl mx-auto text-xl font-semibold leading-relaxed text-white md:text-2xl ">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
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
        </MotionWrapper>
        <MotionWrapper
          variants={fadeInUp}
          className="max-w-6xl px-6 py-16 mx-auto md:py-24"
        >
          {/* Header */}

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <MotionWrapper variants={fadeInLeft} className="space-y-8 ">
              <div className="">
                <h2 className="mb-6 text-2xl font-bold text-[#3E2723] ">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-3 text-gray-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-1 font-medium text-[#3E2723]">Email</p>
                      <a
                        href="mailto:greatabangafoundation@gmail.com"
                        className="text-[#3E2723] transition-colors duration-200 hover:text-gray-600"
                      >
                        greatabangafoundation@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-3 text-gray-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-1 font-medium text-[#3E2723]">Phone</p>
                      <a
                        href="tel:0544902900"
                        className="text-[#3E2723] transition-colors duration-200 hover:text-gray-600"
                      >
                        0544902900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 mr-3 text-gray-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-1 font-medium text-[#3E2723]">Address</p>
                      <p className="text-[#3E2723]">
                        Sunyani
                        <br />
                        Ghana, West Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* Contact Form */}
            <MotionWrapper variants={fadeInRight}>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {/* Hidden field for reply-to functionality */}
                <input type="hidden" name="reply_to" value="" />

                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium text-[#3E2723]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 transition-colors duration-200 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:ring-orange-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-[#3E2723]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 transition-colors duration-200 bg-transparent border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:ring-orange-400 focus:border-transparent"
                    onChange={(e) => {
                      // Set the reply_to field to the user's email
                      const replyToField = form.current?.querySelector(
                        'input[name="reply_to"]'
                      ) as HTMLInputElement;
                      if (replyToField) {
                        replyToField.value = e.target.value;
                      }
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-[#3E2723]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 transition-colors duration-200 bg-transparent border border-gray-300 rounded-md shadow-sm resize-none focus:ring-2 focus:ring-orange-500 focus:ring-orange-400 focus:border-transparent"
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 text-green-700 bg-green-100 border border-green-400 rounded-md">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 text-red-700 bg-red-100 border border-red-400 rounded-md">
                    Sorry, there was an error sending your message. Please try
                    again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative overflow-hidden w-full px-6 py-3 font-semibold rounded-md transition-all duration-300 group ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#374a5c]"
                  } text-white`}
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 transition-transform duration-500 ease-out transform -translate-x-full bg-black group-hover:translate-x-0"></div>
                  )}
                </button>
              </form>
            </MotionWrapper>
          </div>
        </MotionWrapper>
      </main>
    </>
  );
}
