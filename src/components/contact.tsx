import { Mail, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-bl from-black via-gray-900 to-black text-white text-center relative overflow-hidden">
      {/* Decorative blurred bubbles */}
      <div className="absolute top-10 left-1/4 w-16 h-16 md:w-28 md:h-28 bg-blue-300 rounded-full opacity-30 blur-2xl pointer-events-none animate-bubble-float" />
      <div className="absolute top-1/3 right-1/5 w-10 h-10 md:w-20 md:h-20 bg-blue-400 rounded-full opacity-20 blur-2xl pointer-events-none animate-bubble-float2" />
      <div className="absolute bottom-1/4 left-1/3 w-8 h-8 md:w-16 md:h-16 bg-blue-200 rounded-full opacity-25 blur-2xl pointer-events-none animate-bubble-float3" />
      <div className="absolute bottom-10 right-1/4 w-12 h-12 md:w-24 md:h-24 bg-gray-200 rounded-full opacity-20 blur-2xl pointer-events-none animate-bubble-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-56 md:h-56 bg-blue-500 rounded-full opacity-10 blur-2xl pointer-events-none animate-bubble-float2" />
      <div className="absolute top-1/4 left-1/6 w-6 h-6 md:w-12 md:h-12 bg-blue-100 rounded-full opacity-20 blur-2xl pointer-events-none animate-bubble-float3" />
      <div className="absolute bottom-1/5 right-1/6 w-5 h-5 md:w-10 md:h-10 bg-gray-100 rounded-full opacity-15 blur-2xl pointer-events-none animate-bubble-float" />
      {/* Bubble float animations */}
       
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Let's Connect!</h2>
        <p className="text-xl text-gray-300 mb-12">"Crafting digital experiences that leave a lasting impression."</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
          <a href="mailto:leartbllacaku11@gmail.com" className="flex items-center space-x-3">
            <Mail size={24} className="text-blue-400" />
            <span className="text-lg">leartbllacaku11@gmail.com</span>
          </a>
          {/* <div className="flex items-center space-x-3">
            <Phone size={24} className="text-blue-400" />
            <span className="text-lg">+123 456 7890</span>
          </div> */}
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/leart-bllacaku-7a8abb252/" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin size={32} />
            <span className="sr-only">LinkedIn</span>
          </a>
          {/* <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Github size={32} />
            <span className="sr-only">GitHub</span>
          </a> */}
          {/* Add more social media links as needed */}
        </div>
      </div>
    </section>
  )
}
