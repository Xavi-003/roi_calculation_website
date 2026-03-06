"use client";

import { motion } from "framer-motion";
import { DollarSign, TrendingUp, ArrowLeft } from "lucide-react";

interface StepAcvProps {
    value: number;
    onChange: (val: number) => void;
    onCalculate: () => void;
    onBack: () => void;
}

export default function StepAcv({ value, onChange, onCalculate, onBack }: StepAcvProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full h-full p-4 md:p-10 flex flex-col justify-between overflow-hidden"
        >
            <div className="flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center neon-glow-purple">
                        <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-brand-400" />
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">Contract</h3>
                        <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Average Deal Value</p>
                    </div>
                </div>
                <button 
                    onClick={onBack} 
                    className="text-slate-500 hover:text-white transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-white/5 border border-white/5"
                >
                    <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" /> Back
                </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center py-2 md:py-4 min-h-0">
                <div className="w-full max-w-sm glass-card p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] relative border border-white/5 shadow-2xl">
                    <div className="flex items-center gap-2 mb-4 md:mb-8 justify-center">
                        <span className="h-1 w-1 rounded-full bg-brand-500/40" />
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Estimated ACV</p>
                        <span className="h-1 w-1 rounded-full bg-brand-500/40" />
                    </div>

                    <div className="relative mb-4 md:mb-8">
                        <span className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-2xl md:text-3xl font-black text-brand-400/50">$</span>
                        <input
                            type="number"
                            value={value}
                            onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
                            className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-4 md:py-6 pl-10 md:pl-12 pr-4 md:pr-6 text-3xl md:text-5xl font-black text-white focus:outline-none focus:ring-2 focus:ring-brand-500/40 transition-all tabular-nums text-center"
                        />
                    </div>

                    <div className="bg-brand-500/5 rounded-xl p-3 md:p-4 border border-brand-500/10">
                        <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed text-center">
                            Calculated for <span className="text-brand-400">Total Opportunity</span>.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-2 md:pt-4 shrink-0 flex justify-end">
                <button
                    onClick={onCalculate}
                    className="bg-brand-500 hover:bg-brand-400 text-white font-black py-3 md:py-4 px-8 md:px-10 rounded-2xl shadow-xl shadow-brand-500/20 transition-all flex items-center gap-3 active:scale-95 neon-glow-purple text-sm md:text-base"
                >
                    Execute Forecast <TrendingUp className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
}
