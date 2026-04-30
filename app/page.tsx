import { CustomCursor } from "@/components/custom-cursor";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { TransformationSection } from "@/components/transformation-section";
import { ServicesSection } from "@/components/services-section";
import { MaterialsSection } from "@/components/materials-section";
import { ProjectsSection } from "@/components/projects-section";
import { TrustSection } from "@/components/trust-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <TransformationSection />
        <ServicesSection />
        <MaterialsSection />
        <ProjectsSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
