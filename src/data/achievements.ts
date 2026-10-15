export interface Achievement {
  title: string;
  event: string;
  year: string;
  result: string;
  detail: string;
  highlight?: boolean;
}

export const achievements: Achievement[] = [
  {
    title: 'Conecta Merenda',
    event: 'Devs de Impacto',
    year: '2025',
    result: '14º de 50 equipes',
    detail:
      'Plataforma de compras do PNAE ligando escolas públicas a agricultores familiares. Equipe de quatro, dois desenvolvedores.',
    highlight: true,
  },
];

export const achievementsSummary =
  'Participo de hackathons desde a faculdade — dois deles terminaram com a equipe no pódio.';
