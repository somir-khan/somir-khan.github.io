import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on mobile after click
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

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            className="text-blue-500 dark:text-blue-400 text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {["skills", "publications", "experience", "projects", "education", "blog", "awards", "contact"].map((section) => (
                <NavigationMenuItem key={section}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle */}
          <ThemeToggle />

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

      {/* Mobile Collapsible Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 lg:hidden">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-2">
              {["skills", "publications", "experience", "projects", "education", "blog", "awards", "contact"].map((section) => (
                <NavigationMenuItem key={section}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Download Buttons */}
          <div className="flex flex-col gap-2">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
              <a
                href="/resume.pdf"
                download="MD_SOMIR_KHAN_Resume.pdf"
                className="flex items-center gap-2 justify-center"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </Button>

            <Button variant="outline" className="border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-100/30 dark:hover:bg-blue-900/20 w-full">
              <a
                href="/ac_cv.pdf"
                download="MD_SOMIR_KHAN_CV.pdf"
                className="flex items-center gap-2 justify-center"
              >
                <Download className="w-4 h-4" />
                <span>CV</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
