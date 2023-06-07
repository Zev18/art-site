"use client";

import localFont from "@next/font/local";
import { motion } from "framer-motion";
import MenuComponent from "../components/MenuComponent";
import SocialMedia from "../components/SocialMedia";
import MainBlock from "../components/MainBlock";
import Link from "next/link";

const majorMono = localFont({
  src: "../assets/fonts/MajorMonoDisplay-Regular.ttf",
});

const caffeineMono = localFont({
  src: "../assets/fonts/CaffeineMono.otf",
});

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
      duration: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 0.6,
    transition: {
      duration: 0.2,
    },
  },
};

export default function page() {
  return (
    <>
      <div className="flex justify-center flex-col items-center h-full">
        <div className="relative w-0">
          <motion.div layoutId="zev">
            <motion.span
              className={`absolute ${majorMono.className} text-3xl -top-[100px] -left-[150px] overflow-hidden z-10`}>
              <Link href="/">ZEV ROSS</Link>
            </motion.span>
          </motion.div>
          <motion.div
            layoutId="menu"
            className={`absolute ${caffeineMono.className} bg-gray-900 rounded -top-[125px] -left-4 z-10`}></motion.div>
        </div>
        <MainBlock>
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="flex flex-col items-end ">
            <motion.span
              variants={item}
              className="text-right whitespace-nowrap overflow-hidden">
              21
            </motion.span>
            <motion.span
              variants={item}
              className="text-right whitespace-nowrap overflow-hidden">
              he/him
            </motion.span>
            <motion.span
              variants={item}
              className="text-right whitespace-nowrap overflow-hidden">
              Jewish
            </motion.span>
            <motion.span
              variants={item}
              className="text-right whitespace-nowrap overflow-hidden">
              ENG / עבר / 日本語
            </motion.span>
          </motion.div>
        </MainBlock>
      </div>
      <SocialMedia className="bottom-14 left-10" />
    </>
  );
}
