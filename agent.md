# Contexto do projeto

Portfolio pessoal do Renan Goncalves. React 18 + TypeScript + Vite + Tailwind + GSAP.
O rebrand "Concreto carioca" ja foi aplicado (branch `rebrand/concreto-carioca`).

## Regras

- Todo texto em pt-BR, primeira pessoa, tom direto. Sem jargao corporativo.
- Conteudo vive em `src/data/`. Componentes nao tem texto hardcoded.
- Nada sigiloso da BlueVecHub no codigo: sem prints, URLs internas, nomes de cliente ou trechos de codigo.
- Nao inventar numeros. Os stats do hero saem da lista real de projetos.
- Paleta e tipografia seguem `docs/brand/brand-manual.md`.

## Estado atual

- Paleta: concreto `#F4F7F6`, grafite `#101417`, ciano `#00C2B8`, coral `#FF6B4A`, amarelo `#F7C948`.
- Fontes: Inter, Space Grotesk (display), JetBrains Mono.
- Secoes: Hero, Projetos, Stack, Sobre, Servicos, Contato.
- Fundo do hero: canvas animado em `CourtBackground.tsx`. Sem video.
- Lighthouse mobile: acessibilidade 100, boas praticas 100, SEO 100.

## Pendencias

- Nomes, anos e posicoes dos 2 hackathons com podio (hoje so o Devs de Impacto esta em `achievements.ts`).
- Confirmar o link do LinkedIn em `social.ts`.
- Revisar os textos do bloco BlueVecHub em `projects.ts` antes de publicar.

## Verificacao

```bash
npm run build
npm run lint
npm run dev   # conferir 1440 / 768 / 375, tema claro e escuro, menu mobile
```
