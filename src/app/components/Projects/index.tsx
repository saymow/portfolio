import { Project as ProjectModel } from "@/app/models/project";
import styles from "./projects.module.css";
import Project from "../Project";

interface Props {
  projects: ProjectModel[];
}

const Projects: React.FC<Props> = (props) => {
  const { projects } = props;

  return (
    <section id="projects" className={styles.container}>
      <h2>Featured Projects</h2>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </section>
  );
};

export default Projects;
