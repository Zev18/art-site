"use client";

import { caffeineMono, majorMono } from "@/assets/fonts/fonts";
import { motion } from "framer-motion";
import ZevLogo from "@/components/ZevLogo";
import SocialMedia from "@/components/SocialMedia";

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
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

function yearsSinceBirthday() {
  const date = new Date("2001-07-10");
  const currentDate = new Date();
  const yearDifference = currentDate.getFullYear() - date.getFullYear();

  // Check if the current month and day is before the date's month and day
  const isBeforeMonthDay =
    currentDate.getMonth() < date.getMonth() ||
    (currentDate.getMonth() === date.getMonth() &&
      currentDate.getDate() < date.getDate());

  // Subtract 1 from the year difference if the current date is before the date's month and day
  const yearsPassed = isBeforeMonthDay ? yearDifference - 1 : yearDifference;

  return yearsPassed;
}

export default function page() {
  return <motion.div className="h-full w-full">Test</motion.div>;
}
