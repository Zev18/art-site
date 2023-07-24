import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { majorMono } from "@/assets/fonts/fonts";

export default function ZevLogo({ className }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.5, 1],
        x: [-40, 0, 0],
        y: [20, 20, 0],
        transition: { duration: 0.5, delay: 0.1 },
      }}
      exit={{ opacity: 0, x: 0, y: -30 }}
      className={`absolute ${majorMono.className} ${className} z-10 overflow-hidden text-3xl`}>
      <Link href="/" key="zevLink">
        ZEV ROSS
      </Link>
    </motion.span>
  );
}
