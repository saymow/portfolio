"use client";
import Project from "./components/Project";
import { Links } from "./models/link";
import { Project as ProjectModel } from "./models/project";
import styles from "./page.module.css";
import { Projects } from "./data/projects";
import TechStack from "./components/TechStack";
import { Stack } from "./data/techs";

export default function Home() {
  return (
    <main className={styles.main}>
      {Projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
      <TechStack techs={Stack}/>
    </main>
  );
}
