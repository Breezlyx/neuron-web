"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/evento-1.JPG",
    alt: "Niños haciendo experimento de slime colorido",
  },
  {
    id: 2,
    src: "/images/gallery/evento-2.jpg",
    alt: "Niños observando erupción volcánica",
  },
  {
    id: 3,
    src: "/images/gallery/evento-3.JPG",
    alt: "Niños creando burbujas gigantes",
  },
  {
    id: 4,
    src: "/images/gallery/evento-4.jpg",
    alt: "Niños con gafas de seguridad experimentando",
  },
  {
    id: 5,
    src: "/images/gallery/evento-5.jpg",
    alt: "Niños jugando con hielo seco",
  },
  {
    id: 6,
    src: "/images/gallery/evento-6.JPG",
    alt: "Grupo de niños felices en fiesta científica",
  },
]

export function GallerySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-50" id="galeria">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
              Galería de Momentos <span className="text-cyan-400">Inolvidables</span>
            </h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sonrisas reales, asombro genuino y ciencia en acción en cada una de nuestras fiestas.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {galleryImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                {/* Miniatura (se mantiene igual con next/image optimizado) */}
                <div className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-md transition-all">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                </div>
              </DialogTrigger>

              {/* ESTRATEGIA NUEVA PARA EL LIGHTBOX
                1. Quitamos max-w-7xl. Usamos w-auto y h-auto para que el diálogo se ajuste al contenido.
                2. Usamos flex, items-center y justify-center para centrar la imagen en la pantalla.
                3. Agregamos p-4 para un margen de seguridad contra los bordes de la pantalla.
              */}
              <DialogContent className="w-auto h-auto max-w-full max-h-full p-4 bg-transparent border-none shadow-none flex items-center justify-center [&>button]:hidden">
                <DialogTitle className="sr-only">Vista ampliada: {image.alt}</DialogTitle>

                {/* Contenedor relativo que envuelve la imagen y el botón.
                  Su tamaño será exactamente el de la imagen.
                */}
                <div className="relative group/lightbox shrink-0">
                  {/* Usamos <img> normal para que el navegador calcule el tamaño natural.
                    Limitamos el alto y ancho máximo para que no se salga de la pantalla.
                    'block' y 'rounded-lg' para que se vea bien.
                  */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
                  />
                  
                  {/* El botón de cerrar ahora sí está posicionado relativo a la imagen visible.
                    Se movió un poco hacia adentro (top-2 right-2) y es más pequeño (p-1.5) para ser sutil.
                  */}
                  <DialogClose className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/lightbox:opacity-100 transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer z-50" aria-label="Cerrar">
                    <X className="w-5 h-5" />
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}