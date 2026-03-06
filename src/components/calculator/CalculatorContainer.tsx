"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "@/components/ui/ProgressBar";
import StepTraffic from "./StepTraffic";
import StepConversion from "./StepConversion";
import StepAcv from "./StepAcv";
import ResultsDashboard from "./ResultsDashboard";
import FunnelDiagram from "./FunnelDiagram";

export default function CalculatorContainer() {
    const [step, setStep] = useState(1);
    const [traffic, setTraffic] = useState(25000);
    const [conversion, setConversion] = useState(2.5);
    const [acv, setAcv] = useState(5000);

    const nextStep = () => setStep(s => Math.min(s + 1, 4));
    const backStep = () => setStep(s => Math.max(s - 1, 1));
    const reset = () => {
        setStep(1);
        setTraffic(25000);
        setConversion(2.5);
        setAcv(5000);
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-fluid min-h-0">
            {/* Top Progress Bar - Only for steps 1-3 */}
            {step < 4 && (
                <div className="w-full max-w-sm shrink-0 scale-90 md:scale-100">
                    <ProgressBar currentStep={step} totalSteps={3} />
                </div>
            )}

            {/* Main Interactive Card - The Heart of the App */}
            <motion.div 
                layout
                className="w-full glass-card rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden h-auto min-h-[460px] md:h-[540px] max-h-[80vh] md:max-h-[60vh] flex flex-col transition-all duration-500 shadow-2xl"
            >
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <StepTraffic key="t" value={traffic} onChange={setTraffic} onNext={nextStep} />
                    )}
                    {step === 2 && (
                        <StepConversion key="c" value={conversion} onChange={setConversion} onNext={nextStep} onBack={backStep} />
                    )}
                    {step === 3 && (
                        <StepAcv key="a" value={acv} onChange={setAcv} onCalculate={nextStep} onBack={backStep} />
                    )}
                    {step === 4 && (
                        <ResultsDashboard key="r" metrics={{ traffic, conversion, acv }} onReset={reset} />
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Bottom Summary Stats - Hidden on mobile to prevent overlap */}
            {step < 4 && (
                <div className="hidden md:block w-full max-w-3xl shrink-0 opacity-60">
                    <FunnelDiagram metrics={{ traffic, conversion, acv }} currentStep={step} />
                </div>
            )}
        </div>
    );
}
