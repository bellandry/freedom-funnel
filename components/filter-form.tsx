"use client";

import { QUESTIONS } from "@/constants";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FilterForm() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;
  const hasAnsweredCurrent = answers[currentQuestion.id] !== undefined;

  const handleSelectOption = (option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Préparer les données pour l'API
      const formData = {
        answers: QUESTIONS.map((q) => ({
          questionId: q.id,
          question: q.text,
          answer: answers[q.id] || "Non répondu",
        })),
        submittedAt: new Date().toISOString(),
      };

      // Envoyer les données par email
      await fetch("/api/submit-funnel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Préparer le message WhatsApp avec les réponses
      const responsesSummary = QUESTIONS.map(
        (q, index) =>
          `${index + 1}. ${q.text}\nRéponse: ${answers[q.id] || "Non répondu"}`,
      ).join("\n\n");

      const PHONE_NUMBER = "33660989463";
      const message = encodeURIComponent(
        `Bonjour Diane, j'ai complété le questionnaire Freedom Digital. Voici mes réponses:\n\n${responsesSummary}\n\nJe suis prêt(e) à discuter de mon projet avec vous.`,
      );

      // Redirection vers WhatsApp
      const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${message}`;
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      // Même en cas d'erreur d'envoi email, on redirige vers WhatsApp
      const responsesSummary = QUESTIONS.map(
        (q, index) =>
          `${index + 1}. ${q.text}\nRéponse: ${answers[q.id] || "Non répondu"}`,
      ).join("\n\n");

      const PHONE_NUMBER = "33660989463";
      const message = encodeURIComponent(
        `Bonjour Diane, j'ai complété le questionnaire Freedom Digital. Voici mes réponses:\n\n${responsesSummary}\n\nJe suis prêt(e) à discuter de mon projet avec vous.`,
      );

      const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${message}`;
      window.open(whatsappUrl, "_blank");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* En-tête élégant */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-serif-luxury">
          Découvrez si{" "}
          <span className="text-gradient-gold italic">Freedom Digital</span>
          <br />
          est fait pour vous
        </h2>
        <p className="text-slate-600 text-lg font-light">
          Quelques questions pour mieux vous connaître
        </p>
      </div>

      {/* Progress bar élégante */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-slate-600 font-medium">
            Question {currentQuestionIndex + 1} sur {QUESTIONS.length}
          </span>
          <span className="text-sm text-gold font-bold">
            {Math.round(((currentQuestionIndex + 1) / QUESTIONS.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
          <div
            className="bg-gradient-to-r from-gold to-[#e3c363] h-3 rounded-full transition-all duration-500 shadow-gold-glow"
            style={{
              width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 font-serif-luxury leading-tight">
          {currentQuestion.text}
        </h3>

        {/* Options avec style luxueux */}
        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelectOption(option)}
              className={`w-full p-5 text-left rounded-xl border-2 transition-all duration-300 ${
                answers[currentQuestion.id] === option
                  ? "border-gold bg-gradient-to-r from-gold/10 to-[#e3c363]/10 shadow-gold-glow"
                  : "border-slate-200 hover:border-gold/50 hover:bg-slate-50"
              }`}
            >
              <span
                className={`font-medium text-lg ${
                  answers[currentQuestion.id] === option
                    ? "text-slate-900"
                    : "text-slate-700"
                }`}
              >
                {option}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation buttons avec style CTA */}
      <div className="flex justify-between items-center gap-4 pt-6 border-t border-slate-200">
        <button
          onClick={handlePrevious}
          disabled={isFirstQuestion}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
            isFirstQuestion
              ? "opacity-40 cursor-not-allowed text-slate-400"
              : "text-slate-700 hover:bg-slate-100 border border-slate-300"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          Précédent
        </button>

        {!isLastQuestion ? (
          <button
            onClick={handleNext}
            disabled={!hasAnsweredCurrent}
            className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 uppercase tracking-wider ${
              !hasAnsweredCurrent
                ? "opacity-40 cursor-not-allowed bg-slate-300 text-slate-500"
                : "cta-red text-white shadow-xl"
            }`}
          >
            Suivant
            <ChevronRight className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!hasAnsweredCurrent || isSubmitting}
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 uppercase tracking-wider ${
              !hasAnsweredCurrent || isSubmitting
                ? "opacity-40 cursor-not-allowed bg-slate-300 text-slate-500"
                : "cta-red text-white shadow-2xl"
            }`}
          >
            {isSubmitting ? "Envoi en cours..." : "Contacter Diane"}
            <MessageCircle className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
