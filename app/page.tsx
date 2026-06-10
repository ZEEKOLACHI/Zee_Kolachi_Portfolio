import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Orbit from "@/components/Orbit";
import Dossier from "@/components/Dossier";
import Credentials from "@/components/Credentials";
import Projects from "@/components/Projects";
import Signal from "@/components/Signal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Assistant from "@/components/Assistant";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="grid-overlay pointer-events-none fixed inset-0 -z-10" />
      <main id="main">
        <Hero />
        <Orbit />
        <Dossier />
        <Credentials />
        <Projects />
        <Signal />
        <Contact />
      </main>
      <Footer />
      <Assistant />
    </>
  );
}
