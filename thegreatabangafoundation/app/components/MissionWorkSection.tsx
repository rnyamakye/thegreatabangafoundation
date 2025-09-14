import { Link } from "react-router";

interface SectionCard {
  id: string;
  title?: string;
  content: string;
  image: string;
  imageAlt: string;
  linkText: string;
  linkUrl: string;
}

interface MissionWorkSectionProps {
  cards?: SectionCard[];
}

const defaultCards: SectionCard[] = [
  {
    id: "mission",
    title: "Our mission",
    content:
      "Our mission is to create a future where no is left behind, and everyone is empowered, uplifted and cared for. Through educational, healthcare and sustainable development programs.",
    image: "/mission_img1.jpg",
    imageAlt:
      "Our mission - creating opportunities for healthy, productive lives",
    linkText: "Learn more about our mission",
    linkUrl: "/about/mission",
  },
  {
    id: "work",
    title: "Our work",
    content:
      "We work with public schools and healthcare centers to provide essential resources and support.",
    image: "/donation_img2.jpg",
    imageAlt: "Our work - partnering globally to tackle challenges",
    linkText: "Learn about our impact",
    linkUrl: "/impact",
  },
  {
    id: "our story",
    title: "Our Story",
    content:
      "Established 2 years ago, we have impacted many lives and continue to reach out to many more in need.",
    image: "/dinner_img.jpg",
    imageAlt: "Our story - partnering globally to tackle challenges",
    linkText: "Learn about us",
    linkUrl: "/about",
  },
];

export default function MissionWorkSection({
  cards = defaultCards,
}: MissionWorkSectionProps) {
  return (
    <section className="w-full py-10 md:py-20">
      <div className="px-5 mx-auto max-w-7xl">
        <div>
          <p className="py-5 text-2xl font-bold md:py-10 md:text-3xl font-cursive">
            Our Objectives
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.id} className="overflow-hidden ">
              {/* Image */}
              <div className="h-40 overflow-hidden ">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="object-cover object-top w-full h-full "
                />
              </div>

              {/* Content */}
              <div className="py-6">
                {card.title && (
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {card.title}
                  </h3>
                )}

                <p className="mb-4 text-sm font-semibold leading-relaxed text-gray-900">
                  {card.content}
                </p>

                <Link
                  to={card.linkUrl}
                  className="text-sm font-medium text-gray-600 underline transition-colors font-cursive hover:text-gray-950-700"
                >
                  {card.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
