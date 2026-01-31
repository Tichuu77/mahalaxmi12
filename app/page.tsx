
import HeroSection  from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import AmenitiesSection  from "@/components/amenities-section"
import GallerySection  from "@/components/gallery-section"
import TestimonialsSection  from "@/components/testimonials-section"
import FAQSection  from "@/components/faq-section"
import { Footer } from "@/components/footer"
import FloatingCTA from "@/components/FloatingCTA"
import FeaturesSwitcher from "@/components/FeaturesSwitcher"
import VirtualTourHero from "@/components/vertualTour"
import DocumentsSection from "@/components/document"


export default function Home() {

  return (
    <main >
      <HeroSection />
      <AboutSection />
      <FeaturesSwitcher />
      <AmenitiesSection />
      <VirtualTourHero />
      <GallerySection />
      <DocumentsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
