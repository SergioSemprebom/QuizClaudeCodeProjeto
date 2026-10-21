---
# Convenções de UI — carrega ao tocar app/ ou components/
paths:
  - "app/**"
  - "components/**"
---

Todo componente que tem estado ou handler de clique é `"use client"` no topo do arquivo.

Estado fica local (`useState`/`useReducer`) dentro de `QuizApp`; os demais componentes (`LevelSelect`, `QuestionCard`, `ResultSummary`) são apresentacionais, recebem dados e callbacks por props — não têm `useState` próprio salvo necessidade local trivial.

Estilização só com classes utilitárias do Tailwind — sem CSS Modules, sem styled-components.

Todo texto visível pro usuário é em português do Brasil.

Botões interativos precisam de foco visível e contraste adequado (acessibilidade básica já usada em `QuestionCard`/`ResultSummary` — manter o padrão).

Não introduzir chamada de API, `fetch` para backend próprio, nem `localStorage` para guardar progresso do quiz — ver invariantes em `CLAUDE.md`.
