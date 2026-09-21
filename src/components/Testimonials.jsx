import Reveal from "./Reveal";
import "./Testimonials.css";

const DEMO_TESTIMONIALS = [
  {
    name: "Nombre del estudiante",
    role: "Especialidad / profesión",
    quote:
      "Aquí se mostrará el testimonio real de una odontóloga o un odontólogo que haya tomado el curso. Este contenido es una vista preliminar de demostración.",
  },
  {
    name: "Nombre del estudiante",
    role: "Especialidad / profesión",
    quote:
      "Este espacio está preparado para incorporar testimonios reales, con fotografía cuando exista autorización. Contenido provisional.",
  },
  {
    name: "Nombre del estudiante",
    role: "Especialidad / profesión",
    quote:
      "El diseño de esta sección se mantiene una vez incorporados los testimonios definitivos de los participantes del programa.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-pad testimonials">
      <div className="container">
        <Reveal className="section-top">
          <p className="eyebrow">Testimonios</p>
          <h2 className="section-heading">Lo que dicen quienes ya se han formado</h2>
          <p className="section-lede">
            Vista preliminar de demostración. Los testimonios definitivos se
            incorporarán próximamente.
          </p>
        </Reveal>

        <div className="testimonials__grid">
          {DEMO_TESTIMONIALS.map((t, index) => (
            <Reveal
              as="figure"
              className="testimonial-card"
              key={`${t.name}-${index}`}
              delay={index * 90}
            >
              <span className="testimonial-card__badge">Contenido provisional</span>
              <span className="testimonial-card__quote" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="testimonial-card__avatar" aria-hidden="true" />
                <span>
                  <strong>{t.name}</strong>
                  <em>{t.role}</em>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
