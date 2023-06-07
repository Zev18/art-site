import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Mail } from "react-feather";
import pixiv from "../../public/Pixiv_Icon.svg";
import kofi from "../../public/ko-fi.svg";
import Image from "next/image";
import localFont from "@next/font/local";
import { motion } from "framer-motion";

const caffeineMono = localFont({
  src: "../assets/fonts/CaffeineMono.otf",
});

export default function SocialMedia(props) {
  const { className } = props;
  const iconSize = 20;

  const linkHover = {
    rest: { opacity: 0.6, x: 0 },
    hover: {
      opacity: 1,
      x: 3,
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  const textReveal = {
    rest: { width: 0 },
    hover: {
      width: "max-content",
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.div
        layoutId="social"
        className={`absolute ${className} ${caffeineMono.className}`}>
        <div className="flex gap-1 border-l-2 border-cyan-400 w-0">
          <ul className="flex flex-col gap-4 ml-4">
            <motion.li
              animate="rest"
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              variants={linkHover}>
              <Link href={"#"} className="flex gap-4 items-center">
                <Instagram size={iconSize} />
                <motion.span variants={textReveal} className="overflow-hidden">
                  Instagram
                </motion.span>
              </Link>
            </motion.li>
            <motion.li
              animate="rest"
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              variants={linkHover}>
              <Link href={"#"} className="flex gap-4 items-center">
                <Twitter size={iconSize} />
                <motion.span variants={textReveal} className="overflow-hidden">
                  Twitter
                </motion.span>
              </Link>
            </motion.li>
            <motion.li
              animate="rest"
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              variants={linkHover}>
              <Link href={"#"} className="flex gap-4 items-center">
                <Image
                  alt={"Pixiv"}
                  src={pixiv}
                  priority={true}
                  style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
                />
                <motion.span variants={textReveal} className="overflow-hidden">
                  Pixiv
                </motion.span>
              </Link>
            </motion.li>
            <motion.li
              animate="rest"
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              variants={linkHover}>
              <Link href={"#"} className="flex gap-4 items-center">
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
              </Link>
            </motion.li>
            <motion.li
              animate="rest"
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              variants={linkHover}>
              <Link href={"#"} className="flex gap-4 items-center">
                <Mail size={iconSize} />
                <motion.span variants={textReveal} className="overflow-hidden">
                  Email
                </motion.span>
              </Link>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
