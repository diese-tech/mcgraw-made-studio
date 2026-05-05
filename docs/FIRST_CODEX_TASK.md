# First Codex Task

Read these files first:

- README.md
- AGENTS.md
- docs/PROJECT_BRIEF.md
- docs/DECISIONS.md
- docs/MVP_SCOPE.md
- docs/FUTURE_SANITY_CMS.md
- docs/DESIGN_SYSTEM.md

Then scaffold the McGraw Made Studio MVP.

## Task

Scaffold a Next.js app with:

- TypeScript
- Tailwind CSS
- Framer Motion
- App Router
- Modular route structure
- Local content config
- Reusable section components
- Warm premium design tokens
- Responsive navigation
- Compact SwiftDispatch-style footer
- Placeholder content/images where real assets are not available

## Required Routes

Create these routes:

- /
- /custom-projects
- /ready-made
- /gallery
- /about
- /contact
- /success
- /terms
- /refund-custom-order-policy
- /privacy
- /shipping-pickup

## Required Content Files

Create local content config files:

- src/content/site.ts
- src/content/home.ts
- src/content/categories.ts
- src/content/gallery.ts
- src/content/readyMade.ts
- src/content/policies.ts

## Required Components

Create reusable section components:

- HeroSection
- CategoryGrid
- FeaturedGallery
- ProcessSteps
- ReadyMadePreview
- StoryPreview
- CTASection
- TrustBar
- FAQSection

Create reusable layout/UI components:

- SiteHeader
- SiteFooter
- Button
- Card
- Section
- Badge
- FormField
- ImageCard

## Scope Guardrails

Do not implement:

- Sanity CMS
- Database
- Admin dashboard
- Authentication
- Customer accounts
- Custom cart
- Inventory sync
- Pricing calculator
- Order tracking
- Payment API integration
- Email sending yet

For Ready-Made Items, only support a Square payment link field and a Buy Now button.

For Custom Projects, create the form UI and validation-ready structure, but do not wire email sending yet unless explicitly requested.

## Acceptance Criteria

The scaffold is acceptable when:

- App runs locally
- All required routes exist
- Homepage uses modular sections
- Content is driven by local config files
- Header/footer match approved structure
- Styling follows the warm premium craft studio direction
- Ready-Made items can display placeholder Square payment links
- Custom Project page has the required form fields
- No excluded MVP features are implemented
