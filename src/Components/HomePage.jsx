import Header from "./header";
import Hero from "./hero";
import AboutSection from "./about";
import ServicesSection from "./Service";
import Contact from "./contact";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Contact />
    </div>
  );
}
