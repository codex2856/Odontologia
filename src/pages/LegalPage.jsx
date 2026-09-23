import { LAST_UPDATED } from "../config/legal";
import Reveal from "../components/Reveal";
import "./LegalPage.css";

export default function LegalPage({ eyebrow, title, children }) {
  return (
    <article className="section-pad legal-page">
      <div className="container legal-page__inner">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="section-heading">{title}</h1>
          <p className="legal-page__updated">Última actualización: {LAST_UPDATED}</p>
        </Reveal>

        <Reveal as="div" className="legal-page__body" delay={80}>
          {children}
        </Reveal>
      </div>
    </article>
  );
}
