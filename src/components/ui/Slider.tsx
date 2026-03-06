"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { ChangeEvent } from "react";

interface SliderProps {
    id: string;
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    minLabel?: string;
    maxLabel?: string;
}

export function Slider({
    id,
    min,
    max,
    step = 1,
    value,
    onChange,
    className,
    minLabel,
    maxLabel,
}: SliderProps) {
    const percent = ((value - min) / (max - min)) * 100;

    return (
        <div className={cn("w-full relative group", className)}>
            {/* Native Range Input with invisible track but visible thumb */}
            <input
                type="range"
                id={id}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                className="w-full h-10 absolute top-1/2 -mt-5 opacity-0 z-30 cursor-pointer"
            />

            {/* Custom Track Background */}
            <div className="w-full h-2.5 bg-white/5 rounded-full mt-4 relative z-0 overflow-hidden border border-white/5 backdrop-blur-sm">
                {/* Custom Track Fill */}
                <motion.div
                    initial={false}
                    animate={{ width: `${percent}%` }}
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-500 to-brand-400 pointer-events-none"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>

            {/* Custom Thumb - positions itself based on percent */}
            <motion.div
                initial={false}
                animate={{ left: `calc(${percent}% - 14px)` }}
                className="absolute top-1/2 -mt-3.5 w-7 h-7 bg-white rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] z-20 pointer-events-none border-[3px] border-brand-500 flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95"
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            </motion.div>

            {/* Labels */}
            {(minLabel || maxLabel) && (
                <div className="flex justify-between text-[11px] font-black text-slate-500 mt-6 tracking-[0.1em] uppercase">
                    <span className="bg-slate-800/50 px-2 py-0.5 rounded-md border border-white/5">{minLabel}</span>
                    <span className="bg-slate-800/50 px-2 py-0.5 rounded-md border border-white/5">{maxLabel}</span>
                </div>
            )}
        </div>
    );
}
