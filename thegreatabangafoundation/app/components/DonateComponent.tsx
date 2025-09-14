import { Link } from "react-router";

export default function DonateComponent() {
  return (
    <section className="relative py-16 h-60">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative z-10 overflow-hidden h-96">
            <img
              src="/donation_img1.jpg"
              alt="Community members benefiting from donations"
              className="z-10 object-cover w-full h-60 md:w-full md:h-full"
            />

            {/* Sticky Note Style Donation Card */}
            <div className="absolute z-50 transform -translate-x-1/2 md:max-w-xs left-1/2 md:-bottom-10 bottom-10">
              {/* Main sticky note card */}
              <div className="relative p-6 transition-transform duration-300 transform bg-white shadow-lg">
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900 font-quicksand md:text-2xl">
                    Help Us Reach More
                  </h3>
                  <div className="flex justify-center">
                    <Link
                      to={"/contact"}
                      className="inline-block w-full px-4 py-3 font-semibold text-center text-white transition-colors duration-300 transform bg-orange-300 rounded-lg shadow-md hover:bg-orange-400 hover:shadow-lg "
                    >
                      Donate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
