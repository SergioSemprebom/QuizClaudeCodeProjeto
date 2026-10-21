import type { Level } from "@/data/questions";

const LEVEL_LABEL: Record<Level, string> = {
  iniciante: "Iniciante",
  intermediario: "Intermediário",
  avancado: "Avançado",
};

function getMessage(score: number, total: number) {
  const ratio = score / total;
  if (ratio === 1) return "Perfeito! Você domina este nível. 🏆";
  if (ratio >= 0.7) return "Muito bom! Você conhece bem o assunto.";
  if (ratio >= 0.4) return "Bom começo — vale revisar alguns pontos.";
  return "Esse nível ainda precisa de mais estudo. Tente de novo!";
}

export default function ResultSummary({
  level,
  score,
  total,
  onRetry,
  onChooseLevel,
}: {
  level: Level;
  score: number;
  total: number;
  onRetry: () => void;
  onChooseLevel: () => void;
}) {
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-6 px-4 text-center">
      <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700 dark:bg-orange-950 dark:text-orange-400">
        Nível {LEVEL_LABEL[level]}
      </span>

      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Você acertou {score} de {total}
      </h2>

      <p className="text-base text-zinc-600 dark:text-zinc-400">
        {getMessage(score, total)}
      </p>

      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <button
          onClick={onRetry}
          className="flex-1 rounded-xl bg-zinc-900 py-3 font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Jogar de novo
        </button>
        <button
          onClick={onChooseLevel}
          className="flex-1 rounded-xl border border-zinc-300 py-3 font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Escolher outro nível
        </button>
      </div>
    </div>
  );
}
