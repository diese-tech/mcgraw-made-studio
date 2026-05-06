# McGraw Made Studio Next Steps

This file is the handoff anchor for future sessions.

## Current State

- Repo: `C:\Projects\misc\mcgraw-made`
- Branch: `main`
- Hosting direction: Vercel
- Domain: `mcgrawmade.com`
- Email provider: Resend
- Current business inbox target: `mcgrawdesignco@gmail.com`

## Completed Work

- Issue `#1`: MVP scaffold foundation
- Issue `#2`: Custom Project submission flow with backend email sending
- Issue `#3`: Ready-Made purchase model and Square-link flow

## Verified Working

- Homepage and required routes exist
- Custom Project form submits through backend logic
- Live test to `POST /api/custom-project` returned `200` with `{"ok":true}`
- Ready-Made items support availability-aware Square purchase CTAs
- Domain setup has been started and site/domain flow appears to be working

## Known Notes

- `.env.local` is required for live email sending and should not be committed
- `.env.example` is currently ignored by `.gitignore`, so environment examples are not tracked unless that ignore rule is changed
- The GitHub issue queue is currently empty, so future work should either:
  - create new issues first, or
  - use the recommended build order below

## Recommended Next Build Order

1. Production deployment hardening
   - Confirm Vercel production env vars match local working values
   - Verify `mcgrawmade.com` and `www` canonical redirect behavior
   - Run one real production Custom Project submission after deploy

2. Real content replacement
   - Replace placeholder Ready-Made items, gallery entries, and image labels with real business content
   - Replace placeholder Square links with actual product/payment links
   - Replace placeholder contact/business details if needed

3. SEO and launch polish
   - Add richer metadata per page
   - Add Open Graph image strategy
   - Add sitemap/robots if needed
   - Final mobile QA across all public pages

4. Contact page upgrade
   - Decide whether `/contact` should stay instruction-only or get its own general inquiry submission flow
   - Keep it separate from the Custom Project form unless product intent changes

5. Post-launch revenue tooling
   - Add a lightweight internal content workflow for seasonal items, featured items, sale labels, and availability updates
   - Prefer a simple admin/content layer over full ecommerce complexity

## Suggested Next Issue Titles

- `Production deploy and domain verification pass`
- `Replace placeholder Ready-Made and gallery content with real assets`
- `Add launch SEO metadata and social preview polish`
- `Build general Contact inquiry flow`
- `Build lightweight seasonal item management workflow`
