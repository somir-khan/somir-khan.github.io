
import { Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center gap-2">
        <Code className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card-hover border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Programming & Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C++", "PHP", "SQL", "R", "JavaScript", "C"].map((skill) => (
                    <span key={skill} className="tech-tag px-2 py-1 text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Web Development</p>
                <div className="flex flex-wrap gap-2">
                  {["Laravel", "Vue.js", "React", "Node.js", "HTML/CSS"].map((skill) => (
                    <span key={skill} className="tech-tag px-2 py-1 text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Databases</p>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "PostgreSQL", "MongoDB"].map((skill) => (
                    <span key={skill} className="tech-tag px-2 py-1 text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Cloud & DevOps</p>
                <div className="flex flex-wrap gap-2">
                  {["AWS (EC2, S3, Lambda)", "DigitalOcean", "Nginx", "Docker"].map((skill) => (
                    <span key={skill} className="tech-tag px-2 py-1 text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-card-hover border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Data Science & Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Data Science & ML</p>
                <div className="flex flex-wrap gap-2">
                  {["Pandas", "NumPy", "TensorFlow", "Scikit-learn", "OpenCV", "Matplotlib", "R"].map((skill) => (
                    <span key={skill} className="tech-tag px-2 py-1 text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Soft Skills</p>
                <div className="flex flex-wrap gap-2">
                  {["Problem-Solving", "Communication", "Leadership", "Teamwork", "Time Management", "Adaptability"].map((skill) => (
                    <span key={skill} className="soft-skill-tag px-2 py-1 text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
