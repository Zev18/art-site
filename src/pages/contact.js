import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { caffeineMono, majorMono } from "@/assets/fonts/fonts";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import discord from "../assets/discord.svg";
import kofi from "../assets/ko-fi.svg";
import pixiv from "../assets/Pixiv_Icon.svg";
import misskey from "../assets/misskey.svg";
import artistree from "../assets/artistree.svg";
import Metadata from "@/components/Metadata";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/zevcandraw",
    icon: instagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/zevcandraw",
    icon: twitter,
  },
  {
    name: "Pixiv",
    url: "https://www.pixiv.net/en/users/94752212",
    icon: pixiv,
  },
  {
    name: "Misskey",
    url: "https://misskey.io/@zev",
    icon: misskey,
  },
  {
    name: "Discord",
    url: "https://discordapp.com/users/446885569293713429",
    icon: discord,
  },
  {
    name: "Ko-Fi",
    url: "https://ko-fi.com/zevross",
    icon: kofi,
  },
  {
    name: "Artistree",
    url: "https://artistree.io/request/zevcandraw",
    icon: artistree,
  },
  {
    name: "Github",
    url: "https://github.com/Zev18",
    icon: github,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { delay: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <>
      <Metadata pageName="Contact" />
      <div className="relative z-0 flex w-full flex-col items-center gap-4 p-8 text-white md:flex-row md:items-start md:justify-center md:gap-16">
        <div className="flex shrink flex-col gap-4 md:max-w-sm">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30, transition: { delay: 0.1 } }}
            className="rounded-lg border-4 border-slate-700 bg-slate-800">
            <div className="flex flex-col p-4">
              <h1 className={`text-2xl font-bold ${majorMono.className}`}>
                contact
              </h1>
              <p className="text-slate-400">Reach out</p>
            </div>
          </motion.div>
          <motion.div
            className="mb-10 flex flex-col gap-4 rounded-lg border-4 border-slate-700 bg-gray-950 p-4 text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            exit={{ opacity: 0, y: 20 }}>
            <p>
              For business inquiries, email{" "}
              <a
                className="cursor-pointer text-cyan-400"
                href="mailto:zevross@gmail.com">
                zevross@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
        <motion.div
          className="grid grid-cols-2 gap-10 pb-[5rem] text-slate-400"
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit">
          {socialLinks.map((social, index) => (
            <motion.a
              variants={item}
              key={social.name}
              href={social.url}
              target="_blank"
              className={`self-center justify-self-center ${caffeineMono.className} duration-100 hover:text-white`}>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative">
                  <Image
                    className="text-cyan-400"
                    src={social.icon}
                    alt={social.name}
                    width={50}
                    height={50}
                  />
                  <p className="absolute -left-10 -top-4 z-10 text-xl text-cyan-400 shadow">
                    {twoDigits(index + 1)}
                  </p>
                </div>
                <p>{social.name}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </>
  );
}

const twoDigits = (num) => {
  if (num < 10) {
    return "0" + num;
  }
  return num;
};
