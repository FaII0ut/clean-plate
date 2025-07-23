import React, {useState} from "react";
import Image from "next/image";
import Button from "@/components/Button";
import {DynamicIcon} from "lucide-react/dynamic";
import StepOne from "@/components/steps/StepOne";
import StepTwo from "@/components/steps/StepTwo";
import StepMealTimes from "@/components/steps/StepMealTimes";
import StepThree from "@/components/steps/StepThree";
import StepFour from "@/components/steps/StepFour";
import StepFive from "@/components/steps/StepFive";

interface NextPageWithLayout extends React.FC {
  noLayout?: boolean;
}

const steps = [
  {id: 1, name: "Choose a plan"},
  {id: 2, name: "Add your details"},
  {id: 3, name: "Meal time slots"}, // NEW
  {id: 4, name: "Pick meals"},
  {id: 5, name: "Requirements"},
  {id: 6, name: "Payment"},
];

const stepComponents = [
  <StepOne key={1} />, // Step 1
  <StepTwo key={2} />, // Step 2
  <StepMealTimes key={3} />, // Step 3 (NEW)
  <StepThree key={4} />, // Step 4
  <StepFour key={5} />, // Step 5
  <StepFive key={6} />, // Step 6
];

const CreatePlan: NextPageWithLayout = () => {
  const [currentStep, setCurrentStep] = useState(0); // 0-based index

  const handleContinue = () => {
    if (currentStep < stepComponents.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="min-h-screen max-h-screen bg-white relative flex flex-col items-center justify-center py-16 px-4">
      {/* Top Progress Bar */}
      <div className="w-full h-16 border-b border-gray-200 fixed top-0 z-10 bg-white">
        <div className="items-center justify-between flex mx-auto container md:px-12 px-4 h-full w-full ">
          <div className="flex items-center gap-2">
            <Image
              src="/img/logo.png"
              alt="Clean Plate Logo"
              className="w-10 h-10"
              width={40}
              height={40}
              priority={true}
            />
            <p className="font-forum text-2xl font-bold hidden md:flex ">
              Create my plan
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {steps.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="flex items-center gap-2">
                  <p
                    className={`w-6 h-6 text-xs font-satoshi font-semibold flex items-center justify-center rounded-full border-2 ${
                      index < currentStep
                        ? "bg-[#e36d4e] text-white border-[#e36d4e]"
                        : index === currentStep
                        ? "border-[#e36d4e] text-[#e36d4e]"
                        : "border-gray-200 text-gray-400"
                    }`}
                  >
                    {index < currentStep ? (
                      <DynamicIcon name="check" size={12} />
                    ) : (
                      item.id
                    )}
                  </p>
                  <p className="text-sm font-satoshi font-semibold">
                    {item.name}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <DynamicIcon name="chevron-right" size={12} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="md:hidden flex items-center gap-2">
            <p className="font-satoshi text-sm font-bold">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
        </div>
      </div>

      {/* Step Content */}
      {stepComponents[currentStep]}

      {/* Bottom Bar */}
      <div className="w-full h-20 fixed bottom-0 border-t border-gray-200 bg-white z-10">
        <div className="items-center justify-between flex mx-auto container md:px-12 px-4 h-full w-full">
          {currentStep !== 0 ? (
            <Button
              variant="primary"
              className="bg-gray-200 text-black"
              onClick={handleBack}
              style={{color: "black"}}
            >
              Go back
            </Button>
          ) : (
            <p></p>
          )}
          <Button
            variant="secondary"
            onClick={handleContinue}
            disabled={currentStep === steps.length - 1}
          >
            {currentStep === steps.length - 1 ? "Finish" : "Continue"}
          </Button>
        </div>
      </div>
    </main>
  );
};

CreatePlan.noLayout = true;

export default CreatePlan;
