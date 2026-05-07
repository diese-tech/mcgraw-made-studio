# Sanity Scoping

This document scopes a practical Sanity migration for the current McGraw Made Studio repo.

## Short answer

The repo is partially prepared for Sanity, but not close enough to drop it in as a same-day change.

What is already favorable:

- content already lives in `src/content/*` for major business data
- homepage already uses reusable section components
- product, gallery, policy, navigation, and SEO concepts are already defined

What is not ready yet:

- most non-home pages still hardcode page copy directly in `src/app/*/page.tsx`
- homepage section order is fixed in code rather than driven by typed section data
- there is no shared page/section schema layer yet between local content and future CMS content
- images are still mostly placeholders rather than structured image fields

## Current repo readiness

### Good migration candidates now

- `src/content/site.ts`
- `src/content/home.ts`
- `src/content/categories.ts`
- `src/content/gallery.ts`
- `src/content/readyMade.ts`
- `src/content/policies.ts`
- `src/content/types.ts`

### Still too hardcoded

- `src/app/page.tsx`
  - homepage section order is hardcoded
- `src/app/about/page.tsx`
  - page hero/title/body copy is inline
- `src/app/contact/page.tsx`
  - page hero/title/body copy is inline
- `src/app/custom-projects/page.tsx`
  - page hero/title/body copy and helper list are inline
- `src/app/ready-made/page.tsx`
  - page heading copy is inline
- `src/app/gallery/page.tsx`
  - page heading copy is inline
- `src/app/success/page.tsx`
  - confirmation copy is inline
- page metadata across `src/app/*`
  - titles and descriptions are mostly local constants instead of content-driven

## Recommended migration approach

Do this in two phases instead of jumping straight into Sanity.

### Phase 1: finish the local content contract

Goal:

Make all editable copy and section decisions live in typed local content first.

Work:

1. Move hardcoded page copy into `src/content/*`.
2. Add content types for:
   - generic page hero copy
   - homepage section config
   - about page content
   - contact page content
   - custom projects page content
   - success page content
   - per-page SEO metadata
3. Refactor `src/app/page.tsx` so homepage section order can come from content instead of fixed imports only.
4. Keep section components code-owned, but make their text/content props-driven.
5. Replace placeholder image labels with real structured image slots, even if the source is still local for now.

Why this phase matters:

If this layer is not cleaned up first, the Sanity integration will be a direct code-to-CMS rewrite instead of a clean content-source swap.

### Phase 2: add Sanity as the content source

Goal:

Swap the source of truth from local TS objects to Sanity documents without redesigning the site.

Work:

1. Install `sanity` and `next-sanity`.
2. Add Sanity Studio and environment variables.
3. Create schema types that mirror the local content contract from Phase 1.
4. Seed Sanity with the existing local content.
5. Add queries and mappers that normalize Sanity documents into the same shapes the frontend already expects.
6. Update pages/layout to fetch Sanity content.
7. Keep local fallback content only if it is useful for development safety.

## Recommended Sanity schema set

Keep the schema tight and editorially safe.

- `siteSettings`
  - brand
  - contact info
  - social links
  - legal links
  - default SEO
- `homePage`
  - ordered list of approved section blocks
- `aboutPage`
- `contactPage`
- `customProjectsPage`
- `successPage`
- `policyPage`
- `category`
- `galleryItem`
- `readyMadeItem`

## Approved section block types

These should map to existing frontend components only:

- `hero`
- `trustBar`
- `categoryGrid`
- `featuredGallery`
- `processSteps`
- `readyMadePreview`
- `storyPreview`
- `faq`
- `ctaSection`

Each block should support:

- `id`
- `type`
- `enabled`
- `variant` if needed
- `content`
- `settings`

Do not support arbitrary new layouts from the CMS in the first pass.

## Suggested next implementation order

If Sanity becomes the next major project, do it in this order:

1. Convert all hardcoded page copy into `src/content/*`
2. Make homepage section order content-driven
3. Normalize page metadata into content
4. Introduce typed "content adapters" so pages consume one stable shape
5. Add Sanity Studio and schemas
6. Port local content into Sanity
7. Swap fetch source from local config to Sanity

## Rough effort

- Phase 1 local content normalization: moderate
- Phase 2 Sanity integration: moderate to large

This is realistic as a focused follow-up project, but not a low-risk "quick add before handoff" change if the launch blockers still matter.
