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
    description:
      "Un curso centrado en cómo detectar y clasificar las lesiones de caries de forma sistemática, integrando los criterios clínicos vigentes. Se revisan los sistemas de clasificación actuales, como ICDAS, y su aplicación junto con la evaluación visual, táctil y radiográfica para reconocer con precisión cada etapa de la lesión.",
    objectives: [
      "Reconocer clínicamente las lesiones de caries en sus distintas etapas.",
      "Clasificar las lesiones según su severidad, progresión y actividad.",
      "Aplicar el sistema ICDAS y otros sistemas de clasificación en la práctica diaria.",
      "Integrar la evaluación visual, táctil y radiográfica en el proceso diagnóstico.",
    ],
    temario: [
      "Detección clínica de las lesiones de caries.",
      "Clasificación según severidad y progresión.",
      "Lesiones no cavitadas y cavitadas.",
      "Actividad de las lesiones.",
      "ICDAS y otros sistemas de clasificación.",
      "Evaluación visual, táctil y radiográfica.",
      "Interpretación clínica de las diferentes etapas de la lesión.",
    ],
    isPlaceholder: false,
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
    description:
      "Un curso enfocado en distinguir las lesiones de caries de otros defectos del esmalte dental, como la hipoplasia, la hipomineralización y la fluorosis. Se abordan los criterios clínicos para diferenciar estas condiciones —incluso cuando coexisten en un mismo diente— y cómo integrar los hallazgos en un diagnóstico certero.",
    objectives: [
      "Diferenciar las lesiones de caries de los defectos del desarrollo del esmalte.",
      "Reconocer clínicamente la hipoplasia, la hipomineralización y la fluorosis.",
      "Identificar los casos en que caries y defectos del esmalte coexisten en un mismo diente.",
      "Integrar los hallazgos clínicos para establecer un diagnóstico diferencial preciso.",
    ],
    temario: [
      "Diagnóstico diferencial.",
      "Defectos del desarrollo del esmalte.",
      "Hipoplasia, hipomineralización y fluorosis.",
      "Diferenciación entre caries y alteraciones del desarrollo.",
      "Coexistencia de lesiones de caries y defectos del esmalte.",
      "Integración de los hallazgos clínicos para establecer un diagnóstico.",
    ],
    isPlaceholder: false,
  },
  {
    id: 4,
    slug: "evaluacion-individual-riesgo",
    number: "04",
    image: curso04,
    title: "Evaluación individual del riesgo de caries",
    shortDescription:
      "Metodología para valorar el riesgo de caries de cada paciente de forma individualizada.",
    description:
      "Una guía práctica para evaluar el riesgo de caries de cada paciente de forma individualizada, considerando la dieta, el biofilm, la saliva, los fluoruros y los factores propios del huésped y su comportamiento. El curso revisa cómo adaptar esta evaluación según la etapa de vida del paciente, desde la primera infancia hasta la adultez mayor.",
    objectives: [
      "Comprender los factores de riesgo, protectores e indicadores de enfermedad en Cariología.",
      "Evaluar el riesgo de caries de forma individualizada en distintas etapas de vida.",
      "Considerar el papel de la dieta, el biofilm, la saliva y los fluoruros en el riesgo de caries.",
      "Personalizar las estrategias preventivas y terapéuticas según el perfil de riesgo del paciente.",
    ],
    temario: [
      "Concepto actual de riesgo de caries.",
      "Factores de riesgo, protectores e indicadores de enfermedad.",
      "Evaluación individual del riesgo.",
      "Dieta, biofilm, saliva y fluoruros.",
      "Factores relacionados con el huésped y el comportamiento.",
      "Evaluación del riesgo en lactantes, niños y adolescentes, adultos y adultos mayores.",
      "Personalización de las estrategias preventivas y terapéuticas.",
    ],
    isPlaceholder: false,
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
    description:
      "Un curso centrado en el manejo conservador de las lesiones de caries no cavitadas, bajo los principios de la odontología mínimamente invasiva. Se revisan el control de los factores etiológicos, el manejo no operatorio y opciones terapéuticas como fluoruros, agentes remineralizantes, sellado e infiltración.",
    objectives: [
      "Aplicar los principios de la odontología mínimamente invasiva en el manejo de lesiones no cavitadas.",
      "Controlar los factores etiológicos y monitorizar la actividad de las lesiones.",
      "Seleccionar entre fluoruros, agentes remineralizantes, sellado e infiltración según cada caso.",
      "Reconocer las indicaciones, contraindicaciones y el seguimiento adecuado de cada tratamiento.",
    ],
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
    isPlaceholder: false,
  },
  {
    id: 6,
    slug: "manejo-minimamente-invasivo-cavitadas",
    number: "06",
    image: curso06,
    title: "Manejo mínimamente invasivo de las lesiones de caries cavitadas",
    shortDescription:
      "Criterios y técnicas conservadoras para el tratamiento de lesiones cavitadas.",
    description:
      "Un curso sobre el manejo conservador de las lesiones de caries cavitadas, con énfasis en la preservación del tejido dental sano. Se abordan la remoción selectiva del tejido cariado, el manejo de lesiones profundas, la selección de materiales restauradores y el seguimiento del paciente para controlar la enfermedad a largo plazo.",
    objectives: [
      "Determinar cuándo y cómo restaurar una lesión de caries cavitada.",
      "Aplicar los principios de preservación de tejido dental y remoción selectiva.",
      "Manejar lesiones profundas con criterios mínimamente invasivos.",
      "Seleccionar materiales restauradores adecuados y dar seguimiento al paciente.",
    ],
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
    isPlaceholder: false,
  },
  {
    id: 7,
    slug: "tratamientos-remineralizantes",
    number: "07",
    image: curso07,
    title: "Tratamientos remineralizantes: cuándo, cómo y por qué utilizarlos",
    shortDescription:
      "Criterios clínicos para incorporar la remineralización en el plan de tratamiento.",
    description:
      "Un curso que profundiza en los tratamientos remineralizantes: qué son, cómo actúan y cuándo están indicados. Se revisan los fluoruros y otros agentes remineralizantes disponibles, junto con la evidencia científica que respalda su uso y sus límites terapéuticos reales.",
    objectives: [
      "Comprender los mecanismos de desmineralización y remineralización del esmalte.",
      "Conocer los fluoruros y demás agentes remineralizantes disponibles.",
      "Identificar cuándo está indicado un tratamiento remineralizante.",
      "Valorar la evidencia científica y las limitaciones de estos tratamientos.",
    ],
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
    isPlaceholder: false,
  },
  {
    id: 8,
    slug: "peptidos-autoensamblables",
    number: "08",
    image: curso08,
    title: "Péptidos autoensamblables en Cariología",
    shortDescription:
      "Una mirada a esta tecnología emergente y su papel en el manejo de la caries.",
    description:
      "Una mirada a los péptidos autoensamblables, una tecnología emergente en Cariología. El curso explica sus fundamentos biológicos y fisicoquímicos, su mecanismo de acción —incluida la nucleación y formación de hidroxiapatita— y su integración con los tratamientos mínimamente invasivos.",
    objectives: [
      "Comprender qué son los péptidos autoensamblables y sus fundamentos biológicos.",
      "Explicar el mecanismo de autoensamblaje y su papel en la formación de hidroxiapatita.",
      "Conocer el péptido P11-4 y otras aplicaciones clínicas disponibles.",
      "Integrar esta tecnología con los tratamientos mínimamente invasivos, según la evidencia actual.",
    ],
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
    isPlaceholder: false,
  },
  {
    id: 9,
    slug: "buscar-evaluar-evidencia-cientifica",
    number: "09",
    image: curso09,
    title: "Cómo buscar y evaluar evidencia científica en Cariología",
    shortDescription:
      "Herramientas prácticas para localizar y valorar la literatura científica disponible.",
    description:
      "Un curso práctico para aprender a buscar y evaluar evidencia científica en Cariología. Se enseña a transformar una pregunta clínica en una pregunta de investigación, construir estrategias de búsqueda efectivas en bases de datos científicas y hacer una lectura crítica de la literatura para aplicarla en la práctica diaria.",
    objectives: [
      "Transformar una pregunta clínica en una pregunta de investigación buscable.",
      "Diseñar estrategias de búsqueda bibliográfica usando tesauros y operadores booleanos.",
      "Identificar revistas y fuentes científicas confiables.",
      "Hacer una lectura crítica de la literatura según el tipo de estudio y nivel de evidencia.",
    ],
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
    isPlaceholder: false,
  },
  {
    id: 10,
    slug: "cariologia-basada-evidencia",
    number: "10",
    image: curso10,
    title: "Cariología basada en la evidencia científica",
    shortDescription:
      "Integrar la evidencia disponible en la toma de decisiones clínicas diarias.",
    description:
      "Un curso de cierre que integra la evidencia científica en la toma de decisiones clínicas diarias en Cariología. A través de casos clínicos integradores, se revisan los principios de la práctica basada en evidencia y cómo combinarla con la experiencia clínica y las necesidades particulares de cada paciente.",
    objectives: [
      "Aplicar los principios de la práctica clínica basada en evidencia en Cariología.",
      "Integrar evidencia científica, experiencia clínica y necesidades del paciente en la toma de decisiones.",
      "Evaluar críticamente las alternativas terapéuticas disponibles.",
      "Llevar la evidencia científica a la práctica clínica diaria a través de casos integradores.",
    ],
    temario: [
      "Principios de la práctica clínica basada en evidencia.",
      "Integración de evidencia científica, experiencia clínica y necesidades del paciente.",
      "Evaluación crítica de las alternativas terapéuticas.",
      "Aplicación de la evidencia a la toma de decisiones.",
      "Actualización científica en Cariología.",
      "De la evidencia a la práctica clínica.",
      "Casos clínicos integradores.",
    ],
    isPlaceholder: false,
  },
];

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug);
}
