import { useEffect, useRef } from "react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Leadership Team - The Great Abanga Foundation" },
    {
      name: "description",
      content:
        "Meet our dedicated leadership team driving positive change in communities through education, healthcare, and sustainable development.",
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

export default function Leadership() {
  const addToRefs = useRevealOnScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* SVG Background Fallback */}
        <div className="absolute inset-0 hero-svg-background" />

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800">
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Our Leadership Team
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-orange-100 md:text-2xl">
              Meet the dedicated individuals who lead our mission to create
              positive change through education, healthcare, and community
              development.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* CEO */}
          <div
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
            ref={addToRefs}
          >
            <div className="order-2 lg:order-1 reveal-slide-left">
              <h3 className="mb-4 text-3xl font-bold text-[#3E2723]">
                Osman Abdul Hakim Abanga
              </h3>
              <p className="mb-4 text-lg font-semibold text-orange-600">
                Chief Executive Officer
              </p>
              <p className="mb-6 leading-relaxed text-[#3E2723]">
                Osman Abdul Hakim Abanga, born on May 3rd, 2001, a visionary CEO
                and dedicated philanthropist. As the driving force behind The
                Great Abanga Foundation, he leads with a deep commitment to
                empowering communities and creating lasting social impact.
                Osman's leadership is characterized by his passion for advancing
                education, improving healthcare, and promoting sustainable
                development initiatives. His philanthropic activities focus on
                uplifting underprivileged individuals and fostering
                opportunities for growth and resilience.
              </p>
              <div className="p-4 border-l-4 border-orange-500 ">
                <p className="text-sm font-medium ">
                  "Our mission is to create lasting change that empowers
                  individuals and transforms communities for generations to
                  come."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal-slide-right">
              <div className="relative overflow-hidden shadow-2xl rounded-2xl h-96">
                <img
                  src="/abanga_img.jpg"
                  alt="Osman Hakim Abdul - Chief Executive Officer"
                  className="object-cover object-top w-full h-full"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute px-4 py-2 rounded-lg shadow-lg bottom-4 left-4 bg-white/90 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-[#3E2723]">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Manager */}
          <div
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
            ref={addToRefs}
          >
            <div className="order-1 lg:order-1 reveal-slide-left">
              <div className="relative overflow-hidden shadow-2xl rounded-2xl h-96">
                <img
                  src="/martha_img.jpg"
                  alt="Amanfo Martha Simaa - Manager"
                  className="object-cover object-top w-full h-full"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute px-4 py-2 rounded-lg shadow-lg bottom-4 right-4 bg-white/90 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-[#3E2723]">
                    Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="order-2 lg:order-2 reveal-slide-right">
              <h3 className="mb-4 text-3xl font-bold text-[#3E2723]">
                Amanfo Martha Simaa
              </h3>
              <p className="mb-4 text-lg font-semibold text-orange-600">
                Manager
              </p>
              <p className="mb-6 leading-relaxed text-[#3E2723]">
                Amanfo Martha Simaa serves as the Manager of The Great Abanga
                Foundation, overseeing the day-to-day operations and ensuring
                the effective implementation of our charitable programs. With
                exceptional organizational skills and a passion for community
                development, she coordinates our educational, healthcare, and
                sustainable development initiatives. Martha brings valuable
                experience from her background as a former teacher and is
                currently a student pursuing further education. She holds a
                Diploma in Basic Education (DBE), which enhances her
                understanding of educational needs and community development.
              </p>
              <div className="space-y-2 text-[#3E2723]">
                <p>
                  <strong>Education:</strong> Diploma in Basic Education (DBE)
                </p>
                <p>
                  <strong>Background:</strong> Former Teacher
                </p>
              </div>
            </div>
          </div>

          {/* PRO */}
          <div
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
            ref={addToRefs}
          >
            <div className="order-2 lg:order-1 reveal-slide-left">
              <h3 className="mb-4 text-3xl font-bold text-[#3E2723]">
                Amoah Gideon
              </h3>
              <p className="mb-4 text-lg font-semibold text-orange-600">
                Public Relations Officer
              </p>
              <p className="mb-6 leading-relaxed text-[#3E2723]">
                Gideon Amoah is a dedicated philanthropist, passionate
                entrepreneur, and a committed student currently pursuing his
                studies at the University of Energy and Natural Resources.
                Through his philanthropic efforts, he strives to make a positive
                impact on communities by supporting initiatives that promote
                education, healthcare, and sustainable development.
              </p>
              <div className="space-y-2 text-[#3E2723]">
                <p>
                  <strong>Education:</strong> University of Energy and Natural
                  Resources
                </p>
                <p>
                  <strong>Role:</strong> Community Outreach & Public Relations
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal-slide-right">
              <div className="relative overflow-hidden shadow-2xl rounded-2xl h-96">
                <img
                  src="/giden_img.jpg"
                  alt="Amoah Gideon - Public Relations Officer"
                  className="object-cover object-top w-full h-full"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute px-4 py-2 rounded-lg shadow-lg bottom-4 left-4 bg-white/90 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-[#3E2723]">PRO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Publicity */}
          <div
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
            ref={addToRefs}
          >
            <div className="order-1 lg:order-1 reveal-slide-left">
              <div className="relative overflow-hidden shadow-2xl rounded-2xl h-96">
                <img
                  src="/ruth_img.jpg"
                  alt="Ruth Abena Amankwah - Publicity"
                  className="object-cover object-top w-full h-full"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute px-4 py-2 rounded-lg shadow-lg bottom-4 right-4 bg-white/90 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-[#3E2723]">
                    Publicity
                  </p>
                </div>
              </div>
            </div>
            <div className="order-2 lg:order-2 reveal-slide-right">
              <h3 className="mb-4 text-3xl font-bold text-[#3E2723]">
                Ruth Abena Amankwah
              </h3>
              <p className="mb-4 text-lg font-semibold text-orange-600">
                Publicity Officer
              </p>
              <p className="mb-6 leading-relaxed text-[#3E2723]">
                Ruth Abena Amankwah, an entrepreneur, podcaster, social media
                content creator, philanthropist, and a dedicated student
                pursuing a degree in Biological Sciences at the University of
                Energy and Natural Resources. She founded and manages Elora Wigs
                and Perfumes, excels in building client relationships, and
                develops effective marketing strategies. Ruth contributes as a
                panelist on Earth Dreams Entertainment, creating and editing
                engaging podcast content. She also creates and manages social
                media content for various organizations, building and nurturing
                online communities. Passionate about giving back, she volunteers
                with The Great Abanga Foundation, organizing fundraising
                campaigns and mentoring those in need.
              </p>
              <div className="space-y-2 text-[#3E2723]">
                <p>
                  <strong>Education:</strong> Biological Sciences, UENR
                </p>
                <p>
                  <strong>Business:</strong> Founder, Elora Wigs and Perfumes
                </p>
                <p>
                  <strong>Social Media:</strong> Miss_Ruth
                </p>
                <p>
                  <strong>Podcast:</strong> Earth Dreams Entertainment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl ">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Join Our Mission
            </h3>
            <p className="mb-6 text-orange-100">
              Our leadership team is always looking for passionate individuals
              who share our vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-orange-600 transition-colors bg-white rounded-lg hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Get In Touch
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
