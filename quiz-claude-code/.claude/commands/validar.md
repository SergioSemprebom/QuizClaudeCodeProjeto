---
description: Gate rápido de validação — tsc + eslint. Rode antes de cada commit.
---

Rode, em sequência:

1. `npx tsc --noEmit`
2. `npx eslint .`

Se algo falhar, corrija o código (não silencie erro sem justificativa, não desative regra de lint pra passar). A tarefa só está pronta quando os dois comandos passam limpos. Não faça commit com qualquer um deles falhando.
