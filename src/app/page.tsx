import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      {/* <Testimonials /> */}
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
