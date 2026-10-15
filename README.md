# Portfólio · Renan Gonçalves

Site pessoal com projetos, stack e serviços. Identidade **Concreto carioca**: concreto frio, grafite, ciano urbano, coral e amarelo quadra, conforme [docs/brand/brand-manual.md](docs/brand/brand-manual.md).

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · GSAP · React Router

## Rodar

```bash
npm install
npm run dev
```

O servidor sobe em http://localhost:8080.

```bash
npm run build   # build de produção
npm run lint    # ESLint
```

## Como editar o conteúdo

Todo o texto e os dados ficam em `src/data/` — os componentes só consomem:

| Arquivo | O que guarda |
| --- | --- |
| `profile.ts` | Nome, headline, bio e linha do tempo |
| `projects.ts` | Projetos, categorias e os números do hero (calculados da lista) |
| `stack.ts` | Grupos de tecnologias |
| `services.ts` | Serviços e etapas do processo |
| `achievements.ts` | Hackathons e conquistas |
| `social.ts` | WhatsApp, e-mail e redes — fonte única de contato |

Para adicionar um projeto, inclua um item em `projects` com `featured: true` para o card grande, ou sem a flag para a grade. Os números do hero se atualizam sozinhos.

## Mídia

- Prints dos projetos em `public/projects/`, 1280×720.
- Foto pessoal: coloque em `public/renan/` e aponte `profile.photo`. Vazio mostra o monograma.
- `favicon.svg`, `apple-touch-icon.png` e `og-image.png` são a marca R/GCV.
