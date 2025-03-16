
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

// Mock data for projects - replace with Renan's actual projects
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=764&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://github.com/RenanGCV',
    repo: 'https://github.com/RenanGCV'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'An intuitive task management application with drag-and-drop functionality',
    image: 'https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1170&auto=format&fit=crop',
    tech: ['React', 'Redux', 'Tailwind CSS'],
    demo: 'https://github.com/RenanGCV',
    repo: 'https://github.com/RenanGCV'
  },
  {
    id: 3,
    title: 'Movie Recommendation System',
    description: 'A movie recommendation app that uses machine learning algorithms',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1159&auto=format&fit=crop',
    tech: ['Python', 'Flask', 'React', 'SQL'],
    demo: 'https://github.com/RenanGCV',
    repo: 'https://github.com/RenanGCV'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays real-time weather data',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1065&auto=format&fit=crop',
    tech: ['JavaScript', 'HTML/CSS', 'Weather API'],
    demo: 'https://github.com/RenanGCV',
    repo: 'https://github.com/RenanGCV'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-container bg-gray-50">
      <AnimatedSection>
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Portfolio
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={200}>
        <h2 className="section-title">Featured Projects</h2>
      </AnimatedSection>
      
      <AnimatedSection delay={400}>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and expertise.
        </p>
      </AnimatedSection>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 200 + 600}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground font-medium hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      
      <AnimatedSection delay={1200}>
        <div className="mt-12 text-center">
          <a
            href="https://github.com/RenanGCV"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center gap-2"
          >
            <Github size={16} />
            View More on GitHub
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Portfolio;
