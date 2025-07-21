import { Card } from "@/components/ui/card"
import img1 from '../assets/Leart.png'
import { useState } from "react"
import { Menu, X } from "lucide-react"
export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-black via-gray-900 to-black px-4 text-gray-100 font-sans">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 md:w-24 md:h-24 bg-blue-500 rounded-full opacity-20" />
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 md:w-16 md:h-16 bg-blue-400 rounded-full opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-blue-600 rounded-full opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-6 h-6 md:w-12 md:h-12 bg-blue-300 rounded-full opacity-20" />
      <div className="absolute bottom-1/4 left-1/4 w-4 h-4 md:w-8 md:h-8 bg-blue-400 rounded-full opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between py-4 px-2 md:px-0">
          <div className="text-lg md:text-2xl font-bold italic text-white">
            leart.dev
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 text-white font-medium font-sans">
            <a href="#home" className="hover:text-white relative group font-inter text-sm lg:text-base">
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a href="#about" className="hover:text-white relative group font-inter text-sm lg:text-base">
              About
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a href="#works" className="hover:text-white relative group font-inter text-sm lg:text-base">
              Works
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            {/* <a href="#contact" className="hover:text-white relative group font-inter text-sm lg:text-base">
              Contact Me
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a> */}
          </nav>
          <a href="#contact" className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 md:px-6 md:py-3 rounded-md shadow-lg font-inter font-semibold text-xs md:text-sm lg:text-base">
            LET'S TALK
          </a>
          {/* Hamburger Icon for Mobile - moved to rightmost */}
          <button
            className="md:hidden text-white p-2 z-30 ml-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={32} />
          </button>
          {/* Mobile Menu Overlay */}
          {menuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black bg-opacity-40 z-20 transition-opacity duration-300"
                onClick={() => setMenuOpen(false)}
              />
              {/* Slide-in Menu */}
              <div
                className={`fixed top-0 right-0 h-full w-1/2 bg-gray-900 z-30 flex flex-col items-start p-8 space-y-8 shadow-lg transition-all duration-300 ease-in-out ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                style={{ minWidth: '200px' }}
              >
                <button
                  className="absolute top-4 right-4 text-white"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={32} />
                </button>
                <a
                  href="#home"
                  className="text-white text-xl font-semibold w-full py-2 hover:text-blue-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white text-xl font-semibold w-full py-2 hover:text-blue-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#works"
                  className="text-white text-xl font-semibold w-full py-2 hover:text-blue-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Works
                </a>
                <a
                  href="#contact"
                  className="text-white text-xl font-semibold w-full py-2 hover:text-blue-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </>
          )}
        </header>

        {/* Main Content */}
        <main className="w-full flex-1 grid grid-cols-1 lg:grid-cols-3 items-start gap-4 md:gap-8 pt-8 md:pt-16">
          {/* Left Section */}
          <div className="flex flex-col justify-center text-center lg:text-left pt-8 md:pt-20 text-white lg:col-span-2 px-2 md:px-0">
            <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-sans font-semibold leading-tight text-white hover:text-blue-500 transition-all duration-300">
              Full-Stack
            </h2>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-sans font-semibold leading-tight text-[#3A5FFF] hover:text-white transition-all duration-300">
              Coder &
            </h2>
            <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-sans font-semibold leading-tight text-white hover:text-blue-500 transition-all duration-300">
              more
            </h2>
          </div>

          {/* Center Image Section */}
          <div className="flex justify-center items-center relative p-2 md:p-4 lg:col-span-1 pt-8 md:pt-16 lg:pt-30">
            <Card className="p-2 md:p-4 shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={img1}
                alt="Morgan"
                width={400}
                height={600}
                className="rounded-lg object-cover w-48 h-72 sm:w-64 sm:h-96 md:w-80 md:h-96 lg:w-96 lg:h-[500px]"
              />
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
