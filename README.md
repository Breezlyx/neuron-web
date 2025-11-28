# 🧠 Neuron - Cumpleaños Científicos Inolvidables

![Neuron Logo](/public/images/logo-neuron.png)

> **MVP (Producto Mínimo Viable)** para el sitio web de Neuron, una empresa que lleva la magia de la ciencia y los experimentos a cumpleaños infantiles.

[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=neuron-web)](https://neuron-web.vercel.app/)
*Haz clic para ver el despliegue en vivo.*

---

## 📖 Sobre el Proyecto

Este proyecto es el sitio web de presentación y punto de contacto principal para **Neuron**. El objetivo del MVP es validar la propuesta de valor, mostrar los servicios ofrecidos, transmitir confianza a los padres y facilitar el contacto directo para cotizaciones.

El diseño está enfocado en ser vibrante, divertido y profesional, utilizando una paleta de colores llamativa y elementos visuales relacionados con la ciencia.

### ✨ Características Principales (MVP)

* **Hero Section Impactante:** Una portada atractiva que comunica la propuesta de valor en segundos con un claro llamado a la acción.
* **Catálogo de Servicios:** Sección que detalla los experimentos disponibles (ej: Slime Galáctico, Volcán) utilizando tarjetas interactivas con iconos.
* **Galería de Confianza:** Un lightbox con fotos reales de eventos pasados para mostrar la experiencia y generar seguridad en los clientes.
* **Preguntas Frecuentes (FAQs):** Sección de acordeón para resolver dudas comunes de los padres de forma rápida.
* **Múltiples Puntos de Contacto:**
    * Barra de navegación con botón de cotización directo.
    * Botón flotante de WhatsApp visible en todo el sitio.
    * Sección final de "Llamado a la Acción" (CTA) para cerrar la conversión.
* **Diseño Responsivo:** Totalmente adaptado para funcionar perfectamente en dispositivos móviles y escritorio.
* **UX/UI Pulido:** Incluye navegación con scroll suave, animaciones sutiles y un menú móvil optimizado.
* **SEO Básico:** Configuración de metadatos (título, descripción) y favicon.

---

## 🛠️ Stack Tecnológico

El proyecto está construido con un stack moderno, centrado en el rendimiento y la experiencia del desarrollador.

* **Framework:** [Next.js 14 (App Router)](https://nextjs.org/) - Para renderizado del lado del servidor (SSR), optimización y estructura de rutas.
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) - Para un código más robusto, mantenible y con tipado estático.
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) - Un framework CSS de utilidad primero para un diseño rápido y consistente.
* **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/) - Una colección de componentes de interfaz de usuario reutilizables y accesibles (basados en Radix UI).
* **Iconos:** [Lucide React](https://lucide.dev/) - Una biblioteca de iconos limpia y consistente.
* **Animaciones:** CSS nativo y clases de utilidad de Tailwind.
* **Despliegue:** [Vercel](https://vercel.com/) - Plataforma de frontend para despliegue instantáneo y escalable.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local.

### Prerrequisitos

* Tener instalado [Node.js](https://nodejs.org/) (versión 18.17.0 o superior recomendada).
* Un gestor de paquetes como `npm`, `yarn`, `pnpm` o `bun`.

### Pasos

1.  **Clona el repositorio:**

    ```bash
    git clone [https://github.com/Breezlyx/neuron-web.git](https://github.com/Breezlyx/neuron-web.git)
    cd neuron-web
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    # o si usas otro gestor:
    # yarn install
    # pnpm install
    # bun install
    ```

3.  **Ejecuta el servidor de desarrollo:**

    ```bash
    npm run dev
    # o
    # yarn dev
    # pnpm dev
    # bun dev
    ```

4.  **Abre en tu navegador:**

    Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento. ¡El sitio se actualizará automáticamente mientras editas el código!

---

## 📂 Estructura del Proyecto

Una visión general rápida de la estructura de archivos principal (Next.js App Router).
```
neuron-web/
├── app/ 
│   ├── layout.tsx # Layout raíz (navbar, botón flotante, metadatos)
│   ├── page.tsx # Página de inicio (Home) con todas las secciones 
│   ├── globals.css # Estilos globales y configuración de Tailwind 
│   └── icon.png # Favicon del sitio 
├── components/ # Componentes React reutilizables 
│   ├── ui/ # Componentes base de shadcn/ui 
│   ├── Navbar.tsx # Barra de navegación superior 
│   ├── Hero.tsx # Sección de portada 
│   ├── Services.tsx # Catálogo de experimentos 
│   ├── Gallery.tsx # Galería de fotos con Lightbox 
│   ├── FAQ.tsx # Sección de preguntas frecuentes 
│   ├── CTA.tsx # Sección final de llamado a la acción 
│   └── WhatsAppButton.tsx # Botón flotante de contacto 
├── public/ # Activos estáticos (imágenes, iconos) 
│   ├── images/ 
│   └── ... 
├── tailwind.config.ts # Configuración de Tailwind CSS (colores, fuentes) 
└── ...
```
---

## 🤝 Contribución y Flujo de Trabajo

Este proyecto sigue un flujo de trabajo de **Feature Branches**.

1.  La rama `master` contiene el código de producción estable.
2.  El desarrollo de nuevas características se realiza en ramas separadas (ej: `feature/nueva-seccion`).
3.  Los cambios se integran a `master` mediante **Pull Requests (PRs)** en GitHub.

---

## 📄 Licencia

Este proyecto es privado y propiedad de Neuron. Todos los derechos reservados.