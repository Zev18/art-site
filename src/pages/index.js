"use client";

import { caffeineMono, majorMono } from "@/assets/fonts/fonts";
import { motion } from "framer-motion";
import MenuComponent from "../components/MenuComponent";
import SocialMedia from "../components/SocialMedia";
import Image from "next/image";
import ZevPortrait from "../../public/zev.webp";
import ZevLogo from "@/components/ZevLogo";
import { commissionStatus } from "./commissions";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Home() {
  const { height } = useWindowDimensions();
  const tallScreen = height > 750;

  return (
    <div className="flex h-full w-full justify-center">
      <motion.div className="relative w-full lg:max-w-[90%] xl:max-w-[70%]">
        <div className="flex h-full flex-col items-center justify-center sm:justify-normal sm:py-20">
          <div className="relative w-0">
            <motion.div
              className={`absolute bottom-[-11rem] left-[-17rem] z-30 min-w-max rounded-lg bg-slate-800 text-sm xl:bottom-[-17rem] xl:left-[-23rem] xl:text-lg ${caffeineMono.className} hidden overflow-hidden sm:flex`}
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
            <motion.div
              className={`absolute left-[-15rem] top-[-1rem] hidden h-[12rem] w-[16rem] overflow-hidden rounded sm:block xl:left-[-20rem] xl:h-[20rem] xl:w-[30rem] xl:rounded-xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}>
              <Image
                src={ZevPortrait}
                priority
                alt="Portrait of Zev Ross"
                fill
                className="origin-top translate-x-2 scale-125 object-cover"
              />
            </motion.div>
            <ZevLogo className="absolute left-[-8rem] top-[-3rem] z-20 xl:left-[8rem] xl:top-0 xl:text-5xl" />
            <div
              className={`absolute ${caffeineMono.className} -left-4 -top-[125px] z-10 rounded`}>
              <MenuComponent className="bg-gray-900 p-4" start={4} end={10} />
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, transition: { delay: 0.1 } }}
            className={`flex flex-col items-center justify-center rounded-xl border-4 border-slate-800 bg-gray-900 px-10 py-8 text-slate-400 sm:z-10 sm:mb-[7rem] sm:ml-[25%] xl:mt-[10rem]`}>
            <div className="flex items-center font-bold tracking-wider">
              DIGITAL ARTIST
            </div>
            <div className="mt-1 text-sm tracking-wider">
              he/him ・ @zevcandraw
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            exit={{ opacity: 0, y: 40, transition: { delay: 0.1 } }}
            className="hidden max-w-xl rounded-xl border-2 border-cyan-400 bg-black/70 px-6 py-4 sm:block">
            <h2 className={`${majorMono.className} mb-4 text-2xl`}>
              {"i'm Zev. Welcome to my website!"}
            </h2>
            <p className="mb-2 text-lg text-slate-400">
              {
                "Here's where you can find all my socials, check out my work, get info about my commissions, and more."
              }
            </p>
          </motion.div>
        </div>
        <motion.div
          className={`absolute bottom-[20%] right-[20%] sm:hidden ${
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
          className={`absolute bottom-20 right-10 flex min-w-max rounded-lg bg-slate-800 text-sm ${caffeineMono.className} overflow-hidden sm:hidden`}
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
        <SocialMedia className="bottom-14 left-10 xl:top-14" />
      </motion.div>
    </div>
  );
}
