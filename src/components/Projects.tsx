
import { Code, Database, Cpu, Landmark, Accessibility } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  icon: JSX.Element;
}

const Projects = () => {
  const navigate = useNavigate();
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Bibliometric Data Analysis",
      category: "Data Analysis & Research",
      description: "Collected & analyzed scholarly data to investigate authorship trends & ethics violations.",
      technologies: ["Python", "R", "Pandas", "Selenium", "Matplotlib"],
      icon: <Database className="w-6 h-6 text-blue-500 dark:text-blue-400" />
    },
    {
      id: 2,
      title: "Dynamic CPU Scheduling using ML",
      category: "Machine Learning Application",
      description: "Compared LDA, Decision Trees, and Random Forest models to optimize CPU scheduling decisions.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      icon: <Cpu className="w-6 h-6 text-blue-500 dark:text-blue-400" />
    },
    {
      id: 3,
      title: "Nagorik Payments",
      category: "Payment Gateway",
      description: "Developed a central payment gateway handling 10M+ webhooks daily, ensuring real-time transaction tracking.",
      technologies: ["Laravel", "PHP", "MySQL", "AWS"],
      icon: <Landmark className="w-6 h-6 text-blue-500 dark:text-blue-400" />
    },
    {
      id: 4,
      title: "Sentiment Analysis for Bengali",
      category: "NLP & Deep Learning",
      description: "Built a deep-learning model trained on Facebook & YouTube data for sentiment classification.",
      technologies: ["Python", "NLP", "TensorFlow", "CNN-BLSTM"],
      icon: <Code className="w-6 h-6 text-blue-500 dark:text-blue-400" />
    },
    {
      id: 5,
      title: "Hand Gesture Controlled Wheelchair",
      category: "Embedded Systems & IoT",
      description: "Designed a gesture-based wheelchair prototype using an accelerometer & ML algorithms to assist disabled users.",
      technologies: ["Raspberry Pi", "Python", "Arduino", "Machine Learning"],
      icon: <Accessibility className="w-6 h-6 text-blue-500 dark:text-blue-400" />
    }
  ];

  return (
    <div className="mb-10">
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
              {project.icon}
              <div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  {project.category}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                {project.description}
              </p>
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
