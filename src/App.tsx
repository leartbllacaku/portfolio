import "./App.css";
import HeroSection from "./components/heroSection2";
import AboutMe from "./components/about";
import Projects from "./components/projects";
import ContactSection from "./components/contact";
function App() {

  return(
    <div className="font-sans"> 
      <HeroSection />
      <AboutMe />
      <Projects />
      <ContactSection />
    </div>
  );
}
export default App;
