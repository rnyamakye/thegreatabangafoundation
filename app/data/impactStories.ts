// Impact stories data for the blog page

export interface ImpactStory {
  id: number;
  title: string;
  slug: string;
  category: string;
  featured: boolean;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  media: {
    type: "image" | "video" | "graphic";
    url: string | null;
    alt: string;
    caption: string;
  };
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export const impactStories: ImpactStory[] = [
  {
    id: 1,
    title: "BIOSSA Week Celebration Success",
    slug: "biossa-week-celebration-2024",
    category: "education",
    featured: true,
    date: "2024-07-15",
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
    id: 2,
    title: "Biossa Aponkye Cup: Unity Through Sports",
    slug: "biossa-aponkye-cup-2024",
    category: "sports",
    featured: false,
    date: "2024-06-28",
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
  //   {
  //     id: 3,
  //     title: "15+ Students Supported This Year",
  //     slug: "scholarship-impact-2024",
  //     category: "education",
  //     featured: false,
  //     date: "2024-05-10",
  //     excerpt:
  //       "Our scholarship program continues to break down financial barriers, enabling bright minds to pursue their educational dreams and build better futures.",
  //     content: `This year marks a significant milestone in our educational support program. We have successfully provided scholarships and educational assistance to over 15 students across various academic levels.

  // Our scholarship recipients consistently achieve academic excellence, with an average GPA of 3.0+ and a 95% graduation rate. These statistics demonstrate the power of removing financial barriers to education.

  // Each scholarship recipient represents not just an individual success story, but a ripple effect of positive change that extends to their families and communities.`,
  //     author: "TGAF Education Team",
  //     media: {
  //       type: "graphic",
  //       url: null,
  //       alt: "Education and scholarship success graphic",
  //       caption: "Visualizing our educational impact and student success rates",
  //     },
  //     tags: ["education", "scholarships", "student-success", "financial-aid"],
  //   },
  //   {
  //     id: 4,
  //     title: "A Day in the Life: Our Community Programs",
  //     slug: "community-programs-video-2024",
  //     category: "video",
  //     featured: false,
  //     date: "2024-04-22",
  //     excerpt:
  //       "Watch how our programs are making a real difference in the daily lives of students and families across Ghana.",
  //     content: `This documentary-style video takes viewers through a typical day in one of our supported communities, showcasing the tangible impact of our various programs.

  // From early morning educational support sessions to evening community gatherings, see how TGAF's initiatives are woven into the fabric of daily life in rural Ghana.

  // The video features interviews with beneficiaries, community leaders, and our team members, providing authentic insights into the challenges we address and the solutions we implement.`,
  //     author: "TGAF Media Team",
  //     media: {
  //       type: "video",
  //       url: null,
  //       alt: "Community programs documentary video",
  //       caption: "Behind-the-scenes look at our community impact programs",
  //     },
  //     tags: ["video", "community-development", "documentary", "daily-life"],
  //   },
  //   {
  //     id: 5,
  //     title: "Mobile Health Clinic Launch",
  //     slug: "mobile-health-clinic-2024",
  //     category: "healthcare",
  //     featured: false,
  //     date: "2024-03-18",
  //     excerpt:
  //       "Bringing essential healthcare services directly to underserved communities, ensuring no one is left behind in accessing basic medical care.",
  //     content: `The launch of our mobile health clinic represents a significant step forward in our healthcare initiative. This state-of-the-art mobile unit is equipped with basic medical equipment and staffed by qualified healthcare professionals.

  // The clinic travels to remote villages and underserved areas, providing:
  // - Basic health screenings
  // - Vaccination services
  // - Health education workshops
  // - Emergency medical care
  // - Referral services to specialized facilities

  // In its first month of operation, the mobile clinic has served over 200 patients across 12 different communities.`,
  //     author: "TGAF Health Team",
  //     media: {
  //       type: "graphic",
  //       url: null,
  //       alt: "Mobile health clinic and healthcare services",
  //       caption: "Our mobile health clinic bringing care to remote communities",
  //     },
  //     tags: ["healthcare", "mobile-clinic", "community-health", "medical-access"],
  //   },
  //   {
  //     id: 6,
  //     title: "Clean Water for Rural Schools",
  //     slug: "water-project-rural-schools-2024",
  //     category: "infrastructure",
  //     featured: false,
  //     date: "2024-02-14",
  //     excerpt:
  //       "Installing water pumps and filtration systems in rural schools to ensure students have access to clean, safe drinking water during their studies.",
  //     content: `Access to clean water is fundamental to education. Students cannot focus on learning when they are concerned about basic needs like safe drinking water.

  // Our water project initiative has successfully installed:
  // - 8 water pumps across 5 rural schools
  // - Advanced filtration systems
  // - Water storage tanks
  // - Maintenance training for local staff

  // This project directly benefits over 500 students and has resulted in:
  // - 40% reduction in water-related illnesses
  // - Improved school attendance rates
  // - Better concentration during classes
  // - Enhanced overall school environment`,
  //     author: "TGAF Infrastructure Team",
  //     media: {
  //       type: "graphic",
  //       url: null,
  //       alt: "Water pump installation and clean water access",
  //       caption:
  //         "Students accessing clean water from newly installed pump system",
  //     },
  //     tags: ["infrastructure", "water-access", "school-development", "health"],
  //   },
  //   {
  //     id: 7,
  //     title: "Empowering Women Through Skills Training",
  //     slug: "women-empowerment-skills-training-2024",
  //     category: "empowerment",
  //     featured: false,
  //     date: "2024-01-20",
  //     excerpt:
  //       "Our women's empowerment program provides vocational skills training, helping women become financially independent and community leaders.",
  //     content: `Women are the backbone of our communities, and empowering them creates a multiplier effect that benefits entire families and neighborhoods.

  // Our comprehensive skills training program offers:
  // - Tailoring and fashion design
  // - Small business management
  // - Financial literacy
  // - Leadership development
  // - Digital literacy

  // Over 50 women have completed our training programs, with 85% starting their own small businesses within 6 months of graduation.

  // Success stories include:
  // - Akosua, who now runs a successful tailoring business employing 3 other women
  // - Mercy, who started a community savings group serving 25 families
  // - Gifty, who became the first female business leader in her village`,
  //     author: "TGAF Empowerment Team",
  //     media: {
  //       type: "graphic",
  //       url: null,
  //       alt: "Women participating in skills training and empowerment programs",
  //       caption: "Women learning new skills during our empowerment workshop",
  //     },
  //     tags: ["empowerment", "women", "skills-training", "entrepreneurship"],
  //   },
  //   {
  //     id: 8,
  //     title: "Environmental Conservation Youth Program",
  //     slug: "environmental-youth-program-2024",
  //     category: "environment",
  //     featured: false,
  //     date: "2023-12-10",
  //     excerpt:
  //       "Engaging young people in environmental conservation through tree planting, waste management, and sustainability education.",
  //     content: `Climate change and environmental degradation are critical challenges facing our communities. Our youth-focused environmental program addresses these issues while teaching valuable life skills.

  // Program components include:
  // - Tree planting initiatives (500+ trees planted)
  // - Waste management and recycling education
  // - Organic farming workshops
  // - Climate change awareness campaigns
  // - Green technology demonstrations

  // The program has engaged over 100 young people across 8 communities, creating a new generation of environmental champions.

  // Environmental impact:
  // - 500+ indigenous trees planted
  // - 3 community recycling centers established
  // - 15 organic gardens created
  // - 50% reduction in plastic waste in participating communities`,
  //     author: "TGAF Environmental Team",
  //     media: {
  //       type: "graphic",
  //       url: null,
  //       alt: "Youth participating in tree planting and environmental activities",
  //       caption:
  //         "Young environmental champions planting trees in their community",
  //     },
  //     tags: ["environment", "youth", "tree-planting", "sustainability"],
  //   },
];

// Category definitions
export const categories: Category[] = [
  { id: "all", name: "All Stories", color: "orange" },
  { id: "education", name: "Education", color: "blue" },
  { id: "sports", name: "Sports Sponsorship", color: "green" },
  { id: "healthcare", name: "Healthcare", color: "red" },
  { id: "infrastructure", name: "Infrastructure", color: "purple" },
  { id: "empowerment", name: "Empowerment", color: "pink" },
  { id: "environment", name: "Environment", color: "emerald" },
  { id: "video", name: "Videos", color: "indigo" },
];

// Helper functions
export const getStoriesByCategory = (categoryId: string): ImpactStory[] => {
  if (categoryId === "all") return impactStories;
  return impactStories.filter((story) => story.category === categoryId);
};

export const getFeaturedStory = (): ImpactStory | undefined => {
  return impactStories.find((story) => story.featured);
};

export const getStoryBySlug = (slug: string): ImpactStory | undefined => {
  return impactStories.find((story) => story.slug === slug);
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
