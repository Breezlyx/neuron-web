import { HeroSection } from "@/components/Hero"; // Componente Hero
import { ServicesSection } from "@/components/Services" // Componente Servicios
import { GallerySection } from "@/components/Gallery"; // Componente Galería

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
    </main>
  );
}