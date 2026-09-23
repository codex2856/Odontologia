import { Link } from "react-router-dom";
import { getInstagramLink } from "../config/contact";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__logo">
            Actualízate<span>.</span>
          </p>
          <p>Cariología… y algo más.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Navegación de pie de página">
          <Link to="/#inicio">Inicio</Link>
          <Link to="/#divulgacion">Divulgación</Link>
          <Link to="/#cursos">Cursos</Link>
          <Link to="/#docente">Sobre mí</Link>
          <Link to="/#testimonios">Testimonios</Link>
          <Link to="/#contacto">Contacto</Link>
        </nav>

        <div className="site-footer__credit">
          <p>Maglynert Montero Baptista — Formación en Cariología</p>
          <a href={getInstagramLink()} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Actualízate. Cariología. Todos los derechos reservados.</p>
        <nav className="site-footer__legal" aria-label="Enlaces legales">
          <Link to="/aviso-legal">Aviso legal</Link>
          <Link to="/privacidad">Política de privacidad</Link>
          <Link to="/cookies">Política de cookies</Link>
        </nav>
      </div>
    </footer>
  );
}
