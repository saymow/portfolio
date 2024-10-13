"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Project from "./components/Project";
import TechStack from "./components/TechStack";
import { Projects as ProjectsData } from "./data/projects";
import { Stack } from "./data/techs";
import styles from "./page.module.css";
import Contacts from "./components/Contact";
import Presentation from "./components/Presentation";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Layout from "./components/Layout";

export default function Home() {
  const { scrollYProgress } = useScroll({ offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress);

  return (
    <Layout>
      <motion.div style={{ scaleX }} className={styles.progress_bar} />
      <Navbar />
      <Presentation />
      <Projects projects={ProjectsData} />
      <TechStack techs={Stack} />
      <Contacts />
    </Layout>
  );
}
