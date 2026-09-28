# Actualízate. Cariología… y algo más.

Landing page de formación continua en Cariología, dirigida por Maglynert
Montero Baptista. Construida con React + Vite.

**Sitio en producción:** https://actualizatecariologia.com

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
src/
  components/   Componentes reutilizables (Header, Hero, tarjetas de curso, etc.)
  pages/        Vistas enrutadas: Home y CourseDetail
  data/         courses.js — catálogo de los 10 cursos (única fuente de datos)
  config/       contact.js — WhatsApp, Instagram y mensaje predeterminado
                legal.js — datos identificativos para las páginas legales
  hooks/        useScrollReveal, useScrollHeader
```

## Decisiones de contenido

- **Fechas y precios**: por decisión de la titular, no se muestran en
  la página. Esa información se gestiona directamente por WhatsApp al
  consultar por un curso.
