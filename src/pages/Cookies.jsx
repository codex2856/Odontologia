import LegalPage from "./LegalPage";

export default function Cookies() {
  return (
    <LegalPage eyebrow="Legal" title="Política de cookies">
      <section>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos que un sitio web puede guardar en
          el navegador del usuario para recordar información, como
          preferencias de navegación o datos de análisis de uso.
        </p>
      </section>

      <section>
        <h2>2. Cookies utilizadas en este sitio</h2>
        <p>
          Este sitio web <strong>no utiliza cookies propias ni de terceros</strong>
          . No incorpora herramientas de analítica (como Google Analytics),
          píxeles de seguimiento ni sistemas de publicidad. La navegación por
          este sitio no instala ninguna cookie en tu dispositivo.
        </p>
      </section>

      <section>
        <h2>3. Enlaces a servicios externos</h2>
        <p>
          El sitio incluye enlaces a WhatsApp e Instagram. Al pulsarlos, sales
          de este sitio web y accedes a servicios de terceros (Meta
          Platforms, Inc.), que pueden instalar sus propias cookies conforme
          a sus políticas de privacidad y cookies, ajenas a este sitio.
        </p>
      </section>

      <section>
        <h2>4. Actualizaciones futuras</h2>
        <p>
          Si en el futuro se incorporan herramientas de analítica, mapas
          embebidos u otros elementos que requieran el uso de cookies, esta
          política se actualizará y se solicitará el consentimiento del
          usuario mediante un aviso específico antes de instalar cualquier
          cookie no estrictamente necesaria.
        </p>
      </section>
    </LegalPage>
  );
}
