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
                legal.js — datos identificativos para las páginas legales
  hooks/        useScrollReveal, useScrollHeader
```

## Contenido pendiente por completar

- **Páginas legales** (`/aviso-legal`, `/privacidad`, `/cookies`): el texto
  legal ya está redactado y publicado, pero los datos identificativos
  (nombre/razón social, NIF, domicilio, email de contacto y, opcionalmente,
  nº de colegiada) están marcados como "Pendiente de confirmar" en
  `src/config/legal.js`. Hay que sustituirlos por los datos reales antes de
  que el aviso legal sea válido conforme a la LSSI-CE.
- **Cursos 02–10**: completar `description`, `objectives` y `temario` en
  `src/data/courses.js` (actualmente marcados como `TBD` / "Información
  próximamente"). El Curso 01 ya está completo como modelo de referencia.
- **Testimonios**: sustituir el contenido de demostración en
  `src/components/Testimonials.jsx` por testimonios reales.
- **Fechas, precios y horas académicas**: no se han incluido intencionalmente
  y deben añadirse cuando estén disponibles (en `courses.js` y donde
  corresponda).
