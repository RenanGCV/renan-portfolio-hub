export const contact = {
  whatsappNumber: '5521972661951',
  whatsappLabel: '(21) 97266-1951',
  email: 'renan.gcv.contato@gmail.com',
  location: 'Rio de Janeiro, RJ',
  availability: 'Disponível para projetos',
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (subject: string) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;

export const social = [
  {
    name: 'GitHub',
    handle: '@RenanGCV',
    url: 'https://github.com/RenanGCV',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    handle: 'Renan Gonçalves',
    url: 'https://www.linkedin.com/in/renan-gon%C3%A7alves-9a8b47268/',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    handle: '@rena.gcv',
    url: 'https://www.instagram.com/rena.gcv/',
    icon: 'instagram',
  },
] as const;
