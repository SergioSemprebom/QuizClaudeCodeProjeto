# PRD — Quiz Web: Claude Code

## 1. Visão de negócio

**Produto:** aplicação web de quiz do tipo Verdadeiro/Falso sobre a ferramenta **Claude Code**, com perguntas organizadas em três níveis de dificuldade.

**Objetivo:** educar e engajar usuários (devs, curiosos, time interno) sobre o que é e como funciona o Claude Code, do conceito básico até recursos avançados, de forma leve e gamificada.

**Público-alvo:**
- Iniciante: pessoas que nunca usaram ou usaram pouco o Claude Code, querem entender o conceito e comandos básicos.
- Intermediário/Avançado: devs que já usam Claude Code no dia a dia e querem testar conhecimento sobre fluxo de trabalho, slash commands e recursos avançados (hooks, MCP, subagents, skills, SDK, permissions).

**Proposta de valor:** quiz rápido (~30 perguntas, 10 por nível), sem cadastro, sem backend, feedback imediato com explicação curta após cada resposta — serve tanto como material de onboarding quanto de autoavaliação.

**Fora de escopo (v1):**
- Persistência de resultado entre sessões/dispositivos (sem login, sem banco de dados).
- Ranking/leaderboard compartilhado.
- Timer por pergunta.
- Múltiplos idiomas (v1 em português do Brasil).

## 2. Estrutura do conteúdo (perguntas)

- **Formato:** Verdadeiro ou Falso. Cada pergunta tem: enunciado, resposta correta (true/false), explicação curta (1–2 linhas) exibida após o usuário responder, nível (iniciante/intermediario/avancado) e categoria/tag opcional.
- **Total:** 30 perguntas — 10 por nível.
- **Níveis fixos:** o usuário escolhe o nível antes de começar; cada rodada contém apenas perguntas daquele nível (sem mistura).
  - **Iniciante:** conceito do que é o Claude Code, para que serve, casos de uso básicos, e comandos/fluxo de CLI mais simples (ex: iniciar sessão, comandos básicos). Serve de ponte entre contexto de negócio e primeiro uso prático.
  - **Intermediário:** uso prático de CLI — slash commands, flags comuns, fluxo de trabalho (plan mode, edição de arquivos, git, permissões básicas).
  - **Avançado:** recursos avançados — hooks, MCP (Model Context Protocol), subagents, skills, SDK, configuração de permissions, settings.json.
- **Fonte de verdade do conteúdo das perguntas:** documentação oficial do Claude Code. O time de conteúdo (ou o próprio Claude Code ao implementar) deve redigir as 30 perguntas finais com base na documentação; este PRD define apenas estrutura e distribuição, não o texto final das perguntas.

## 3. Requisitos funcionais

1. Tela inicial: título do quiz, breve descrição, seleção de nível (3 botões/cards: Iniciante, Intermediário, Avançado).
2. Tela de pergunta: exibe enunciado, dois botões (Verdadeiro / Falso), indicador de progresso (ex: "Pergunta 3 de 10").
3. Ao responder: feedback imediato — indica se acertou ou errou, mostra a explicação da resposta correta, botão "Próxima pergunta".
4. Tela de resultado final: pontuação (ex: "8/10"), mensagem conforme desempenho, opções de "Jogar de novo" (mesmo nível) e "Escolher outro nível" (volta à tela inicial).
5. Sem timer — usuário avança no próprio ritmo.
6. Sem persistência entre sessões — estado vive apenas em memória/sessão do navegador (perda ao recarregar é aceitável em v1; não é requisito usar localStorage).

## 4. Requisitos técnicos

**Stack:** Next.js (App Router), React, TypeScript recomendado. Sem backend/API externa — tudo client-side.

**Estrutura de dados sugerida:**
```ts
type Question = {
  id: string;
  level: "iniciante" | "intermediario" | "avancado";
  statement: string;
  answer: boolean;
  explanation: string;
  category?: string;
};
```
- Perguntas armazenadas em arquivo estático (ex: `data/questions.ts` ou `.json`), importado direto pelos componentes — sem chamada de API.

**Componentes principais:**
- `LevelSelect` — tela inicial de escolha de nível.
- `QuizSession` — controla estado da rodada (pergunta atual, respostas, pontuação).
- `QuestionCard` — exibe pergunta + botões V/F + feedback/explicação.
- `ResultSummary` — tela final com pontuação e ações.

**Gerenciamento de estado:** local (useState/useReducer) dentro do componente de sessão do quiz; não é necessário estado global (Context/Redux) dado o escopo.

**Estilo/UI:** responsivo (mobile e desktop), visual simples e limpo; pode usar Tailwind CSS para agilidade (decisão de implementação livre do Claude Code).

**Acessibilidade:** botões com foco visível e navegáveis por teclado; contraste de cores adequado.

**Deploy:** não definido em v1 — projeto deve rodar localmente via `npm run dev`; deploy (Vercel, etc.) pode ser decidido depois, fora deste PRD.

## 5. Critérios de aceite

- [ ] Usuário consegue escolher entre os 3 níveis na tela inicial.
- [ ] Cada nível roda exatamente 10 perguntas Verdadeiro/Falso daquele nível, sem repetir.
- [ ] Após cada resposta, sistema mostra correto/incorreto + explicação antes de avançar.
- [ ] Ao final, mostra pontuação total e permite reiniciar (mesmo nível) ou voltar para escolha de nível.
- [ ] Aplicação funciona sem necessidade de backend, login ou banco de dados.
- [ ] Layout funciona bem em viewport mobile (largura ~375px) e desktop.

## 6. Premissas e pendências

- O conteúdo exato das 30 perguntas (texto, resposta, explicação) **não** está definido neste PRD e deve ser gerado/validado com base na documentação oficial do Claude Code durante a implementação.
- Nível "Iniciante" absorve a camada de contexto de negócio (o que é/para que serve o Claude Code) mesmo sem uma categoria de conteúdo "Negócio/Conceito" dedicada, para atender ao pedido original de cobrir do nível de negócio ao avançado.
- Caso se queira evoluir para localStorage (salvar progresso) ou ranking compartilhado, tratar como v2 — não bloqueia a v1.
