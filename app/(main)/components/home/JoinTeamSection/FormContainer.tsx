import Step1Basic from "./steps/Step1Basic";
import Step2Interest from "./steps/Step2Interest";
import Step3Tech from "./steps/Step3Tech";
import Step4Experience from "./steps/Step4Experience";
import Step5Availability from "./steps/Step5Availability";
import Step6Motivation from "./steps/Step6Motivation";
import Step7Contribution from "./steps/Step7Contribution";
import Step8Final from "./steps/Step8Final";

export default function FormContainer({ step, formData, setFormData }: any) {
  return (
    <div className="relative w-[500px] h-[400px] overflow-hidden">

      {step === 1 && (
        <Step1Basic formData={formData} setFormData={setFormData} />
      )}

      {step === 2 && (
        <Step2Interest formData={formData} setFormData={setFormData} />
      )}

      {step === 3 && (
        <Step3Tech formData={formData} setFormData={setFormData} />
      )}

      {step === 4 && (
        <Step4Experience formData={formData} setFormData={setFormData} />
      )}

      {step === 5 && (
        <Step5Availability formData={formData} setFormData={setFormData} />
      )}

      {step === 6 && (
        <Step6Motivation formData={formData} setFormData={setFormData} />
      )}

      {step === 7 && (
        <Step7Contribution formData={formData} setFormData={setFormData} />
      )}

      {step === 8 && (
        <Step8Final formData={formData} setFormData={setFormData} />
      )}

    </div>
  );
}