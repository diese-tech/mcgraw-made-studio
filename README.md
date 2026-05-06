# McGraw Made Studio

Custom website for McGraw Made Studio, a warm premium custom fabrication and personalized goods studio.

The site is built to support two primary customer flows:

1. **Custom Projects** — customers submit structured quote requests for made-to-order work.
2. **Ready-Made Items** — customers browse purchasable finished items and buy through Square payment links.

The MVP is intentionally lightweight: no cart, no database, no admin dashboard, and no CMS yet. The architecture should remain modular and CMS-ready for a future Sanity migration.

Current repo handoff and recommended next build items live in `NEXT_STEPS.md`.

---

## Positioning

McGraw Made Studio creates custom gifts, awards, plaques, signs, decor, UV printed items, 3D printed items, seasonal pieces, and ready-made finds.

The brand should feel:

- Premium
- Warm
- Personal
- Trustworthy
- Capable of making a wide range of custom work

The name is currently a working placeholder inspired by McGraw Ave, the street where the family grew up in New York.

---

## MVP Pages

- Home
- Custom Projects
- Ready-Made
- Gallery
- About
- Contact
- Success
- Terms
- Refund & Custom Order Policy
- Privacy
- Shipping & Pickup

---

## MVP Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel
- React Hook Form
- Local content config
- Email submission flow
- Square payment-link support for ready-made items

---

## MVP Exclusions

Do not add these in the MVP:

- Sanity CMS
- Custom cart
- Customer accounts
- Admin dashboard
- Automated inventory sync
- Pricing calculator
- Order tracking
- Review system
- Complex filtering
- Database

---

## Primary Conversion

Primary CTA:

Start a Custom Project

Secondary CTA:

Shop Ready-Made

Support CTA:

Browse Gallery

---

## Development Principle

Build the site as modular, reusable content sections.

Pages should be composed from configurable section blocks so the site can later migrate to Sanity CMS without rewriting the whole frontend.

---

## Recommended First Build Task

Read README.md, AGENTS.md, and docs/*.md.

Scaffold the Next.js app with TypeScript, Tailwind CSS, Framer Motion, modular routes, local content config, and reusable section components.

Do not implement email, payment, Sanity, database, auth, dashboard, custom cart, or inventory sync yet.
