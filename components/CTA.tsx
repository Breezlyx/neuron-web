"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

export function CTASection() {
    // Estado para manejar la animación de resaltado
const [isHighlighted, setIsHighlighted] = useState(false)

// Efecto para escuchar el evento personalizado 'highlight-cta'
useEffect(() => {
    const handleHighlight = () => {
      setIsHighlighted(true)
      // Desactivamos la animación después de 1.5 segundos (tiempo suficiente para el scroll y el efecto)
      setTimeout(() => setIsHighlighted(false), 1500)
    }

    // Suscribirse al evento
    window.addEventListener("highlight-cta", handleHighlight)

    // Limpieza: desuscribirse cuando el componente se desmonte
    return () => {
      window.removeEventListener("highlight-cta", handleHighlight)
    }
  }, [])

  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent py-20">
      {/* Animated background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-10 top-10 h-32 w-32 animate-bounce-slow rounded-full bg-white/30" />
        <div className="absolute right-20 top-20 h-24 w-24 animate-spin-slow rounded-full bg-white/20" />
        <div className="absolute bottom-10 left-1/4 h-28 w-28 animate-pulse rounded-full bg-white/25" />
        <div className="absolute bottom-20 right-10 h-20 w-20 animate-bounce-slow rounded-full bg-white/30" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          ¿Listo para el cumpleaños más científico y divertido?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90 md:text-2xl">
          Agenda hoy mismo y asegura una experiencia inolvidable. ¡Los cupos se llenan rápido!
        </p>
        <Button
          asChild
          size="lg"
          //si isHighlighted es true, aplicamos clases extra de escala y sombra
          className={`bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ${
            isHighlighted ? "scale-110 shadow-[0_0_30px_rgba(37,211,102,0.8)] ring-4 ring-white/30" : ""
          }`}
        >
          <a
            href="https://wa.me/56976257106?text=Hola%20Neuron,%20vengo%20de%20la%20web%20y%20quiero%20cotizar%20un%20cumpleaños!"
            target="_blank"
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            ¡Cotizar por WhatsApp Ahora!
          </a>
        </Button>
      </div>
    </section>
  )
}