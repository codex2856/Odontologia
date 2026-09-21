import Reveal from "./Reveal";
import "./ProgramIntro.css";

const FOCUS_AREAS = [
  "Comprensión actual de la enfermedad de caries",
  "Detección y clasificación de lesiones",
  "Evaluación individual del riesgo",
  "Tratamientos mínimamente invasivos",
  "Remineralización",
  "Péptidos autoensamblables",
  "Cariología basada en la evidencia científica",
];

export default function ProgramIntro() {
  return (
    <section id="programa" className="section-pad program-intro">
      <div className="container program-intro__grid">
        <Reveal className="program-intro__lead">
          <p className="eyebrow">Presentación del programa</p>
          <h2 className="section-heading program-intro__heading">
            Una mirada contemporánea a la Cariología
          </h2>
          <p className="section-lede program-intro__lede">
            Actualizar conocimientos es transformar la manera en que
            comprendemos, diagnosticamos y tratamos la enfermedad de caries
            dental.
          </p>
        </Reveal>

        <Reveal as="ol" className="program-intro__list" delay={120}>
          {FOCUS_AREAS.map((item, index) => (
            <li key={item}>
              <span className="program-intro__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="program-intro__label">{item}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
