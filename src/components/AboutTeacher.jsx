import Reveal from "./Reveal";
import "./AboutTeacher.css";

const ROLES = ["Odontólogo", "Profesor Universitario", "Profesor de Máster"];

const CREDENTIALS = [
  "Miembro de la IADR (International Association for Dental Research)",
  "Miembro de la Alianza por un futuro libre de caries, capítulo Venezuela",
];

const LINKS = [
  {
    label: "Currículo completo",
    href: "https://editor.cvn.fecyt.es/0000-0003-0829-400X",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=7JHyrrkAAAAJ&hl=es",
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Maglynert-Montero",
  },
];

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

          <ul className="about-teacher__roles">
            {ROLES.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>

          <p className="about-teacher__note">
            Autora y coautora de trabajos de investigación y publicaciones
            científicas. Conferencista nacional e internacional.
          </p>

          <ul className="about-teacher__credentials">
            {CREDENTIALS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="about-teacher__links">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="about-teacher__link"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
