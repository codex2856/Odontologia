import Reveal from "./Reveal";
import "./AboutTeacher.css";

export default function AboutTeacher() {
  return (
    <section id="docente" className="section-pad about-teacher">
      <div className="container about-teacher__grid">
        <Reveal className="about-teacher__portrait">
          <div className="about-teacher__frame">
            <span>Fotografía profesional</span>
          </div>
        </Reveal>

        <Reveal className="about-teacher__content" delay={120}>
          <p className="eyebrow">Sobre la docente</p>
          <h2 className="section-heading">Sobre Maglynert</h2>
          <p className="about-teacher__name">Maglynert Montero Baptista</p>

          <p className="about-teacher__note">
            La información curricular de la docente —formación académica,
            trayectoria y experiencia clínica— será incorporada próximamente
            en esta sección.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
