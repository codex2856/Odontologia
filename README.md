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
  config/       contact.js — número de WhatsApp y mensaje predeterminado
  hooks/        useScrollReveal, useScrollHeader
```

## Contenido pendiente por completar

- **WhatsApp**: sustituir `WHATSAPP_NUMBER` en `src/config/contact.js` por el
  número real en formato internacional (ej. `"584121234567"`).
- **Fotografía de la docente**: reemplazar los marcadores de posición en el
  Hero (`src/components/Hero.jsx`) y en "Sobre Maglynert"
  (`src/components/AboutTeacher.jsx`).
- **Currículo de la docente**: completar la sección "Sobre Maglynert" con la
  información real (formación, trayectoria, experiencia).
- **Cursos 02–10**: completar `description`, `objectives` y `temario` en
  `src/data/courses.js` (actualmente marcados como `TBD` / "Información
  próximamente"). El Curso 01 ya está completo como modelo de referencia.
- **Testimonios**: sustituir el contenido de demostración en
  `src/components/Testimonials.jsx` por testimonios reales.
- **Fechas, precios y horas académicas**: no se han incluido intencionalmente
  y deben añadirse cuando estén disponibles (en `courses.js` y donde
  corresponda).
