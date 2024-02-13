"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Project from "./components/Project";
import TechStack from "./components/TechStack";
import { Projects } from "./data/projects";
import { Stack } from "./data/techs";
import styles from "./page.module.css";
import Contacts from "./components/Contact";
import Presentation from "./components/Presentation";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress);

  return (
    <>
      <motion.div style={{ scaleX }} className={styles.progress_bar} />
      <main ref={mainRef} className={styles.main}>
        <Presentation />
        {Projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
        <TechStack techs={Stack} />
        <Contacts />
      </main>
    </>
  );
}
