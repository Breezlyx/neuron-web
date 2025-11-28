import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar"; // Componente Navbar
import { WhatsAppButton } from "@/components/WhatsAppButton"; // Componente Botón de WhatsApp

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Neuron",
    default: "Neuron - Cumpleaños Científicos Inolvidables",
  },
  description: "Llevamos el laboratorio a tu casa. Experimentos reales, diversión explosiva y aprendizaje asegurado para cumpleaños infantiles en Chile.",
  keywords: ["cumpleaños científicos", "fiestas infantiles", "experimentos para niños", "ciencia divertida", "animación cumpleaños"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
