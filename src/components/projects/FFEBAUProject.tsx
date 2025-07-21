import ProjectCard from "../ProjectCard"

const project = {
  name: "FFE-BAU",
  description:
    "A modern, bilingual full-stack web application built for FFE BAU, a German construction company. This comprehensive platform showcases construction projects, manages client interactions, and provides administrative tools for project management.",
  techStack: ["React", "Express", "PostgreSQL", "Prisma ORM", "TailwindCSS", "Shadcn UI"],
  images: [
    { src: "/assets/ffe-bau/ffe-bau-mobile-left.webp", alt: "About us hero section.", type: "phone" as const },
    { src: "/assets/ffe-bau/macbook.webp", alt: "Homepage hero section.", type: "laptop" as const },
    { src: "/assets/ffe-bau/ffe-bau4-portrait.webp", alt: "Contact page.", type: "phone" as const },
    { src: "/assets/ffe-bau/ffe1.webp", alt: "Our Process page.", type: "laptop" as const },
  ],
}

export default function FFEBAUProject() {
  return <ProjectCard project={project} />
} 