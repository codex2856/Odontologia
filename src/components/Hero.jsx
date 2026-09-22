import WhatsAppButton from "./WhatsAppButton";
import HeroArt from "./HeroArt";
import maglynertPortrait from "../assets/maglynert-montero.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <HeroArt />
      <div className="hero__grain" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--on-ink">Formación continua en Cariología</p>

          <h1 className="hero__title">
            Actualízate.
            <br />
            <em>
              Cariología… <span className="hero__title-accent">y algo más.</span>
            </em>
          </h1>

          <p className="hero__subtitle">
            Actualización académica basada en la evidencia científica para
            transformar tu práctica clínica.
          </p>

          <p className="hero__presenter">
            Por <span>Maglynert Montero Baptista</span>
          </p>

          <p className="hero__description">
            Una propuesta de formación continua basada en la evidencia
            científica, el diagnóstico contemporáneo y el manejo mínimamente
            invasivo de la enfermedad de caries dental.
          </p>

          <div className="hero__actions">
            <a href="#cursos" className="btn btn-primary">
              Explorar cursos
            </a>
            <WhatsAppButton className="btn-outline" />
          </div>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img
              src={maglynertPortrait}
              alt="Maglynert Montero Baptista, docente de Actualízate. Cariología"
              className="hero__portrait-photo"
            />
          </div>
          <div className="hero__portrait-caption">
            <span className="hero__portrait-index">Docente</span>
            <span>Cariología clínica &amp; formación continua</span>
          </div>
        </div>
      </div>

      <a href="#programa" className="hero__scroll" aria-label="Ir a la siguiente sección">
        <span />
      </a>
    </section>
  );
}
