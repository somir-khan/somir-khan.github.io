
import { BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-400" />
        Education
      </h2>
      <div className="space-y-6">
        <Card className="bg-card-hover">
          <CardHeader>
            <CardTitle>University of Louisiana at Lafayette</CardTitle>
            <CardDescription>
              Lafayette, LA | Jan 2023 – Present
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-2">
              M.S. in Computer Science (GPA: 3.90/4.00)
            </p>
            <p className="mb-2">
              <span className="font-medium">Thesis:</span> Bibliometric Data Analysis & Authorship Abuse Mitigation
            </p>
            <p>
              <span className="font-medium">Key Courses:</span> Algorithms, Neural Networks, Image Processing, IT & Network Security
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card-hover">
          <CardHeader>
            <CardTitle>Khulna University of Engineering & Technology</CardTitle>
            <CardDescription>
              Khulna, BD | Mar 2016 – Mar 2020
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">
              B.S. in Computer Science & Engineering (GPA: 3.22/4.00)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Education;
