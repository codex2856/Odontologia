import Reveal from "./Reveal";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    name: "Nayela Bermudez",
    quote:
      "Buen día, realizar un curso con usted es ganancia, porque no tiene ningún desperdicio, es entender, aprender y crecer como profesionales y como personas a fin de brindar el conocimiento, la atención, así como proporcionarle herramientas al paciente que lo ayuden a recuperar su salud.",
  },
  {
    name: "Jennifer Martínez",
    quote:
      "El curso que tomé es muy completo, me llevo mucha información actualizada y práctica para el diario. Lo recomiendo ampliamente y seguiré pendiente de los siguientes temas. ¡Gracias, Actualízate Cariología!",
  },
  {
    name: "Johana",
    quote:
      "¡Excelente doctora! Quiero expresar mi agradecimiento por esta experiencia de capacitación. La claridad para explicar cada concepto, me llevo aprendizajes invalorables para mi consulta diaria y la seguridad de seguir creciendo en la profesión. ¡Totalmente recomendado!",
  },
  {
    name: "María Elena Terán Moreno",
    role: "Odontóloga",
    quote:
      "Hola, Dra. Magly. Realmente el conocimiento transmitido por usted fue para mí como abrir una ventana y mirar un abanico de información que no conocía. Muchísimas gracias, Dios la bendiga.",
  },
  {
    name: "Perla Colmenares",
    quote:
      "¡Buenos días! Los cursos han sido excelentes, cada esfuerzo que usted hace lo valoramos y hoy somos el resultado de eso. Gracias por mantenernos actualizados y con base científica; los pacientes también lo agradecen.",
  },
  {
    name: "Oliana",
    quote:
      "Muchísimas gracias, Prof. Maglynert. Sus cursos han sido excelentes en contenido y metodología. La posibilidad de repasar las clases, contar con material de apoyo y tener un chat para resolver dudas demuestra su enorme compromiso. Esa disponibilidad tan cercana no tiene precio. ¡Un fuerte abrazo!",
  },
  {
    name: "María Cristina Aguilera",
    quote:
      "La experiencia me pareció muy buena, la interacción en vivo y directo con la profesora permite sentirse cercano y en confianza a la hora de preguntar o aclarar dudas. El hecho de que haya material de apoyo que sustente lo visto en clase permite profundizar y digerir con calma el contenido. Felicitaciones por la iniciativa y mucho éxito.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-pad testimonials">
      <div className="container">
        <Reveal className="section-top">
          <p className="eyebrow">Testimonios</p>
          <h2 className="section-heading">Lo que dicen quienes ya se han formado</h2>
          <p className="section-lede">
            Mensajes reales de odontólogas y odontólogos que han tomado los
            cursos de Actualízate. Cariología.
          </p>
        </Reveal>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, index) => (
            <Reveal
              as="figure"
              className="testimonial-card"
              key={`${t.name}-${index}`}
              delay={index * 90}
            >
              <span className="testimonial-card__quote" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                {t.role && <em>{t.role}</em>}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
