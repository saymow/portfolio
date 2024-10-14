import { Project as ProjectModel } from "@/models/project";
import Project from "./Project";
import styles from "./projects.module.css";

interface Props {
  projects: ProjectModel[];
}

const Projects: React.FC<Props> = (props) => {
  const { projects } = props;

  return (
    <section data-id="projects" className={styles.container}>
      <h2>Featured Projects</h2>
      <article>
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </article>
    </section>
  );
};

export default Projects;
