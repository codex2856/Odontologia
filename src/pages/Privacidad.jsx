import {
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_TAX_ID,
  LEGAL_PENDING,
} from "../config/legal";
import LegalPage from "./LegalPage";

function Pending({ value }) {
  return value === LEGAL_PENDING ? (
    <span className="legal-page__pending">{value}</span>
  ) : (
    value
  );
}

export default function Privacidad() {
  return (
    <LegalPage eyebrow="Legal" title="Política de privacidad">
      <section>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          Responsable: <Pending value={BUSINESS_NAME} />, NIF{" "}
          <Pending value={BUSINESS_TAX_ID} />. Correo electrónico de contacto
          para asuntos de privacidad: <Pending value={BUSINESS_EMAIL} />.
        </p>
      </section>

      <section>
        <h2>2. ¿Qué datos se recogen y con qué finalidad?</h2>
        <p>
          Este sitio web no incorpora formularios propios de recogida de
          datos. El único punto de contacto es el botón de WhatsApp, que abre
          una conversación directa en dicha aplicación: al iniciarla, el
          usuario comparte voluntariamente su nombre, número de teléfono y el
          contenido del mensaje con la titular del sitio, con la finalidad de
          responder a su consulta sobre los cursos o el contenido de
          divulgación ofrecidos.
        </p>
        <p>
          El enlace a Instagram dirige a un perfil externo gestionado por
          Meta Platforms, Inc.; el tratamiento de datos que realices en esa
          plataforma se rige por la política de privacidad de Instagram, ajena
          a este sitio web.
        </p>
      </section>

      <section>
        <h2>3. Base legal del tratamiento</h2>
        <p>
          La base legal es el consentimiento del usuario, manifestado al
          iniciar voluntariamente la conversación de WhatsApp o al escribir a
          la dirección de correo electrónico de contacto.
        </p>
      </section>

      <section>
        <h2>4. Destinatarios y transferencias</h2>
        <p>
          Los datos compartidos por WhatsApp son gestionados por WhatsApp LLC
          (Meta Platforms, Inc.) conforme a su propia política de privacidad,
          que puede implicar transferencias internacionales de datos fuera
          del Espacio Económico Europeo. No se ceden datos a terceros para
          fines distintos de la gestión de la consulta.
        </p>
      </section>

      <section>
        <h2>5. Conservación de los datos</h2>
        <p>
          Los datos se conservan únicamente durante el tiempo necesario para
          atender la consulta o gestionar la relación derivada de ella, y
          conforme a los plazos de conservación que aplique la propia
          aplicación de mensajería utilizada.
        </p>
      </section>

      <section>
        <h2>6. Derechos de las personas interesadas</h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad escribiendo a{" "}
          <Pending value={BUSINESS_EMAIL} />. Asimismo, tienes derecho a
          presentar una reclamación ante la Agencia Española de Protección de
          Datos (
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
            www.aepd.es
          </a>
          ) si consideras que el tratamiento de tus datos no se ajusta a la
          normativa vigente.
        </p>
      </section>

      <section>
        <h2>7. Medidas de seguridad</h2>
        <p>
          Se adoptan medidas técnicas y organizativas razonables para
          proteger los datos que puedan compartirse a través de los canales
          de contacto indicados, si bien la comunicación por WhatsApp o
          correo electrónico queda sujeta a las medidas de seguridad propias
          de dichos servicios.
        </p>
      </section>

      <section>
        <h2>8. Cambios en esta política</h2>
        <p>
          Esta política de privacidad puede actualizarse para adaptarse a
          novedades legislativas o cambios en el funcionamiento del sitio
          web. Se recomienda revisarla periódicamente.
        </p>
      </section>
    </LegalPage>
  );
}
