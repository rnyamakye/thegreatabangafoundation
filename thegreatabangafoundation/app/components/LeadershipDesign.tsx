import React from "react";
import { Link } from "react-router";

const LeadershipDesign: React.FC = () => {
  const teamMembers = [
    {
      name: "Osman Abdul Hakim Abanga",
      position: "Chief Executive Officer",
      image: "/abanga_img.jpg",
      alt: "Osman Abdul Hakim Abanga - CEO",
    },
    {
      name: "Amanfo Martha Simaa",
      position: "Manager",
      image: "/martha_img.jpg",
      alt: "Amanfo Martha Simaa - Manager",
    },
    {
      name: "Amoah Gideon",
      position: "Public Relations Officer",
      image: "/giden_img.jpg",
      alt: "Amoah Gideon - PRO",
    },
    {
      name: "Ruth Abena Amankwah",
      position: "Publicity Officer",
      image: "/ruth_img.jpg",
      alt: "Ruth Abena Amankwah - Publicity",
    },
    {
      name: "Gasu Emmanuel",
      position: "Graphic Designer & Volunteer / Trustee",
      image: "/emmanuel_img.jpg",
      alt: "Gasu Emmanuel - Volunteer / Trustee",
    },
  ];

  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold md:text-5xl font-quicksand">
            Our Team
          </h2>
          <div className="w-16 h-1 mb-8 bg-orange-300 md:w-20"></div>
        </div>
        <Link to="/about">
          <button className="px-4 pb-2 font-semibold text-gray-800 underline cursor-pointer md:text-lg hover:text-black ">
            Learn More...
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="group">
            {/* Rectangular Profile Image with Overlay Text */}
            <div className="relative w-full h-48 overflow-hidden transition-all duration-300 shadow-lg md:h-56 lg:h-64 group-hover:shadow-xl">
              <img
                src={member.image}
                alt={member.alt}
                className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDIwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzlCOUI5MyIvPgo8cGF0aCBkPSJNNTAgMTgwQzUwIDE0NS44IDc2LjggMTIwIDEwMCAxMjBTMTUwIDE0NS44IDE1MCAxODBWMjAwSDUwVjE4MFoiIGZpbGw9IiM5QjlCOTMiLz4KPC9zdmc+";
                }}
              />

              {/* Stronger overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Overlayed Name and Position */}
              <div className="absolute bottom-0 left-0 right-0 p-3 text-start md:p-4">
                <h3 className="mb-1 font-bold leading-tight text-white text-md md:text-base lg:text-xl">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-orange-100 md:text-sm">
                  {member.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipDesign;
