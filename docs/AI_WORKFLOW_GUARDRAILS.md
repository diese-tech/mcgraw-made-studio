# AI Workflow Guardrails

Review this document before implementation, debugging, refactoring, migrations, or production fixes in this repository.

## Core Rule

Move fast, but move surgically. Prefer the smallest safe change that solves the measured problem. Avoid broad rewrites, speculative refactors, or unrelated cleanup.

## Repo-Specific Focus

- Protect customer-facing page performance.
- Watch route and module startup costs.
- Keep image optimization and asset loading intentional.
- Use caching where it improves traffic resilience.
- Minimize unnecessary data loading.
- Make UI changes incrementally and with low blast radius.
- Avoid broad refactors during feature work.
- Handle customer, contact, and order data safely.
- Degrade gracefully under traffic spikes.

## Required Before Changing Code

- Identify the specific problem and files likely involved.
- Name the expected impact and rollback path.
- Check whether the change affects public traffic, customer/contact/order data, payment links, SEO, or production operations.
- Avoid touching unrelated files.

## Architecture Defaults

- Prefer cached or static content where possible.
- Prefer small indexed lookups and explicit content projections over raw scans.
- Prefer bounded async work over synchronous fan-out.
- Prefer idempotent and retry-safe jobs for imports, CMS sync, or order-related workflows.
- Keep public routes isolated from expensive backend work.

## Change Review Checklist

Before finalizing a change, answer what changed, why it is safe, what could break, how to roll back, and what validation proves the change.
