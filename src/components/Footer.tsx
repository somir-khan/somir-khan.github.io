
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="text-center text-muted-foreground py-6 border-t border-gray-200 dark:border-gray-700 mt-10">
      <button 
        onClick={scrollToTop}
        className="mb-4 p-2 bg-gray-100 dark:bg-card rounded-full hover:bg-gray-200 dark:hover:bg-accent transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      <p>© {new Date().getFullYear()} MD SOMIR KHAN. All rights reserved.</p>
      <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;
