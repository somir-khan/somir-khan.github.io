
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, Database, Cpu, Landmark, Code, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  iconType: string;
  longDescription?: string;
}

interface Project extends Omit<ProjectData, 'iconType'> {
  icon: JSX.Element;
}

const iconMap: Record<string, JSX.Element> = {
  "Database": <Database className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
  "Cpu": <Cpu className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
  "Landmark": <Landmark className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
  "Code": <Code className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
  "Accessibility": <Accessibility className="w-8 h-8 text-blue-500 dark:text-blue-400" />
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  // Helper function to scroll to a section on the main page
  const goToMainAndScroll = (sectionId: string) => {
    navigate('/');
    // We need to wait for navigation to complete before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use the projects data directly
    import("@/data/projects.json")
      .then((data) => {
        const projectData = data.default.find((p: ProjectData) => p.id === Number(id));
        if (projectData) {
          // Add the icon based on the iconType string
          const icon = iconMap[projectData.iconType];
          setProject({
            ...projectData,
            icon
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading project:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-background text-foreground flex items-center justify-center">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Custom Navigation for ProjectDetail */}
      <div className="sticky top-0 z-50 w-full bg-background border-b border-border py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <h2 
            className="text-xl font-bold text-blue-500 dark:text-blue-400 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            MD SOMIR KHAN
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-4">
              <button 
                className="text-foreground hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => goToMainAndScroll('skills')}
              >
                Skills
              </button>
              <button 
                className="text-foreground hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => goToMainAndScroll('experience')}
              >
                Experience
              </button>
              <button 
                className="text-foreground hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => goToMainAndScroll('projects')}
              >
                Projects
              </button>
              <button 
                className="text-foreground hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => goToMainAndScroll('education')}
              >
                Education
              </button>
              <button 
                className="text-foreground hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => goToMainAndScroll('blog')}
              >
                Blog
              </button>
              <button 
                className="text-foreground hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => goToMainAndScroll('awards')}
              >
                Awards
              </button>
              <button 
                className="text-foreground hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                onClick={() => goToMainAndScroll('contact')}
              >
                Contact
              </button>
            </div>
            
            {/* Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggleButton />
            </div>
            
            {/* Resume and CV Download Buttons */}
            <div className="flex gap-2">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                <a 
                  href="/resume.pdf" 
                  download="MD_SOMIR_KHAN_Resume.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              </Button>
              
              <Button variant="outline" className="border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-100/30 dark:hover:bg-blue-900/20">
                <a 
                  href="/resume.pdf" 
                  download="MD_SOMIR_KHAN_CV.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>CV</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          className="mb-6 text-blue-500 dark:text-blue-400 border-blue-400 hover:bg-blue-100/30 dark:hover:bg-blue-900/20"
          onClick={() => navigate('/')}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
        
        <Card className="bg-card-hover">
          <CardHeader className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-blue-100/50 dark:bg-blue-900/20 p-6 rounded-full">
              {project.icon}
            </div>
            <div>
              <CardTitle className="text-3xl text-center md:text-left">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground text-xl mt-2">
                {project.category}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-500 dark:text-blue-400">Overview</h3>
              <p className="text-foreground/80 mb-4 text-lg leading-relaxed">
                {project.description}
              </p>
              
              {project.longDescription && (
                <p className="text-foreground/80 mb-4 text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              )}
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-500 dark:text-blue-400">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tag) => (
                  <span key={tag} className="tech-tag px-3 py-2 text-sm rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Footer />
      </div>
    </div>
  );
};

// Simple theme toggle button component
const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 rounded-full border-gray-200 dark:border-gray-800 bg-background hover:bg-accent text-foreground"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-foreground" />
      ) : (
        <Sun className="h-5 w-5 text-foreground" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

// Import necessary components
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Download } from "lucide-react";

export default ProjectDetail;
