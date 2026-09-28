// Catálogo de cursos de "Actualízate. Cariología… y algo más."
//
// Mantén aquí toda la información de los cursos. Añadir o editar un curso
// consiste en modificar este archivo; ningún componente contiene datos
// de cursos "hardcodeados".
//
// Campos no confirmados (horas, fechas, precios, disponibilidad) se
// muestran como "Información próximamente" y deben completarse más
// adelante.

import curso01 from "../assets/courses/curso-01.jpg";
import curso02 from "../assets/courses/curso-02.jpg";
import curso03 from "../assets/courses/curso-03.webp";
import curso04 from "../assets/courses/curso-04.jpg";
import curso05 from "../assets/courses/curso-05.jpg";
import curso06 from "../assets/courses/curso-06.jpg";
import curso07 from "../assets/courses/curso-07.jpg";
import curso08 from "../assets/courses/curso-08.jpg";
import curso09 from "../assets/courses/curso-09.jpg";
import curso10 from "../assets/courses/curso-10.webp";

export const TBD = "Información próximamente";

export const COMMON_PROGRAM_INFO = {
  modalidad: "Clases en vivo por Zoom",
  materialApoyo: "Material de apoyo incluido",
  grabaciones:
    "Grabaciones alojadas en YouTube como videos privados, exclusivos para los alumnos del curso",
  certificado: "Certificado digital de participación",
  aval:
    "Aval del Departamento de Educación Continua de la Facultad de Odontología de la Universidad Central de Venezuela (UCV)",
};

export const courses = [
  {
    id: 1,
    slug: "cariologia-contemporanea",
    number: "01",
    image: curso01,
    title:
      "Cariología contemporánea: comprendiendo la enfermedad de caries dental",
    shortDescription:
      "Un punto de partida conceptual para entender la caries como enfermedad, más allá de la lesión.",
    description:
      "Un recorrido por los fundamentos actuales de la Cariología: cómo se comprende hoy la caries dental como un proceso biológico dinámico, y por qué ese cambio de mirada transforma la manera de diagnosticar y tratar a cada paciente.",
    objectives: [
      "Comprender la caries dental como un proceso dinámico y multifactorial, y no únicamente como una lesión.",
      "Revisar los modelos conceptuales contemporáneos que explican el desarrollo de la enfermedad.",
      "Diferenciar la enfermedad de caries de sus consecuencias clínicas visibles.",
      "Establecer una base conceptual común para el resto del programa académico.",
    ],
    temario: [
      "Concepto actual de enfermedad de caries dental.",
      "Caries dental como enfermedad dinámica y biofilm-dependiente.",
      "Biofilm, disbiosis y dieta.",
      "Desmineralización y remineralización.",
      "Enfermedad de caries vs. lesión de caries.",
      "Factores de riesgo y factores protectores.",
      "Implicaciones del concepto actual en la práctica clínica.",
    ],
    isPlaceholder: false,
  },
  {
    id: 2,
    slug: "deteccion-clasificacion-lesiones",
    number: "02",
    image: curso02,
    title: "Detección y clasificación de las lesiones de caries",
    shortDescription:
      "Criterios actuales para reconocer y clasificar lesiones de caries de forma sistemática.",
    description: TBD,
    objectives: [TBD],
    temario: [
      "Detección clínica de las lesiones de caries.",
      "Clasificación según severidad y progresión.",
      "Lesiones no cavitadas y cavitadas.",
      "Actividad de las lesiones.",
      "ICDAS y otros sistemas de clasificación.",
      "Evaluación visual, táctil y radiográfica.",
      "Interpretación clínica de las diferentes etapas de la lesión.",
    ],
    isPlaceholder: true,
  },
  {
    id: 3,
    slug: "diagnostico-diferencial-lesiones-defectos",
    number: "03",
    image: curso03,
    title:
      "Diagnóstico diferencial de las lesiones de caries y defectos del esmalte",
    shortDescription:
      "Herramientas para distinguir lesiones cariosas de otros defectos del esmalte dental.",
    description: TBD,
    objectives: [TBD],
    temario: [
      "Diagnóstico diferencial.",
      "Defectos del desarrollo del esmalte.",
      "Hipoplasia, hipomineralización y fluorosis.",
      "Diferenciación entre caries y alteraciones del desarrollo.",
      "Coexistencia de lesiones de caries y defectos del esmalte.",
      "Integración de los hallazgos clínicos para establecer un diagnóstico.",
    ],
    isPlaceholder: true,
  },
  {
    id: 4,
    slug: "evaluacion-individual-riesgo",
    number: "04",
    image: curso04,
    title: "Evaluación individual del riesgo de caries",
    shortDescription:
      "Metodología para valorar el riesgo de caries de cada paciente de forma individualizada.",
    description: TBD,
    objectives: [TBD],
    temario: [
      "Concepto actual de riesgo de caries.",
      "Factores de riesgo, protectores e indicadores de enfermedad.",
      "Evaluación individual del riesgo.",
      "Dieta, biofilm, saliva y fluoruros.",
      "Factores relacionados con el huésped y el comportamiento.",
      "Evaluación del riesgo en lactantes, niños y adolescentes, adultos y adultos mayores.",
      "Personalización de las estrategias preventivas y terapéuticas.",
    ],
    isPlaceholder: true,
  },
  {
    id: 5,
    slug: "manejo-minimamente-invasivo-no-cavitadas",
    number: "05",
    image: curso05,
    title:
      "Manejo mínimamente invasivo de las lesiones de caries no cavitadas",
    shortDescription:
      "Estrategias conservadoras para el abordaje de lesiones en etapas tempranas.",
    description: TBD,
    objectives: [TBD],
    temario: [
      "Principios de la odontología mínimamente invasiva.",
      "Control de los factores etiológicos.",
      "Manejo no operatorio.",
      "Control y monitorización de lesiones.",
      "Fluoruros y agentes remineralizantes.",
      "Sellado de lesiones.",
      "Infiltración.",
      "Indicaciones, contraindicaciones y seguimiento.",
    ],
    isPlaceholder: true,
  },
  {
    id: 6,
    slug: "manejo-minimamente-invasivo-cavitadas",
    number: "06",
    image: curso06,
    title: "Manejo mínimamente invasivo de las lesiones de caries cavitadas",
    shortDescription:
      "Criterios y técnicas conservadoras para el tratamiento de lesiones cavitadas.",
    description: TBD,
    objectives: [TBD],
    temario: [
      "¿Cuándo restaurar una lesión de caries?",
      "Principios de preservación de tejido dental.",
      "Remoción selectiva del tejido cariado.",
      "Manejo de lesiones profundas.",
      "Restauración mínimamente invasiva.",
      "Selección de materiales.",
      "Reparación y mantenimiento de restauraciones.",
      "Seguimiento del paciente y control de la enfermedad.",
    ],
    isPlaceholder: true,
  },
  {
    id: 7,
    slug: "tratamientos-remineralizantes",
    number: "07",
    image: curso07,
    title: "Tratamientos remineralizantes: cuándo, cómo y por qué utilizarlos",
    shortDescription:
      "Criterios clínicos para incorporar la remineralización en el plan de tratamiento.",
    description: TBD,
    objectives: [TBD],
    temario: [
      "Concepto de remineralización.",
      "Mecanismos de desmineralización y remineralización.",
      "Fluoruros.",
      "Agentes remineralizantes.",
      "Indicaciones clínicas.",
      "¿Cuándo utilizar un tratamiento remineralizante?",
      "Evidencia científica disponible.",
      "Limitaciones y expectativas terapéuticas.",
    ],
    isPlaceholder: true,
  },
  {
    id: 8,
    slug: "peptidos-autoensamblables",
    number: "08",
    image: curso08,
    title: "Péptidos autoensamblables en Cariología",
    shortDescription:
      "Una mirada a esta tecnología emergente y su papel en el manejo de la caries.",
    description: TBD,
    objectives: [TBD],
    temario: [
      "¿Qué son los péptidos autoensamblables?",
      "Fundamentos biológicos y fisicoquímicos.",
      "Mecanismo de autoensamblaje.",
      "Nucleación y formación de hidroxiapatita.",
      "P11-4 y otras aplicaciones.",
      "Indicaciones clínicas.",
      "Integración con tratamientos mínimamente invasivos.",
      "Evidencia científica y limitaciones actuales.",
    ],
    isPlaceholder: true,
  },
  {
    id: 9,
    slug: "buscar-evaluar-evidencia-cientifica",
    number: "09",
    image: curso09,
    title: "Cómo buscar y evaluar evidencia científica en Cariología",
    shortDescription:
      "Herramientas prácticas para localizar y valorar la literatura científica disponible.",
    description: TBD,
    objectives: [TBD],
    temario: [
      "De la pregunta clínica a la pregunta de investigación.",
      "Estrategias de búsqueda bibliográfica.",
      "Bases de datos y buscadores científicos.",
      "Tesauros: MeSH y DeCS.",
      "Operadores booleanos.",
      "Selección de palabras clave.",
      "¿Cómo identificar una revista científica?",
      "Lectura crítica de la literatura.",
      "Tipos de estudios y niveles de evidencia.",
      "Interpretación de resultados y relevancia clínica.",
    ],
    isPlaceholder: true,
  },
  {
    id: 10,
    slug: "cariologia-basada-evidencia",
    number: "10",
    image: curso10,
    title: "Cariología basada en la evidencia científica",
    shortDescription:
      "Integrar la evidencia disponible en la toma de decisiones clínicas diarias.",
    description: TBD,
    objectives: [TBD],
    temario: [
      "Principios de la práctica clínica basada en evidencia.",
      "Integración de evidencia científica, experiencia clínica y necesidades del paciente.",
      "Evaluación crítica de las alternativas terapéuticas.",
      "Aplicación de la evidencia a la toma de decisiones.",
      "Actualización científica en Cariología.",
      "De la evidencia a la práctica clínica.",
      "Casos clínicos integradores.",
    ],
    isPlaceholder: true,
  },
];

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug);
}
