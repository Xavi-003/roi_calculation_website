"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative h-dvh w-screen overflow-hidden mesh-bg flex items-center justify-center p-6">
      <div className="relative z-10 w-full max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-[2.5rem] p-12 flex flex-col items-center gap-8 shadow-2xl border border-white/5"
        >
          {/* Error Icon */}
          <div className="w-20 h-20 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center neon-glow-purple">
            <AlertCircle className="w-10 h-10 text-brand-400" />
          </div>

          <div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-2">
              404
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-slate-300 tracking-tight">
              Page Not Found
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-4 max-w-xs mx-auto">
              The metrics you're looking for don't exist in this funnel yet.
            </p>
          </div>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-500 hover:bg-brand-400 text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-brand-500/20 transition-all flex items-center gap-3 active:scale-95 neon-glow-purple"
            >
              <Home className="w-5 h-5" />
              Return to Calculator
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-500/10 blur-[100px] rounded-full pointer-events-none" />
      </div>
    </main>
  );
}
