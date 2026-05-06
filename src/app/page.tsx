import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturedGallery } from "@/components/sections/FeaturedGallery";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ReadyMadePreview } from "@/components/sections/ReadyMadePreview";
import { StoryPreview } from "@/components/sections/StoryPreview";
import { TrustBar } from "@/components/sections/TrustBar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CategoryGrid />
      <FeaturedGallery />
      <ProcessSteps />
      <ReadyMadePreview />
      <StoryPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
