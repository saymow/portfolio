import React from "react";
import styles from "./cta-button.module.css";
import { motion } from "framer-motion";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

const CtaButton: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ opacity: 0.6 }}
      whileTap={{ scale: 0.95 }}
      className={styles.cta_button}
      {...(rest as any)}
      data-text={text}
    ></motion.a>
  );
};

export default CtaButton;
