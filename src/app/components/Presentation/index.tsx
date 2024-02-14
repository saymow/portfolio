import { useEffect, useState } from "react";
import styles from "./presentation.module.css";
import { motion } from "framer-motion";
import CtaButton from "../CtaButton";
import Backdrop from "./Backdrop";
import { ChevronDoubleDown } from "@styled-icons/heroicons-outline/ChevronDoubleDown";

const phrases = [
  "to solve complex problems with code.",
  "to create beautiful and interactive interfaces.",
  "to face new challenges.",
];

const Presentation: React.FC = () => {
  const [refs, setReferences] = useState({ y: 0, x: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setReferences((prev_ref) => {
        if (prev_ref.x === phrases[prev_ref.y].length) {
          const new_y = (prev_ref.y + 1) % phrases.length;

          return { x: 0, y: new_y };
        }

        return { x: prev_ref.x + 1, y: prev_ref.y };
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className={styles.container}>
      <Backdrop />
      <motion.article
        initial={{ opacity: 0, transform: "translateY(-40%)" }}
        whileInView={{ opacity: 1, transform: "translateY(-50%)" }}
        className={styles.info_container}
      >
        <div className={styles.personal_data}>
          <h1>Gustavo Alves</h1>
          <h2>Software Engineer</h2>
          <h4>
            I like {phrases[refs.y].slice(0, refs.x)}
            {refs.x % 2 === 0 ? "_" : ""}
          </h4>
        </div>
        <CtaButton text={"Contact me"} href="#contacts" />
      </motion.article>
      <motion.a
        href="#projects"
        className={styles.scroll_button}
        initial={{ opacity: 0, transform: "translateY(-10%)" }}
        whileInView={{ opacity: 1, transform: "translateY(-0%)" }}
        whileHover={{ opacity: 0.6 }}
        whileTap={{ opacity: 0.2 }}
      >
        <ChevronDoubleDown height="3rem" width="3rem" />
        <span>Scroll</span>
      </motion.a>
    </section>
  );
};

export default Presentation;
