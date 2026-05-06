import type { PolicyPage } from "@/content/types";

export const policyPages: PolicyPage[] = [
  {
    slug: "terms",
    title: "Terms",
    intro:
      "These terms set expectations for browsing, purchasing ready-made items, and requesting custom work through McGraw Made Studio.",
    sections: [
      {
        heading: "Use of the site",
        body: [
          "You may browse the site, submit inquiries, and purchase Ready-Made Items through linked checkout pages.",
          "Content, imagery, and product examples are for presentation and may evolve as the studio updates collections and services.",
        ],
      },
      {
        heading: "Custom Project expectations",
        body: [
          "A Custom Project request is an inquiry and quote workflow, not a completed order or automated checkout.",
          "Production timing, materials, and pricing are confirmed only after follow-up and approval.",
        ],
      },
    ],
  },
  {
    slug: "refund-custom-order-policy",
    title: "Refund & Custom Order Policy",
    intro:
      "Custom work and ready-made purchases follow different rules because the studio balances personalized fabrication with small-batch inventory.",
    sections: [
      {
        heading: "Custom Projects",
        body: [
          "Custom and personalized items are generally non-refundable once details are approved and production begins.",
          "Customers are responsible for confirming spelling, names, dates, quantities, and design details before approval.",
        ],
      },
      {
        heading: "Ready-Made Items",
        body: [
          "Questions about a Ready-Made Item should be raised promptly after delivery or pickup.",
          "If an item arrives damaged or there is a fulfillment issue, contact the studio so the situation can be reviewed.",
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy",
    intro:
      "McGraw Made Studio only collects the contact and project details needed to respond to inquiries and fulfill the customer experience.",
    sections: [
      {
        heading: "Information you share",
        body: [
          "Contact details and project information are used to respond to your Inquiry and coordinate next steps.",
          "Sensitive payment processing for Ready-Made Items occurs through Square links rather than this site.",
        ],
      },
      {
        heading: "Communication",
        body: [
          "Messages may be used to follow up about a Custom Project, a Ready-Made Item question, or support needs tied to the studio.",
        ],
      },
    ],
  },
  {
    slug: "shipping-pickup",
    title: "Shipping & Pickup",
    intro:
      "Fulfillment details vary by item type, timeline, and whether the piece is ready-made or produced after approval.",
    sections: [
      {
        heading: "Ready-Made fulfillment",
        body: [
          "Ready-Made Items may be shipped or arranged for pickup depending on the item and customer location.",
          "Availability notes on each item describe whether it is finished now, low stock, sold out, or available made-to-order.",
        ],
      },
      {
        heading: "Custom Project fulfillment",
        body: [
          "Pickup, shipping, and timing for Custom Projects are confirmed during the quote and approval process.",
          "Rush timelines are not guaranteed unless confirmed directly in writing.",
        ],
      },
    ],
  },
];
