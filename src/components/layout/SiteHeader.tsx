"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[rgba(247,245,242,0.88)] backdrop-blur">
      <div className="page-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <p className="font-display text-2xl text-walnut">{siteContent.brand.name}</p>
          <p className="text-sm text-muted lg:hidden">{siteContent.brand.tagline}</p>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteContent.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-walnut">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/custom-projects">Start a Custom Project</Button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="inline-flex rounded-full border border-line px-4 py-2 text-sm font-medium text-walnut lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-surface lg:hidden">
          <div className="page-shell flex flex-col gap-4 py-5">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-walnut"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/custom-projects" className="w-full">
              Start a Custom Project
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
