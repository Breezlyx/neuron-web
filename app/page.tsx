import { HeroSection } from "@/components/Hero"; // Componente Hero
import { ServicesSection } from "@/components/Services" // Componente Servicios
import { PricingSection } from "@/components/Pricing"; // Componente Precios
import { GallerySection } from "@/components/Gallery"; // Componente Galería
import { FAQSection } from "@/components/FAQ"; // Componente FAQ
import { CTASection } from "@/components/CTA"; // Componente CTA

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <GallerySection />
      <FAQSection />
      <CTASection />
    </main>
  );
}