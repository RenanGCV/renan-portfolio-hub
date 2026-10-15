import { achievements } from '@/data/achievements';

export type ProjectCategory = 'Produto' | 'Jogo' | 'Web' | 'Interno';

export interface ProjectLink {
  label: string;
  url: string;
  kind: 'demo' | 'code' | 'video' | 'download';
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Linha de contexto curta: onde nasceu, para quem. */
  context: string;
  /** O problema que o projeto resolve. */
  problem: string;
  /** O que eu fiz, em primeira pessoa. */
  role: string;
  tech: string[];
  /** Resultado concreto, quando existe. */
  result?: string;
  image?: string;
  imageAlt?: string;
  links: ProjectLink[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'finplan',
    title: 'FinPlan',
    category: 'Produto',
    context: 'Projeto próprio · em produção, com usuários reais',
    problem:
      'Controle financeiro pessoal costuma morrer na planilha: dá trabalho manter, não mostra o que já está comprometido e some quando você está sem internet.',
    role:
      'Construí o produto inteiro: autenticação por celular, dados isolados por conta, visão de saldo disponível e compromissos futuros, e um app instalável que continua funcionando offline.',
    result: 'No ar e em uso real — não é protótipo nem projeto de estudo.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PWA', 'Service Worker'],
    image: '/projects/finplan.png',
    imageAlt: 'Tela de entrada do FinPlan',
    links: [{ label: 'Ver demo', url: 'https://fin-plan-app.vercel.app/', kind: 'demo' }],
    featured: true,
  },
  {
    slug: 'conecta-merenda',
    title: 'Conecta Merenda',
    category: 'Produto',
    context: 'Hackathon Devs de Impacto 2025 · equipe Prisma',
    problem:
      'O PNAE obriga escolas públicas a comprar parte da merenda de agricultores familiares, mas o processo é manual e desencontrado: a escola não sabe quem produz perto, e o agricultor não alcança a chamada pública.',
    role:
      'Fui um dos dois desenvolvedores principais, ao lado do Cassio Almeida, numa equipe de quatro pessoas. Construí a plataforma que conecta escolas e produtores locais, com uma camada de IA que lê as chamadas públicas e sugere os fornecedores compatíveis.',
    result: '14º lugar entre 50 equipes, em 48 horas de hackathon.',
    tech: ['Next.js 14', 'FastAPI', 'Python', 'OpenAI', 'Tailwind CSS'],
    image: '/projects/conecta-merenda.png',
    imageAlt: 'Identidade do Conecta Merenda: a tecnologia que une o campo à escola',
    links: [
      { label: 'Ver código', url: 'https://github.com/RenanGCV/Conecta-Merenda-', kind: 'code' },
      {
        label: 'Repositório da equipe',
        url: 'https://github.com/RenanGCV/-teamprisma-project',
        kind: 'code',
      },
    ],
    featured: true,
  },
  {
    slug: 'bluevechub',
    title: 'Soluções internas · BlueVecHub',
    category: 'Interno',
    context: 'Trabalho na BlueVecHub · sistemas usados pela equipe todo dia',
    problem:
      'Equipes técnicas perdem tempo em tarefas repetitivas: abrir e acompanhar chamados, procurar informação espalhada em documentação e repetir o mesmo setup de ambiente a cada projeto.',
    role:
      'Desenvolvi um sistema de tickets para o time de TI, um servidor MCP que dá às ferramentas de IA acesso estruturado ao nosso produto, uma busca com RAG sobre a documentação interna e a arquitetura de trabalho em workspace que padroniza como a equipe desenvolve.',
    result: 'Soluções em uso interno. Detalhes de implementação sob confidencialidade.',
    tech: ['TypeScript', 'Python', 'MCP', 'RAG', 'APIs'],
    image: '/projects/bluevechub.png',
    imageAlt:
      'Fluxo das soluções internas: sistema de tickets, busca com RAG, servidor MCP e arquitetura de workspace',
    links: [],
    featured: true,
  },
  {
    slug: 'barber-saas',
    title: 'BarberSaaS',
    category: 'Produto',
    context: 'Projeto próprio · SaaS multi-tenant para barbearias',
    problem:
      'Barbearias pequenas gerenciam agenda, caixa e clientes no caderno ou no WhatsApp, sem visão de faturamento nem histórico.',
    role:
      'Construí a plataforma inteira: app mobile para o cliente agendar, painel web para a barbearia gerenciar agenda, serviços, barbeiros e caixa, e uma API multi-tenant com autenticação, tempo real e relatórios.',
    tech: ['NestJS', 'Next.js 14', 'React Native', 'Expo', 'WebSockets', 'TypeScript'],
    image: '/projects/barber-saas.png',
    imageAlt: 'Painel web do BarberSaaS',
    links: [
      { label: 'Ver demo', url: 'https://barber-saas-api.vercel.app', kind: 'demo' },
      { label: 'Ver código', url: 'https://github.com/RenanGCV/BarberSaas', kind: 'code' },
    ],
    featured: true,
  },
  {
    slug: 'labor-forum',
    title: 'Labor Forum',
    category: 'Jogo',
    context: 'Projeto final do técnico em Jogos Digitais · Firjan SENAI',
    problem:
      'Jovens entram no mercado de trabalho sem referência do que esperar. A proposta foi transformar isso em jogo, não em cartilha.',
    role:
      'Fiz o jogo de plataforma 2D com narrativa, combate e progressão de habilidades: programação em C#, design de fases e arte em pixel.',
    tech: ['Unity', 'C#', 'Aseprite', 'Game Design'],
    image: 'https://img.youtube.com/vi/OMxOmWdakNw/maxresdefault.jpg',
    imageAlt: 'Cena do jogo Labor Forum',
    links: [
      { label: 'Jogar', url: 'https://renangcv.itch.io/labor-forum', kind: 'download' },
      { label: 'Trailer', url: 'https://www.youtube.com/watch?v=OMxOmWdakNw', kind: 'video' },
    ],
    featured: true,
  },
  {
    slug: 'color-war',
    title: 'Color War',
    category: 'Jogo',
    context: 'Projeto próprio · multiplayer local',
    problem:
      'Queria um jogo de partidas rápidas para jogar com amigos no mesmo sofá, com classes que mudassem o jeito de jogar.',
    role:
      'Programei o multiplayer local, as classes com habilidades próprias e toda a interface de partida.',
    tech: ['Unity', 'C#', 'Aseprite', 'UI/UX'],
    image: 'https://img.youtube.com/vi/mvKMMUMFpWY/maxresdefault.jpg',
    imageAlt: 'Cena do jogo Color War',
    links: [
      { label: 'Jogar', url: 'https://renangcv.itch.io/color-war', kind: 'download' },
      { label: 'Trailer', url: 'https://www.youtube.com/watch?v=mvKMMUMFpWY', kind: 'video' },
    ],
    featured: true,
  },
  {
    slug: 'rc-desenvolvimento',
    title: 'R&C Desenvolvimento',
    category: 'Web',
    context: 'Trabalho para cliente',
    problem:
      'A R&C Dev precisava mostrar o que entrega sem depender de screenshots: cada tipo de projeto precisava ser navegável.',
    role:
      'Montei o portfólio com seis demonstrações funcionais — e-commerce, delivery, dashboard, restaurante, EAD e site médico — cada uma como uma página real.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/rc-desenvolvimento.png',
    imageAlt: 'Site da R&C Desenvolvimento',
    links: [
      { label: 'Ver site', url: 'https://rc-desenvolvimento.vercel.app', kind: 'demo' },
      {
        label: 'Ver código',
        url: 'https://github.com/RenanGCV/RC-Desenvolvimento',
        kind: 'code',
      },
    ],
  },
  {
    slug: 'portifolio-luiz',
    title: 'Portfólio Luiz · Eletricista',
    category: 'Web',
    context: 'Trabalho para cliente · L. Filho Instalações',
    problem:
      'Um eletricista autônomo sem presença digital: o contato chegava só por indicação boca a boca.',
    role:
      'Criei a página de apresentação com serviços, área de atuação e contato direto por WhatsApp, pensada para carregar rápido no celular.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/portifolio-luiz.png',
    imageAlt: 'Site do eletricista Luiz',
    links: [
      { label: 'Ver site', url: 'https://portifolio-luiz-virid.vercel.app', kind: 'demo' },
      { label: 'Ver código', url: 'https://github.com/RenanGCV/Portifolio-Luiz', kind: 'code' },
    ],
  },
  {
    slug: 'landing-page-makon',
    title: 'Makon Software',
    category: 'Web',
    context: 'Trabalho para cliente · plataforma de simulação de ROV offshore',
    problem:
      'Um produto técnico de nicho — simulação de ROV para operações offshore — precisava se apresentar a um público internacional antes mesmo do MVP sair.',
    role:
      'Desenvolvi a landing page institucional com arquitetura, toolkit e visão do produto, em quatro idiomas e com pedido de demo.',
    tech: ['JavaScript', 'CSS', 'i18n', 'Vercel'],
    image: '/projects/landing-page-makon.png',
    imageAlt: 'Landing page Makon',
    links: [
      { label: 'Ver site', url: 'https://landing-page-makon.vercel.app', kind: 'demo' },
      {
        label: 'Ver código',
        url: 'https://github.com/RenanGCV/Landing-Page-Makon',
        kind: 'code',
      },
    ],
  },
  {
    slug: 'conect-volei',
    title: 'Conect Vôlei',
    category: 'Produto',
    context: 'Projeto próprio',
    problem:
      'Quem joga vôlei fora de clube depende de grupo de WhatsApp para achar pelada e completar time.',
    role:
      'Desenhei e desenvolvi o app para encontrar peladas e jogadores por cidade, com perfil e nível de jogo.',
    tech: ['React', 'TypeScript'],
    links: [{ label: 'Ver código', url: 'https://github.com/RenanGCV/Conect-Volei', kind: 'code' }],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

export const categories: ProjectCategory[] = ['Produto', 'Jogo', 'Web', 'Interno'];

/** Números do hero, derivados dos dados reais — nunca fixos. */
export const stats = [
  { value: `${projects.length}`, label: 'projetos no portfólio' },
  {
    value: `${projects.filter((p) => p.links.some((l) => l.kind === 'demo')).length}`,
    label: 'sistemas no ar',
  },
  { value: `${projects.filter((p) => p.category === 'Jogo').length}`, label: 'jogos publicados' },
  { value: `${achievements.length}`, label: 'hackathons disputados' },
];
