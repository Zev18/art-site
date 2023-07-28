import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "react-feather";
import { caffeineMono, majorMono } from "@/assets/fonts/fonts";

export const commissionStatus = "closed";

export default function Commissions() {
  return (
    <div className="relative z-0 flex w-full flex-col items-center gap-4 p-8 text-white">
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
          className={`relative text-slate-300 ${caffeineMono.className} flex flex-col gap-1 rounded-b-lg bg-slate-950 p-4`}>
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
      {commissionStatus === "open" && (
        <motion.div
          className={`w-full rounded-lg  ${caffeineMono.className} overflow-hidden border-4 border-cyan-400 p-4`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}>
          Commissions can be ordered on{" "}
          <a
            href="https://artistree.io/request/zevcandraw"
            className="cursor-pointer text-cyan-400"
            target="_blank">
            Artistree
          </a>
          .
        </motion.div>
      )}
      <motion.div
        className="mb-[4rem] flex w-full flex-col gap-4 rounded-lg border-4 border-slate-700 bg-slate-800 p-4 text-slate-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        exit={{ opacity: 0, y: 20 }}>
        <h1 className={`text-2xl font-bold ${majorMono.className} text-white`}>
          terms
        </h1>
        <p>
          {
            "I will usually post in advance on my Instagram story or on Twitter if I plan to open commissions. If you don't think you can afford one, dm me on Instagram and we can negotiate prices."
          }
        </p>
        <div
          className={`flex max-w-max flex-col gap-4 rounded-lg bg-slate-950 p-4 text-slate-400 ${caffeineMono.className}`}>
          <p className="text-white">What I will draw:</p>
          <div className="flex items-center justify-between gap-4">
            <Check size={36} className="text-cyan-400" />
            <p>Mecha, complicated armor, ocs, fanart</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <X size={36} className="text-rose-500" />
            <p>Furries, humans with animal traits, NSFW</p>
          </div>
        </div>
        <p>
          The amount of time commissions take depends on my schedule and on the
          commission! So thank you for being patient with me.
        </p>
      </motion.div>
    </div>
  );
}
