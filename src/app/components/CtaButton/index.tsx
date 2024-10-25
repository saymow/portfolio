import React from "react";
import styles from "./cta-button.module.css";
import { motion } from "framer-motion";

interface Props {
  text: string;
  onClick: VoidFunction;
}

const CtaButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ opacity: 0.6 }}
      whileTap={{ scale: 0.95 }}
      className={styles.cta_button}
      onClick={onClick}
      data-text={text}
    ></motion.button>
  );
};

export default CtaButton;
