
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-blue-400 flex-shrink-0">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQECA01VcNib-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729020756662?e=1748476800&v=beta&t=fasGE9PqGPTIO7HptBh4L3hiKfqWVyA4BRY1GC72plI"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-blue-400">MD SOMIR KHAN</span>
        </h1>
        <p className="text-xl text-gray-300 mb-4">Software Engineer & Data Analyst</p>
        <div className="flex flex-wrap gap-2 items-center text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Lafayette, LA, USA</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>somirkhanshowrov@gmail.com</span>
          </div>
{/*           <div className="flex items-center gap-1"> */}
{/*             <Phone className="w-4 h-4" /> */}
{/*             <span>(409)-444-7531</span> */}
{/*           </div> */}
        </div>
        <p className="text-gray-400 max-w-2xl mb-4">
          Results-driven Software Engineer & Data Analyst with 3 years of experience in full-stack development and data-driven solutions. 
          Strong expertise in Python, SQL, Laravel, Vue.js, Machine Learning, and Data Analysis.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:somirkhanshowrov@gmail.com"
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
