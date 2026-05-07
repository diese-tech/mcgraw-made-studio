"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { homeContent } from "@/content/home";

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="overflow-hidden border-b border-line bg-[linear-gradient(180deg,#f7f5f2_0%,#efe6da_100%)] py-16 sm:py-20">
      <div className="page-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              {hero.eyebrow}
            </p>
            <h1 className="text-balance font-display text-5xl leading-tight text-walnut sm:text-6xl">
              {hero.title}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted">{hero.description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
            <Button href={hero.supportCta.href} variant="ghost">
              {hero.supportCta.label}
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <Card key={stat.label} className="rounded-[22px]">
                <p className="text-sm text-muted">{stat.label}</p>
                <p className="mt-2 text-lg font-semibold text-walnut">{stat.value}</p>
              </Card>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <div className="soft-card relative min-h-[460px] overflow-hidden rounded-[32px] p-6 sm:row-span-2">
            <Image
              src={hero.collageImages[0].src}
              alt={hero.collageImages[0].alt}
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0.08)_0%,rgba(43,43,43,0.62)_100%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <span className="text-sm font-medium uppercase tracking-[0.16em] text-white">
                Featured work
              </span>
              <div>
                <p className="font-display text-3xl text-white">{hero.collageImages[0].title}</p>
                <p className="mt-2 max-w-xs text-sm leading-7 text-white/82">
                  {hero.collageImages[0].description}
                </p>
              </div>
            </div>
          </div>
          {hero.collageImages.slice(1).map((image) => (
            <div
              key={image.src}
              className="soft-card relative min-h-[220px] overflow-hidden rounded-[28px] p-6"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 22vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0.02)_20%,rgba(43,43,43,0.58)_100%)]" />
              <div className="relative z-10 flex h-full items-end">
                <p className="font-display text-2xl text-white">{image.title}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
