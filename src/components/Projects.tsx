import { Code, Database, Cpu, Landmark, Accessibility } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json"; // <-- Import JSON file

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  iconType: string;
}

// Map string from JSON -> Lucide icon
const iconMap: Record<string, JSX.Element> = {
  Database: <Database className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
  Cpu: <Cpu className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
  Landmark: <Landmark className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
  Code: <Code className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
  Accessibility: <Accessibility className="w-6 h-6 text-blue-500 dark:text-blue-400" />
};

const Projects = () => {
  const navigate = useNavigate();
  const projects: Project[] = projectsData as Project[];

  return (
    <div className="mb-10" id="projects">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center gap-2">
        <Database className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="bg-card-hover cursor-pointer"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <CardHeader className="flex flex-row items-center gap-2">
              {iconMap[project.iconType]}
              <div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.category}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tag) => (
                  <span key={tag} className="tech-tag px-2 py-1 text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                className="text-blue-500 dark:text-blue-400 border-blue-400 hover:bg-blue-100/30 dark:hover:bg-blue-900/20"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/project/${project.id}`);
                }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
