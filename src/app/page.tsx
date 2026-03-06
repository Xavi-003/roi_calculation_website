"use client";

import { motion } from "framer-motion";
import CalculatorContainer from "@/components/calculator/CalculatorContainer";

export default function Home() {
  return (
    <main className="relative min-h-dvh w-screen overflow-y-auto md:overflow-hidden mesh-bg grid grid-rows-[auto_1fr_auto] px-2 md:px-8 py-2 md:py-4 scrollbar-hide">
      {/* Header Section */}
      <header className="relative z-10 flex flex-col items-center justify-center text-center pt-4 pb-2 px-4 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-2"
        >
          <span className="w-1 h-1 rounded-full bg-brand-400 animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-300">Revenue Intelligence</span>
        </motion.div>

        <h1 className="text-fluid-h1 font-black text-white tracking-tight leading-none mb-2">
          Interactive <span className="shimmer-text">ROI</span> Calculator
        </h1>
        <p className="max-w-md text-slate-400 text-fluid-base font-medium opacity-80 px-2">
          Identify exactly where you're leaving revenue on the table.
        </p>
      </header>

      {/* Main Content Area - Strictly Centered & Constrained */}
      <section className="relative z-10 min-h-[500px] md:min-h-0 w-full flex items-center justify-center py-2 md:py-4">
        <div className="w-full max-w-4xl h-full flex flex-col items-center justify-center">
          <CalculatorContainer />
        </div>
      </section>

      {/* Footer Section - Fixed Height */}
      <footer className="relative z-10 w-full flex items-center justify-center py-4 shrink-0 border-t border-white/5">
        <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.4em]">
          &copy; 2024 Antigravity ROI
        </p>
      </footer>
    </main>
  );
}
