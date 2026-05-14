import type { HomeContent } from "@/content/types";

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "",
    title: "Made-to-order pieces built by hand from the studio's own designs.",
    description:
      "Every piece starts with something worth keeping — a name, a date, a moment that deserves more than a generic gift.",
    primaryCta: { label: "Start a Custom Project", href: "/custom-projects" },
    secondaryCta: { label: "Shop Ready-Made", href: "/ready-made" },
    supportCta: { label: "Browse Gallery", href: "/gallery" },
    stats: [
      { label: "Typical custom reply", value: "1-2 business days" },
      { label: "Main purchase path", value: "Square payment links" },
      { label: "Best fit", value: "Gifts, events, awards, decor" },
    ],
    collageLabels: [
      "Layered entry sign",
      "Custom award set",
      "Personalized keepsake",
    ],
    collageImages: [
      {
        src: "/images/mcgraw-made/hero/mcgraw-made-hero-wedding-guestbook-tree-01.jpg",
        alt: "Personalized wedding guestbook tree with engraved hearts",
        title: "Personalized keepsakes",
        description:
          "Wedding, family, and milestone pieces made to feel personal from the first glance.",
      },
      {
        src: "/images/mcgraw-made/hero/mcgraw-made-hero-personalized-family-tray-03.jpg",
        alt: "Personalized family serving tray with engraved monogram",
        title: "Gift-ready home pieces",
      },
      {
        src: "/images/mcgraw-made/gallery/mcgraw-made-gallery-lakeland-award-medal-15.jpg",
        alt: "Engraved Lakeland award medal for a custom event",
        title: "Awards and recognition",
      },
    ],
  },
  trustBar: [
    "Structured inquiry flow",
    "Premium custom presentation",
    "Ready-made buy now links",
    "Pickup and shipping policies",
  ],
  processSteps: [
    {
      title: "Tell us what you need",
      description:
        "Share your Custom Project type, quantity, personalization details, and deadline.",
      imageSrc:
        "/images/mcgraw-made/story_process/mcgraw-made-process-script-letter-placement-04.jpg",
      imageAlt: "Hand placing raised script lettering onto a personalized board",
    },
    {
      title: "We review and quote",
      description:
        "You'll get a tailored follow-up based on materials, complexity, and timing.",
      imageSrc:
        "/images/mcgraw-made/story_process/mcgraw-made-process-painted-lettering-detail-05.jpg",
      imageAlt: "Close detail of painted raised lettering during fabrication",
    },
    {
      title: "Approve and make it real",
      description:
        "Once the details are locked, the piece gets cut, assembled, printed, or engraved — depending on what it calls for.",
      imageSrc:
        "/images/mcgraw-made/story_process/mcgraw-made-process-uv-printed-card-detail-07.jpg",
      imageAlt: "Finished UV printed card detail after production",
    },
  ],
  story: {
    eyebrow: "The name",
    title: "Named for the street that still feels like home.",
    description:
      "McGraw Ave was a family's home — the street where childhood happened, where a new family started, and a place that still shows up in dreams. That sense of somewhere being specifically yours is what the studio builds into each piece.",
    cta: { label: "Read the Story", href: "/about" },
    imageSrc:
      "/images/mcgraw-made/story_process/mcgraw-made-process-uv-printing-in-progress-06.jpg",
    imageAlt: "UV printing in progress inside the studio",
  },
  finalCta: {
    title: "Have a custom idea or need something gift-ready now?",
    description:
      "Need something specific built? Start a Custom Project and get a quote. Want something ready to gift today? Browse Ready-Made.",
    primaryCta: { label: "Start a Custom Project", href: "/custom-projects" },
    secondaryCta: { label: "Shop Ready-Made", href: "/ready-made" },
  },
  faqs: [
    {
      question: "How quickly do custom inquiries get a response?",
      answer:
        "Most Custom Project requests receive a response within 1 to 2 business days. If your deadline is tight, include it in the request.",
    },
    {
      question: "Can I buy ready-made pieces directly online?",
      answer:
        "Yes. Ready-Made Items use direct Square payment links so you can buy without a cart.",
    },
    {
      question: "Do you handle one-off gifts and larger event orders?",
      answer:
        "Yes. The studio supports both personal gifts and larger bulk or event-based pieces when the scope is a fit.",
    },
  ],
};
