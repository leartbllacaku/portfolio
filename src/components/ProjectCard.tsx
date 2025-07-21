import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  name: string
  description: string
  techStack: string[]
  images: { src?: string; alt?: string; type?: "laptop" | "phone" }[]
}

// Simple useInView hook for a single element
function useInViewSingle(threshold = 0.2) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Project Details Card */}
      <Card className="flex-1 p-6 shadow-md bg-gray-800/80 border border-gray-600 hover:shadow-lg transition-shadow backdrop-blur-sm w-full md:max-w-xl md:mx-auto">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-2xl font-bold text-white">{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex flex-col h-full">
          <CardDescription className="text-gray-300 mb-4 flex-1">{project.description}</CardDescription>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack.map((tech, techIndex) => (
              <Badge key={techIndex} variant="secondary" className="bg-gray-600 text-gray-200 border border-gray-500 hover:bg-gray-500 hover:cursor-pointer">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project Images Card */}
      {project.images.length > 0 && (
        <Card className="p-4 shadow-md hover:shadow-lg transition-shadow bg-transparent">
          <CardContent className="p-0 grid grid-cols-1 gap-2 md:flex md:flex-row md:items-center md:justify-center">
            {project.images.map((image) => {
              const [imgRef, imgInView] = useInViewSingle(0.2);
              return (
                <img
                  loading="lazy"
                  key={image.src}
                  ref={imgRef}
                  src={image.src}
                  alt={image.alt}
                  width={image.type === "laptop" ? 400 : 300}
                  height={image.type === "laptop" ? 250 : 200}
                  className={
                    `rounded-md object-cover mx-auto transition-all duration-700 ease-out
                    ${imgInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ` +
                    (image.type === "laptop"
                      ? "w-full md:max-w-[400px] lg:max-w-[350px]"
                      : "w-full md:max-w-[300px] lg:max-w-[250px]")
                  }
                />
              );
            })}
          </CardContent>
        </Card>
      )}
    </div>
  )
} 