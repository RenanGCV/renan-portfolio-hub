export interface Achievement {
  title: string;
  event: string;
  year: string;
  result: string;
  detail: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Hack-in-Rio',
    event: 'Hack-in-Rio',
    year: '2022',
    result: 'Equipe vencedora',
    detail: 'Primeira competição em que entrei, ainda no técnico — e a equipe levou.',
  },
  {
    title: 'Plataforma jovens na política',
    event: 'Hackathon Youth Summit',
    year: '2022',
    result: '4º lugar',
    detail:
      'Plataforma para aproximar jovens da política, criada no Youth Summit da Usina do Trabalho com a Prefeitura do Rio.',
  },
  {
    title: 'Conecta Merenda',
    event: 'Devs de Impacto',
    year: '2025',
    result: '14º de 50 equipes',
    detail:
      'Plataforma de compras do PNAE ligando escolas públicas a agricultores familiares. Equipe de quatro, dois desenvolvedores.',
  },
];

export const achievementsSummary =
  'Disputo hackathons desde o técnico. É onde eu aprendo mais rápido: pouco tempo, time novo e um problema real para resolver.';

/** Foto do certificado do Youth Summit 2022. */
export const achievementsPhoto = {
  src: '/renan/hackathon-youth-summit-2022.jpg',
  alt: 'Renan com o certificado de 4º lugar do Hackathon Youth Summit 2022',
};
