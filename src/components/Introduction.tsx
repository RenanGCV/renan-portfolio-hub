
import { Code, Users, Book } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="section-container pt-32 md:pt-40 min-h-screen flex flex-col justify-center"
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
        <div className="md:col-span-7">
          <AnimatedSection>
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Full Stack Developer
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <h1 className="section-title mb-6">
              Hello, I'm <span className="text-primary">Renan Gonçalves</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl">
              A 20-year-old full stack developer from Rio de Janeiro, Brazil. 
              Passionate about creating seamless digital experiences through code and design.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={600}>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="button-primary"
              >
                Get in Touch
              </a>
              <a
                href="#portfolio"
                className="button-secondary"
              >
                View My Work
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={800} animation="fade-in">
            <div className="flex flex-wrap gap-6 my-8">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">HTML/CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">JavaScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">React</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">SQL</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">Vite</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">APIs</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="md:col-span-5">
          <AnimatedSection delay={600} animation="slide-in-right">
            <div className="space-y-6">
              <div className="glass-panel rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Book size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">Education</h3>
                    <p className="text-muted-foreground mb-2">Technical degree in Digital Games (Firjan Senai)</p>
                    <p className="text-muted-foreground">Studying System Analysis and Development (Veiga de Almeida)</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-panel rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">Tech Skills</h3>
                    <p className="text-muted-foreground">
                      Front-end and back-end development, database management, API integration, responsive design
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-panel rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">Additional Expertise</h3>
                    <p className="text-muted-foreground">
                      Agile methodologies, Scrum, People & Project Management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
