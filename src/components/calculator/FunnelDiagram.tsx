"use client";

import { motion } from "framer-motion";
import { Users, Filter, DollarSign } from "lucide-react";

interface FunnelDiagramProps {
    metrics: {
        traffic: number;
        conversion: number;
        acv: number;
    };
    currentStep?: number;
}

export default function FunnelDiagram({ metrics, currentStep = 1 }: FunnelDiagramProps) {
    const { traffic, conversion, acv } = metrics;
    const revenue = traffic * (conversion / 100) * acv;

    const formatCompact = (num: number) =>
        new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(num);

    const formatCurrency = (num: number) =>
        new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 }).format(num);

    const stats = [
        { label: "Traffic", value: formatCompact(traffic), icon: Users, color: "brand" },
        { label: "Conversion", value: `${conversion.toFixed(1)}%`, icon: Filter, color: "brand" },
        { label: "Value", value: formatCurrency(revenue), icon: DollarSign, color: "accent" },
    ];

    return (
        <div className="grid grid-cols-3 gap-4 w-full px-2">
            {stats.map((stat, i) => (
                <motion.div
                    key={stat.label}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center gap-2 border-b-2 border-transparent hover:border-brand-500/50 transition-all group"
                >
                    <div className={`p-2 rounded-xl bg-${stat.color}-500/10 border border-${stat.color}-500/20 text-${stat.color}-400 group-hover:neon-glow-purple transition-all`}>
                        <stat.icon className="w-4 h-4" />
                    </div>
                    <div className="text-center">
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-0.5">{stat.label}</p>
                        <p className="text-sm md:text-base font-black text-white tabular-nums">{stat.value}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
