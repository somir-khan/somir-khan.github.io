
import { Server } from "lucide-react";

const WorkExperience = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2 flex items-center gap-2">
        <Server className="w-6 h-6 text-blue-400" />
        Work Experience
      </h2>
      <div className="space-y-8">
        {/* Experience 1 */}
        <div className="relative pl-8 border-l-2 border-gray-700">
          <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-1"></div>
          <div className="mb-2">
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <p className="text-blue-400">Nagorik Technologies Ltd. • Dhaka, BD • Nov 2021 – Dec 2022</p>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Built & deployed a payment gateway handling 1M+ transactions daily, reducing integration time from 16 hours to 1 hour.</li>
            <li>Developed backends & admin portals for 10+ quiz-based applications with 500K+ users each using Laravel & Vue.js.</li>
            <li>Optimized complex SQL queries & caching for 6 high-traffic applications, improving system efficiency.</li>
            <li>Managed AWS EC2, DigitalOcean & Nginx deployments for multiple production applications.</li>
          </ul>
        </div>
        
        {/* Experience 2 */}
        <div className="relative pl-8 border-l-2 border-gray-700">
          <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-1"></div>
          <div className="mb-2">
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <p className="text-blue-400">MazeGeek Technologies Ltd. • Dhaka, BD • Aug 2020 – Oct 2021</p>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Developed chatbot SaaS platform for Meta & Viber API to enhance order management & customer support.</li>
            <li>Built an omnichannel bulk messaging system on Viber & cellular networks, including a dashboard for analytics.</li>
            <li>Designed an E-KYC system using Google Vision API & Python for document extraction & face verification.</li>
          </ul>
        </div>
        
        {/* Experience 3 */}
        <div className="relative pl-8 border-l-2 border-gray-700">
          <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-1"></div>
          <div className="mb-2">
            <h3 className="text-xl font-bold">Graduate Teaching Assistant</h3>
            <p className="text-blue-400">University of Louisiana at Lafayette • Jan 2023 – Present</p>
          </div>
          <ul className="text-gray-300 list-disc pl-5 space-y-2">
            <li>Assisted in Introduction to Data Structures & Software Design, mentoring 30+ students per semester.</li>
            <li>Graded assignments, provided 1-on-1 tutoring, and helped design course materials.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
