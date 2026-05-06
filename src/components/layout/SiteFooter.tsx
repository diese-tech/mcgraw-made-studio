import Link from "next/link";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface py-10">
      <div className="page-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-3">
          <p className="font-display text-2xl text-walnut">{siteContent.brand.name}</p>
          <p className="max-w-md text-sm leading-7 text-muted">
            {siteContent.brand.tagline}
          </p>
          <p className="text-sm text-muted">{siteContent.brand.location}</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Contact</p>
          <p className="text-sm text-walnut">{siteContent.brand.email}</p>
          <p className="text-sm text-walnut">{siteContent.brand.phone}</p>
          <div className="flex gap-4">
            {siteContent.socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-walnut"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Legal</p>
          <div className="flex flex-col gap-2">
            {siteContent.legalNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-walnut">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="page-shell mt-8 border-t border-line pt-4 text-sm text-muted">
        © 2026 {siteContent.brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
