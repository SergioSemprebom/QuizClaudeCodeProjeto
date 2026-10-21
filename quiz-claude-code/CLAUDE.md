# Quiz: Claude Code

Índice durável do projeto — carregado em toda sessão aqui dentro. Convenções específicas por área ficam em `.claude/rules/`.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4. Sem backend, sem banco de dados, sem persistência entre sessões. Tudo client-side.

## Comandos

- `npm run dev` — sobe o dev server (porta 3000).
- `/validar` — gate rápido: `tsc --noEmit` + `eslint`.
- `/add-question` — adiciona uma pergunta nova ao quiz.

## Invariantes

- 3 níveis fixos (`iniciante`, `intermediario`, `avancado`) — não adicionar/remover/renomear nível. O quiz nasceu com 10 perguntas por nível (30 total); `/add-question`, quando o usuário pedir explicitamente, pode acrescentar perguntas além desse número — isso não quebra o invariante.
- Só Verdadeiro/Falso. Sem múltipla escolha, sem timer.
- Sem backend, sem API route, sem banco — não introduzir nenhum dos três.
- Sem persistência entre sessões (não usar localStorage para o resultado do quiz).

## Onde fica o quê

- `data/questions.ts` — todas as perguntas (tipo `Question`).
- `components/` — `LevelSelect`, `QuestionCard`, `ResultSummary`, `QuizApp` (orquestra o estado).
- `app/page.tsx` — só renderiza `QuizApp`.
- `.claude/rules/frontend.md` — convenções de componentes/UI.
- `.claude/rules/content.md` — convenções de como escrever uma pergunta.
- `.claude/agents/revisor-quiz.md` — subagente que revisa perguntas novas.
- `prd.md` (na raiz do workspace, fora deste projeto) — PRD original que originou este projeto.
