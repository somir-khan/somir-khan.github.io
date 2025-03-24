
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
}

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    import("@/data/blogs.json")
      .then((data) => {
        const blogData = data.default.find((b: BlogPost) => b.id === Number(id));
        if (blogData) {
          setBlog(blogData);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading blog post:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">Loading...</div>;
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white dark:bg-white dark:text-[#121212]">
      {/* Navigation */}
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          className="mb-6 text-blue-400 border-blue-400 hover:bg-blue-900/20 dark:hover:bg-blue-100"
          onClick={() => navigate('/')}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
        
        <Card className="bg-card-hover border-gray-700 dark:bg-white dark:border-gray-300">
          <CardHeader className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-6 h-6 text-blue-400" />
              <CardTitle className="text-3xl">{blog.title}</CardTitle>
            </div>
            <CardDescription className="text-gray-400 dark:text-gray-600 text-lg">
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag) => (
                <span key={tag} className="bg-blue-900/30 dark:bg-blue-100 text-blue-300 dark:text-blue-800 px-3 py-1 text-sm rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-300 dark:text-gray-700 mb-6 text-lg leading-relaxed">{blog.summary}</p>
            
            <div className="text-gray-300 dark:text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {blog.content}
            </div>
          </CardContent>
        </Card>
        
        <Footer />
      </div>
    </div>
  );
};

export default BlogDetail;
