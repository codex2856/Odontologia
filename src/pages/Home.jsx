import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import ProgramIntro from "../components/ProgramIntro";
import CourseCatalog from "../components/CourseCatalog";
import Methodology from "../components/Methodology";
import AboutTeacher from "../components/AboutTeacher";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <ProgramIntro />
      <CourseCatalog />
      <Methodology />
      <AboutTeacher />
      <Testimonials />
      <CTASection />
    </>
  );
}
