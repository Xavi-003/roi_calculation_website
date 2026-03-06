"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Target } from "lucide-react";
import { Slider } from "@/components/ui/Slider";

interface StepConversionProps {
    value: number;
    onChange: (val: number) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function StepConversion({ value, onChange, onNext, onBack }: StepConversionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full h-full p-4 md:p-10 flex flex-col justify-between overflow-hidden"
        >
            {/* Header Area */}
            <div className="flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center neon-glow-purple">
                        <Target className="w-5 h-5 md:w-6 md:h-6 text-brand-400" />
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">Conversion</h3>
                        <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Funnel Efficiency</p>
                    </div>
                </div>
                <button 
                    onClick={onBack} 
                    className="text-slate-500 hover:text-white transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-white/5 border border-white/5"
                >
                    <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" /> Back
                </button>
            </div>

            {/* Main Visual: Neon Circular Progress */}
            <div className="flex-1 flex flex-col items-center justify-center py-2 md:py-4 min-h-0">
                <div className="relative w-36 h-36 md:w-52 md:h-52 mb-4 md:mb-6">
                    <svg className="w-full h-full -rotate-90 overflow-visible" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />
                        <motion.circle
                            cx="50" cy="50" r="44" fill="none" 
                            stroke="url(#neonGradient)" 
                            strokeWidth="8" 
                            strokeLinecap="round"
                            className="neon-glow-purple"
                            initial={{ strokeDasharray: "0 1000" }}
                            animate={{ strokeDasharray: `${(value / 10) * (2 * Math.PI * 44)} 1000` }}
                            transition={{ type: "spring", bounce: 0, duration: 1 }}
                        />
                        <defs>
                            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.span
                            key={value}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-4xl md:text-6xl font-black text-white tabular-nums tracking-tighter"
                        >
                            {value.toFixed(1)}%
                        </motion.span>
                        <span className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-1 md:mt-2">Conversion</span>
                    </div>
                </div>

                {/* Refined Proportional Slider */}
                <div className="w-full max-w-sm px-2 md:px-4">
                    <Slider
                        id="conv-s"
                        min={0}
                        max={10}
                        step={0.1}
                        value={value}
                        onChange={(e) => onChange(parseFloat(e.target.value))}
                        minLabel="0%"
                        maxLabel="10%"
                    />
                </div>
            </div>

            {/* Bottom Action Area */}
            <div className="flex justify-end pt-2 md:pt-4 shrink-0">
                <button
                    onClick={onNext}
                    className="group relative bg-brand-500 hover:bg-brand-400 text-white font-black py-3 md:py-4 px-8 md:px-10 rounded-2xl shadow-xl shadow-brand-500/20 transition-all flex items-center gap-3 active:scale-95 neon-glow-purple text-sm md:text-base"
                >
                    Next Step <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
}
