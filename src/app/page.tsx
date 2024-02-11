"use client";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { Project as ProjectModel } from "./models";
import Project from "./components/Project";

const projects: ProjectModel[] = [
  {
    title: "Ecommerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quidem eius eligendi nostrum vitae esse iure, libero eos nihil fuga et repellendus dolor aliquam a voluptates delectus minus dignissimos voluptatum.",
    img_url: "/ecommerce.png",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </main>
  );
}
