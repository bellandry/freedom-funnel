"use client";

import { QUESTIONS } from "@/constants";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FilterForm() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = contact info, 1+ = questions
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
  });
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ email: "", phone: "" });
  const [isSuccess, setIsSuccess] = useState(false);

  const totalSteps = QUESTIONS.length + 1; // +1 pour l'étape des coordonnées
  const currentQuestionIndex = currentStep - 1;
  const currentQuestion =
    currentStep > 0 ? QUESTIONS[currentQuestionIndex] : null;
  const isContactStep = currentStep === 0;
  const isFirstStep = currentStep === 0;
  const isLastQuestion = currentStep === QUESTIONS.length;
  const hasAnsweredCurrent = currentQuestion
    ? answers[currentQuestion.id] !== undefined
    : false;

  // Vérifier si la réponse à la dernière question est "Non" (question 5)
  const lastQuestionAnswer = answers[5];
  const isQualified = lastQuestionAnswer !== "Non";

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\d\s+()-]{10,}$/;
    return phoneRegex.test(phone);
  };

  const handleContactInfoChange = (field: "email" | "phone", value: string) => {
    setContactInfo((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSelectOption = (option: string) => {
    if (currentQuestion) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: option,
      }));
    }
  };

  const handleNext = () => {
    if (isContactStep) {
      // Valider les informations de contact
      const newErrors = { email: "", phone: "" };

      if (!contactInfo.email) {
        newErrors.email = "L'email est requis";
      } else if (!validateEmail(contactInfo.email)) {
        newErrors.email = "Email invalide";
      }

      if (!contactInfo.phone) {
        newErrors.phone = "Le numéro de téléphone est requis";
      } else if (!validatePhone(contactInfo.phone)) {
        newErrors.phone = "Numéro de téléphone invalide";
      }

      if (newErrors.email || newErrors.phone) {
        setErrors(newErrors);
        return;
      }
    }

    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Préparer les données pour l'API
      const formData = {
        contactInfo,
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

      // Passer à l'étape finale (succès)
      setIsSuccess(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      // Même en cas d'erreur d'envoi email, on passe à l'étape suivante pour rediriger vers WhatsApp
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    // Préparer le message WhatsApp avec les réponses
    const responsesSummary = QUESTIONS.map(
      (q, index) =>
        `${index + 1}. ${q.text}\nRéponse: ${answers[q.id] || "Non répondu"}`,
    ).join("\n\n");

    const PHONE_NUMBER = "33660989463";
    const message = encodeURIComponent(
      `Bonjour Diane, j'ai complété le questionnaire Freedom Digital.\n\nMes coordonnées:\n📧 Email: ${contactInfo.email}\n📱 Téléphone: ${contactInfo.phone}\n\nMes réponses:\n\n${responsesSummary}\n\nJe suis prêt(e) à discuter de mon projet avec vous.`,
    );

    // Redirection vers WhatsApp
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const canProceed = isContactStep
    ? contactInfo.email && contactInfo.phone && !errors.email && !errors.phone
    : hasAnsweredCurrent;

  // Pour la dernière question, vérifier aussi la qualification
  const canSubmit = hasAnsweredCurrent && isQualified;

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
          {isSuccess
            ? "Vos réponses ont bien été enregistrées"
            : isContactStep
              ? "Commençons par vos coordonnées"
              : "Quelques questions pour mieux vous connaître"}
        </p>
      </div>

      {/* Progress bar élégante */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-slate-600 font-medium">
            {isSuccess
              ? "Terminé !"
              : isContactStep
                ? "Vos coordonnées"
                : `Question ${currentQuestionIndex + 1} sur ${QUESTIONS.length}`}
          </span>
          <span className="text-sm text-gold font-bold">
            {isSuccess
              ? "100%"
              : `${Math.round(((currentStep + 1) / totalSteps) * 100)}%`}
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
          <div
            className="bg-linear-to-r from-gold to-[#e3c363] h-3 rounded-full transition-all duration-500 shadow-gold-glow"
            style={{
              width: isSuccess
                ? "100%"
                : `${((currentStep + 1) / totalSteps) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Contenu dynamique */}
      <div className="mb-10">
        {isSuccess ? (
          // Écran de succès
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif-luxury">
              Merci pour vos réponses !
            </h3>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Vos informations ont été transmises. Cliquez sur le bouton
              ci-dessous pour démarrer la conversation avec Diane sur WhatsApp
              avec toutes vos réponses pré-remplies.
            </p>

            <button
              onClick={handleWhatsAppRedirect}
              className="w-full md:w-auto px-8 py-5 rounded-full font-bold text-lg uppercase tracking-wider bg-[#25D366] text-white shadow-xl hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-3 mx-auto animate-pulse"
            >
              <MessageCircle className="w-6 h-6" />
              Discuter avec Diane sur WhatsApp
            </button>
          </div>
        ) : isContactStep ? (
          // Étape des coordonnées
          <div>
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Adresse email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactInfo.email}
                  onChange={(e) =>
                    handleContactInfoChange("email", e.target.value)
                  }
                  placeholder="votre@email.com"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 text-lg ${
                    errors.email
                      ? "border-red-500 bg-red-50"
                      : "border-slate-200 focus:border-gold focus:bg-slate-50"
                  } outline-none`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Téléphone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Numéro de téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={contactInfo.phone}
                  onChange={(e) =>
                    handleContactInfoChange("phone", e.target.value)
                  }
                  placeholder="+33 6 12 34 56 78"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 text-lg ${
                    errors.phone
                      ? "border-red-500 bg-red-50"
                      : "border-slate-200 focus:border-gold focus:bg-slate-50"
                  } outline-none`}
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <p className="text-sm text-slate-500 italic">
                🔒 Vos informations sont confidentielles et ne seront utilisées
                que pour vous contacter.
              </p>
            </div>
          </div>
        ) : (
          // Questions du questionnaire
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 font-serif-luxury leading-tight">
              {currentQuestion?.text}
            </h3>

            {/* Options avec style luxueux */}
            <div className="space-y-4">
              {currentQuestion?.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelectOption(option)}
                  className={`w-full p-5 text-left rounded-xl border-2 transition-all duration-300 ${
                    answers[currentQuestion.id] === option
                      ? "border-gold bg-linear-to-r from-gold/10 to-[#e3c363]/10 shadow-gold-glow"
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
        )}
      </div>

      {/* Navigation buttons avec style CTA (masqués si succès) */}
      {!isSuccess && (
        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-slate-200">
          <button
            onClick={handlePrevious}
            disabled={isFirstStep}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
              isFirstStep
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
              disabled={!canProceed}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 uppercase tracking-wider ${
                !canProceed
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
              disabled={!canSubmit || isSubmitting}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 uppercase tracking-wider ${
                !canSubmit || isSubmitting
                  ? "opacity-40 cursor-not-allowed bg-slate-300 text-slate-500"
                  : "cta-red text-white shadow-2xl"
              }`}
            >
              {isSubmitting ? "Envoi en cours..." : "Valider mes réponses"}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
