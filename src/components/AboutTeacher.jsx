import Reveal from "./Reveal";
import maglynertPortrait from "../assets/maglynert-montero.jpg";
import conferencia1 from "../assets/conferencia-1.jpg";
import conferencia2 from "../assets/conferencia-2.jpg";
import conferencia3 from "../assets/conferencia-3.jpg";
import conferencia4 from "../assets/conferencia-4.jpg";
import "./AboutTeacher.css";

const GALLERY = [
  { src: conferencia3, alt: "Ponencia en auditorio sobre etiología de la caries dental" },
  { src: conferencia2, alt: "Conferencia en el European Dental Institute" },
  { src: conferencia1, alt: "Clase sobre diagnóstico y evolución de caries dental" },
  { src: conferencia4, alt: "Cierre de conferencia ante audiencia internacional" },
];

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
            <img
              src={maglynertPortrait}
              alt="Maglynert Montero Baptista"
              className="about-teacher__photo"
            />
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

      <Reveal className="container" delay={180}>
        <p className="about-teacher__gallery-caption">
          Conferencista nacional e internacional
        </p>
        <div className="about-teacher__gallery">
          {GALLERY.map((photo) => (
            <figure key={photo.src} className="about-teacher__gallery-item">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
