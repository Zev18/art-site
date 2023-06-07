"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MainBlock({ children, className }) {
  return (
    <motion.div
      layoutId="mainBlock"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`rounded-xl bg-gray-900 border-4 border-gray-800 px-10 py-8 flex flex-col justify-center items-center ${className}`}>
      {children}
    </motion.div>
  );
}
