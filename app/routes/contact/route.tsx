import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16 reveal-fade-in" ref={addToRefs}>
            <h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 reveal-slide-up"
              ref={addToRefs}
            >
              Contact Us
            </h1>
            <p
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed reveal-slide-up"
              ref={addToRefs}
            >
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 reveal-slide-left" ref={addToRefs}>
              <div className="reveal-fade-in" ref={addToRefs}>
                <h2
                  className="text-2xl font-bold text-gray-900 mb-6 reveal-slide-up"
                  ref={addToRefs}
                >
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 text-orange-600 mr-3">
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
                      <p className="font-medium text-gray-900 mb-1">Email</p>
                      <a
                        href="mailto:greatabangafoundation@gmail.com"
                        className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                      >
                        greatabangafoundation@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 text-orange-600 mr-3">
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
                      <p className="font-medium text-gray-900 mb-1">Phone</p>
                      <a
                        href="tel:0544902900"
                        className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                      >
                        0544902900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 text-orange-600 mr-3">
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
                      <p className="font-medium text-gray-900 mb-1">Address</p>
                      <p className="text-gray-600">
                        Kumasi, Ashanti Region
                        <br />
                        Ghana, West Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {/* Hidden field for reply-to functionality */}
                <input type="hidden" name="reply_to" value="" />

                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:ring-orange-400 focus:border-transparent transition-colors duration-200 shadow-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:ring-orange-400 focus:border-transparent transition-colors duration-200 shadow-sm"
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
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:ring-orange-400 focus:border-transparent transition-colors duration-200 resize-none shadow-sm"
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
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
                      : "bg-orange-600 hover:bg-orange-700"
                  } text-white`}
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
