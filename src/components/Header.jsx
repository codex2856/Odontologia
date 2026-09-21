import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useScrollHeader from "../hooks/useScrollHeader";
import "./Header.css";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Divulgación", href: "#divulgacion" },
  { label: "Cursos", href: "#cursos" },
  { label: "Sobre mí", href: "#docente" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const scrolled = useScrollHeader(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (event, href) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      event.preventDefault();
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      event.preventDefault();
      navigate(`/${href}`);
    }
  };

  const solid = scrolled || menuOpen || location.pathname !== "/";

  return (
    <header className={`site-header ${solid ? "site-header--solid" : ""}`}>
      <div className="container site-header__inner">
        <Link
          to="/"
          className="site-header__logo"
          onClick={(e) => handleNavClick(e, "#inicio")}
        >
          Actualízate<span className="site-header__logo-dot">.</span>
        </Link>

        <nav className="site-header__nav" aria-label="Navegación principal">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link to={`/${item.href}`} onClick={(e) => handleNavClick(e, item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to="/#cursos"
          className="btn btn-outline site-header__cta"
          onClick={(e) => handleNavClick(e, "#cursos")}
        >
          Consultar cursos
        </Link>

        <button
          type="button"
          className={`site-header__burger ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-nav" className={`site-header__mobile ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Navegación móvil">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link to={`/${item.href}`} onClick={(e) => handleNavClick(e, item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          to="/#cursos"
          className="btn btn-primary"
          onClick={(e) => handleNavClick(e, "#cursos")}
        >
          Consultar cursos
        </Link>
      </div>
    </header>
  );
}
