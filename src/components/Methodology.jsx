import Reveal from "./Reveal";
import "./Methodology.css";

const ICONS = {
  live: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="14.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="20" r="3.2" fill="currentColor" />
      <path d="M20 5.5V9M20 31v3.5M5.5 20H9M31 20h3.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  material: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="10" y="6" width="20" height="28" rx="1.5" stroke="currentColor" strokeWidth="1" />
      <path d="M15 14h10M15 20h10M15 26h6" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  recordings: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="14.5" stroke="currentColor" strokeWidth="1" />
      <path d="M17 14.5l9 5.5-9 5.5v-11z" fill="currentColor" />
    </svg>
  ),
  certificate: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="7" y="9" width="26" height="18" rx="1.5" stroke="currentColor" strokeWidth="1" />
      <path d="M13 33l3.5-6M27 33l-3.5-6" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="18" r="4.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  aval: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 6l12 4.5v8c0 8.2-5.1 14.9-12 16.5-6.9-1.6-12-8.3-12-16.5v-8L20 6z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M14.5 20l3.8 3.8L26 15.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
};

const ITEMS = [
  {
    icon: "live",
    title: "Clases online en tiempo real",
    desc: "Encuentros formativos en vivo, con espacio para preguntas y discusión clínica.",
  },
  {
    icon: "material",
    title: "Material de apoyo",
    desc: "Recursos complementarios para acompañar el proceso de aprendizaje.",
  },
  {
    icon: "recordings",
    title: "Grabaciones disponibles",
    desc: "Acceso a las grabaciones durante una semana después de cada sesión.",
  },
  {
    icon: "certificate",
    title: "Certificado digital",
    desc: "Certificado digital de participación al finalizar el curso.",
  },
  {
    icon: "aval",
    title: "Aval institucional",
    desc: "Aval del Departamento de Educación Continua de la Facultad de Odontología de la UCV.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="section-pad methodology">
      <div className="container">
        <Reveal className="section-top">
          <p className="eyebrow eyebrow--on-ink">Metodología</p>
          <h2 className="section-heading section-heading--on-ink">
            Una experiencia de aprendizaje pensada para la práctica clínica
          </h2>
        </Reveal>

        <div className="methodology__grid">
          {ITEMS.map((item, index) => (
            <Reveal
              as="article"
              className="methodology__item"
              key={item.title}
              delay={index * 80}
            >
              <span className="methodology__icon">{ICONS[item.icon]}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
