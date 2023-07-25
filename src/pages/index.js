"use client";

import { caffeineMono, majorMono } from "@/assets/fonts/fonts";
import { motion } from "framer-motion";
import MenuComponent from "../components/MenuComponent";
import SocialMedia from "../components/SocialMedia";
import MainBlock from "../components/MainBlock";
import Image from "next/image";
import ZevPortrait from "../assets/zev.webp";
import ZevLogo from "@/components/ZevLogo";
import { commissionStatus } from "./commissions";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Home() {
  const { height } = useWindowDimensions();
  const tallScreen = height > 750;

  return (
    <motion.div className="relative h-full w-full">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative w-0">
          <ZevLogo className="absolute left-[-8rem] top-[-3rem] z-20" />
          <div
            className={`absolute ${caffeineMono.className} -left-4 -top-[125px] z-10 rounded`}>
            <MenuComponent className={`bg-gray-900 p-4`} start={4} end={10} />
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1, transition: { delay: 0.3 } }}
          exit={{ opacity: 0, transition: { delay: 0.1 } }}
          className={`flex flex-col items-center justify-center rounded-xl border-4 border-slate-800 bg-gray-900 px-10 py-8 text-slate-400`}>
          <div className="flex items-center font-bold tracking-wider">
            DIGITAL ARTIST
          </div>
          <div className="mt-1 text-sm tracking-wider">
            he/him ・ @zevcandraw
          </div>
        </motion.div>
      </div>
      <motion.div
        className={`absolute bottom-[20%] right-[20%] ${
          tallScreen ? "h-[10rem] w-[10rem]" : "h-[8rem] w-[8rem]"
        } overflow-hidden rounded`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}>
        <Image
          src={ZevPortrait}
          priority
          alt="Portrait of Zev Ross"
          fill
          sizes="100%"
          className="origin-top translate-x-2 scale-150 object-cover"
        />
      </motion.div>
      <motion.div
        className={`absolute bottom-20 right-10 flex min-w-max rounded-lg bg-slate-800 text-sm ${caffeineMono.className} overflow-hidden`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        exit={{ opacity: 0, y: 20, transition: { delay: 0.1 } }}>
        <div className="p-2 px-3">Commissions:</div>
        {commissionStatus === "open" ? (
          <div className="flex grow items-center justify-center bg-cyan-400 p-2 px-3 text-black">
            <p>OPEN</p>
          </div>
        ) : (
          <div className="flex grow items-center justify-center bg-slate-900 p-2 px-3 text-cyan-400">
            <p>CLOSED</p>
          </div>
        )}
      </motion.div>
      <SocialMedia className="bottom-14 left-10" />
    </motion.div>
  );
}
