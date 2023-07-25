import React from "react";
import { Instagram, Twitter, Mail } from "react-feather";
import pixiv from "../../public/Pixiv_Icon.svg";
import kofi from "../../public/ko-fi.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { caffeineMono } from "@/assets/fonts/fonts";

export default function SocialMedia(props) {
  const { className, onAnimationComplete } = props;
  const { height } = useWindowDimensions();
  const tallScreen = height > 750;
  const iconSize = tallScreen ? 25 : 20;

  const linkHover = {
    rest: { opacity: 0.6, x: 0 },
    hover: {
      opacity: 1,
      x: 3,
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  const textReveal = {
    rest: { width: "0px" },
    hover: {
      width: "max-content",
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.div
        key={"social"}
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        className={`absolute ${className} ${caffeineMono.className}`}
        onAnimationComplete={onAnimationComplete}>
        <div className="flex w-0 gap-1 border-l-2 border-cyan-400">
          <ul
            className={`ml-4 flex flex-col  ${tallScreen ? "gap-6" : "gap-4"}`}>
            <li>
              <motion.a
                href={"https://www.instagram.com/zevcandraw/"}
                className="flex items-center gap-4"
                animate="rest"
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                target="_blank"
                variants={linkHover}>
                <Instagram size={iconSize} />
                <motion.span variants={textReveal} className="overflow-hidden">
                  Instagram
                </motion.span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href={"https://twitter.com/zevcandraw"}
                className="flex items-center gap-4"
                animate="rest"
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                target="_blank"
                variants={linkHover}>
                <Twitter size={iconSize} />
                <motion.span variants={textReveal} className="overflow-hidden">
                  Twitter
                </motion.span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href={"https://www.pixiv.net/en/users/94752212"}
                className="flex min-w-max items-center gap-4"
                animate="rest"
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                target="_blank"
                variants={linkHover}>
                <Image
                  alt={"Pixiv"}
                  src={pixiv}
                  priority={true}
                  style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
                />
                <motion.span variants={textReveal} className="overflow-hidden">
                  Pixiv
                </motion.span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href={"https://ko-fi.com/zevross"}
                className="flex min-w-max items-center gap-4"
                animate="rest"
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                target="_blank"
                variants={linkHover}>
                <Image
                  alt={"Ko-Fi"}
                  src={kofi}
                  priority={true}
                  style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
                  className="translate-x-[2px]"
                />
                <motion.span
                  variants={textReveal}
                  className="overflow-hidden whitespace-nowrap">
                  Ko-fi
                </motion.span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="mailto:zevross@gmail.com"
                className="flex items-center gap-4"
                animate="rest"
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                target="_blank"
                variants={linkHover}>
                <Mail size={iconSize} />
                <motion.span variants={textReveal} className="overflow-hidden">
                  Email
                </motion.span>
              </motion.a>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
