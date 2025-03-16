
import { useState } from 'react';
import { Globe, ShoppingCart, Smartphone, Database } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
};

const services: Service[] = [
  {
    id: 1,
    title: 'Desenvolvimento de Websites',
    description: 'Sites personalizados construídos para atender às suas necessidades e objetivos específicos.',
    icon: <Globe className="w-10 h-10" />,
    features: [
      'Design responsivo para todos os dispositivos',
      'Otimização para SEO',
      'Carregamento rápido',
      'Sistemas de gerenciamento de conteúdo',
      'Animações e interações personalizadas'
    ]
  },
  {
    id: 2,
    title: 'Criação de E-commerce',
    description: 'Lojas online que impulsionam vendas e proporcionam ótimas experiências de compra.',
    icon: <ShoppingCart className="w-10 h-10" />,
    features: [
      'Gerenciamento de catálogo de produtos',
      'Gateways de pagamento seguros',
      'Gestão de estoque',
      'Contas de clientes',
      'Sistema de rastreamento de pedidos'
    ]
  },
  {
    id: 3,
    title: 'Desenvolvimento de Aplicativos',
    description: 'Aplicativos móveis e web adaptados às necessidades do seu negócio.',
    icon: <Smartphone className="w-10 h-10" />,
    features: [
      'Compatibilidade multiplataforma',
      'Interfaces de usuário intuitivas',
      'Funcionalidade offline',
      'Notificações push',
      'Otimização de desempenho'
    ]
  },
  {
    id: 4,
    title: 'Desenvolvimento de Sistemas',
    description: 'Sistemas de backend e bancos de dados robustos para as operações do seu negócio.',
    icon: <Database className="w-10 h-10" />,
    features: [
      'Design e otimização de banco de dados',
      'Desenvolvimento de API',
      'Integração de sistemas',
      'Implementação de segurança',
      'Arquitetura escalável'
    ]
  }
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleRequestQuote = (service: string) => {
    const message = encodeURIComponent(`Olá Renan, estou interessado no seu serviço de ${service}. Pode me fornecer mais informações?`);
    window.open(`https://wa.me/5521999880830?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="section-container">
      <AnimatedSection>
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Serviços
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={200}>
        <h2 className="section-title">O Que Eu Ofereço</h2>
      </AnimatedSection>
      
      <AnimatedSection delay={400}>
        <p className="section-subtitle">
          Forneço soluções de desenvolvimento completas, adaptadas às suas necessidades específicas.
        </p>
      </AnimatedSection>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {services.map((service, index) => (
          <AnimatedSection key={service.id} delay={index * 200 + 600}>
            <div 
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-300 h-full flex flex-col"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`p-4 rounded-2xl bg-primary/10 text-primary inline-flex mb-6 transition-all duration-300 ${hoveredService === service.id ? 'scale-110' : ''}`}>
                {service.icon}
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-8 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handleRequestQuote(service.title)}
                className="button-primary mt-auto self-start"
              >
                Solicitar Orçamento
              </button>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Services;
