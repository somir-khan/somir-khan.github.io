import { BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import publicationsData from "@/data/publications.json";

interface Publication {
  id: number;
  authors: string;
  title: string;
  status: string;
  year: number;
  venue?: string;
}

const Publications = () => {
  const navigate = useNavigate();
  const publications: Publication[] = publicationsData as Publication[];

  return (
    <div className="mb-10" id="publications">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        Publications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {publications.map((pub) => (
          <Card key={pub.id} className="bg-card-hover">
            <CardHeader>
              <CardTitle className="text-lg">{pub.title}</CardTitle>
              <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                {pub.authors}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {pub.venue && (
                <p className="text-gray-700 dark:text-gray-300 italic mb-2">{pub.venue}</p>
              )}
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">{pub.status}</span>, {pub.year}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Publications;
