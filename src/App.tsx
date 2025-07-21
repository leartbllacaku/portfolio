import "./App.css";
import HeroSection from "./components/heroSection2";
import AboutMe from "./components/about";
import Projects from "./components/projects";
import ContactSection from "./components/contact";
import FootballTicketsProject from "./components/projects/FootballTicketsProject";
import EditariProject from "./components/projects/EditariProject";
function App() {

  return(
    <div className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory md:scroll-smooth">
      <section className="h-screen md:snap-start">
        <HeroSection />
      </section>
      <section className="min-h-screen md:h-screen md:snap-start">
        <AboutMe />
      </section>
      <section className="min-h-screen md:h-screen md:snap-start overflow-hidden">
        <Projects />
      </section>
      <section className="min-h-screen md:h-screen md:snap-start overflow-hidden">
        <FootballTicketsProject />
      </section>
      <section className="min-h-screen md:h-screen md:snap-start overflow-hidden">
        <EditariProject />
      </section>
      <section className="md:snap-start">
        <ContactSection />
      </section>
    </div>
  );
}
export default App;
