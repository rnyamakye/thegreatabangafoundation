import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MotionWrapper from "../../components/MotionWrapper";
import { fadeInUp, fadeInLeft, fadeInRight } from "../../utils/motion";

// Paystack type definitions
declare global {
  interface Window {
    PaystackPop: {
      setup: (config: {
        key: string;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        metadata?: any;
        callback: (response: any) => void;
        onClose: () => void;
      }) => {
        openIframe: () => void;
      };
    };
  }
}

export function meta() {
  return [
    { title: "Donate - The Great Abanga Foundation" },
    {
      name: "description",
      content:
        "Support The Great Abanga Foundation's mission to transform lives through education, healthcare, and community development.",
    },
  ];
}

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const donationAmounts = [
    { amount: 10, description: "School supplies for one student", icon: "📚" },
    { amount: 20, description: "Health screening for a family", icon: "🏥" },
    { amount: 50, description: "Community development project", icon: "🏘️" },
    { amount: 100, description: "Scholarship for one semester", icon: "🎓" },
  ];

  const impactStories = [
    {
      image: "/education_img.jpg",
      title: "Education Impact",
      description:
        "We've provided educational support to over 200 students this year",
      stats: "200+ Students Supported",
    },
    {
      image: "/healthcare.jpg",
      title: "Healthcare Access",
      description: "Mobile health clinics reaching remote communities",
      stats: "150+ Families Served",
    },
    {
      image: "/communitydevelopment_img.jpg",
      title: "Community Development",
      description: "Building sustainable infrastructure for lasting change",
      stats: "8 Projects Completed",
    },
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleDonorInfoChange = (field: string, value: string) => {
    setDonorInfo((prev) => ({ ...prev, [field]: value }));
  };

  const initializePaystack = () => {
    const amount = selectedAmount || parseFloat(customAmount);

    if (!amount || amount <= 0) {
      toast.error("Please select or enter a valid donation amount");
      return;
    }

    if (!donorInfo.name || !donorInfo.email) {
      toast.error("Please fill in your name and email address");
      return;
    }

    setIsLoading(true);

    // Load Paystack script if not already loaded
    if (!window.PaystackPop) {
      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      script.onload = () => processPayment(amount);
      script.onerror = () => {
        setIsLoading(false);
        toast.error("Failed to load payment processor. Please try again.");
      };
      document.head.appendChild(script);
    } else {
      processPayment(amount);
    }
  };

  const processPayment = (amount: number) => {
    const paystackPublicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

    if (!paystackPublicKey) {
      setIsLoading(false);
      toast.error("Payment configuration error. Please contact support.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: paystackPublicKey,
      email: donorInfo.email,
      amount: amount * 100, // Convert to kobo (Paystack uses smallest currency unit)
      currency: "GHS", // Ghana Cedis
      ref: "TGAF_" + Math.floor(Math.random() * 1000000000 + 1), // Generate unique reference
      metadata: {
        custom_fields: [
          {
            display_name: "Donation Purpose",
            variable_name: "donation_purpose",
            value: "General Donation - The Great Abanga Foundation",
          },
          {
            display_name: "Donor Name",
            variable_name: "donor_name",
            value: donorInfo.name,
          },
          {
            display_name: "Phone Number",
            variable_name: "phone_number",
            value: donorInfo.phone || "Not provided",
          },
        ],
      },
      callback: function (response: any) {
        setIsLoading(false);
        toast.success(
          `Thank you ${donorInfo.name}! Your donation of ₵${amount} was successful. Reference: ${response.reference}`
        );

        // Reset form
        setSelectedAmount(null);
        setCustomAmount("");
        setDonorInfo({ name: "", email: "", phone: "" });

        // You can send the response.reference to your backend for verification
        console.log("Payment successful:", response);
      },
      onClose: function () {
        setIsLoading(false);
        toast.error(
          "Payment was cancelled. Please try again if you wish to donate."
        );
      },
    });

    handler.openIframe();
  };

  const handleDonate = initializePaystack;

  return (
    <>
      <main className="min-h-screen bg-[#F7F2ED] transition-colors duration-200 mt-20">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          {/* SVG Background Fallback */}
          <div className="absolute inset-0 hero-svg-background" />

          {/* Background Color */}
          <div className="absolute inset-0 bg-[#F7F2ED]"></div>
          <div className="container px-4 mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <MotionWrapper variants={fadeInLeft} className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#3E2723] leading-tight">
                  Support Our Mission to
                  <span className="text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text">
                    {" "}
                    Transform Lives
                  </span>
                </h1>

                <p className="text-lg text-[#3E2723]/80 leading-relaxed">
                  Your generous donation empowers us to continue our vital work
                  in education, healthcare, and community development. Together,
                  we can create lasting change and build a brighter future.
                </p>
              </MotionWrapper>

              <MotionWrapper variants={fadeInRight} className="relative">
                <div className="relative overflow-hidden transition-transform duration-300 transform shadow-2xl rounded-2xl hover:scale-105">
                  <img
                    src="/donation_img.jpg"
                    alt="Community members benefiting from donations"
                    className="object-cover w-full h-96"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute text-white bottom-6 left-6">
                    <p className="text-xl font-bold">100+ Lives Transformed</p>
                    <p className="text-sm opacity-90">This Year Alone</p>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div
              className="flex flex-col items-center text-[#3E2723] cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <span className="text-sm font-medium mb-2 opacity-80">
                Scroll Down
              </span>
              <svg
                className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity duration-300"
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
        </section>

        {/* Impact Stories Section
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#3E2723] mb-4">
              See Your Impact in Action
            </h2>
            <p className="text-[#3E2723]/70 max-w-2xl mx-auto">
              Every donation creates ripples of change. Here's how your
              contributions are making a difference.
            </p>
          </div>

          <div className="grid gap-8 mb-16 md:grid-cols-3">
            {impactStories.map((story, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute text-white bottom-4 left-4">
                    <p className="text-sm font-semibold">{story.stats}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3E2723] mb-2">
                    {story.title}
                  </h3>
                  <p className="text-[#3E2723]/70 text-sm">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

        {/* Donation Form Section */}
        <section className="py-16 bg-white/30 backdrop-blur-sm">
          <div className="container px-4 mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="">
                {/* Donation Amounts */}
                <div className="p-8 bg-white shadow-xl rounded-2xl">
                  <h3 className="text-2xl font-bold text-[#3E2723] mb-6">
                    Choose Your Impact Level
                  </h3>

                  <div className="grid grid-cols-3 mb-8 space-y-4 gap-x-2">
                    {donationAmounts.map((donation, index) => (
                      <button
                        key={index}
                        onClick={() => handleAmountSelect(donation.amount)}
                        className={`w-full p-2  rounded-xl border transition-all duration-300 text-left transform ${
                          selectedAmount === donation.amount
                            ? "border-orange-100 shadow-lg"
                            : "border-gray-200 hover:border-orange-300 hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="px-2">
                              <span className="text-2xl font-bold text-gray-700">
                                ₵{donation.amount}
                              </span>
                            </div>
                          </div>
                          <div
                            className={`w-6 h-6 rounded-full border-2 ${
                              selectedAmount === donation.amount
                                ? "border-gray-400 bg-gray-400"
                                : "border-gray-300"
                            }`}
                          >
                            {selectedAmount === donation.amount && (
                              <div className="w-full h-full scale-50 bg-white rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="custom-amount"
                      className="block text-sm font-medium text-[#3E2723] mb-2"
                    >
                      Or enter an amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3E2723]/60 font-medium">
                        ₵
                      </span>
                      <input
                        type="number"
                        id="custom-amount"
                        value={customAmount}
                        onChange={(e) =>
                          handleCustomAmountChange(e.target.value)
                        }
                        placeholder="Enter amount"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-[#3E2723] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="mb-6 space-y-4">
                    <h4 className="text-lg font-semibold text-[#3E2723]">
                      Your Information
                    </h4>

                    <div>
                      <label
                        htmlFor="donor-name"
                        className="block text-sm font-medium text-[#3E2723] mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="donor-name"
                        value={donorInfo.name}
                        onChange={(e) =>
                          handleDonorInfoChange("name", e.target.value)
                        }
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-[#3E2723] transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="donor-email"
                        className="block text-sm font-medium text-[#3E2723] mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="donor-email"
                        value={donorInfo.email}
                        onChange={(e) =>
                          handleDonorInfoChange("email", e.target.value)
                        }
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-[#3E2723] transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="donor-phone"
                        className="block text-sm font-medium text-[#3E2723] mb-1"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="donor-phone"
                        value={donorInfo.phone}
                        onChange={(e) =>
                          handleDonorInfoChange("phone", e.target.value)
                        }
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-[#3E2723] transition-all duration-200"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleDonate}
                    disabled={isLoading}
                    className={`
                    relative w-full px-6 py-4 font-semibold text-white rounded-xl 
                    transition-all duration-300 transform overflow-hidden group
                    ${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                    }
                    focus:ring-4 focus:ring-orange-200 focus:outline-none
                  `}
                  >
                    {/* Animated background effect */}
                    <div className="absolute inset-0 transition-transform duration-500 ease-out transform translate-x-full bg-gradient-to-r from-orange-700 to-orange-600 group-hover:translate-x-0"></div>

                    {/* Button content */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <svg
                            className="w-5 h-5 animate-spin"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          💝 Donate{" "}
                          {selectedAmount
                            ? `₵${selectedAmount}`
                            : customAmount
                              ? `₵${customAmount}`
                              : "Now"}
                        </>
                      )}
                    </span>

                    {/* Ripple effect on click */}
                    <div className="absolute inset-0 transition-opacity duration-150 bg-white opacity-0 rounded-xl group-active:opacity-20"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#3E2723",
            border: "1px solid #fed7aa",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          },
          success: {
            iconTheme: {
              primary: "#ea580c",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#dc2626",
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
}
