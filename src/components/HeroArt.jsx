/**
 * Abstract editorial artwork for the hero section: fine silver line-work
 * suggesting microscopic enamel structure, rendered as inline SVG so it
 * stays crisp and lightweight. Purely decorative (aria-hidden).
 */
export default function HeroArt() {
  return (
    <svg
      className="hero-art"
      viewBox="0 0 600 640"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="hero-art__orbit" stroke="#B9A4CB" strokeOpacity="0.5">
        <circle cx="430" cy="180" r="150" strokeWidth="0.6" />
        <circle cx="430" cy="180" r="112" strokeWidth="0.6" />
        <circle cx="430" cy="180" r="1.5" fill="#C9BEDD" stroke="none" />
      </g>

      <g className="hero-art__hex" stroke="#C9BEDD" strokeOpacity="0.55" strokeWidth="0.7">
        <path d="M150 360 L196 386 L196 438 L150 464 L104 438 L104 386 Z" />
        <path d="M150 360 L196 386 L196 438 L150 464 L104 438 L104 386 Z" transform="translate(70 -14) scale(0.72)" />
        <path d="M150 360 L196 386 L196 438 L150 464 L104 438 L104 386 Z" transform="translate(-96 48) scale(0.5)" />
      </g>

      <g className="hero-art__lines" stroke="#8A6FA3" strokeOpacity="0.6" strokeWidth="0.6">
        <line x1="40" y1="60" x2="230" y2="60" />
        <line x1="40" y1="60" x2="40" y2="230" />
        <line x1="500" y1="520" x2="500" y2="610" />
        <line x1="420" y1="596" x2="580" y2="596" />
      </g>

      <g className="hero-art__dust" fill="#C9BEDD">
        <circle cx="500" cy="420" r="2" opacity="0.8" />
        <circle cx="80" cy="300" r="1.6" opacity="0.6" />
        <circle cx="330" cy="560" r="2.2" opacity="0.7" />
        <circle cx="250" cy="120" r="1.4" opacity="0.5" />
        <circle cx="540" cy="260" r="1.4" opacity="0.55" />
      </g>

      <path
        className="hero-art__crystal"
        d="M300 260 L340 300 L340 360 L300 400 L260 360 L260 300 Z"
        stroke="#DFD3EA"
        strokeOpacity="0.35"
        strokeWidth="0.8"
      />
    </svg>
  );
}
