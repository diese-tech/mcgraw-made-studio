import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturedGallery } from "@/components/sections/FeaturedGallery";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ReadyMadePreview } from "@/components/sections/ReadyMadePreview";
import { StoryPreview } from "@/components/sections/StoryPreview";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "McGraw Made Studio",
  description:
    "Central Florida custom fabrication studio creating personalized gifts, signs, awards, decor, UV printed pieces, 3D printed items, and ready-made gifts.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedGallery />
      <TestimonialSection />
      <ProcessSteps />
      <StoryPreview />
      <ReadyMadePreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
