"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#galeria", label: "Galería" },
    { href: "#faqs", label: "FAQs" },
  ]

  // Trigger para resaltar la sección CTA
  const triggerHighlight = () => {
    // Creamos y despachamos un evento personalizado llamado 'highlight-cta'
    window.dispatchEvent(new Event("highlight-cta"))
    // Cerramos el menú móvil si estuviera abierto
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-16 h-16 transition-transform group-hover:scale-105">
            <Image src="/images/logo-neuron.png" alt="Neuron Logo" fill className="object-contain" priority />
          </div>
          <span className="ml-3 text-2xl font-bold text-gray-900 font-heading tracking-tight">Neuron</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          {/* Listener en botón Cotizar */}
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold" onClick={triggerHighlight}>
            <Link href="#cta">Cotizar</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menú">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <SheetHeader className="text-left border-b pb-4">
              <SheetTitle className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image src="/images/logo-neuron.png" alt="Neuron Logo" fill className="object-contain" />
                </div>
                <span className="text-lg font-bold">Neuron</span>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6 px-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              {/* Listener en botón Cotizar */}
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold mt-4 w-full" onClick={triggerHighlight}>
                <Link href="#cta">
                  Cotizar
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}