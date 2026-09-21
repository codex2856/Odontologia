import { getInstagramLink } from "../config/contact";
import Reveal from "./Reveal";
import "./EducationalContent.css";

const ICONS = {
  saliva: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 6c5.5 7 9 12.4 9 17a9 9 0 1 1-18 0c0-4.6 3.5-10 9-17z"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  ),
  biofilm: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="14" cy="16" r="6" stroke="currentColor" strokeWidth="1" />
      <circle cx="24" cy="14" r="5" stroke="currentColor" strokeWidth="1" />
      <circle cx="19" cy="25" r="7" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  diagnostico: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="17" cy="17" r="10" stroke="currentColor" strokeWidth="1" />
      <path d="M24.5 24.5L33 33" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  anticaries: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 6l12 4.5v8c0 8.2-5.1 14.9-12 16.5-6.9-1.6-12-8.3-12-16.5v-8L20 6z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M20 14v12M14 20h12" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  pacientes: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1" />
      <path d="M8 34c1.5-7 6-10.5 12-10.5S30.5 27 32 34" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
};

const TOPICS = [
  {
    icon: "saliva",
    title: "La saliva en el proceso de caries",
    desc: "Su papel en el equilibrio entre desmineralización y remineralización.",
  },
  {
    icon: "biofilm",
    title: "Biofilm dental",
    desc: "Cómo se forma y por qué es clave para entender la enfermedad de caries.",
  },
  {
    icon: "diagnostico",
    title: "Diagnóstico y tratamiento",
    desc: "Criterios actuales para reconocer y abordar las lesiones de caries.",
  },
  {
    icon: "anticaries",
    title: "Agentes anticaries",
    desc: "Recursos terapéuticos disponibles y su papel en la prevención.",
  },
  {
    icon: "pacientes",
    title: "Pacientes con características particulares",
    desc: "Consideraciones clínicas para una atención individualizada.",
  },
];

export default function EducationalContent() {
  return (
    <section id="divulgacion" className="section-pad educational-content">
      <div className="container">
        <Reveal className="section-top">
          <p className="eyebrow">Divulgación científica</p>
          <h2 className="section-heading">Contenido educativo gratuito</h2>
          <p className="section-lede">
            A través de Instagram compartimos publicaciones, Reels y
            transmisiones en vivo con invitados sobre Cariología, pensados
            para acompañar tu práctica clínica día a día.
          </p>
        </Reveal>

        <div className="educational-content__grid">
          {TOPICS.map((topic, index) => (
            <Reveal
              as="article"
              className="educational-content__card"
              key={topic.title}
              delay={index * 70}
            >
              <span className="educational-content__icon">{ICONS[topic.icon]}</span>
              <h3>{topic.title}</h3>
              <p>{topic.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="educational-content__cta" delay={280}>
          <p>
            Nuevas publicaciones y transmisiones en vivo, directamente en
            Instagram.
          </p>
          <a
            href={getInstagramLink()}
            className="btn btn-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Síguenos en Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
