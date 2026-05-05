

---

# `AGENTS.md`

```md
# Agent Instructions

This repo is for McGraw Made Studio, a custom fabrication and personalized goods website.

The goal is to build a polished MVP website using Next.js, TypeScript, Tailwind CSS, and modular local content config.

---

## Product Priority

Prioritize:

1. Clear custom project inquiry flow
2. Ready-made item browsing with Square payment-link support
3. Warm premium visual design
4. Modular CMS-ready architecture
5. Mobile-first responsive layout
6. Clean, maintainable code

---

## Do Not Add During MVP

Do not add:

- Sanity CMS
- Database
- Custom cart
- Authentication
- Admin dashboard
- Customer accounts
- Inventory sync
- Pricing calculator
- Order tracking
- Complex filtering
- Payment processor API integration beyond linking to Square payment links

If a feature seems useful but is excluded above, document it as future work instead of implementing it.

---

## Design Direction

The site should feel like a warm premium craft studio.

Visual direction:

- Warm off-white / cream backgrounds
- Deep walnut / charcoal text
- Muted brass/gold accents
- Soft rounded cards
- Strong product photography
- Tasteful animations
- Clean layouts inspired by SwiftDispatch and ThreeTails, but softened for a handmade studio brand

Avoid:

- Heavy SaaS/dashboard feel
- Dark hacker/game styling
- Overly playful Etsy clutter
- Busy nav/footer
- Excessive animation

---

## Architecture Rules

Use local content config for editable business/site content.

Suggested structure:

```txt
src/content/site.ts
src/content/home.ts
src/content/categories.ts
src/content/gallery.ts

---
Use reusable section components

HeroSection
CategoryGrid
FeaturedGallery
ProcessSteps
ReadyMadePreview
StoryPreview
CTASection
TrustBar
FAQSection
src/content/readyMade.ts
src/content/policies.ts
