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
    nearby: z.array(z.string()).default([]),
    services: z.array(z.string()).default([]), // service slugs like: "office-cleaning"
  }),
});

export const collections = { services, areas };
