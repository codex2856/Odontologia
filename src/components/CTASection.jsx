import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";
import "./CTASection.css";

export default function CTASection() {
  return (
    <section id="contacto" className="section-pad cta">
      <div className="container cta__inner">
        <Reveal>
          <p className="eyebrow eyebrow--on-ink">Inscripciones y consultas</p>
          <h2 className="cta__heading">
            Da el siguiente paso en tu formación en Cariología
          </h2>
          <p className="cta__lede">
            Escríbenos por WhatsApp para recibir información sobre los cursos
            de Actualízate. Cariología y el proceso de inscripción.
          </p>
          <div className="cta__actions">
            <WhatsAppButton>Consultar por WhatsApp</WhatsAppButton>
            <a href="#cursos" className="btn btn-outline">
              Ver programa académico
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
