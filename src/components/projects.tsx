import ffe from "../assets/ffe-bau/ffe-bau-mobile-left.webp"
import ffe1 from "../assets/ffe-bau/ffe-bau4-portrait.webp"
import ffeDesktop from "../assets//ffe-bau/macbook.webp"
import ff3 from "../assets/ffe-bau/ffe1.webp"
import football1 from "../assets/football/userBookings-front.webp"
import football2 from "../assets/football/register-left.webp"
import football3 from "../assets/football/homepage-landscape.webp"
import football4 from "../assets/football/checkout-front.webp"

import ProjectCard from "./ProjectCard"
interface Project {
  name: string
  description: string
  techStack: string[]
  images: { src?: string; alt?: string; 
  type?: "laptop" | "phone" }[]
}

export default function FeaturedProjectsSection() {
  const projects: Project[] = [
    {
      name: "FFE-BAU",
      description:
        "A modern, bilingual full-stack web application built for FFE BAU, a German construction company. This comprehensive platform showcases construction projects, manages client interactions, and provides administrative tools for project management.",
      techStack: ["React", "Express", "PostgreSQL", "Prisma ORM", "TailwindCSS", "Shadcn UI"],
      images: [
        { src: ffe, alt: "About us hero section.", type: "phone" },
        { src: ffeDesktop, alt: "Homepage hero section.", type: "laptop" },
        { src: ffe1, alt: "Contact page.", type: "phone" },
        { src: ff3, alt: "Our Process page.", type: "laptop" },
      ],
    },
    {
      name: "Football Tickets",
      description:
        "A web application designed to streamline the management of football matches, ticket reservations, and user accounts. Built with a modern tech stack, the platform provides a seamless experience for both administrators and regular users, ensuring efficient operations and a user-friendly interface.",
      techStack: ["React", "Express", "PostgreSQL", "Prisma ORM", "Stripe", "TailwindCSS", "Shadcn UI"],
      images: [
        { src: football1, alt: "Mobile Task List", type: "laptop" },
        { src: football2, alt: "Task Detail Screen", type: "phone" },
        { src: football3, alt: "Task Detail Screen", type: "laptop" },
        { src: football4, alt: "Task Detail Screen", type: "laptop" },
      ],
    },
    {
      name: "E-Ditari",
      description:
        "Editari is a dynamic and scalable school management system designed to support multiple schools within a single platform. It features role-based authentication and authorization, enabling tailored access for administrators, teachers, students, and staff. The system centralizes school operations, streamlines data management, and ensures secure access control across institutions.",
      techStack: ["React", "Node.js","Ant Design", "PostgreSQL", "Stored Procedures"],
      images: [
        
      ],
    },
  ]

  return (
    <section id="works" className="min-h-screen py-8 sm:py-12 md:py-16 px-5 sm:px-8 md:px-22 w-full bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/30 via-transparent to-sky-500/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-12">Featured Projects</h2>
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <section key={index} className="w-full">
              <ProjectCard project={project} />
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
