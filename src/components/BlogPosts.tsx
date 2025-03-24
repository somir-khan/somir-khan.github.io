
import { FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
}

const BlogPosts = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would be an API call
    import("@/data/blogs.json")
      .then((data) => {
        setBlogs(data.default);
      })
      .catch((err) => {
        console.error("Error loading blog posts:", err);
      });
  }, []);

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2 flex items-center gap-2">
        <FileText className="w-6 h-6 text-blue-400" />
        Blog Posts
      </h2>
      
      <div className="space-y-6">
        {blogs.map((blog) => (
          <Card 
            key={blog.id} 
            className="bg-card-hover cursor-pointer"
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
              <CardDescription>
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{blog.summary}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span key={tag} className="tech-tag px-2 py-1 text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="text-blue-400 border-blue-400 hover:bg-blue-900/20 dark:hover:bg-blue-900/20"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/blog/${blog.id}`);
                }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
