import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
      {/* Avatar */}
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-blue-400 flex-shrink-0">
        <img src="/dp400x300.jpg" alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Text block */}
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-blue-500 dark:text-blue-400">MD SOMIR KHAN</span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">PhD Student at The University of Louisiana at Lafayette</p>

        {/* Simplified Research Interest */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          <span className="font-semibold text-blue-500 dark:text-blue-400">Research Interest:</span> Trustworthy AI, Medical AI, Foundation Models
        </p>

        {/* Contact */}
        <div className="flex flex-wrap gap-2 items-center text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Lafayette, LA, USA</span>
          </div>
          <span className="hidden sm:inline opacity-30">•</span>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <a href="mailto:somirkhanshowrov@gmail.com" className="hover:text-blue-500 dark:hover:text-blue-400">somirkhanshowrov@gmail.com</a>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-4">
          A Ph.D. student in Computer Science at the University of Louisiana at Lafayette with academic research experience in AI/ML,
          data analysis, and NLP, plus 3 years of industry experience as a full‑stack engineer.
        </p>

        {/* Socials */}
        <div className="flex space-x-4">
          <a href="https://github.com/somir-khan" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/mdsomirkhan/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:somirkhanshowrov@gmail.com" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;