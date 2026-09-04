export const siteConfig = {
  company: {
  name: "Velora Engineering and Consulting",
  shortName: "Velora",
  legalName: "Vinka Ventures Ltd",
  operatingName: "Velora Engineering and Consulting",
tagline: "Engineering Better Building Decisions",
    founded: 2026,
  },

  website: {
    url: "https://veloraeng.com",
    locale: "en-CA",
    language: "en",
  },

  seo: {
    title: "Velora Engineering and Consulting",
    description:
      "Velora Engineering and Consulting is an Ottawa-based engineering consulting firm specializing in building envelope consulting, building condition assessments, building envelope quality assurance, professional home inspections, and building performance testing capabilities in development.",

    keywords: [
  "Velora Engineering and Consulting",
  "Building Envelope Consulting",
  "Building Envelope Consultant Ottawa",
  "Building Science Consultant",
  "Building Condition Assessment",
  "Building Envelope Quality Assurance",
  "Professional Engineer Ontario",
  "Home Inspection Ottawa",
  "Building Performance Testing",
],

   images: {
  og: "/images/og-image.jpg",
},
  },

  contact: {
    email: "info@veloraeng.com",
    phone: "",

    address: {
      city: "Ottawa",
      province: "Ontario",
      country: "Canada",
    },
  },

  branding: {
    colors: {
      primary: "#102A43",
      accent: "#D4A63A",
      dark: "#0E2439",
      light: "#F8FAFC",
    },
  },

  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },

  services: {
    engineering: [
      "Building Envelope Consulting",
      "Building Condition Assessments",
      "Building Envelope Quality Assurance",
    ],

    testing: {
      status: "coming-soon",
      label: "Building Performance Testing",
      services: [
        "Air Leakage Testing",
        "Water Penetration Testing",
        "Curtain Wall Testing",
        "Window Wall Testing",
      ],
    },

    inspections: [
      "Buyer Inspection",
      "Pre-Listing Inspection",
      "New Construction / Tarion",
      "Annual Maintenance Inspection",
    ],
  },

  business: {
    type: "ProfessionalService",
  },

  location: {
    city: "Ottawa",
    province: "Ontario",
    country: "Canada",
  },

  author: {
    name: "Velora Engineering and Consulting",
  },

  copyright: `© ${new Date().getFullYear()} Velora Engineering and Consulting`,
} as const;