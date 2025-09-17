import { Link } from "react-router";
import { motion } from "framer-motion";
import MotionWrapper from "../../../components/MotionWrapper";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  scaleIn,
} from "../../../utils/motion";

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

export default function Leadership() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[90vh] md:h-[100vh] flex items-center justify-center">
        {/* SVG Background Fallback */}
        <div className="absolute inset-0 hero-svg-background" />

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/leadership_img.jpg')] bg-cover bg-center md:bg-top bg-no-repeat">
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <motion.div
          className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="text-center" variants={staggerItem}>
            <motion.h1
              className="mb-6 text-4xl font-bold text-white md:text-6xl"
              variants={fadeInUp}
            >
              Our Leadership Team
            </motion.h1>
            <motion.p
              className="max-w-3xl mx-auto text-xl text-white md:text-2xl"
              variants={fadeInUp}
            >
              Meet the dedicated individuals who lead our mission to create
              positive change through education, healthcare, and community
              development.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Scroll Down Arrow */}
        <MotionWrapper
          variants={fadeInUp}
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce"
        >
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
        </MotionWrapper>
      </div>

      {/* Leadership Team Section */}
      <motion.div
        className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.div className="space-y-16" variants={staggerItem}>
          {/* CEO */}
          <MotionWrapper
            variants={fadeInLeft}
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
          >
            <motion.div className="order-2 lg:order-1" variants={fadeInUp}>
              <h3 className="mb-4 text-3xl font-bold text-[#3E2723]">
                Osman Abdul Hakim Abanga
              </h3>
              <p className="mb-4 text-lg font-semibold text-[#374A5C]">
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
              <motion.div
                className="p-4 border-l-4 border-orange-300 bg-orange-50/50"
                variants={scaleIn}
              >
                <p className="text-sm font-medium text-[#374A5C]">
                  "Our mission is to create lasting change that empowers
                  individuals and transforms communities for generations to
                  come."
                </p>
              </motion.div>
            </motion.div>
            <motion.div className="order-1 lg:order-2" variants={fadeInRight}>
              <div className="relative overflow-hidden shadow-2xl h-96">
                <img
                  src="/abanga_img.jpg"
                  alt="Osman Hakim Abdul - Chief Executive Officer"
                  className="object-cover object-top w-full h-full"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          </MotionWrapper>

          <MotionWrapper
            variants={fadeInRight}
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
          >
            <motion.div className="order-1 lg:order-1" variants={fadeInLeft}>
              <div className="relative overflow-hidden shadow-2xl h-96">
                <img
                  src="/giden_img.jpg"
                  alt="Amoah Gideon - PRO"
                  className="object-cover object-top w-full h-full"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
            <motion.div className="order-2 lg:order-2" variants={fadeInRight}>
              <h3 className="mb-4 text-3xl font-bold text-[#3E2723]">
                Amoah Gideon
              </h3>
              <p className="mb-4 text-lg font-semibold text-[#374A5C]">
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
              <motion.div
                className="space-y-2 text-[#3E2723]"
                variants={scaleIn}
              >
                <p>
                  <strong className="text-orange-600">Education:</strong> BSc.
                  Biological Sciences, University of Energy and Natural
                  Resources
                </p>
                <p>
                  <strong className="text-orange-600">Business:</strong> Manager
                  of Mike Logistics
                </p>
                <p>
                  <strong className="text-orange-600">Role:</strong> Community
                  Outreach & Public Relations
                </p>
              </motion.div>
            </motion.div>
          </MotionWrapper>

          {/* Manager */}
          <MotionWrapper
            variants={fadeInLeft}
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
          >
            <motion.div className="order-2 lg:order-1" variants={fadeInUp}>
              <h3 className="mb-4 text-3xl font-bold text-[#3E2723]">
                Amanfo Martha Simaa
              </h3>
              <p className="mb-4 text-lg font-semibold text-[#374A5C]">
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
              <motion.div
                className="space-y-2 text-[#3E2723]"
                variants={scaleIn}
              >
                <p>
                  <strong className="text-orange-600">Education:</strong>
                </p>
                <p className="ml-4">
                  {" "}
                  Diploma in Basic Education at Ada College of Education,
                </p>
                <p className="ml-4">
                  BSc Biological Science student at University of Energy and
                  Natural Resources
                </p>
              </motion.div>
            </motion.div>
            <motion.div className="order-1 lg:order-2" variants={fadeInRight}>
              <div className="relative overflow-hidden shadow-2xl h-96">
                <img
                  src="/martha_img.jpg"
                  alt="Amoah Gideon - Public Relations Officer"
                  className="object-cover object-top w-full h-full"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          </MotionWrapper>

          {/* Publicity */}
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="order-1 lg:order-1 ">
              <div className="relative overflow-hidden shadow-2xl h-96">
                <img
                  src="/ruth_img.jpg"
                  alt="Ruth Abena Amankwah - Publicity"
                  className="object-cover object-top w-full h-full"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="order-2 lg:order-2 ">
              <h3 className="mb-4 text-3xl font-bold text-[#3E2723]">
                Ruth Abena Amankwah
              </h3>
              <p className="mb-4 text-lg font-semibold text-[#374A5C]">
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

          {/* Emmanuel Gasu */}
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 ">
              <h3 className="mb-4 text-3xl font-bold text-[#3E2723]">
                Gasu Emmanuel
              </h3>
              <p className="mb-4 text-lg font-semibold text-[#374A5C]">
                Graphic Designer & Volunteer / Trustee
              </p>
              <p className="mb-6 leading-relaxed text-[#3E2723]">
                Gasu Emmanuel is an undergraduate degree student at the
                University of Energy and Natural Resources, currently in Level
                300. His motivation stems from a desire for selfless service,
                and he is focused on developing his skills in leadership and
                research. In his free time, he enjoys graphic design, writing,
                and public speaking. Culturally, he is multi-tribal, with his
                maternal heritage from Asante and his patrilineal heritage from
                Volta, while he was born and nurtured in Nzema.
              </p>
              <div className="space-y-2 text-[#3E2723]">
                <p>
                  <strong>Education:</strong> Student at University of Energy
                  and Natural Resources
                </p>
                <p>
                  <strong>Skills:</strong> Graphic Design, Writing, Public
                  Speaking
                </p>
                <p>
                  <strong>Heritage:</strong> Multi-tribal (Asante, Volta, Nzema)
                </p>
                <p>
                  <strong>Focus:</strong> Leadership and Research Development
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 ">
              <div className="relative overflow-hidden shadow-2xl h-96">
                <img
                  src="/emmanuel_img.jpg"
                  alt="Gasu Emmanuel - Research & Development Officer"
                  className="object-cover object-top w-full h-full"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <MotionWrapper variants={fadeInUp} className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#374A5C] to-[#374A5C]">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Join Our Mission
            </h3>
            <p className="mb-6 text-orange-100">
              Our leadership team is always looking for passionate individuals
              who share our vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-lg font-medium tran-[#374A5C]sition-colors bg-white rounded-lg text hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
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
        </MotionWrapper>
      </motion.div>
    </div>
  );
}
