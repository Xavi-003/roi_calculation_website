"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
    TrendingUp,
    RefreshCw,
    Download,
    Users,
    ArrowUpRight,
    DollarSign
} from "lucide-react";

interface ResultsDashboardProps {
    metrics: {
        traffic: number;
        conversion: number;
        acv: number;
    };
    onReset: () => void;
}

export default function ResultsDashboard({ metrics, onReset }: ResultsDashboardProps) {
    const { traffic, conversion, acv } = metrics;
    const dashboardRef = useRef<HTMLDivElement>(null);

    const currentRevenue = traffic * (conversion / 100) * acv;
    const improvedRevenue = traffic * ((conversion + 1) / 100) * acv;
    const uplift = improvedRevenue - currentRevenue;

    const formatCurrency = (num: number) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
            notation: 'compact'
        }).format(num);

    const generatePDF = async () => {
        console.log("Export triggered");
        if (!dashboardRef.current) {
            alert("Export error: Dashboard content not found.");
            return;
        }
        
        try {
            // Import html2pdf dynamically
            const html2pdf = (await import('html2pdf.js')).default;
            
            if (!html2pdf) {
                throw new Error("html2pdf library failed to load");
            }

            const element = dashboardRef.current;
            const opt = {
                margin: 0.5,
                filename: `ROI-Forecast-${new Date().toISOString().split('T')[0]}.pdf`,
                image: { type: 'jpeg' as const, quality: 0.98 },
                html2canvas: { 
                    scale: 2,
                    useCORS: true,
                    letterRendering: true,
                    backgroundColor: '#020617',
                    onclone: (doc: Document) => {
                        // 1. Remove ALL existing style and link tags to purge oklch/oklab/color-mix
                        const styles = Array.from(doc.querySelectorAll('style, link[rel="stylesheet"]'));
                        styles.forEach(s => s.remove());

                        // 2. Inject a completely fresh, safe, Hex-only stylesheet
                        const style = doc.createElement('style');
                        style.innerHTML = `
                            body { background-color: #020617 !important; color: #ffffff !important; font-family: system-ui, sans-serif !important; }
                            * { 
                                color: #ffffff !important; 
                                background-color: transparent !important;
                                border-color: #334155 !important;
                                box-shadow: none !important;
                                text-shadow: none !important;
                                filter: none !important;
                                backdrop-filter: none !important;
                                transition: none !important;
                                animation: none !important;
                            }
                            .glass-card { 
                                background-color: #0f172a !important; 
                                border: 1px solid #334155 !important; 
                                border-radius: 20px !important;
                                margin-bottom: 10px !important;
                                padding: 20px !important;
                                display: block !important;
                            }
                            h2 { font-size: 24px !important; font-weight: 800 !important; margin-bottom: 10px !important; }
                            p { font-size: 12px !important; color: #94a3b8 !important; }
                            .text-3xl { font-size: 32px !important; font-weight: 900 !important; }
                            .text-5xl { font-size: 48px !important; font-weight: 900 !important; }
                            .grid { display: block !important; }
                            .flex { display: flex !important; flex-direction: column !important; }
                            .flex-row { flex-direction: row !important; }
                            .justify-between { justify-content: space-between !important; }
                            .items-center { align-items: center !important; }
                            .gap-4 { gap: 16px !important; }
                            svg, button { display: none !important; }
                        `;
                        doc.head.appendChild(style);

                        // 3. Manually strip any remaining inline style attributes that might contain oklab/oklch
                        const all = doc.getElementsByTagName('*');
                        for (let i = 0; i < all.length; i++) {
                            (all[i] as HTMLElement).removeAttribute('style');
                        }
                    }
                },
                jsPDF: { unit: 'in' as const, format: 'letter' as const, orientation: 'portrait' as const }
            };

            console.log("Starting PDF conversion...");
            await html2pdf().from(element).set(opt).save();
            console.log("PDF saved successfully");
        } catch (error) {
            console.error("PDF Export Error:", error);
            alert("Export failed. Please check the console for details.");
        }
    };

    const handleReset = () => {
        onReset();
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-auto flex flex-col p-4 md:p-8"
        >
            <div ref={dashboardRef} className="flex flex-col gap-3 md:gap-4">
                {/* Header & Reset */}
                <div className="flex items-center justify-between mb-1 md:mb-2 shrink-0">
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="bg-brand-500-20 p-2 rounded-xl border border-brand-500-20">
                            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-brand-400" />
                        </div>
                        <div>
                            <h2 className="text-lg md:text-xl font-black text-white leading-none mb-1">Growth Forecast</h2>
                            <p className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest">Opportunity Model</p>
                        </div>
                    </div>
                    <button
                        onClick={handleReset}
                        className="p-2 md:p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all group z-50 relative"
                    >
                        <RefreshCw className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-180 transition-transform duration-500" />
                    </button>
                </div>

                {/* Core Analytics Grid - Stacked on smaller heights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {/* Left: Net Growth Card */}
                    <div className="glass-card p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-center relative overflow-hidden group min-h-[110px] md:min-h-[120px]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500-10 blur-[80px] -mr-16 -mt-16 group-hover:bg-accent-500-20 transition-all" />
                        <p className="text-[8px] md:text-[10px] font-black text-accent-400 uppercase tracking-[0.3em] mb-1 md:mb-2">Projected Annual Lift</p>
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-5xl font-black text-white tracking-tighter tabular-nums mb-1 leading-none">
                                {formatCurrency(uplift * 12)}
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="px-1.5 py-0.5 rounded-md bg-accent-500-20 text-accent-400 text-[8px] md:text-[10px] font-black border border-accent-500-20 flex items-center gap-1">
                                    +1% LIFT <ArrowUpRight className="w-2.5 h-2.5" />
                                </span>
                                <p className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-tight">Monthly: {formatCurrency(uplift)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Comparative Metrics */}
                    <div className="flex flex-col gap-3">
                        <div className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl flex-1 flex flex-col justify-center min-h-[60px] md:min-h-[70px]">
                            <div className="flex justify-between items-end mb-1">
                                <p className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest">Base Revenue</p>
                                <span className="text-xs md:text-lg font-black text-slate-400 tabular-nums">{formatCurrency(currentRevenue)}</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    className="h-full bg-slate-700"
                                />
                            </div>
                        </div>

                        <div className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl flex-1 flex flex-col justify-center border-l-2 border-l-brand-500 min-h-[60px] md:min-h-[70px]">
                            <div className="flex justify-between items-end mb-1">
                                <p className="text-[8px] md:text-[9px] font-black text-brand-400 uppercase tracking-widest">Optimized Output</p>
                                <span className="text-sm md:text-xl font-black text-white tabular-nums">{formatCurrency(improvedRevenue)}</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    className="h-full bg-brand-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="flex flex-col sm:flex-row gap-3 mt-1 md:mt-2 shrink-0">
                    <button
                        onClick={generatePDF}
                        className="flex-1 bg-white text-slate-950 font-black text-[10px] md:text-xs uppercase tracking-widest py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors z-50 relative"
                    >
                        <Download className="w-3.5 h-3.5" /> Export Forecast
                    </button>
                    <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-5 h-5 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center">
                                    <Users className="w-2.5 h-2.5 text-slate-500" />
                                </div>
                            ))}
                        </div>
                        <p className="text-[7px] font-bold text-slate-500 leading-tight uppercase tracking-tighter">
                            Trusted by <span className="text-white">Revenue Leaders</span>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
