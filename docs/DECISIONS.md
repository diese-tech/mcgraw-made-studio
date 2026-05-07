# Product Decisions

This document contains locked product/design decisions for the McGraw Made Studio MVP.

---

## Decision 1 — Core Domain Objects

Use these core terms:

### Custom Project

A made-to-order request that requires review, pricing, and follow-up.

### Ready-Made Item

An already-created or limited-quantity item that can be purchased directly.

### Gallery Item

Past work, portfolio proof, inspiration, or repeatable work.

### Inquiry

A customer contact event that can relate to a custom project, ready-made item, or general question.

---

## Decision 2 — Primary Conversion

Primary conversion:

Start a Custom Project

Secondary conversion:

Shop Ready-Made

Support conversion:

Browse Gallery

---

## Decision 3 — Custom Project Request Type

A Custom Project request is a structured quote request.

It is not:

- An order
- A checkout
- A pricing calculator
- A full product builder

---

## Decision 4 — Custom Project Form Fields

Required fields:

- Name
- Email or phone
- Project type
- Quantity
- Personalization/details
- Deadline

Optional fields:

- Reference image upload
- Notes
- Preferred contact method
- Budget range

---

## Decision 5 — Custom Project Submission Flow

MVP flow:

Form submission
→ Business email notification
→ Customer confirmation email
→ Success page

No database.

No dashboard.

---

## Decision 6 — Ready-Made Items

Ready-Made Items are purchasable immediately.

They should have:

- Title
- Photos
- Description
- Price
- Quantity / availability
- Square payment link
- Buy Now button

No “reserved” status.

---

## Decision 7 — Ready-Made Availability

Allowed statuses:

- Available
- Sold Out
- Low Stock
- Made-to-Order Available

---

## Decision 8 — Payment Model

Ready-Made Items:

- Immediate checkout through Square payment links
- Cash App Pay may be supported through Square if enabled
- Zelle is not an ecommerce checkout method

Custom Projects:

- Quote first
- Deposit may be required before supplies are purchased or work begins
- Zelle may be used manually for approved deposits
- Square/Cash App Pay may also be used after quote approval

---

## Decision 9 — Pricing Model

Ready-Made Items:

- Fixed price

Custom Projects:

- Starting-at pricing where possible
- Final price depends on size, materials, quantity, timeline, and complexity
- Bulk/custom work may remain quote-only

---

## Decision 10 — Gallery Items

Gallery Items represent:

- Past work
- Portfolio proof
- Inspiration
- Repeatable/reorderable items

Gallery Items are not inventory.

Repeatability status:

- Past Work Only
- Can Make Similar
- Can Reorder

CTA behavior:

- Past Work Only → Start a Custom Project
- Can Make Similar → Request Something Similar
- Can Reorder → Request This Item

---

## Decision 11 — Homepage Hero Priority

Homepage hero should prioritize:

Visual proof
→ Product range
→ Custom Project CTA
→ McGraw roots/story

The McGraw Ave story matters but should not dominate the hero.

---

## Decision 12 — Homepage Section Order

MVP homepage order:

1. Hero
2. Category Cards
3. Featured Gallery / Recent Work
4. How Custom Projects Work
5. Ready-Made Preview
6. McGraw Story Preview
7. Final CTA

Each section should be modular and reorderable later.

---

## Decision 13 — Public Categories

Use these public-facing categories:

- Personalized Gifts
- Awards & Plaques
- Signs & Decor
- Seasonal Items
- UV Printed Items
- 3D Printed Items

Categories are based on how customers shop, not just production method.

---

## Decision 14 — Main Navigation

Use this top nav:

- Custom Projects
- Ready-Made
- Gallery
- About
- Contact

Persistent CTA:

Start a Custom Project

Do not put all product categories in the top nav.

---

## Decision 15 — Footer

Use a compact SwiftDispatch-style footer.

Footer should include:

- Brand name
- Short tagline
- Instagram/Facebook links
- Contact
- Legal links
- Copyright

Legal links:

- Terms
- Refund & Custom Order Policy
- Privacy
- Shipping & Pickup

Do not include payment methods in the footer.

---

## Decision 16 — Custom Project Policy

Custom Project flow:

Request submitted
→ Quote sent
→ Customer approves quote/details
→ Deposit may be required
→ Production begins
→ Final payment / pickup / shipping

Policy principles:

- Custom/personalized items are generally non-refundable once approved and production begins.
- Customer is responsible for reviewing spelling, names, dates, quantities, and design details before approval.
- Deposits may be required for material-heavy, bulk, rush, or highly customized projects.
- Rush timelines are not guaranteed unless confirmed in writing.

---

## Decision 17 — Response-Time Model

Custom Projects:

Most custom project requests receive a response within 1–2 business days.

Ready-Made Items:

Ready-made item questions may receive a quicker response depending on availability.

General Inquiries:

General inquiries are handled as soon as possible.

Rush/deadline note:

Have a tight deadline? Include it in your request so we can confirm whether the timeline is possible.

---

## Decision 18 — Local Config First

MVP editable content should live in local content config.

Store in content files:

- Business info
- Navigation links
- Footer links
- Homepage section order
- Category cards
- Gallery items
- Ready-made items
- Process steps
- FAQs
- Policy page copy
- CTA labels
- SEO metadata
- Social links

Keep in code:

- Component layouts
- Animations
- Form validation
- Email submission logic
- Payment link behavior
- Routing
- Design tokens

---

## Decision 19 — Future Sanity Role

Sanity should eventually control:

- Content
- Images
- Gallery entries
- Ready-made items
- Policy copy
- SEO metadata
- Approved section order
- Show/hide section toggles

Code should continue to control:

- Design system
- Component layouts
- Animations
- Forms
- Validation
- Payment behavior
- Routing
- Guardrails

---

## Decision 20 — Image Strategy

Use defined image slots and only launch with curated best-work images.

Image slots:

- Homepage hero: 3–5 strongest images
- Category cards: 1 image per category
- Featured gallery: 6–12 strong portfolio images
- Ready-Made preview: 3–6 purchasable items
- About section: 1 maker/process/family-root image if available

Do not dump every Instagram photo into the site.

---

## Decision 21 — MVP Scope

MVP includes:

- Homepage
- Custom Projects page + quote request form
- Ready-Made page with purchasable items linking to Square
- Gallery page
- About page
- Contact page
- Policy pages
- Success page
- Responsive design
- Warm premium theme
- Tasteful animations
- Local content config
- Basic SEO metadata
- Email notification flow
- Square payment-link support
- CMS-ready modular section architecture

MVP excludes:

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

## Decision 22 - Contact Page Model

The `/contact` page stays instruction-only for the MVP.

Reasons:

- The Custom Project form is the structured quote request path and is now verified in production.
- A separate general inquiry form would add another email workflow to maintain without a clear launch need.
- General questions can use the public email, phone number, or social links, while quote-ready requests should use `/custom-projects`.

Future note:

- If the business starts receiving a meaningful volume of non-quote questions, add a lightweight general inquiry form as a separate flow from Custom Projects.
