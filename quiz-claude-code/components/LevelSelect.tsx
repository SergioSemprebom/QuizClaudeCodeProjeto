import type { Level } from "@/data/questions";

type LevelOption = {
  level: Level;
  title: string;
  description: string;
};

const LEVELS: LevelOption[] = [
  {
    level: "iniciante",
    title: "Iniciante",
    description: "O que é o Claude Code, para que serve e comandos básicos.",
  },
  {
    level: "intermediario",
    title: "Intermediário",
    description: "Slash commands, fluxo de trabalho e permissões no dia a dia.",
  },
  {
    level: "avancado",
    title: "Avançado",
    description: "Hooks, MCP, subagents, skills e o Claude Agent SDK.",
  },
];

export default function LevelSelect({
  onSelect,
}: {
  onSelect: (level: Level) => void;
}) {
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-8 px-4 text-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Quiz: Claude Code
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Teste seus conhecimentos com 10 perguntas de Verdadeiro ou Falso.
          Escolha um nível para começar.
        </p>
      </div>

      <div className="flex w-full flex-col gap-4">
        {LEVELS.map((option) => (
          <button
            key={option.level}
            onClick={() => onSelect(option.level)}
            className="group flex w-full flex-col gap-1 rounded-xl border border-zinc-200 bg-white px-6 py-4 text-left shadow-sm transition hover:border-orange-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <span className="text-lg font-semibold text-zinc-900 group-hover:text-orange-600 dark:text-zinc-50">
              {option.title}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {option.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
