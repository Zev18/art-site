"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import localFont from "@next/font/local";
import { motion, useAnimate } from "framer-motion";
import MenuComponent from "../components/MenuComponent";
import SocialMedia from "../components/SocialMedia";
import MainBlock from "../components/MainBlock";
import Link from "next/link";
import Image from "next/image";
import ZevPortrait from "../assets/zev.webp";

const majorMono = localFont({
  src: "../assets/fonts/MajorMonoDisplay-Regular.ttf",
});

const caffeineMono = localFont({
  src: "../assets/fonts/CaffeineMono.otf",
});

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center h-full">
        <div className="relative w-0">
          <div layout className={`${majorMono.className}`}>
            <span
              className={`absolute ${majorMono.className} text-3xl -top-[100px] -left-[150px] overflow-hidden zj-10`}>
              <Link href="/">ZEV ROSS</Link>
            </span>
          </div>
          <motion.div
            layoutId="menu"
            className={`absolute ${caffeineMono.className} rounded -top-[125px] -left-4 z-10`}>
            <MenuComponent className={`p-4 bg-gray-900`} start={4} end={10} />
          </motion.div>
        </div>
        <MainBlock>
          <motion.div
            initial={{
              letterSpacing: "normal",
              fontWeight: "normal",
              opacity: 0,
            }}
            animate={{
              letterSpacing: ".2rem",
              fontWeight: "bold",
              opacity: 1,
            }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            transition={{ delay: 0.5 }}
            className="flex items-center">
            DIGITAL ARTIST
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.6,
              transition: { duration: 0.1, delay: 0.6 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="text-sm tracking-wider mt-1">
            he/him ・ @zevcandraw
          </motion.div>
        </MainBlock>
      </div>
      <motion.div className="absolute bottom-[20%] right-[20%] max-w-[10rem] overflow-hidden w-[8rem] h-[8rem] rounded">
        <Image
          src={ZevPortrait}
          alt="Portrait of Zev Ross"
          style={{
            objectFit: "cover",
            transform: "scale(2.7) translate(0, 27%)",
          }}
          fill={true}
        />
      </motion.div>
      <SocialMedia className="bottom-14 left-10" />
    </>
  );
}
