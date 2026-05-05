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

src/content/site.ts
src/content/home.ts
src/content/categories.ts
src/content/gallery.ts
src/content/readyMade.ts
src/content/policies.ts

Use reusable section components:

HeroSection
CategoryGrid
FeaturedGallery
ProcessSteps
ReadyMadePreview
StoryPreview
CTASection
TrustBar
FAQSection

Page files should mostly compose sections and pass content into components.

Keep layout, animations, form validation, payment link behavior, and design tokens in code.

---

## Domain Language

Use these terms consistently:

- Custom Project
- Ready-Made Item
- Gallery Item
- Inquiry

Do not call custom quote requests “orders” unless payment/production has actually started.

---

## Custom Project Flow

A Custom Project is a structured quote request.

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

Submission flow:

Form submission
→ Business email notification
→ Customer confirmation email
→ Success page

No database or dashboard in MVP.

---

## Ready-Made Flow

Ready-Made Items are buy-now items.

Each item should support:

- Title
- Photos
- Description
- Price
- Quantity / availability
- Square payment link
- Buy Now button

Availability statuses:

- Available
- Sold Out
- Low Stock
- Made-to-Order Available

No “reserved” status.

---

## Payment Rules

Ready-Made Items:

- Immediate purchase through Square payment links
- Cash App Pay may be supported through Square if enabled
- No Zelle checkout

Custom Projects:

- Quote first
- Deposit may be required after quote approval
- Zelle may be used manually for approved custom deposits
- Square/Cash App Pay may be used after quote approval

---

## Footer Rules

Use a compact footer inspired by SwiftDispatch.

Footer should include:

- Brand name
- Short tagline
- Social links
- Contact
- Legal links
- Copyright

Legal links:

- Terms
- Refund & Custom Order Policy
- Privacy
- Shipping & Pickup

Do not put payment methods in the footer.

---

## Code Quality

Prefer:

- Simple components
- Strong TypeScript types
- Reusable content types
- Accessible buttons/links/forms
- Mobile-first layout
- Clear file names
- No unnecessary dependencies

Before adding a dependency, justify why it is needed.

---

## Implementation Style

Work in small, reviewable chunks.

Preferred build order:

1. Scaffold app/theme/routes/content config
2. Build homepage modular sections
3. Build Custom Projects form and success page
4. Build Ready-Made page with payment links
5. Build Gallery/About/Contact pages
6. Add policies
7. Add polish, SEO metadata, and mobile cleanup
