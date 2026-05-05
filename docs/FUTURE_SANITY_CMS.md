# Future Sanity CMS Plan

## Purpose

Sanity CMS should be added after the MVP design and content model are stable.

Do not add Sanity during the MVP unless explicitly requested later.

---

## Why Sanity

Sanity will allow McGraw Made Studio to manage site content without editing code.

The goal is not to create a full drag-and-drop website builder.

The goal is to provide a curated editor where approved blocks can be updated, reordered, shown, or hidden.

---

## Sanity Should Control

Sanity should eventually manage:

- Site settings
- Navigation labels/links
- Footer links
- Homepage sections
- Page content
- Gallery items
- Ready-Made Items
- Product/service categories
- FAQs
- Testimonials
- Policy copy
- SEO metadata
- Social/contact info
- Images
- Approved section order
- Section show/hide toggles

---

## Code Should Still Control

Code should continue to manage:

- Design system
- Component layouts
- Animations
- Form validation
- Email submission logic
- Payment behavior
- Routing
- Accessibility rules
- Guardrails
- Section component implementation

---

## Future Editing Model

The owner should be able to:

- Change homepage headlines
- Swap hero images
- Add Gallery Items
- Add Ready-Made Items
- Edit prices/payment links
- Update category text
- Reorder approved homepage sections
- Hide/show sections
- Update policies
- Edit SEO titles/descriptions

The owner should not be able to:

- Freely drag arbitrary elements
- Edit raw CSS
- Break layout structure
- Change form validation logic
- Modify payment logic
- Add unsupported section types without code changes

---

## Future Sanity Schema Types

Suggested schema types:

- siteSettings
- page
- section
- category
- galleryItem
- readyMadeItem
- testimonial
- faq
- policyPage
- seo

---

## Page Section Types

Supported section blocks should map to existing frontend components:

- hero
- categoryGrid
- featuredGallery
- processSteps
- readyMadePreview
- storyPreview
- ctaBanner
- trustBar
- faq
- testimonial

Each block should support:

- id
- type
- enabled
- content
- settings

---

## Migration Strategy

The MVP local content files should be structured to resemble future Sanity schemas.

Suggested local files:

- src/content/site.ts
- src/content/home.ts
- src/content/categories.ts
- src/content/gallery.ts
- src/content/readyMade.ts
- src/content/policies.ts

Later, these local objects can be migrated into Sanity documents.

---

## Sanity Migration Steps

1. Install Sanity and next-sanity
2. Create Sanity Studio
3. Define schema types based on local content config
4. Move content from local files into Sanity
5. Add Sanity client and queries
6. Update pages to fetch from Sanity
7. Add preview/draft mode
8. Add visual editing if needed
9. Keep fallback local content only if useful

---

## Important Rule

Do not let CMS flexibility damage the brand.

Sanity should provide structured freedom, not unlimited layout control.
