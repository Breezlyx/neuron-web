import { HeroSection } from "@/components/Hero"; // Componente Hero
import { ServicesSection } from "@/components/Services" // Componente Servicios

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}