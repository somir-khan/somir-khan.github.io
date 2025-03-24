
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="mb-10">
      <Card className="bg-card-hover">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            I'm always open to new opportunities and collaborations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
              <p className="mb-1">Email: somirkhanshowrov@gmail.com</p>
              <p className="mb-1">Phone: (409)-444-7531</p>
              <p className="mb-1">Location: Lafayette, LA, USA</p>
              <div className="mt-4">
                <a href="mailto:somirkhanshowrov@gmail.com" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Send Email
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <p className="mb-4">
                Follow me on social media or check out my GitHub for more projects.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="tel:+14094447531" className="text-foreground hover:text-blue-400 transition-colors">
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
