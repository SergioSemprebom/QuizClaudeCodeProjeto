"use client";

import { useMemo, useState } from "react";
import { questions, type Level } from "@/data/questions";
import LevelSelect from "./LevelSelect";
import QuestionCard from "./QuestionCard";
import ResultSummary from "./ResultSummary";

type Phase = "select" | "playing" | "result";

export default function QuizApp() {
  const [phase, setPhase] = useState<Phase>("select");
  const [level, setLevel] = useState<Level | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<boolean | null>(null);

  const levelQuestions = useMemo(
    () => questions.filter((q) => q.level === level),
    [level]
  );

  function startLevel(nextLevel: Level) {
    setLevel(nextLevel);
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setPhase("playing");
  }

  function handleAnswer(value: boolean) {
    if (selected !== null) return;
    setSelected(value);
    const current = levelQuestions[currentIndex];
    if (value === current.answer) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (currentIndex + 1 < levelQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
    } else {
      setPhase("result");
    }
  }

  function retrySameLevel() {
    if (level) startLevel(level);
  }

  function backToLevelSelect() {
    setPhase("select");
    setLevel(null);
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-zinc-50 py-16 dark:bg-black">
      {phase === "select" && <LevelSelect onSelect={startLevel} />}

      {phase === "playing" && level && (
        <QuestionCard
          question={levelQuestions[currentIndex]}
          index={currentIndex}
          total={levelQuestions.length}
          score={score}
          selected={selected}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}

      {phase === "result" && level && (
        <ResultSummary
          level={level}
          score={score}
          total={levelQuestions.length}
          onRetry={retrySameLevel}
          onChooseLevel={backToLevelSelect}
        />
      )}
    </div>
  );
}
