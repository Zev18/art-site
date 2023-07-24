import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "react-feather";
import Link from "next/link";

export default function MenuComponent(props) {
  const { className, start = 0, end = 6, rounding = 0, noExit = false } = props;

  const container = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.1,
      },
    },
    exit: {
      y: -40,
      opacity: 0,
      transition: {
        delay: 0.1,
      },
    },
  };

  const item = {
    hidden: { width: "0" },
    show: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
  };

  const selectedState = {
    opacity: 1,
    gap: "1rem",
    transition: { duration: 0.2 },
  };

  return (
    <>
      <style jsx>
        {`
          .background {
            position: relative;
            display: inline-block;
            transform: translate(${start}px, -${start}px);
            border-radius: ${rounding}px;
          }

          .background:before,
          .background:after {
            content: "";
            width: ${end * 1.4}px;
            height: ${end * 1.4}px;
            position: absolute;
            transition: all 0.15s ease-in-out;
          }

          .background:before {
            top: 0;
            left: 0;
            transform-origin: top left;
            transform: rotate(-45deg) scale(${start == 0 ? 0 : start / end});
          }

          .background:after {
            right: 0;
            bottom: 0;
            transform-origin: bottom right;
            transform: rotate(45deg) scale(${start == 0 ? 0 : start / end});
          }

          .content {
            display: block;
            transform: translate(${start}px, -${start}px);
            transition: all 0.15s ease;
            position: relative;
            z-index: 10;
            border-radius: ${rounding}px;
          }

          .background:hover .content {
            transform: translate(${end}px, -${end}px);
          }

          .background:hover:before {
            transform: rotate(-45deg) scale(1);
          }

          .background:hover:after {
            transform: rotate(45deg) scale(1);
          }
        `}
      </style>

      <motion.div
        variants={container}
        initial={"hidden"}
        animate={"show"}
        exit={`${noExit ? "" : "exit"}`}>
        <div className="background bg-cyan-400 before:bg-cyan-400 after:bg-cyan-400">
          <div className={`content ${className}`}>
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              style={{ originX: "left" }}
              className="flex flex-col gap-2">
              <motion.li
                variants={item}
                className="overflow-hidden"
                style={{ originX: "left" }}>
                <Link href={"/about"}>
                  <motion.div
                    className="flex"
                    animate={{ opacity: 0.75, gap: ".5rem" }}
                    whileHover={selectedState}
                    whileTap={selectedState}>
                    About
                    <ArrowRight className="max-h-min" size={20} />
                  </motion.div>
                </Link>
              </motion.li>
              <motion.li
                variants={item}
                className="overflow-hidden"
                style={{ originX: "left" }}>
                <Link href={"/portfolio"}>
                  <motion.div
                    className="flex"
                    animate={{ opacity: 0.75, gap: ".5rem" }}
                    whileHover={selectedState}
                    whileTap={selectedState}>
                    Portfolio
                    <ArrowRight className="max-h-min" size={20} />
                  </motion.div>
                </Link>
              </motion.li>
              <motion.li
                variants={item}
                className="overflow-hidden"
                style={{ originX: "left" }}>
                <Link href={"/commissions"}>
                  <motion.div
                    className="flex"
                    animate={{ opacity: 0.75, gap: ".5rem" }}
                    whileHover={selectedState}
                    whileTap={selectedState}>
                    Commissions
                    <ArrowRight className="max-h-min" size={20} />
                  </motion.div>
                </Link>
              </motion.li>
              <motion.li
                variants={item}
                className="overflow-hidden"
                style={{ originX: "left" }}>
                <Link href={"/contact"}>
                  <motion.div
                    className="flex"
                    animate={{ opacity: 0.75, gap: ".5rem" }}
                    whileHover={selectedState}
                    whileTap={selectedState}>
                    Contact
                    <ArrowRight className="max-h-min" size={20} />
                  </motion.div>
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}
