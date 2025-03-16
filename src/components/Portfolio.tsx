
import { ExternalLink, Github, Download, Youtube } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

// Dados simulados para projetos - substituir com os projetos reais do Renan
const projects = [
  {
    id: 1,
    title: 'Labor Forum',
    description: 'Um jogo criado utilizando Unity Engine, C# e Aseprite',
    image: 'https://img.youtube.com/vi/OMxOmWdakNw/maxresdefault.jpg',
    tech: ['Unity', 'C#', 'Aseprite', 'Game Development'],
    demo: 'https://renangcv.itch.io/labor-forum',
    repo: 'https://www.youtube.com/watch?v=OMxOmWdakNw',
    isGame: true
  },
  {
    id: 2,
    title: 'Color War',
    description: 'Um jogo desenvolvido com Unity Engine, C# e Aseprite',
    image: 'https://img.youtube.com/vi/mvKMMUMFpWY/maxresdefault.jpg',
    tech: ['Unity', 'C#', 'Aseprite', 'Game Development'],
    demo: 'https://renangcv.itch.io/color-war',
    repo: 'https://www.youtube.com/watch?v=mvKMMUMFpWY',
    isGame: true
  },
  {
    id: 3,
    title: 'Joalheria Luxury',
    description: 'Landing page para uma joalheria desenvolvida com Vite, React e TypeScript',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1374&auto=format&fit=crop',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    demo: 'https://landing-page-joalheiria-luxury.netlify.app/',
    repo: '',
    isGame: false
  },
  {
    id: 4,
    title: 'Plataforma E-commerce',
    description: 'Uma plataforma e-commerce full-stack com integração de pagamento',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=764&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://github.com/RenanGCV',
    repo: 'https://github.com/RenanGCV',
    isGame: false
  },
  {
    id: 5,
    title: 'App de Gerenciamento de Tarefas',
    description: 'Uma aplicação intuitiva de gerenciamento de tarefas com funcionalidade de arrastar e soltar',
    image: 'https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1170&auto=format&fit=crop',
    tech: ['React', 'Redux', 'Tailwind CSS'],
    demo: 'https://github.com/RenanGCV',
    repo: 'https://github.com/RenanGCV',
    isGame: false
  },
  {
    id: 6,
    title: 'Sistema de Recomendação de Filmes',
    description: 'Um aplicativo de recomendação de filmes que utiliza algoritmos de aprendizado de máquina',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1159&auto=format&fit=crop',
    tech: ['Python', 'Flask', 'React', 'SQL'],
    demo: 'https://github.com/RenanGCV',
    repo: 'https://github.com/RenanGCV',
    isGame: false
  },
  {
    id: 7,
    title: 'Painel de Clima',
    description: 'Um painel de clima responsivo que exibe dados meteorológicos em tempo real',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1065&auto=format&fit=crop',
    tech: ['JavaScript', 'HTML/CSS', 'Weather API'],
    demo: 'https://github.com/RenanGCV',
    repo: 'https://github.com/RenanGCV',
    isGame: false
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-container bg-gray-50 dark:bg-gray-900">
      <AnimatedSection>
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Portfólio
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={200}>
        <h2 className="section-title">Projetos em Destaque</h2>
      </AnimatedSection>
      
      <AnimatedSection delay={400}>
        <p className="section-subtitle">
          Aqui estão alguns dos meus projetos recentes que demonstram minhas habilidades e expertise.
        </p>
      </AnimatedSection>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 200 + 600}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 card-hover">
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
                  {project.isGame ? (
                    <>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        <Download size={16} />
                        Download Jogo
                      </a>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground font-medium hover:text-primary transition-colors"
                      >
                        <Youtube size={16} />
                        Ver Trailer
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        <ExternalLink size={16} />
                        Demo ao Vivo
                      </a>
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-muted-foreground font-medium hover:text-primary transition-colors"
                        >
                          <Github size={16} />
                          Código Fonte
                        </a>
                      )}
                    </>
                  )}
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
            Ver Mais no GitHub
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Portfolio;
