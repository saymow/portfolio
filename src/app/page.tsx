"use client";
import Project from "./components/Project";
import { Links } from "./models/links";
import { Project as ProjectModel } from "./models/project";
import styles from "./page.module.css";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <main className={styles.main}>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </main>
  );
}
