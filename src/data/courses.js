// Catálogo de cursos de "Actualízate. Cariología… y algo más."
//
// Mantén aquí toda la información de los cursos. Añadir o editar un curso
// consiste en modificar este archivo; ningún componente contiene datos
// de cursos "hardcodeados".
//
// Campos no confirmados (horas, fechas, precios, disponibilidad) se
// muestran como "Información próximamente" y deben completarse más
// adelante.

export const TBD = "Información próximamente";

export const COMMON_PROGRAM_INFO = {
  modalidad: "Clases online en tiempo real",
  materialApoyo: "Material de apoyo incluido",
  grabaciones: "Grabaciones disponibles durante una semana",
  certificado: "Certificado digital de participación",
  aval:
    "Aval del Departamento de Educación Continua de la Facultad de Odontología de la Universidad Central de Venezuela (UCV)",
};

export const courses = [
  {
    id: 1,
    slug: "cariologia-contemporanea",
    number: "01",
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
      "La caries dental como enfermedad: evolución del concepto.",
      "Factores biológicos, conductuales y ambientales implicados.",
      "El proceso de desmineralización–remineralización.",
      "De la enfermedad a la lesión: por qué es importante distinguirlas.",
      "Implicaciones clínicas de un cambio de paradigma.",
    ],
    isPlaceholder: false,
  },
  {
    id: 2,
    slug: "deteccion-clasificacion-lesiones",
    number: "02",
    title: "Detección y clasificación de las lesiones de caries",
    shortDescription:
      "Criterios actuales para reconocer y clasificar lesiones de caries de forma sistemática.",
    description: TBD,
    objectives: [TBD],
    temario: [TBD],
    isPlaceholder: true,
  },
  {
    id: 3,
    slug: "diagnostico-diferencial-lesiones-defectos",
    number: "03",
    title:
      "Diagnóstico diferencial de las lesiones de caries y defectos del esmalte",
    shortDescription:
      "Herramientas para distinguir lesiones cariosas de otros defectos del esmalte dental.",
    description: TBD,
    objectives: [TBD],
    temario: [TBD],
    isPlaceholder: true,
  },
  {
    id: 4,
    slug: "evaluacion-individual-riesgo",
    number: "04",
    title: "Evaluación individual del riesgo de caries",
    shortDescription:
      "Metodología para valorar el riesgo de caries de cada paciente de forma individualizada.",
    description: TBD,
    objectives: [TBD],
    temario: [TBD],
    isPlaceholder: true,
  },
  {
    id: 5,
    slug: "manejo-minimamente-invasivo-no-cavitadas",
    number: "05",
    title:
      "Manejo mínimamente invasivo de las lesiones de caries no cavitadas",
    shortDescription:
      "Estrategias conservadoras para el abordaje de lesiones en etapas tempranas.",
    description: TBD,
    objectives: [TBD],
    temario: [TBD],
    isPlaceholder: true,
  },
  {
    id: 6,
    slug: "manejo-minimamente-invasivo-cavitadas",
    number: "06",
    title: "Manejo mínimamente invasivo de las lesiones de caries cavitadas",
    shortDescription:
      "Criterios y técnicas conservadoras para el tratamiento de lesiones cavitadas.",
    description: TBD,
    objectives: [TBD],
    temario: [TBD],
    isPlaceholder: true,
  },
  {
    id: 7,
    slug: "tratamientos-remineralizantes",
    number: "07",
    title: "Tratamientos remineralizantes: cuándo, cómo y por qué utilizarlos",
    shortDescription:
      "Criterios clínicos para incorporar la remineralización en el plan de tratamiento.",
    description: TBD,
    objectives: [TBD],
    temario: [TBD],
    isPlaceholder: true,
  },
  {
    id: 8,
    slug: "peptidos-autoensamblables",
    number: "08",
    title: "Péptidos autoensamblables en Cariología",
    shortDescription:
      "Una mirada a esta tecnología emergente y su papel en el manejo de la caries.",
    description: TBD,
    objectives: [TBD],
    temario: [TBD],
    isPlaceholder: true,
  },
  {
    id: 9,
    slug: "buscar-evaluar-evidencia-cientifica",
    number: "09",
    title: "Cómo buscar y evaluar evidencia científica en Cariología",
    shortDescription:
      "Herramientas prácticas para localizar y valorar la literatura científica disponible.",
    description: TBD,
    objectives: [TBD],
    temario: [TBD],
    isPlaceholder: true,
  },
  {
    id: 10,
    slug: "cariologia-basada-evidencia",
    number: "10",
    title: "Cariología basada en la evidencia científica",
    shortDescription:
      "Integrar la evidencia disponible en la toma de decisiones clínicas diarias.",
    description: TBD,
    objectives: [TBD],
    temario: [TBD],
    isPlaceholder: true,
  },
];

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug);
}
