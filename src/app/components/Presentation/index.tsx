"use client";
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "./presentation.module.css";
import { motion } from "framer-motion";
import CtaButton from "../CtaButton";
import Backdrop from "./Backdrop";
import { ChevronDoubleDown } from "@styled-icons/heroicons-outline/ChevronDoubleDown";

interface Ref {
  x: number;
  y: number;
}

enum ScrollTo {
  Top,
  Bottom,
}

const phrases = [
  "to solve complex problems with code.",
  "to create beautiful and interactive interfaces.",
  "to face new challenges.",
];

const computeRef = (ref: Ref) => {
  const { x, y } = ref;

  if (x === phrases[y].length) {
    return { x: 0, y: (y + 1) % phrases.length };
  }

  return { x: x + 1, y };
};

const Presentation: React.FC = () => {
  const [refs, setReferences] = useState<Ref>({ y: 0, x: 0 });
  const [scrollTo, setScrollTo] = useState<ScrollTo>(
    window.scrollY === 0 ? ScrollTo.Bottom : ScrollTo.Top
  );

  const handleScrollEvent = useCallback((_: Event) => {
    setScrollTo(window.scrollY === 0 ? ScrollTo.Bottom : ScrollTo.Top);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => setReferences(computeRef), 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const handleScrollClickEvent: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (scrollTo === ScrollTo.Bottom) {
      setScrollTo(ScrollTo.Top);
      return;
    }

    e.preventDefault();
    window.scrollTo(0, 0);
  };

  const description = useMemo(
    () => `
    I like ${phrases[refs.y].slice(0, refs.x)}
    ${refs.x % 2 === 0 ? "_" : ""}
    `,
    [refs]
  );

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
          <motion.h2
            initial={{
              color: "var(--text-primary)",
              boxShadow: "inset 0px 0 0 0 var(--text-primary)",
            }}
            whileInView={{
              color: "var(--bg-color)",
              boxShadow: "inset 100rem 0 0 0 var(--text-primary)",
            }}
            transition={{ delay: 0.2, duration: 1.6 }}
          >
            Software Engineer
          </motion.h2>
          <h4>{description}</h4>
        </div>
        <CtaButton text={"Contact me"} href="#contacts" />
      </motion.article>
      <motion.a
        href="#projects"
        onClick={handleScrollClickEvent}
        className={`${styles.scroll_button} ${
          scrollTo === ScrollTo.Top
            ? styles.scroll_button_top
            : styles.scroll_button_bottom
        }`}
        initial={{ opacity: 0, transform: "translateY(-10%)" }}
        whileInView={{ opacity: 1, transform: "translateY(-0%)" }}
        whileHover={{ opacity: 0.6 }}
        whileTap={{ opacity: 0.2 }}
      >
        <ChevronDoubleDown height="2rem" width="2rem" />
      </motion.a>
    </section>
  );
};

export default Presentation;
