// Impact stories data for the blog page
export const impactStories = [
  {
    id: "biossa&week&celebration&20250715",
    title: "BIOSSA Week Celebration Success",
    slug: "biossa-week-celebration-2025",
    category: "education",
    featured: true,
    date: "2025-07-15",
    excerpt:
      "Our partnership with the Biology Students Association (BIOSSA) resulted in a week-long celebration of scientific excellence, bringing together students, faculty, and the community in pursuit of knowledge and innovation.",
    content: `The BIOSSA Family would like to extend our sincerest appreciation to Abanga's Foundation for their generous sponsorship of our BIOSSA Week Celebration!

Your support has enabled us to make this event a success, and we are grateful for your commitment to promoting biological sciences in our community.

Thank you, Abanga's Foundation, for your kindness and investment in our future!

Together, Let's Continue to Nurture Excellence in Biological Sciences.`,
    author: "BIOSSA Family",
    media: {
      type: "image",
      url: "/biossasponserflyer_img.jpg",
      alt: "BIOSSA Week Celebration sponsorship by Abanga's Foundation",
      caption: "Official sponsorship flyer for BIOSSA Week Celebration",
    },
    tags: ["education", "partnership", "scientific-excellence", "community"],
  },
  {
    id: "biossa&aponkye&cup&20250628",
    title: "Biossa Aponkye Cup: Unity Through Sports",
    slug: "biossa-aponkye-cup-2025",
    category: "sports",
    featured: false,
    date: "2025-06-28",
    excerpt:
      "A thrilling football tournament that brought departments together, showcasing talent, passion, and the power of community sports.",
    content: `The Great Abanga Foundation proudly sponsored the Biossa Aponkye Cup, a thrilling showcase of talent, unity, and departmental spirit. From the electrifying kickoff to the final whistle, the event was nothing short of a masterpiece — filled with passion, energy, and unforgettable moments.

A celebration of grassroots sports at its finest! ⚽️🔥

This event demonstrated how sports can unite communities and provide healthy competition that builds character and teamwork among students.`,
    author: "TGAF Team",
    media: {
      type: "image",
      url: "/soboloparty_img.jpg",
      alt: "Biossa Aponkye Cup - TGAF sponsored football event",
      caption: "Students celebrating during the Biossa Aponkye Cup tournament",
    },
    tags: ["sports", "community", "youth-development", "teamwork"],
  },
];

// Category definitions
export const categories = [
  { id: "all", name: "All Stories", color: "orange" },
  { id: "education", name: "Education", color: "blue" },
  { id: "sports", name: "Sports", color: "green" },
  //   { id: "healthcare", name: "Healthcare", color: "red" },
  //   { id: "infrastructure", name: "Infrastructure", color: "purple" },
  //   { id: "empowerment", name: "Empowerment", color: "pink" },
  //   { id: "environment", name: "Environment", color: "emerald" },
  //   { id: "video", name: "Videos", color: "indigo" },
];

// Helper functions
export const getStoriesByCategory = (categoryId) => {
  if (categoryId === "all") return impactStories;
  return impactStories.filter((story) => story.category === categoryId);
};

export const getFeaturedStory = () => {
  return impactStories.find((story) => story.featured);
};

export const getStoryBySlug = (slug) => {
  return impactStories.find((story) => story.slug === slug);
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
