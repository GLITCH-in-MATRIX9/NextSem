"use client";

import { useState } from "react";
import StarsBackground from "./StarsBackground";
import ProgressBar from "./ProgressBar";
import NavigationButtons from "./NavigationButtons";
import FormContainer from "./FormContainer";

export default function JoinTeam() {
  const [step, setStep] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    college: "",
    year: "",
    email: "",
    interest: "",
    technologies: [],
    otherTech: "",
    experience: "",
    availability: "",
    motivation: "",
    contributions: [],
    github: "",
    portfolio: "",
    agreement: false,
  });

  const handleNext = () => {
    if (step < 8 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setStep(step + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const handleBack = () => {
    if (step > 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setStep(step - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center px-4">
      
      <StarsBackground />

      <div className="max-w-6xl w-full text-center text-white z-10">
        
        <h2 className="text-4xl font-semibold mb-6">
          Want to Join our team?
        </h2>

        <ProgressBar step={step} />

        <div className="flex items-center justify-center gap-6 mt-8">
          
          <NavigationButtons
            type="back"
            onClick={handleBack}
            disabled={step === 1}
          />

          <FormContainer
            step={step}
            formData={formData}
            setFormData={setFormData}
          />

          <NavigationButtons
            type="next"
            onClick={handleNext}
            disabled={step === 8}
          />

        </div>
      </div>
    </section>
  );
}