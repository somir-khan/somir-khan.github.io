
import Profile from "@/components/Profile";
import CurrentTime from "@/components/CurrentTime";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import AwardsVolunteering from "@/components/AwardsVolunteering";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import BlogPosts from "@/components/BlogPosts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile Section with Current Time */}
        <div id="profile" className="flex flex-col md:flex-row justify-between pt-16">
          <Profile />
          <CurrentTime />
        </div>

        {/* Skills Section */}
        <div id="skills">
          <Skills />
        </div>

        {/* Publications Section */}
        <div id="publications">
          <Publications />
        </div>

        {/* Work Experience Section */}
        <div id="experience">
          <WorkExperience />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <Projects />
        </div>

        {/* Education Section - moved after projects */}
        <div id="education">
          <Education />
        </div>

        {/* Blog Posts Section */}
        <div id="blog">
          <BlogPosts />
        </div>

        {/* Awards & Volunteering Section */}
        <div id="awards">
          <AwardsVolunteering />
        </div>

        {/* Contact Card */}
        <div id="contact">
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
