export interface Service {
  title: string;
  /** Para quem é. */
  audience: string;
  /** Qual problema resolve. */
  problem: string;
  /** O que você recebe. */
  deliverables: string[];
  icon: 'layout' | 'server' | 'sparkles' | 'gamepad';
}

export const services: Service[] = [
  {
    title: 'Sites e landing pages',
    audience: 'Para quem vende um serviço e ainda depende só do boca a boca.',
    problem: 'Ninguém encontra seu trabalho, e quem encontra não sabe como te contratar.',
    deliverables: [
      'Página rápida, responsiva e com texto que explica o serviço',
      'Contato direto por WhatsApp e formulário',
      'Publicação, domínio e ajustes depois do lançamento',
    ],
    icon: 'layout',
  },
  {
    title: 'Sistemas web e APIs',
    audience: 'Para negócios que gerenciam agenda, clientes ou caixa na planilha.',
    problem: 'O processo existe, mas vive espalhado entre caderno, WhatsApp e Excel.',
    deliverables: [
      'Painel com login, permissões e os fluxos do seu dia a dia',
      'API própria ou integração com o que você já usa',
      'Relatórios e histórico no lugar da planilha',
    ],
    icon: 'server',
  },
  {
    title: 'IA aplicada ao seu processo',
    audience: 'Para equipes que repetem a mesma tarefa manual toda semana.',
    problem: 'A informação existe, mas está espalhada — e alguém gasta horas procurando.',
    deliverables: [
      'Busca sobre a sua documentação com respostas citando a fonte',
      'Integração das suas ferramentas com assistentes de IA',
      'Automação dos passos repetitivos, com você no controle',
    ],
    icon: 'sparkles',
  },
  {
    title: 'Jogos e protótipos',
    audience: 'Para quem quer testar uma ideia interativa antes de investir nela.',
    problem: 'A ideia só convence quando dá para jogar, não quando está no slide.',
    deliverables: [
      'Protótipo jogável em Unity',
      'Game design documentado',
      'Build publicada para você mostrar a quem precisa',
    ],
    icon: 'gamepad',
  },
];

export const process = [
  {
    step: 'Entender',
    detail: 'Converso com você, entendo o problema e digo o que dá para fazer — e o que não dá.',
  },
  { step: 'Construir', detail: 'Desenvolvo em entregas curtas, com algo funcionando desde cedo.' },
  { step: 'Ajustar', detail: 'Você usa, me diz o que incomoda e eu corrijo antes de publicar.' },
  { step: 'Publicar', detail: 'Coloco no ar, entrego o acesso e acompanho os primeiros dias.' },
];
