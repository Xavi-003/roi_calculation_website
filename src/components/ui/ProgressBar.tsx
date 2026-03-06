"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
    return (
        <div className="w-full px-4 pt-4 pb-2">
            <div className="flex items-center gap-2">
                {Array.from({ length: totalSteps }, (_, i) => {
                    const stepNum = i + 1;
                    const isActive = stepNum <= currentStep;
                    const isCurrent = stepNum === currentStep;

                    return (
                        <div key={stepNum} className="flex-1 relative">
                            <motion.div
                                className="h-1.5 rounded-full border border-white/5"
                                initial={{ opacity: 0.3 }}
                                animate={{
                                    opacity: isActive ? 1 : 0.3,
                                    background: isActive
                                        ? "linear-gradient(90deg, #c4b5fd, #8b5cf6)"
                                        : "rgba(255, 255, 255, 0.05)",
                                }}
                                transition={{ duration: 0.5 }}
                            />
                            {isCurrent && (
                                <motion.div
                                    layoutId="step-glow"
                                    className="absolute inset-0 h-1.5 rounded-full bg-brand-500 blur-sm opacity-30"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-between mt-3 items-center">
                <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase">
                        Phase
                    </span>
                    <span className="text-[11px] font-black text-white/90">
                        {currentStep === 4 ? "Analysis Complete" : `${currentStep} / ${totalSteps}`}
                    </span>
                </div>
                <div className="text-right">
                    <span className="text-[10px] font-black tracking-[0.2em] text-brand-400 uppercase">
                        {currentStep === 4 ? "100%" : `${Math.round((currentStep / totalSteps) * 100)}%`}
                    </span>
                </div>
            </div>
        </div>
    );
}
