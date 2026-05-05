# MVP Scope

## Goal

Build a polished, lightweight, modular website for McGraw Made Studio.

The MVP should validate the core business flows:

1. Custom Project quote requests
2. Ready-Made Item purchases through Square links
3. Gallery-driven inspiration and trust

---

## Included Pages

### Home

Purpose:

- Explain what McGraw Made Studio does
- Show visual proof immediately
- Route users to Custom Projects, Ready-Made Items, and Gallery

Sections:

1. Hero
2. Category Cards
3. Featured Gallery / Recent Work
4. How Custom Projects Work
5. Ready-Made Preview
6. McGraw Story Preview
7. Final CTA

---

### Custom Projects

Purpose:

- Explain custom work
- Set expectations
- Collect structured quote requests

Required form fields:

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

Submission result:

- Business email notification
- Customer confirmation email
- Success page

---

### Ready-Made

Purpose:

- Display finished or limited-quantity purchasable items

Each item should support:

- Title
- Photos
- Description
- Price
- Quantity / availability
- Square payment link
- Buy Now button

No cart in MVP.

---

### Gallery

Purpose:

- Show past work
- Inspire custom requests
- Support repeatable/reorderable pieces

Each Gallery Item should support:

- Title
- Photos
- Category
- Short caption
- Materials/process
- Repeatability status
- CTA behavior

Repeatability statuses:

- Past Work Only
- Can Make Similar
- Can Reorder

---

### About

Purpose:

- Tell the McGraw Ave/family roots story
- Build trust
- Explain maker/studio identity

The About page should feel personal but not overly long.

---

### Contact

Purpose:

- Provide simple ways to reach the business
- Route users back to Custom Projects where appropriate

Include:

- Contact form or contact instructions
- Social links
- Response-time expectations

---

### Success

Purpose:

- Confirm Custom Project request submission

Suggested message:

Thanks — we received your custom project request.

We’ll review the details and follow up with a quote.

For urgent deadlines, message us on Instagram.

---

### Policy Pages

Include:

- Terms
- Refund & Custom Order Policy
- Privacy
- Shipping & Pickup

---

## Included Technical Features

- Next.js app
- TypeScript
- Tailwind CSS
- Framer Motion
- Modular section components
- Local content config
- Responsive navigation
- Compact footer
- Basic SEO metadata
- Custom Project form validation
- Email submission flow
- Success page
- Square payment-link fields for Ready-Made Items

---

## Excluded From MVP

Do not implement:

- Sanity CMS
- Custom shopping cart
- Customer accounts
- Admin dashboard
- Database
- Automated inventory sync
- Pricing calculator
- Order tracking
- Review/testimonial submission system
- Complex filtering
- Blog
- Authentication
- Custom payment processor API integration

---

## MVP Acceptance Criteria

The MVP is done when:

- All MVP pages exist and are responsive
- Homepage uses modular sections
- Navigation and footer match the approved structure
- Custom Project form validates required fields
- Form submission sends the business a usable inquiry
- Customer sees a success page after submitting
- Ready-Made Items can link to Square payment pages
- Gallery supports past work and repeatable items
- Legal/policy pages exist
- Content is managed through local config files
- The site is deployable on Vercel
