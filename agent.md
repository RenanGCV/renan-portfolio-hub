r# Contexto do Projeto

Este repositorio e o portfolio atual de Renan Goncalves. A intencao e atualizar e mudar completamente a experiencia visual, narrativa e estrutura do site, mantendo uma base tecnica simples e facil de evoluir.

O projeto atual foi gerado pelo Lovable e usa:

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router
- lucide-react

## Estado Atual

A aplicacao tem uma unica rota principal (`/`) e esta concentrada em `src/pages/Index.tsx`, que renderiza:

- `Header`
- `Introduction`
- `Portfolio`
- `Services`
- `Contact`
- `Footer`

Os principais dados do portfolio estao hardcoded dentro dos componentes:

- Nome, headline e descricao pessoal em `Introduction.tsx`
- Projetos em `Portfolio.tsx`
- Servicos em `Services.tsx`
- Telefone, WhatsApp e redes sociais em `Contact.tsx`
- Links de navegacao em `Header.tsx` e `Footer.tsx`

## Diagnostico Inicial

Build de producao:

- `npm ci`: passou
- `npm run build`: passou
- `npm run lint`: falhou

Problemas conhecidos:

- O lint falha em arquivos gerados do shadcn/ui e no `tailwind.config.ts`.
- O projeto tem muitos componentes shadcn instalados que nao sao usados pela pagina atual.
- `React Query`, `Toaster` e `Sonner` estao configurados em `App.tsx`, mas nao parecem ter uso real.
- `README.md` e `index.html` ainda tem metadados genericos do Lovable.
- Existem dois lockfiles: `package-lock.json` e `bun.lockb`. A recomendacao inicial e padronizar em npm, porque o README e o lock principal apontam para npm.
- `npm audit --audit-level=high` reportou vulnerabilidades em dependencias transitivas, incluindo pacotes relacionados a `react-router-dom`, `vite/esbuild`, `rollup`, `lodash` e tooling.
- A UI atual funciona, mas tem aparencia generica, pouco contraste em alguns pontos e nao comunica uma identidade visual forte.

Validacao visual feita em `http://localhost:8080/`:

- A pagina carrega corretamente.
- O titulo da pagina e `Renan Goncalves - Desenvolvedor Full Stack`.
- Nao havia erros de console durante o smoke test.
- O toggle de tema funciona.
- O menu mobile abre e fecha corretamente.

## Direcao Recomendada

Nao tratar o trabalho como uma pequena melhoria visual. A melhor abordagem e refazer a experiencia do portfolio sobre a base tecnica existente.

Objetivo do novo portfolio:

- Comunicar melhor quem e Renan, que tipo de trabalho faz e quais problemas resolve.
- Priorizar projetos com mais contexto, resultado e links claros.
- Criar uma identidade visual propria, mais profissional e menos generica.
- Manter a stack enxuta, sem dependencias ou componentes desnecessarios.
- Facilitar manutencao futura separando conteudo de layout.

## Plano de Trabalho

### 1. Limpeza tecnica

- Padronizar o gerenciador de pacotes.
- Remover ou ignorar componentes shadcn/ui nao usados.
- Resolver erros de lint.
- Atualizar metadados em `index.html`.
- Revisar `README.md`.
- Avaliar atualizacao segura de dependencias.

### 2. Organizacao de conteudo

Criar uma camada de dados, por exemplo:

- `src/data/profile.ts`
- `src/data/projects.ts`
- `src/data/services.ts`
- `src/data/social.ts`

Essa camada deve conter:

- Informacoes pessoais e profissionais.
- Lista de tecnologias.
- Projetos com titulo, descricao, stack, links, imagem, tipo e destaque.
- Servicos ou tipos de trabalho oferecidos.
- Contatos e redes sociais.

### 3. Redesign

Refazer a interface considerando:

- Header limpo e fixo.
- Hero forte com posicionamento profissional claro.
- Secao de projetos com cards mais informativos.
- Secao de stack/skills mais objetiva.
- Secao de experiencia/formacao, se fizer sentido.
- CTA de contato mais direto.
- Responsividade mobile bem cuidada.
- Tema visual consistente e com melhor contraste.

Evitar:

- Layout com cara de template generico.
- Cards decorativos demais sem informacao util.
- Textos longos sem hierarquia.
- Dependencias novas sem necessidade clara.

### 4. Verificacao

Antes de considerar uma etapa concluida, rodar:

```sh
npm run build
npm run lint
```

Quando houver mudanca visual relevante, subir o servidor:

```sh
npm run dev
```

E validar no navegador:

- Desktop
- Mobile
- Console sem erros relevantes
- Menu
- Tema claro/escuro, se mantido
- Links principais
- CTAs de contato

## Arquivos Importantes

- `src/App.tsx`: providers, router e estrutura global.
- `src/pages/Index.tsx`: composicao atual da home.
- `src/components/Header.tsx`: navegacao e menu mobile.
- `src/components/Introduction.tsx`: hero atual.
- `src/components/Portfolio.tsx`: lista atual de projetos.
- `src/components/Services.tsx`: servicos atuais.
- `src/components/Contact.tsx`: contato, WhatsApp e redes.
- `src/components/Footer.tsx`: rodape.
- `src/index.css`: tokens CSS, tema claro/escuro e classes utilitarias.
- `tailwind.config.ts`: configuracao Tailwind.
- `package.json`: scripts e dependencias.

## Observacoes Para Proximos Chats

- Nao assumir que o objetivo e preservar o visual atual. O usuario quer mudar completamente o portfolio.
- Antes de fazer grandes mudancas, verificar se ha alteracoes locais com `git status --short`.
- Nao reverter mudancas existentes sem pedido explicito.
- Preferir edicoes pequenas e verificaveis.
- Manter textos em portugues do Brasil.
- Usar acentos normalmente nos arquivos de codigo/texto quando necessario.
- Se for criar nova identidade visual, propor e implementar uma direcao concreta, nao apenas listar possibilidades.
- Se precisar de dados profissionais novos que nao existem no repo, usar placeholders claros ou pedir informacoes especificas ao usuario.

