import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HomeServicesPreview } from "@/components/home-services-preview";
import { HomeSolutionsPreview } from "@/components/home-solutions-preview";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { StatsSection } from "@/components/states-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <HomeServicesPreview />
      <HomeSolutionsPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
