export interface StackGroup {
  title: string;
  description: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    title: 'Front-end',
    description: 'Interface que carrega rápido e funciona no celular.',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Native'],
  },
  {
    title: 'Back-end e APIs',
    description: 'Serviços, autenticação e integrações.',
    items: ['Node.js', 'NestJS', 'Python', 'FastAPI', 'REST', 'WebSockets', 'C#'],
  },
  {
    title: 'IA aplicada',
    description: 'Modelos de linguagem resolvendo problema real, não demo.',
    items: ['MCP', 'RAG', 'OpenAI', 'Automação de processos'],
  },
  {
    title: 'Jogos',
    description: 'Do protótipo à build publicada.',
    items: ['Unity', 'C#', 'Game Design', 'Aseprite', 'Pixel art'],
  },
  {
    title: 'Ferramentas',
    description: 'O que uso para versionar, publicar e manter.',
    items: ['Git', 'GitHub', 'Vercel', 'Figma', 'Linux'],
  },
];
