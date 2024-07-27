"use client";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MainIcon from "./MainIcon";
import { motion } from "framer-motion";

const InitialIcon = () => {
  return (
      <motion.div whileHover={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        <MainIcon fortawesomeTitle={faBars} color="pink" />
      </motion.div>
  );
};

export default InitialIcon;
