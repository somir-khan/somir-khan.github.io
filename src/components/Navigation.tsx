
import React from "react";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="sticky top-0 z-50 w-full bg-background border-b border-border py-3 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 
          className="text-xl font-bold text-blue-500 dark:text-blue-400 cursor-pointer" 
          onClick={() => scrollToSection("profile")}
        >
          MD SOMIR KHAN
        </h2>
        
        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  onClick={() => scrollToSection("skills")}
                >
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  onClick={() => scrollToSection("experience")}
                >
                  Experience
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  onClick={() => scrollToSection("projects")}
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  onClick={() => scrollToSection("education")}
                >
                  Education
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  onClick={() => scrollToSection("blog")}
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  onClick={() => scrollToSection("awards")}
                >
                  Awards
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
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
                href="/ac_cv.pdf"
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
  );
}

export default Navigation;
