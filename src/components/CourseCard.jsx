import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import "./CourseCard.css";

export default function CourseCard({ course, delayMs = 0 }) {
  return (
    <Reveal as="article" className="course-card" delay={delayMs}>
      <Link to={`/cursos/${course.slug}`} className="course-card__media" aria-hidden="true" tabIndex={-1}>
        <span className="course-card__number">{course.number}</span>
      </Link>

      <div className="course-card__body">
        <p className="course-card__eyebrow">Curso {course.number}</p>
        <h3 className="course-card__title">
          <Link to={`/cursos/${course.slug}`}>{course.title}</Link>
        </h3>
        <p className="course-card__desc">{course.shortDescription}</p>

        <Link to={`/cursos/${course.slug}`} className="course-card__cta">
          Ver programa
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Reveal>
  );
}
