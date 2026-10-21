---
description: Adiciona uma nova pergunta V/F ao quiz
argument-hint: "[nivel] [tema]"
---

Argumentos: `$ARGUMENTS` — nível (`iniciante`/`intermediario`/`avancado`) e tema da pergunta nova.

1. Leia `.claude/rules/content.md` pra relembrar o formato e as regras de nível.
2. Leia `data/questions.ts` pra ver o próximo `id` livre no nível pedido e evitar duplicar conteúdo já coberto.
3. Escreva uma pergunta no formato `Question` (`id`, `level`, `statement`, `answer`, `explanation`, `category?`) sobre o tema pedido, coerente com o nível.
4. Insira a pergunta no bloco do nível certo em `data/questions.ts`, mantendo a ordem.
5. Rode `npx tsc --noEmit`.
6. Acione o subagente `revisor-quiz` pra revisar a pergunta antes de considerar a tarefa concluída.
