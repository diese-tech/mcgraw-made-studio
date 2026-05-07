# Production Deployment Checklist

This checklist is for verifying the McGraw Made Studio MVP is ready to launch on Vercel without expanding scope.

## Required environment variables

Set these in Vercel for the Production environment:

- `RESEND_API_KEY`
- `BUSINESS_INQUIRY_EMAIL` = `mcgrawdesignco@gmail.com`
- `FROM_EMAIL` = `McGraw Made Studio <no-reply@mcgrawmade.com>` after `mcgrawmade.com` is verified in Resend

Use the same keys in local `.env` or `.env.local` for local email testing. Commit only `.env.example`.

## Custom Project email flow expectations

The Custom Project form posts to `POST /api/custom-project`.

Expected success behavior in production:

1. Valid form submission reaches the API route.
2. The business notification email is sent to `BUSINESS_INQUIRY_EMAIL`.
3. If the customer entered a real email address, a confirmation email is attempted from `FROM_EMAIL`.
4. The API returns `200` with `{ "ok": true }`.
5. The frontend success flow completes.

Expected failure behavior when env vars are missing:

- If any of `RESEND_API_KEY`, `BUSINESS_INQUIRY_EMAIL`, or `FROM_EMAIL` are missing, the API returns `500`.
- In non-production environments, the response includes a detailed configuration error mentioning the missing email setup.
- In production, the response is intentionally generic: `Email delivery is temporarily unavailable. Please try again soon.`

Expected failure behavior when Resend send calls fail:

- If the business notification email fails, the submission is treated as failed and returns `500`.
- If the customer confirmation email fails after the business notification succeeds, the inquiry still returns `200` and the confirmation failure is logged.
- In production, send failures return a generic customer-safe message instead of provider details.
- The form displays direct contact fallback details when submission fails.

## Vercel production checklist

1. Confirm the Vercel Production environment has:
   - `RESEND_API_KEY`
   - `BUSINESS_INQUIRY_EMAIL`
   - `FROM_EMAIL`
2. Confirm the production deployment builds successfully with `npm run build`.
3. Confirm the deployed site URL is set correctly in repo content once the final production domain is live.

## Resend checklist

1. Verify the sending domain used by `FROM_EMAIL` is added and verified in Resend.
2. Verify the exact `FROM_EMAIL` address is allowed by that verified domain.
3. Confirm `BUSINESS_INQUIRY_EMAIL` points to the real inbox that should receive Custom Project inquiries.
4. If using a Gmail inbox for business notifications, confirm forwarding, spam, and promotions tabs do not hide the test message.

## Domain checklist

1. Confirm `mcgrawmade.com` resolves to the production Vercel project.
2. Confirm `www.mcgrawmade.com` resolves correctly.
3. Confirm one domain is the canonical production hostname and the other redirects to it.
4. Confirm HTTPS is active for both hosts.
5. Confirm no public navigation or metadata still points to the temporary Vercel preview domain.

## Live smoke test checklist

Run one live production Custom Project submission after env vars and domains are fully configured.

Status: completed. A production submission was verified with both the business notification email and customer confirmation email arriving.

1. Open the production Custom Project page.
2. Submit a valid test inquiry with:
   - a real name
   - a real reachable email address
   - a clear project type
   - quantity
   - details
   - deadline
3. Confirm the UI reaches the success state.
4. Confirm the business notification email arrives in `BUSINESS_INQUIRY_EMAIL`.
5. Confirm the customer confirmation email arrives at the submitted customer email address.
6. Confirm the email sender, subject lines, and body copy look correct.

## Current placeholder launch blockers

These should be replaced with real business data before launch, but they should not be invented in code:

- `src/content/readyMade.ts`
  - placeholder Square payment links for all Ready-Made Items

## Manual verification commands

Run locally before pushing:

```powershell
npm run lint
npm run build
```

Optional local API verification after setting real env vars:

```powershell
Invoke-WebRequest -Method POST -Uri http://localhost:3000/api/custom-project -Form @{
  name = "Launch Test"
  emailOrPhone = "tester@example.com"
  projectType = "Sign"
  quantity = "1"
  details = "Production verification test"
  deadline = "Next month"
}
```
