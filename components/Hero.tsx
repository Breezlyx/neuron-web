"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Atom, FlaskConical } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-pink-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 animate-bounce-slow">
          <Atom className="w-16 h-16 md:w-24 md:h-24" />
        </div>
        <div className="absolute top-40 right-20 text-secondary/20 animate-spin-slow">
          <FlaskConical className="w-12 h-12 md:w-20 md:h-20" />
        </div>
        <div className="absolute bottom-32 left-1/4 text-accent/30 animate-pulse">
          <Sparkles className="w-14 h-14 md:w-20 md:h-20" />
        </div>
        <div className="absolute bottom-20 right-1/3 text-primary/15 animate-bounce">
          <Zap className="w-10 h-10 md:w-16 md:h-16" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-28">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Atom className="w-5 h-5 text-primary animate-spin-slow" />
              <span className="text-sm md:text-base font-semibold text-primary tracking-wider">NEURON</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-balance mb-6 md:mb-8 leading-[1.1] tracking-tight">
            <span className="inline-block">Cumpleaños</span>{" "}
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient">
              Científicos
            </span>{" "}
            <span className="inline-block">Inolvidables</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Llevamos el laboratorio a tu casa. Experimentos reales, diversión explosiva y aprendizaje para niños
            curiosos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base md:text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              <a href="#precios">Ver Servicios</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base md:text-lg px-8 py-6 border-2 border-foreground hover:bg-foreground hover:text-background font-bold transition-all hover:scale-105 bg-transparent"
            >
              Hablemos
            </Button>
          </div>

          <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-medium">Experimentos seguros</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-medium">Educadores certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-medium">100% diversión garantizada</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-muted/30 to-transparent" />
    </section>
  )
}