import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Grid } from "react-feather";
import { caffeineMono } from "@/assets/fonts/fonts";

export default function PageTitle(props) {
  const { title, className } = props;

  return (
    <motion.div
      className={`${className} ${caffeineMono.className} flex items-center gap-4`}
      key="pageTitle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <ArrowLeft />
      <p>{title}</p>
      <Grid />
    </motion.div>
  );
}
