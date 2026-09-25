import { Link, Navigate, useParams } from "react-router-dom";
import { COMMON_PROGRAM_INFO, TBD, courses, getCourseBySlug } from "../data/courses";
import WhatsAppButton from "../components/WhatsAppButton";
import Reveal from "../components/Reveal";
import "./CourseDetail.css";

const INFO_ROWS = [
  { label: "Modalidad", key: "modalidad" },
  { label: "Material de apoyo", key: "materialApoyo" },
  { label: "Grabaciones", key: "grabaciones" },
  { label: "Certificado", key: "certificado" },
  { label: "Aval institucional", key: "aval" },
];

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = courses.findIndex((c) => c.slug === slug);
  const next = courses[(currentIndex + 1) % courses.length];

  return (
    <article className="course-detail">
      <header className="course-detail__hero">
        <div className="container">
          <Link to="/#cursos" className="course-detail__back">
            ← Programa académico
          </Link>

          <p className="eyebrow eyebrow--on-ink">Curso {course.number}</p>
          <h1 className="course-detail__title">{course.title}</h1>
          <p className="course-detail__short">{course.shortDescription}</p>

          <div className="course-detail__hero-actions">
            <WhatsAppButton
              message={`Hola, buenas. Me gustaría recibir información sobre el curso "${course.title}" de Actualízate. Cariología. ¿Podrían ayudarme, por favor?`}
            >
              Consultar sobre este curso
            </WhatsAppButton>
          </div>
        </div>
      </header>

      <div className="container course-detail__body">
        <div className="course-detail__grid">
          <div className="course-detail__main">
            <Reveal as="section" aria-labelledby="descripcion">
              <h2 id="descripcion" className="course-detail__heading">
                Descripción
              </h2>
              <p className="course-detail__text">{course.description}</p>
            </Reveal>

            <Reveal as="section" aria-labelledby="objetivos" delay={80}>
              <h2 id="objetivos" className="course-detail__heading">
                Objetivos
              </h2>
              {course.objectives[0] === TBD ? (
                <p className="course-detail__placeholder">{TBD}</p>
              ) : (
                <ul className="course-detail__list">
                  {course.objectives.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </Reveal>

            <Reveal as="section" aria-labelledby="temario" delay={140}>
              <h2 id="temario" className="course-detail__heading">
                Temario
              </h2>
              {course.temario[0] === TBD ? (
                <p className="course-detail__placeholder">{TBD}</p>
              ) : (
                <ol className="course-detail__syllabus">
                  {course.temario.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              )}
            </Reveal>
          </div>

          <Reveal as="aside" className="course-detail__aside" delay={100}>
            <h2 className="course-detail__aside-heading">Información del programa</h2>
            <dl>
              {INFO_ROWS.map((row) => (
                <div className="course-detail__aside-row" key={row.key}>
                  <dt>{row.label}</dt>
                  <dd>{COMMON_PROGRAM_INFO[row.key]}</dd>
                </div>
              ))}
            </dl>
            <WhatsAppButton
              className="course-detail__aside-cta"
              message={`Hola, buenas. Me gustaría recibir información sobre el curso "${course.title}" de Actualízate. Cariología. ¿Podrían ayudarme, por favor?`}
            >
              Consultar por WhatsApp
            </WhatsAppButton>
            <p className="course-detail__privacy-note">
              Al escribirnos, aceptas nuestra{" "}
              <Link to="/privacidad">política de privacidad</Link>.
            </p>
          </Reveal>
        </div>

        <nav className="course-detail__next" aria-label="Siguiente curso">
          <Link to={`/cursos/${next.slug}`}>
            <span>Siguiente curso</span>
            <strong>
              Curso {next.number} — {next.title}
            </strong>
          </Link>
        </nav>
      </div>
    </article>
  );
}
