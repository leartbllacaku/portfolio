import { Briefcase, Github } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import tailwind from "/assets/tailwind-bg.png"

// Simple useInView hook
function useInView(ref: React.RefObject<HTMLDivElement | null>, options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);
  return inView;
}

export default function AboutMe() {
  const technologiesRef = useRef<HTMLDivElement>(null)
  const [iconsInView, setIconsInView] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeInView, setMarqueeInView] = useState(false);

  const hangingTechnologies = [
    { name: "Java", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: "Node.js", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: "React", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  ]

  const scrollingTechnologies = [
    { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "TailwindCSS", logo: tailwind },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ]

  // Detect when icons are in view
  const iconsAreInView = useInView(technologiesRef, { threshold: 0.2 });
  useEffect(() => setIconsInView(iconsAreInView), [iconsAreInView]);

  // Marquee animation (simple CSS, only animates when in view)
  const marqueeIsInView = useInView(marqueeRef, { threshold: 0.1 });
  useEffect(() => setMarqueeInView(marqueeIsInView), [marqueeIsInView]);

  return (
    <section id="about" className="min-h-screen py-8 sm:py-12 md:py-16 px-5 sm:px-8 md:px-22 w-full bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/30 via-transparent to-sky-500/20"></div>
      <div className="w-full md:w-4/5 mx-auto relative z-10">
        <h2 className="text-7xl sm:text-6xl md:text-9xl lg:text-9xl font-bold text-left text-white mb-6 sm:mb-8 md:mb-12 drop-shadow-lg font-heading tracking-tight hover:text-blue-500 transition-all duration-300">About <br/>Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">
              <p className="w-full text-justify drop-shadow-md font-normal text-base sm:text-lg md:text-xl text-white leading-relaxed font-inter">
              I'm a Full-Stack Developer passionate about building intuitive digital experiences across web and mobile. I specialize in responsive apps using modern frameworks
              and best practices. With a focus on clean code and performance, I bring ideas to life from concept to deployment.
              </p>
              <div className="flex flex-col sm:flex-row md:flex-row gap-4 w-full">
                <a href="#works" className="w-1/3 flex gap-2 items-center px-8 py-4 border-2 border-gray-600 text-black font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transform hover:scale-105 hover:shadow-xl transition-all duration-300">
                  <Briefcase size={18} className="sm:w-5 sm:h-5" />  
                  <span>Projects</span>
                </a>
                <a href="https://github.com/leartbllacaku" target="_blank" className="w-1/3  flex gap-2 items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-white hover:text-black transform hover:scale-105 hover:shadow-xl transition-all duration-300">
                  <Github size={18} className="sm:w-5 sm:h-5" />  
                  <span>GitHub</span>
                </a> 
              </div>
          </div>
          
          <div ref={technologiesRef} className="relative w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] -mt-8 lg:-mt-16">
            {hangingTechnologies.map((tech, index) => {
              // Create varying string lengths and positions
              const stringLengths = [80, 120, 160, 100, 140]; // Longer string lengths
              const positions = [10, 25, 45, 70, 85]; // Percentage positions across width
              const stringLength = stringLengths[index] || 120;
              const position = positions[index] || 50;
              return (
                <div
                  key={tech.name}
                  className={`absolute flex flex-col items-center group transition-all duration-700 ease-out
                    ${iconsInView ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 -translate-y-20 scale-75 -rotate-6'}`}
                  style={{
                    left: `${position}%`,
                    top: `${stringLength}px`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  {/* String - hanging effect with varying lengths */}
                  <div 
                    className="w-px bg-gray-400 group-hover:bg-blue-400 transition-colors duration-300"
                    style={{ height: `${stringLength}px` }}
                  ></div>
                  {/* Icon in circle */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/90 rounded-full shadow-md flex items-center justify-center border border-gray-300 group-hover:scale-105 transition-transform duration-300 ${iconsInView ? 'animate-bounce-slow' : ''}`}>
                    <img
                      loading="lazy"
                      src={tech.logo}
                      alt={tech.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                  </div>
                  {/* Label */}
                  <p className="mt-2 text-xs sm:text-sm text-white font-medium">{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Scrolling Technologies Section */}
        <div className="mt-24 lg:mt-24">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">More Technologies</h3>
          <div className="relative overflow-hidden max-w-4xl mx-auto">
            <div
              className={`flex gap-4 sm:gap-6 md:gap-8 py-4 transition-transform duration-1000 ${marqueeInView ? 'animate-marquee' : ''}`}
              ref={marqueeRef}
              style={{ willChange: "transform" }}
            >
              {scrollingTechnologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center group min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 rounded-full shadow-md flex items-center justify-center border border-gray-300 group-hover:scale-110 transition-transform duration-300">
                    <img
                      loading="lazy"
                      src={tech.logo}
                      alt={tech.name}
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    />
                  </div>
                  <p className="mt-1 text-xs text-white font-medium text-center leading-tight">{tech.name}</p>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {scrollingTechnologies.map((tech) => (
                <div key={`${tech.name}-duplicate`} className="flex flex-col items-center group min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 rounded-full shadow-md flex items-center justify-center border border-gray-300 group-hover:scale-110 transition-transform duration-300">
                    <img
                      loading="lazy"
                      src={tech.logo}
                      alt={tech.name}
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    />
                  </div>
                  <p className="mt-1 text-xs text-white font-medium text-center leading-tight">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Add Tailwind animation classes in your global CSS:
// .animate-bounce-slow { animation: bubbleFloat 2s infinite; }
// .animate-marquee { animation: marquee 15s linear infinite; }
// @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
