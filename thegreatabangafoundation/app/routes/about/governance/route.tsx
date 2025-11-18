import { useEffect, useRef } from "react";
import { Link } from "react-router";

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

export default function Governance() {
  const addToRefs = useRevealOnScroll();

  const boardMembers = [
    {
      name: "Osman Abdul Hakim Abanga",
      position: "Board Chairman & Founder",
      background: "",
      image: "/abanga_img.jpg",
    },
    {
      name: "Amoah Gideon",
      position: "Vice Chair & Public Relations Officer",
      background: "",
      image: "/giden_img.jpg",
    },
    {
      name: "Amanfo Martha Simaa",
      position: "Manager",
      background: "",
      image: "/martha_img.jpg",
    },
    {
      name: "Amankwah Abena Ruth",
      position: "Publicity Officer",
      background: "",
      image: "/ruth_img.jpg",
    },
  ];

  const committees = [
    {
      name: "Executive Committee",
      purpose: "Strategic oversight and day-to-day governance",
      members: "Board Chair, Vice Chair, Secretary, Treasurer",
      meetings: "Monthly",
    },
    {
      name: "Program Committee",
      purpose: "Program design, implementation oversight, and evaluation",
      members: "3 Board members + Program Director",
      meetings: "Quarterly",
    },
    {
      name: "Finance & Audit Committee",
      purpose: "Financial oversight, audit supervision, risk management",
      members: "Treasurer + 2 Board members + External Advisor",
      meetings: "Quarterly",
    },
    {
      name: "Fundraising & Partnerships Committee",
      purpose: "Resource mobilization and strategic partnership development",
      members: "2 Board members + Development Director",
      meetings: "Bi-monthly",
    },
  ];

  return (
    <>
      <main className="min-h-screen ">
        {/* Hero Section */}
        <section className="relative py-20 bg-[url('/governance_img1.jpg')] bg-cover bg-center bg-no-repeat ">
          {/* SVG Background Fallback */}
          <div className="absolute inset-0 hero-svg-backgroun" />

          {/* Background Color */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute text-center text-white transform -translate-x-1/2 left-1/2 md:max-w-6xl md:px-6 md:mx-auto">
            <h1 className="mt-20 text-3xl font-bold md:text-6xl">
              Our Policies
            </h1>
          </div>
          <div className="relative w-full max-w-6xl px-6 mx-auto md:max-w-4xl -bottom-60">
            <img
              src="/governance_img.jpg"
              alt="Governance"
              className="object-cover w-full h-64 rounded-lg shadow-lg md:h-96"
            />
          </div>
        </section>
        {/* Governance & Operations */}
        <div className="pb-16 mx-auto bg-white min-w-screen pt-60">
          <div className="flex flex-col items-center max-w-6xl py-16 mx-auto">
            <div className="flex flex-col items-center px-6 mb-2 text-center md:items-start">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-quicksand">
                Our Governance & Operations
              </h2>
              <div className="w-20 h-1 mb-8 bg-orange-300"></div>
            </div>
            <div className="p-6 ">
              <p className="max-w-3xl text-lg text-center text-gray-900">
                The Great Abanga Foundation operates as a charitable non-profit
                organization. Helping to bring equality in education and
                healthcare access for all. Maintaining transparency in all our
                operations as well as using ethical decision-making processes to
                ensure the best outcomes for the communities we serve.
              </p>
            </div>
            <section className="">
              <div className="px-6 mx-auto max-w-7xl">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#374a5c] rounded-full">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      Transparency
                    </h3>
                    <p className="text-gray-600">
                      Open communication and clear reporting to all stakeholders
                    </p>
                  </div>
                  <div className="p-6 text-center ">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#374a5c] rounded-full">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      Accountability
                    </h3>
                    <p className="text-gray-600">
                      Responsible stewardship of resources and measurable
                      outcomes
                    </p>
                  </div>
                  <div className="p-6 text-center ">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#374a5c] rounded-full">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      Integrity
                    </h3>
                    <p className="text-gray-600">
                      Ethical decision-making and unwavering commitment to our
                      values
                    </p>
                  </div>
                  <div className="p-6 text-center bg-white ">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#374a5c] rounded-full">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      Effectiveness
                    </h3>
                    <p className="text-gray-600">
                      Strategic focus on maximizing impact and achieving our
                      mission
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Board of Directors */}
        <section className="py-16 border-gray-200 border-y">
          <div className="max-w-6xl px-6 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 md:text-4xl">
              Board of Directors
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {boardMembers.map((member, index) => (
                <div
                  key={index}
                  className="p-6 text-center bg-white rounded shadow-lg"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover object-top mx-auto mb-4 rounded-full w-30 h-30"
                  />
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[#4c4c4c]">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600">{member.background}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Committee Structure */}
        <section className="py-16 bg-[#F2ECE6]">
          <div className="max-w-6xl px-6 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-[#4c4c4c] md:text-4xl">
              Committee Structure
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {committees.map((committee, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-lg ">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {committee.name}
                  </h3>
                  <p className="mb-4 text-gray-700">{committee.purpose}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Members:</span>{" "}
                      {committee.members}
                    </p>
                    <p>
                      <span className="font-medium">Meetings:</span>{" "}
                      {committee.meetings}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organizational Chart */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl px-6 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 md:text-4xl">
              Organizational Structure
            </h2>
            <div className="max-w-4xl mx-auto ">
              <div className="p-8 rounded-lg bg-gray-50">
                <div className="text-center">
                  <div className="p-4 mb-6 text-white rounded-lg bg-[#374a5c]">
                    <h3 className="text-lg font-semibold">
                      Board of Directors
                    </h3>
                    <p className="text-sm">Strategic oversight & governance</p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-[#374a5c] rounded-lg">
                      <h4 className="font-semibold text-white">
                        Executive Director
                      </h4>
                      <p className="text-sm text-white">
                        Operations leadership
                      </p>
                    </div>
                    <div className="p-4 bg-[#374a5c] rounded-lg">
                      <h4 className="font-semibold text-white">
                        Program Director
                      </h4>
                      <p className="text-sm text-white">
                        Program implementation
                      </p>
                    </div>
                    <div className="p-4 bg-[#374a5c] rounded-lg">
                      <h4 className="font-semibold text-white">
                        Development Director
                      </h4>
                      <p className="text-sm text-white">
                        Fundraising & partnerships
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policies and Compliance */}
        <section className="py-16 bg-[#F2ECE6]">
          <div className="max-w-6xl px-6 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 md:text-4xl">
              Policies & Compliance
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 bg-white rounded-lg shadow-lg ">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Financial Policies
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Annual independent audits</li>
                  <li>• Quarterly financial reporting</li>
                  <li>• Conflict of interest protocols</li>
                  <li>• Expense approval procedures</li>
                </ul>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg ">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Operational Policies
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Code of conduct for staff</li>
                  <li>• Beneficiary protection standards</li>
                  <li>• Data privacy and security</li>
                  <li>• Risk management framework</li>
                </ul>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg ">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Compliance Standards
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Legal compliance monitoring</li>
                  <li>• Tax-exempt status maintenance</li>
                  <li>• Donor reporting requirements</li>
                  <li>• International development standards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#374a5c]">
          <div className="max-w-4xl px-6 mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Committed to Excellence
            </h2>
            <p className="mb-8 text-xl text-gray-100 ">
              Our governance structure ensures that every decision serves our
              mission and communities.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="/contact"
                className="px-8 py-3 font-semibold text-[#4c4c4c] transition-colors bg-white rounded-lg hover:bg-gray-100"
              >
                Contact Leadership
              </a>
              <a
                href="/about"
                className="px-8 py-3 font-semibold text-white transition-colors border-2 border-white rounded-lg hover:bg-white hover:text-[#4c4c4c]"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
