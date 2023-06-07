"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimationContext({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence
      mode="wait"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <motion.div
        key={pathname}
        initial={{}}
        animate={{}}
        exit={{}}
        className="w-full h-full">
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
