import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_TAX_ID,
  LEGAL_PENDING,
  PROFESSIONAL_COLLEGE,
} from "../config/legal";
import LegalPage from "./LegalPage";

function Pending({ value }) {
  return value === LEGAL_PENDING ? (
    <span className="legal-page__pending">{value}</span>
  ) : (
    value
  );
}

export default function AvisoLegal() {
  return (
    <LegalPage eyebrow="Legal" title="Aviso legal">
      <section>
        <h2>1. Datos identificativos</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
          de Servicios de la Sociedad de la Información y de Comercio
          Electrónico (LSSI-CE), se informa de los siguientes datos: este
          sitio web es titularidad de <Pending value={BUSINESS_NAME} />, con
          NIF <Pending value={BUSINESS_TAX_ID} />, domicilio a efectos de
          notificaciones en <Pending value={BUSINESS_ADDRESS} /> y dirección
          de correo electrónico de contacto <Pending value={BUSINESS_EMAIL} />
          .
          {PROFESSIONAL_COLLEGE && ` ${PROFESSIONAL_COLLEGE}`}
        </p>
      </section>

      <section>
        <h2>2. Objeto</h2>
        <p>
          Este sitio web tiene carácter informativo y formativo: presenta el
          catálogo de cursos de formación continua en Cariología impartidos
          por Maglynert Montero Baptista, así como contenido de divulgación
          científica gratuito. El sitio no procesa pagos ni contrataciones en
          línea; cualquier consulta o inscripción se gestiona a través de los
          canales de contacto indicados (WhatsApp e Instagram).
        </p>
      </section>

      <section>
        <h2>3. Condiciones de uso</h2>
        <p>
          El acceso y uso de este sitio web atribuye la condición de usuario
          e implica la aceptación de las condiciones incluidas en este aviso
          legal. El usuario se compromete a hacer un uso adecuado de los
          contenidos y a no emplearlos para incurrir en actividades ilícitas
          o contrarias a la buena fe y al ordenamiento legal.
        </p>
      </section>

      <section>
        <h2>4. Propiedad intelectual e industrial</h2>
        <p>
          Los textos, imágenes, marcas, logotipos y demás contenidos de este
          sitio web son propiedad de <Pending value={BUSINESS_NAME} /> o se
          utilizan con la debida autorización. Queda prohibida su
          reproducción, distribución o transformación sin autorización previa
          y expresa.
        </p>
      </section>

      <section>
        <h2>5. Enlaces externos</h2>
        <p>
          Este sitio incluye enlaces a servicios de terceros (WhatsApp e
          Instagram, propiedad de Meta Platforms, Inc.) para facilitar el
          contacto y la difusión de contenido. La titular de este sitio no se
          hace responsable del contenido ni de las políticas de privacidad o
          de cookies de dichos servicios de terceros, que se rigen por sus
          propias condiciones.
        </p>
      </section>

      <section>
        <h2>6. Legislación aplicable</h2>
        <p>
          Las presentes condiciones se rigen por la legislación española.
          Para cualquier controversia derivada del uso de este sitio web,
          las partes se someten a los juzgados y tribunales que correspondan
          conforme a la normativa vigente en materia de consumidores y
          usuarios.
        </p>
      </section>
    </LegalPage>
  );
}
