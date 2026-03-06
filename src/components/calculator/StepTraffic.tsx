"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Slider } from "@/components/ui/Slider";

interface StepTrafficProps {
    value: number;
    onChange: (val: number) => void;
    onNext: () => void;
}

export default function StepTraffic({ value, onChange, onNext }: StepTrafficProps) {
    const formatNumber = (num: number) => new Intl.NumberFormat("en-US").format(num);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full h-full p-4 md:p-10 flex flex-col justify-between overflow-hidden"
        >
            <div className="flex items-center gap-3 md:gap-4 shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center neon-glow-purple">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-brand-400" />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">Traffic</h3>
                    <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Monthly Visitors</p>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center py-2 md:py-4 min-h-0">
                <div className="relative mb-2 md:mb-4">
                    <span className="text-5xl md:text-8xl font-black text-white tabular-nums tracking-tighter">
                        {formatNumber(value)}
                    </span>
                    <div className="absolute inset-x-0 -bottom-2 h-1 bg-brand-500/20 blur-xl neon-glow-purple" />
                </div>
                
                <div className="flex items-center gap-2 mb-6 md:mb-10">
                    <span className="h-1 w-1 rounded-full bg-brand-500/40" />
                    <p className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Unique Visitors</p>
                    <span className="h-1 w-1 rounded-full bg-brand-500/40" />
                </div>

                <div className="w-full max-w-sm px-2 md:px-4">
                    <Slider
                        id="traffic-s"
                        min={0}
                        max={100000}
                        step={1000}
                        value={value}
                        onChange={(e) => onChange(parseInt(e.target.value, 10))}
                        minLabel="0"
                        maxLabel="100K"
                    />
                </div>
            </div>

            <div className="flex justify-end pt-2 md:pt-4 shrink-0">
                <button
                    onClick={onNext}
                    className="bg-brand-500 hover:bg-brand-400 text-white font-black py-3 md:py-4 px-8 md:px-10 rounded-2xl shadow-xl shadow-brand-500/20 transition-all flex items-center gap-3 active:scale-95 neon-glow-purple text-sm md:text-base"
                >
                    Next Step <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
}
