---
# Convenções de conteúdo das perguntas — carrega ao tocar data/
paths:
  - "data/**"
---

Toda pergunta segue o tipo `Question` de `data/questions.ts`: `id`, `level`, `statement`, `answer`, `explanation`, `category?`.

`id` é único no arquivo inteiro (convenção: prefixo de 3 letras do nível + número, ex: `ini-11`, `int-11`, `avc-11`).

`statement` é uma afirmação única e verificável — nunca duas afirmações numa só pergunta, nunca opinião, nunca "depende". Tem que dar pra responder Verdadeiro ou Falso sem ambiguidade.

`explanation` tem 1–2 linhas, explica por que a resposta é aquela — não repete o enunciado.

Nível certo importa:
- `iniciante`: o que é o Claude Code, pra que serve, comandos de CLI bem básicos.
- `intermediario`: slash commands, fluxo de trabalho (plan mode, git, permissões), uso prático do dia a dia.
- `avancado`: hooks, MCP, subagents, skills, SDK, plugins, `.claude/` (agent harness).

Nunca tirar ou adicionar nível, nem mudar a contagem de 10 perguntas por nível sem o usuário pedir — ver invariantes em `CLAUDE.md`.
