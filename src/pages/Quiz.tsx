import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { quizQuestions } from "../data/mockData";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  ArrowRight,
} from "lucide-react";
import clsx from "clsx";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("quizBestScore");
    if (stored) {
      setBestScore(parseInt(stored, 10));
    }
  }, []);

  const handleAnswerSelect = (index: number) => {
    if (!isAnswerChecked) {
      setSelectedAnswer(index);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;

    setIsAnswerChecked(true);
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    } else {
      setShowResults(true);
      if (
        score +
          (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer
            ? 1
            : 0) >
        bestScore
      ) {
        const newBest =
          score +
          (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer
            ? 1
            : 0);
        setBestScore(newBest);
        localStorage.setItem("quizBestScore", newBest.toString());
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setScore(0);
    setShowResults(false);
  };

  const question = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-4"
        >
          Quiz <span className="text-[var(--color-neon-pink)]">Patente</span>
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
          Mettiti alla prova con le domande ufficiali. Migliora il tuo punteggio
          e preparati per l'esame.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-panel rounded-3xl p-6 md:p-10 border-white/10"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm font-mono text-gray-400 mb-2">
                <span>
                  Domanda {currentQuestionIndex + 1} di {quizQuestions.length}
                </span>
                <span>Punteggio: {score}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--color-neon-pink)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                {question.question}
              </h2>
              {question.image && (
                <div className="rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <img
                    src={question.image}
                    alt="Immagine quiz"
                    className="w-full h-auto object-cover max-h-64"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const showCorrect = isAnswerChecked && isCorrect;
                const showWrong = isAnswerChecked && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={isAnswerChecked}
                    className={clsx(
                      "w-full p-4 rounded-2xl border-2 text-left font-medium transition-all flex items-center justify-between",
                      !isAnswerChecked &&
                        isSelected &&
                        "border-[var(--color-neon-pink)] bg-[var(--color-neon-pink)]/10 text-white",
                      !isAnswerChecked &&
                        !isSelected &&
                        "border-white/10 bg-black/40 hover:bg-white/5 text-gray-300",
                      showCorrect &&
                        "border-[var(--color-neon-green)] bg-[var(--color-neon-green)]/20 text-[var(--color-neon-green)]",
                      showWrong && "border-red-500 bg-red-500/20 text-red-400",
                      isAnswerChecked &&
                        !isSelected &&
                        !isCorrect &&
                        "border-white/5 bg-black/20 text-gray-500 opacity-50",
                    )}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={clsx(
                          "w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm border",
                          !isAnswerChecked &&
                            isSelected &&
                            "border-[var(--color-neon-pink)] text-[var(--color-neon-pink)]",
                          !isAnswerChecked &&
                            !isSelected &&
                            "border-white/20 text-gray-400",
                          showCorrect &&
                            "border-[var(--color-neon-green)] text-[var(--color-neon-green)]",
                          showWrong && "border-red-500 text-red-500",
                          isAnswerChecked &&
                            !isSelected &&
                            !isCorrect &&
                            "border-white/10 text-gray-600",
                        )}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </span>

                    {showCorrect && (
                      <CheckCircle2
                        size={24}
                        className="text-[var(--color-neon-green)]"
                      />
                    )}
                    {showWrong && (
                      <XCircle size={24} className="text-red-500" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Actions */}
            <AnimatePresence>
              {isAnswerChecked && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm leading-relaxed"
                >
                  <strong className="text-white block mb-1">
                    Spiegazione:
                  </strong>
                  {question.explanation}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-end">
              {!isAnswerChecked ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={selectedAnswer === null}
                  className={clsx(
                    "px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all",
                    selectedAnswer !== null
                      ? "bg-[var(--color-neon-pink)] text-white hover:scale-105"
                      : "bg-white/10 text-gray-500 cursor-not-allowed",
                  )}
                >
                  Conferma Risposta
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-8 py-4 rounded-full font-bold uppercase tracking-wider bg-white text-black hover:scale-105 transition-all flex items-center gap-2"
                >
                  {currentQuestionIndex < quizQuestions.length - 1
                    ? "Prossima Domanda"
                    : "Vedi Risultati"}
                  <ArrowRight size={20} />
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel rounded-3xl p-10 border-white/10 text-center"
          >
            <div className="w-24 h-24 rounded-full bg-[var(--color-neon-yellow)]/20 flex items-center justify-center mx-auto mb-6">
              <Trophy size={48} className="text-[var(--color-neon-yellow)]" />
            </div>

            <h2 className="text-4xl font-display uppercase tracking-tight mb-2">
              Quiz Completato!
            </h2>

            <p className="text-gray-400 font-mono mb-8">
              Hai risposto correttamente a {score} domande su{" "}
              {quizQuestions.length}.
            </p>

            <div className="flex justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-5xl font-bold text-[var(--color-neon-pink)] mb-1">
                  {Math.round((score / quizQuestions.length) * 100)}%
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-mono">
                  Precisione
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-5xl font-bold text-[var(--color-neon-yellow)] mb-1">
                  {bestScore}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-mono">
                  Record
                </div>
              </div>
            </div>

            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-wider bg-[var(--color-neon-yellow)] text-black hover:scale-105 transition-all neon-shadow"
            >
              <RotateCcw size={20} /> Riprova
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
