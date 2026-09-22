# Actualízate. Cariología… y algo más.

Landing page de formación continua en Cariología, dirigida por Maglynert
Montero Baptista. Construida con React + Vite.

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
  hooks/        useScrollReveal, useScrollHeader
```

## Contenido pendiente por completar

- **Fotografía de la docente**: reemplazar los marcadores de posición en el
  Hero (`src/components/Hero.jsx`) y en "Sobre Maglynert"
  (`src/components/AboutTeacher.jsx`) por la foto real.
- **Cursos 02–10**: completar `description`, `objectives` y `temario` en
  `src/data/courses.js` (actualmente marcados como `TBD` / "Información
  próximamente"). El Curso 01 ya está completo como modelo de referencia.
- **Testimonios**: sustituir el contenido de demostración en
  `src/components/Testimonials.jsx` por testimonios reales.
- **Fechas, precios y horas académicas**: no se han incluido intencionalmente
  y deben añadirse cuando estén disponibles (en `courses.js` y donde
  corresponda).
