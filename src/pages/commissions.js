import React from "react";
import { motion } from "framer-motion";
import { caffeineMono, majorMono } from "@/assets/fonts/fonts";

export const commissionStatus = "closed";

export default function Commissions() {
  return (
    <div className="relative z-0 flex h-full w-full flex-col items-center gap-4 p-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30, transition: { delay: 0.1 } }}
        className="w-full rounded-lg border-4 border-slate-700 bg-slate-800">
        <div className="flex flex-col p-4">
          <h1 className={`text-2xl font-bold ${majorMono.className}`}>
            commissions
          </h1>
          <p className="text-slate-400">Prices & terms</p>
        </div>
        <div
          className={`relative text-slate-300 ${caffeineMono.className} flex flex-col gap-1 rounded-b-lg bg-gray-950 p-4`}>
          <p>
            Half-body: <span className="text-cyan-400">$25</span>
          </p>
          <p>
            Full-body: <span className="text-cyan-400">$40</span>
          </p>
          <p>
            Extra characters: <span className="text-cyan-400">+$20</span> each
          </p>
          <p>
            Detailed background: <span className="text-cyan-400">+$15</span>
          </p>
          <p className="opacity-60">Prices are negotiable</p>
        </div>
      </motion.div>
      <motion.div
        className={`flex w-full rounded-lg bg-slate-800 ${caffeineMono.className} overflow-hidden`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}>
        <div className="p-4">Commission status:</div>
        {commissionStatus === "open" ? (
          <div className="flex grow items-center justify-center bg-cyan-400 p-4 text-black">
            <p>OPEN</p>
          </div>
        ) : (
          <div className="flex grow items-center justify-center bg-slate-900 p-4 text-cyan-400">
            <p>CLOSED</p>
          </div>
        )}
      </motion.div>
      <motion.div className="w-full rounded-lg border-4 border-slate-700 bg-slate-800 p-4">
        <h1 className="text-2xl font-bold">Terms</h1>
      </motion.div>
    </div>
  );
}
