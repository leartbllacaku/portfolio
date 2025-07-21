import FFEBAUProject from "./projects/FFEBAUProject"

export default function FeaturedProjectsSection() {
  return (
    <section id="works" className="min-h-screen py-8 sm:py-12 md:py-16 px-5 sm:px-8 md:px-22 w-full bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/30 via-transparent to-sky-500/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-12">Featured Projects</h2>
          <section className="w-full"><FFEBAUProject /></section>
      </div>
    </section>
  )
}
