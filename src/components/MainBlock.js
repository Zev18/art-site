"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MainBlock({
  children,
  className,
  initial,
  animate,
  exit,
}) {
  return (
    <motion.div
      transition={{ duration: 0.3, ease: "easeOut" }}
      initial={initial}
      animate={animate}
      exit={exit}
      className={`flex flex-col items-center justify-center rounded-xl border-4 border-gray-800 bg-gray-900 px-10 py-8 ${className}`}>
      {children}
    </motion.div>
  );
}
