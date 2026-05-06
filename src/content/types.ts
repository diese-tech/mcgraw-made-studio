export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  brand: {
    name: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
  };
  announcement: string;
  navigation: NavLink[];
  legalNavigation: NavLink[];
  socialLinks: SocialLink[];
  seo: {
    siteUrl: string;
    defaultTitle: string;
    description: string;
  };
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  imageLabel: string;
};

export type GalleryRepeatability =
  | "Past Work Only"
  | "Can Make Similar"
  | "Can Reorder";

export type GalleryItem = {
  slug: string;
  title: string;
  category: string;
  caption: string;
  materials: string;
  repeatability: GalleryRepeatability;
  ctaLabel: string;
  ctaHref: string;
  imageLabel: string;
};

export type ReadyMadeAvailability =
  | "Available"
  | "Sold Out"
  | "Low Stock"
  | "Made-to-Order Available";

export type ReadyMadeItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  price: string;
  availability: ReadyMadeAvailability;
  quantityLabel: string;
  fulfillmentNote: string;
  materials: string;
  squareLink: string;
  squareLinkLabel: string;
  imageLabel: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: NavLink;
    secondaryCta: NavLink;
    supportCta: NavLink;
    stats: Array<{ label: string; value: string }>;
    collageLabels: string[];
  };
  trustBar: string[];
  processSteps: ProcessStep[];
  story: {
    eyebrow: string;
    title: string;
    description: string;
    cta: NavLink;
  };
  finalCta: {
    title: string;
    description: string;
    primaryCta: NavLink;
    secondaryCta: NavLink;
  };
  faqs: FaqItem[];
};

export type PolicyPage = {
  slug: string;
  title: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
};
