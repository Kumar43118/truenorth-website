import type { SchemaObject } from "@/components/seo/Schema";
import { siteConfig } from "@/lib/site";

export const SITE_URL = "https://veloraeng.com";

export const schemaIds = {
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
} as const;

/*
 * Primary Home Inspection service area.
 */
export const ottawaNcrAreaServed: SchemaObject[] = [
  {
    "@type": "City",
    name: "Ottawa",
    sameAs: "https://en.wikipedia.org/wiki/Ottawa",
  },
  {
    "@type": "AdministrativeArea",
    name: "National Capital Region",
  },
];

/*
 * Broader organizational / consulting service area.
 *
 * This allows consulting services to reflect Velora's broader
 * geographic reach without suggesting that Home Inspections
 * are offered everywhere in Ontario.
 */
export const veloraAreaServed: SchemaObject[] = [
  ...ottawaNcrAreaServed,
  {
    "@type": "AdministrativeArea",
    name: "Eastern Ontario",
  },
];

/*
 * Customer contact information.
 *
 * Add telephone here once the public business number is stored
 * in international format, for example +16135551234.
 */
export const veloraContactPoint: SchemaObject = {
  "@type": "ContactPoint",
  contactType: "customer service",
  email: siteConfig.contact.email,
  availableLanguage: ["English"],
  areaServed: "CA",
};

/*
 * Organization Schema
 *
 * Velora currently operates as a service-area business and does
 * not publish a public storefront/business address.
 *
 * For that reason, Organization is used instead of LocalBusiness.
 * A LocalBusiness schema can be introduced later if Velora has a
 * legitimate public business location that can be included in the
 * structured data.
 */
export const veloraBusinessSchema: SchemaObject = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": schemaIds.organization,

  name: siteConfig.company.operatingName,
  alternateName: siteConfig.company.shortName,
  legalName: siteConfig.company.legalName,

  url: SITE_URL,
  email: siteConfig.contact.email,

  description:
    "Ottawa-based professional services firm providing P.Eng.-led home inspections and specialized building envelope consulting, building condition assessments, and building envelope quality assurance.",

  slogan: siteConfig.company.tagline,

  contactPoint: veloraContactPoint,

  areaServed: veloraAreaServed,

  knowsAbout: [
    "Home inspections",
    "Residential building inspections",
    "Building science",
    "Building envelope consulting",
    "Building condition assessments",
    "Building envelope quality assurance",
    "Roofing systems",
    "Exterior wall systems",
    "Windows and doors",
    "Moisture management",
    "Water penetration",
    "Air leakage",
    "Building enclosure systems",
  ],
};

/*
 * Website Schema
 */
export const veloraWebsiteSchema: SchemaObject = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": schemaIds.website,

  url: SITE_URL,
  name: siteConfig.company.operatingName,
  alternateName: siteConfig.company.shortName,

  publisher: {
    "@id": schemaIds.organization,
  },

  inLanguage: "en-CA",
};

/*
 * Generic Service Schema builder
 */
interface CreateServiceSchemaOptions {
  name: string;
  slug: string;
  description: string;
  serviceType: string;
  category?: string;
  audience?: string[];
  image?: string;
  areaServed?: SchemaObject[];
}

export function createServiceSchema({
  name,
  slug,
  description,
  serviceType,
  category = "Professional Services",
  audience = [],
  image,
  areaServed = veloraAreaServed,
}: CreateServiceSchemaOptions): SchemaObject {
  const normalizedSlug = slug.replace(/^\/|\/$/g, "");
  const pageUrl = `${SITE_URL}/${normalizedSlug}`;
  const serviceId = `${pageUrl}/#service`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,

    name,
    serviceType,
    category,
    description,

    url: pageUrl,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },

    provider: {
      "@id": schemaIds.organization,
    },

    areaServed,

    ...(audience.length > 0
      ? {
          audience: audience.map((audienceType) => ({
            "@type": "Audience",
            audienceType,
          })),
        }
      : {}),

    ...(image
      ? {
          image: {
            "@type": "ImageObject",
            url: image,
          },
        }
      : {}),
  };
}

/*
 * ============================================================
 * ENGINEERING CONSULTING SERVICES
 * ============================================================
 */

export const buildingEnvelopeConsultingSchema =
  createServiceSchema({
    name: "Building Envelope Consulting",
    slug: "engineering-services/building-envelope-consulting",
    serviceType: "Building Envelope Consulting",
    category: "Building Science and Building Envelope Consulting",

    description:
      "Independent building envelope consulting for new construction, existing buildings, and rehabilitation projects. Services may include technical review, condition evaluation, field observations, construction quality assurance, and practical repair recommendations.",

    audience: [
      "Architects",
      "Developers",
      "Property managers",
      "Condominium corporations",
      "Building owners",
      "Contractors",
    ],

    image: `${SITE_URL}/images/services/building-envelope-consulting.jpg`,
  });

export const buildingConditionAssessmentSchema =
  createServiceSchema({
    name: "Building Condition Assessments",
    slug: "engineering-services/building-condition-assessment",
    serviceType: "Building Condition Assessment",
    category: "Existing Building Assessment",

    description:
      "Systematic assessments of visible and accessible building envelope components to help owners understand existing conditions, maintenance priorities, deterioration, and potential repair requirements.",

    audience: [
      "Building owners",
      "Property managers",
      "Condominium corporations",
      "Commercial property owners",
      "Institutional clients",
    ],

    image: `${SITE_URL}/images/services/building-condition-assessments.jpg`,
  });

export const buildingEnvelopeQualityAssuranceSchema =
  createServiceSchema({
    name: "Building Envelope Quality Assurance",
    slug: "engineering-services/building-envelope-quality-assurance",
    serviceType: "Building Envelope Quality Assurance",
    category: "Building Envelope Consulting",

    description:
      "Independent building envelope quality assurance services for new construction and rehabilitation projects, including technical reviews, field observations, deficiency documentation, and practical coordination support.",

    audience: [
      "Architects",
      "Developers",
      "Building owners",
      "Contractors",
      "Construction managers",
      "Property managers",
    ],
  });

/*
 * ============================================================
 * HOME INSPECTIONS
 * ============================================================
 */

export const homeInspectionSchema = createServiceSchema({
  name: "Professional Home Inspections",
  slug: "home-inspections",
  serviceType: "Home Inspection",
  category: "Residential Property Inspection",

  description:
    "P.Eng.-led home inspection services in Ottawa and the National Capital Region for buyers, sellers, new homeowners, and property owners. Inspections provide a visual review of readily accessible building systems and components to identify visible concerns, maintenance priorities, and conditions that may warrant further evaluation.",

  audience: [
    "Home buyers",
    "Home sellers",
    "Homeowners",
    "New homeowners",
    "Residential property owners",
  ],

  image: `${SITE_URL}/images/services/home-inspections.jpg`,

  areaServed: ottawaNcrAreaServed,
});

/*
 * Buyer Home Inspection
 */
export const buyerInspectionSchema = createServiceSchema({
  name: "Buyer Home Inspection",
  slug: "home-inspections/buyer-inspection",
  serviceType: "Buyer Home Inspection",
  category: "Residential Property Inspection",

  description:
    "P.Eng.-led buyer home inspections in Ottawa providing a systematic visual review of readily accessible building systems and components to help buyers understand visible property conditions, potential concerns, and maintenance priorities before purchase.",

  audience: ["Home buyers", "Residential property buyers"],

  image: `${SITE_URL}/images/buyer-inspection.jpg`,

  areaServed: ottawaNcrAreaServed,
});

/*
 * Pre-Listing Home Inspection
 */
export const preListingInspectionSchema = createServiceSchema({
  name: "Pre-Listing Home Inspection",
  slug: "home-inspections/pre-listing-inspection",
  serviceType: "Pre-Listing Home Inspection",
  category: "Residential Property Inspection",

  description:
    "Pre-listing home inspections in Ottawa helping homeowners understand visible property conditions, identify maintenance priorities, and prepare for potential buyer questions before listing a home.",

  audience: ["Home sellers", "Homeowners"],

  image: `${SITE_URL}/images/pre-listing-inspection.jpg`,

  areaServed: ottawaNcrAreaServed,
});

/*
 * New Construction / Tarion Inspection
 */
export const newConstructionInspectionSchema =
  createServiceSchema({
    name: "New Construction / Tarion Home Inspection",
    slug: "home-inspections/new-construction-tarion",
    serviceType: "New Construction Home Inspection",
    category: "Residential Property Inspection",

    description:
      "Independent new construction home inspections in Ottawa focused on documenting visible deficiencies, workmanship concerns, and construction conditions that may be relevant to builder discussions and warranty documentation.",

    audience: [
      "New homeowners",
      "New construction home buyers",
    ],

    image: `${SITE_URL}/images/new-construction-inspection.jpg`,

    areaServed: ottawaNcrAreaServed,
  });

/*
 * Annual Home Maintenance Inspection
 */
export const annualMaintenanceInspectionSchema =
  createServiceSchema({
    name: "Annual Home Maintenance Inspection",
    slug: "home-inspections/annual-home-maintenance",
    serviceType: "Home Maintenance Inspection",
    category: "Residential Property Inspection",

    description:
      "Periodic home maintenance inspections in Ottawa helping homeowners identify visible conditions, developing maintenance concerns, repair priorities, and longer-term property maintenance needs.",

    audience: ["Homeowners", "Residential property owners"],

    image: `${SITE_URL}/images/annual-maintenance.jpg`,

    areaServed: ottawaNcrAreaServed,
  });