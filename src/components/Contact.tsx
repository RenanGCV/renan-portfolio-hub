
import { Instagram, Linkedin, Github, MessageSquare } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521999880830', '_blank');
  };

  return (
    <section id="contact" className="section-container bg-gray-50">
      <AnimatedSection>
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Get In Touch
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={200}>
        <h2 className="section-title">Let's Work Together</h2>
      </AnimatedSection>
      
      <AnimatedSection delay={400}>
        <p className="section-subtitle">
          Have a project in mind? Let's discuss how I can help you bring your ideas to life.
        </p>
      </AnimatedSection>
      
      <div className="grid md:grid-cols-5 gap-8 mt-12">
        <AnimatedSection delay={600} className="md:col-span-3">
          <div className="glass-panel rounded-2xl p-8 h-full">
            <h3 className="font-display text-2xl font-semibold mb-6">Contact Me</h3>
            
            <div className="mb-8">
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance work and full-time positions. 
                If you're interested in working together, please don't hesitate to reach out.
              </p>
              
              <button
                onClick={handleWhatsAppClick}
                className="button-primary flex items-center gap-2 mt-6"
              >
                <MessageSquare size={18} />
                Chat on WhatsApp
              </button>
              
              <p className="text-sm text-muted-foreground mt-4">
                +55 21 99988-0830
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={800} className="md:col-span-2">
          <div className="glass-panel rounded-2xl p-8 h-full">
            <h3 className="font-display text-2xl font-semibold mb-6">Connect</h3>
            
            <div className="space-y-6">
              <a 
                href="https://www.instagram.com/rena.gcv/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-primary/5"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-sm text-muted-foreground">@rena.gcv</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/renan-teodoro-lopes-gon%C3%A7alves-804014221/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-primary/5"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Renan Gonçalves</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/RenanGCV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-primary/5"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Github size={24} />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">@RenanGCV</p>
                </div>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
