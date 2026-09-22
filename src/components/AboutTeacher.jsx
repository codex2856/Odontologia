import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import maglynertPortrait from "../assets/maglynert-montero.jpg";
import maglynertSolo from "../assets/maglynert-retrato-solo.png";
import conferencia1 from "../assets/conferencia-1.jpg";
import conferencia2 from "../assets/conferencia-2.jpg";
import conferencia3 from "../assets/conferencia-3.jpg";
import conferencia4 from "../assets/conferencia-4.jpg";
import conferencia5 from "../assets/conferencia-5-modelos.jpg";
import conferencia6 from "../assets/conferencia-6-auditorio.jpg";
import "./AboutTeacher.css";

const GALLERY = [
  {
    src: conferencia3,
    alt: "Ponencia en auditorio sobre etiología de la caries dental",
    caption: "Ponencia sobre etiología de la caries dental",
  },
  {
    src: conferencia2,
    alt: "Conferencia en el European Dental Institute",
    caption: "Conferencia en el European Dental Institute",
  },
  {
    src: conferencia1,
    alt: "Clase sobre diagnóstico y evolución de caries dental",
    caption: "Clase sobre diagnóstico y evolución de caries dental",
  },
  {
    src: conferencia4,
    alt: "Cierre de conferencia ante audiencia internacional",
    caption: "Cierre de conferencia ante audiencia internacional",
  },
  {
    src: conferencia6,
    alt: "Ponencia internacional ante audiencia especializada",
    caption: "Ponencia internacional ante audiencia especializada",
  },
  {
    src: maglynertSolo,
    alt: "Maglynert Montero Baptista",
    caption: "Maglynert Montero Baptista",
  },
  {
    src: conferencia5,
    alt: "Explicación didáctica con modelos dentales",
    caption: "Divulgación cercana y didáctica de la Cariología",
  },
];

const ROLES = ["Odontólogo", "Profesor Universitario", "Profesor de Máster"];

const CREDENTIALS = [
  "Miembro de la IADR (International Association for Dental Research)",
  "Miembro de la Alianza por un futuro libre de caries, capítulo Venezuela",
];

const LINKS = [
  {
    label: "Currículo completo",
    href: "https://editor.cvn.fecyt.es/0000-0003-0829-400X",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=7JHyrrkAAAAJ&hl=es",
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Maglynert-Montero",
  },
];

export default function AboutTeacher() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [step, setStep] = useState(0);

  const trackRef = useRef(null);
  const firstSlideRef = useRef(null);
  const dragStartX = useRef(0);
  const dragging = useRef(false);

  useEffect(() => {
    const measureStep = () => {
      const slideEl = firstSlideRef.current;
      const trackEl = trackRef.current;
      if (!slideEl || !trackEl) return;
      const slideWidth = slideEl.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(trackEl).columnGap) || 0;
      setStep(slideWidth + gap);
    };

    measureStep();
    window.addEventListener("resize", measureStep);
    return () => window.removeEventListener("resize", measureStep);
  }, []);

  const clampIndex = (index) => Math.min(Math.max(index, 0), GALLERY.length - 1);

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging.current = true;
    dragStartX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragging.current) return;
    setDragOffset(event.clientX - dragStartX.current);
  };

  const finishDrag = () => {
    if (!dragging.current) return;
    dragging.current = false;
    const threshold = Math.max(40, step * 0.18);
    if (dragOffset <= -threshold) {
      setActiveSlide((current) => clampIndex(current + 1));
    } else if (dragOffset >= threshold) {
      setActiveSlide((current) => clampIndex(current - 1));
    }
    setDragOffset(0);
    setIsDragging(false);
  };

  const cancelDrag = () => {
    dragging.current = false;
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <section id="docente" className="section-pad about-teacher">
      <div className="container about-teacher__grid">
        <Reveal className="about-teacher__portrait">
          <div className="about-teacher__frame">
            <img
              src={maglynertPortrait}
              alt="Maglynert Montero Baptista"
              className="about-teacher__photo"
            />
          </div>
        </Reveal>

        <Reveal className="about-teacher__content" delay={120}>
          <p className="eyebrow">Sobre la docente</p>
          <h2 className="section-heading">Sobre Maglynert</h2>
          <p className="about-teacher__name">Maglynert Montero Baptista</p>

          <ul className="about-teacher__roles">
            {ROLES.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>

          <p className="about-teacher__note">
            Autora y coautora de trabajos de investigación y publicaciones
            científicas. Conferencista nacional e internacional.
          </p>

          <ul className="about-teacher__credentials">
            {CREDENTIALS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="about-teacher__links">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="about-teacher__link"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="container" delay={180}>
        <p className="about-teacher__gallery-caption">
          Conferencista nacional e internacional
        </p>

        <div className="about-teacher__carousel">
          <div className="about-teacher__carousel-viewport">
            <div
              ref={trackRef}
              className={`about-teacher__carousel-track${isDragging ? " is-dragging" : ""}`}
              style={{
                transform: `translateX(${-activeSlide * step + dragOffset}px)`,
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={finishDrag}
              onPointerCancel={cancelDrag}
            >
              {GALLERY.map((photo, index) => (
                <figure
                  key={photo.src}
                  ref={index === 0 ? firstSlideRef : undefined}
                  className={`about-teacher__carousel-slide${
                    index === activeSlide ? " is-active" : ""
                  }`}
                  aria-hidden={index !== activeSlide}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={index === 0 ? undefined : "lazy"}
                    draggable={false}
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>

        <p className="about-teacher__carousel-photo-caption">
          {GALLERY[activeSlide].caption}
        </p>

        <div className="about-teacher__carousel-dots">
          {GALLERY.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              className={`about-teacher__carousel-dot${
                index === activeSlide ? " is-active" : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Ir a la foto ${index + 1}`}
              aria-current={index === activeSlide}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
