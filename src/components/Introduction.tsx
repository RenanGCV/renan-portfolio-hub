
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
              Desenvolvedor Full Stack
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <h1 className="section-title mb-6">
              Olá, eu sou <span className="text-primary">Renan Gonçalves</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl">
              Um desenvolvedor full stack de 20 anos do Rio de Janeiro, Brasil.
              Apaixonado por criar experiências digitais perfeitas através de código e design.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={600}>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="button-primary"
              >
                Entre em Contato
              </a>
              <a
                href="#portfolio"
                className="button-secondary"
              >
                Ver Meus Trabalhos
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
                    <h3 className="font-display font-semibold text-lg mb-2">Educação</h3>
                    <p className="text-muted-foreground mb-2">Formação técnica em Jogos Digitais (Firjan Senai)</p>
                    <p className="text-muted-foreground">Cursando Análise e Desenvolvimento de Sistemas (Veiga de Almeida)</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-panel rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">Habilidades Técnicas</h3>
                    <p className="text-muted-foreground">
                      Desenvolvimento front-end e back-end, gerenciamento de banco de dados, integração de APIs, design responsivo
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
                    <h3 className="font-display font-semibold text-lg mb-2">Expertise Adicional</h3>
                    <p className="text-muted-foreground">
                      Metodologias ágeis, Scrum, Gestão de Pessoas & Projetos
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
