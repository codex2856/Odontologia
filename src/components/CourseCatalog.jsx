import { courses } from "../data/courses";
import CourseCard from "./CourseCard";
import Reveal from "./Reveal";
import "./CourseCatalog.css";

export default function CourseCatalog() {
  return (
    <section id="cursos" className="section-pad course-catalog">
      <div className="container">
        <Reveal className="section-top">
          <p className="eyebrow">Programa académico</p>
          <h2 className="section-heading">Diez espacios de actualización</h2>
          <p className="section-lede">
            Diez espacios de actualización para profundizar en la Cariología
            contemporánea, pensados para integrarse a la práctica clínica
            diaria.
          </p>
        </Reveal>

        <div className="course-catalog__grid">
          {courses.map((course, index) => (
            <CourseCard course={course} key={course.id} delayMs={(index % 3) * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
