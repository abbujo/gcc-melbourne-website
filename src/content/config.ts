import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    serviceType: z.string().default("CommercialCleaningService"),
    areas: z.array(z.string()).default(["Melbourne, VIC"]),
    faqs: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        })
      )
      .default([]),

    // ✅ NEW: Pricing fields
    startingFrom: z.number().optional(), // e.g. 150
    startingFromLabel: z.string().optional(), // e.g. "Starting from $150"
    priceUnit: z.enum(["visit", "hour", "week", "month"]).optional(),
    minHours: z.number().optional(),
    frequencyHint: z.string().optional(), // e.g. "Weekly / Fortnightly"
    highlights: z.array(z.string()).default([]), // e.g. ["Checklist-based", "After-hours available"]
  }),
});

const areas = defineCollection({
  type: "content",
  schema: z.object({
    suburb: z.string(),
    title: z.string(),
    description: z.string(),

    // Header / Hero
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),

    // Trust Strip
    trustItems: z.array(z.string()).default([
      "Fully insured",
      "Police checked staff",
      "Audited checklists",
      "Security-first"
    ]),

    // Pricing Block
    pricingStartingFrom: z.union([z.string(), z.number()]).optional(),
    pricingNote: z.string().optional(), // e.g. "Min 3 hours"
    reassurancePoints: z.array(z.string()).optional(),

    // Services Section
    servicesInArea: z.array(
      z.object({
        title: z.string(),
        href: z.string(), // e.g. "/services/office-cleaning"
        summary: z.string(),
      })
    ).optional(),

    // Highlights
    inclusionsHighlights: z.array(z.string()).default([]),

    // How It Works
    processSteps: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ).optional(),

    // Quality Assurance
    qualityAssurancePoints: z.array(z.string()).default([
      "Digital checklists",
      "Supervisor audits",
      "Communication logbook",
      "Security checks"
    ]),

    // Nearby & Links
    nearby: z.array(z.string()).default([]),
    nearbySuburbs: z.array(z.string()).optional(), // Alias or future-proofing if 'nearby' is deprecated

    // SEO
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

export const collections = { services, areas };
