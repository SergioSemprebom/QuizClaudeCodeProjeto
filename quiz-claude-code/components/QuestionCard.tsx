import type { Question } from "@/data/questions";

export default function QuestionCard({
  question,
  index,
  total,
  score,
  selected,
  onAnswer,
  onNext,
}: {
  question: Question;
  index: number;
  total: number;
  score: number;
  selected: boolean | null;
  onAnswer: (value: boolean) => void;
  onNext: () => void;
}) {
  const answered = selected !== null;
  const isCorrect = answered && selected === question.answer;

  return (
    <div className="flex w-full max-w-xl flex-col gap-6 px-4">
      <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
        <span>
          Pergunta {index + 1} de {total}
        </span>
        <span>Pontos: {score}</span>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
          {question.statement}
        </p>
      </div>

      {!answered ? (
        <div className="flex gap-4">
          <button
            onClick={() => onAnswer(true)}
            className="flex-1 rounded-xl border border-green-300 bg-green-50 py-3 font-semibold text-green-700 transition hover:bg-green-100 dark:border-green-800 dark:bg-green-950 dark:text-green-400"
          >
            Verdadeiro
          </button>
          <button
            onClick={() => onAnswer(false)}
            className="flex-1 rounded-xl border border-red-300 bg-red-50 py-3 font-semibold text-red-700 transition hover:bg-red-100 dark:border-red-800 dark:bg-red-950 dark:text-red-400"
          >
            Falso
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div
            className={`rounded-xl border p-4 ${
              isCorrect
                ? "border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950"
                : "border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950"
            }`}
          >
            <p
              className={`font-semibold ${
                isCorrect
                  ? "text-green-700 dark:text-green-400"
                  : "text-red-700 dark:text-red-400"
              }`}
            >
              {isCorrect
                ? "Certo!"
                : `Errado — a resposta correta é "${
                    question.answer ? "Verdadeiro" : "Falso"
                  }".`}
            </p>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
              {question.explanation}
            </p>
          </div>

          <button
            onClick={onNext}
            className="rounded-xl bg-zinc-900 py-3 font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {index + 1 < total ? "Próxima pergunta" : "Ver resultado"}
          </button>
        </div>
      )}
    </div>
  );
}
