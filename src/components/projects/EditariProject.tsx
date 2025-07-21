import ProjectCard from "../ProjectCard"

const project = {
  name: "E-Ditari",
  description:
    "Editari is a dynamic and scalable school management system designed to support multiple schools within a single platform. It features role-based authentication and authorization, enabling tailored access for administrators, teachers, students, and staff. The system centralizes school operations, streamlines data management, and ensures secure access control across institutions.",
  techStack: ["React", "Node.js","Ant Design", "PostgreSQL", "Stored Procedures"],
  images: [
    { src: "/assets/football/userBookings-front.webp", alt: "Mobile Task List", type: "laptop" as const },
    { src: "/assets/football/register-left.webp", alt: "Task Detail Screen", type: "phone" as const },
    { src: "/assets/football/homepage-landscape.webp", alt: "Task Detail Screen", type: "laptop" as const },
    { src: "/assets/football/checkout-front.webp", alt: "Task Detail Screen", type: "laptop" as const },
  ],
}

export default function EditariProject() {
  return (
    <section className="min-h-screen py-8 sm:py-12 md:py-16 px-5 sm:px-8 md:px-22 w-full bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/30 via-transparent to-sky-500/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <ProjectCard project={project} />
      </div>
    </section>
  )
} 