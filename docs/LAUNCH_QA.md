# Launch QA

Last QA pass: May 7, 2026

## Automated checks

- `npm run lint` passed
- `npm run build` passed
- Production build generated all expected public routes, including `/robots.txt` and `/sitemap.xml`

## Route availability

Checked locally against the Next dev server:

- `/` returned `200`
- `/custom-projects` returned `200`
- `/ready-made` returned `200`
- `/gallery` returned `200`
- `/about` returned `200`
- `/contact` returned `200`
- `/terms` returned `200`
- `/refund-custom-order-policy` returned `200`
- `/privacy` returned `200`
- `/shipping-pickup` returned `200`
- `/success` returned `200`
- `/robots.txt` returned `200`
- `/sitemap.xml` returned `200`

## Navigation and links

- Primary navigation routes resolve locally.
- Footer/legal routes resolve locally.
- `www.mcgrawmade.com` redirects to `https://mcgrawmade.com/`.
- `https://mcgrawmade.com` serves over HTTPS.
- No missing internal routes were found in scanned local links.

## Forms and email

- Production Custom Project submission was verified.
- Owner notification email arrived.
- Customer confirmation email arrived.
- Form failure state includes direct contact fallback details.

## Ready-Made launch safety

- Placeholder Square URLs still exist in local content as temporary data.
- Placeholder Square URLs are no longer treated as purchasable.
- Rendered Ready-Made page does not expose placeholder Square checkout URLs.
- Ready-Made CTAs show `Contact to Purchase` until real Square payment links are available.

## Known launch follow-up

- Replace placeholder Square payment links in `src/content/readyMade.ts` with real Square links when available.
- Perform one final visual pass on mobile devices after the latest Vercel deployment finishes.
