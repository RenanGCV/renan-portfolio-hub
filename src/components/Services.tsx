
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
    title: 'Website Development',
    description: 'Custom websites built to meet your specific needs and goals.',
    icon: <Globe className="w-10 h-10" />,
    features: [
      'Responsive design for all devices',
      'SEO optimization',
      'Fast loading speed',
      'Content management systems',
      'Custom animations and interactions'
    ]
  },
  {
    id: 2,
    title: 'E-commerce Site Creation',
    description: 'Online stores that drive sales and provide great shopping experiences.',
    icon: <ShoppingCart className="w-10 h-10" />,
    features: [
      'Product catalog management',
      'Secure payment gateways',
      'Inventory management',
      'Customer accounts',
      'Order tracking system'
    ]
  },
  {
    id: 3,
    title: 'Custom App Development',
    description: 'Mobile and web applications tailored to your business needs.',
    icon: <Smartphone className="w-10 h-10" />,
    features: [
      'Cross-platform compatibility',
      'Intuitive user interfaces',
      'Offline functionality',
      'Push notifications',
      'Performance optimization'
    ]
  },
  {
    id: 4,
    title: 'Custom System Development',
    description: 'Robust backend systems and databases for your business operations.',
    icon: <Database className="w-10 h-10" />,
    features: [
      'Database design and optimization',
      'API development',
      'System integration',
      'Security implementation',
      'Scalable architecture'
    ]
  }
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleRequestQuote = (service: string) => {
    const message = encodeURIComponent(`Hi Renan, I'm interested in your ${service} service. Can you provide more information?`);
    window.open(`https://wa.me/5521999880830?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="section-container">
      <AnimatedSection>
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Services
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={200}>
        <h2 className="section-title">What I Offer</h2>
      </AnimatedSection>
      
      <AnimatedSection delay={400}>
        <p className="section-subtitle">
          I provide end-to-end development solutions tailored to your specific needs.
        </p>
      </AnimatedSection>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {services.map((service, index) => (
          <AnimatedSection key={service.id} delay={index * 200 + 600}>
            <div 
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all duration-300 h-full flex flex-col"
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
                Request Quote
              </button>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Services;
