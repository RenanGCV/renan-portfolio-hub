export const profile = {
  name: 'Renan Gonçalves',
  shortName: 'Renan',
  monogram: 'R/GCV',
  role: 'Desenvolvedor full stack e de jogos',
  headline: 'Eu desenho e construo produtos digitais que funcionam.',
  headlineHighlight: 'que funcionam',
  summary:
    'Full stack, jogos digitais e soluções com IA. Interface, sistema e entrega no mesmo raciocínio.',
  /** Fotos em public/renan/. Deixe vazio para cair no monograma. */
  photo: '/renan/renan-retrato.webp',
  photoAlt: 'Renan Gonçalves',
  /** Close-up, usado como avatar no contato. */
  photoClose: '/renan/renan-close.webp',
  /** Na mesa de trabalho, usado na seção de processo. */
  photoDesk: '/renan/renan-mesa.webp',
} as const;

export const about = {
  intro:
    'Tenho 21 anos e sou do Rio. A tecnologia me pegou cedo: aos 14 anos entrei no meu primeiro curso profissionalizante, com foco em desenvolvimento de jogos.',
  body: [
    'No ensino médio cursei o técnico em Jogos Digitais pela Firjan SENAI do Maracanã, onde transformei o interesse em método: design, código e entrega de verdade.',
    'Hoje estou no penúltimo período de Análise e Desenvolvimento de Sistemas. Nunca me limitei à universidade — construí projetos pessoais, fiz cursos e participei de competições e hackathons, com dois pódios no caminho.',
    'No trabalho, desenvolvo soluções internas para a BlueVecHub: sistemas de atendimento, integrações com modelos de linguagem e arquitetura de workspace para equipes.',
  ],
  timeline: [
    {
      year: '2019',
      title: 'Primeiro curso profissionalizante',
      detail: 'Aos 14 anos, com foco em desenvolvimento de jogos.',
    },
    {
      year: '2020 — 2022',
      title: 'Técnico em Jogos Digitais',
      detail: 'Firjan SENAI Maracanã. Unity, C#, game design e produção.',
    },
    {
      year: '2023 — hoje',
      title: 'Análise e Desenvolvimento de Sistemas',
      detail: 'Penúltimo período. Web, back-end e arquitetura de software.',
    },
    {
      year: '2025 — hoje',
      title: 'Desenvolvedor na BlueVecHub',
      detail: 'Sistemas internos, integrações com IA e automação de processos.',
    },
  ],
} as const;
