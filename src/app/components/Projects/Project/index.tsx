import { Project as ProjectModel } from "@/models/project";
import { motion } from "framer-motion";
import Video from "@/components/Video";
import Image from "next/image";
import Link from "next/link";
import styles from "./project.module.css";

export interface Props {
  project: ProjectModel;
}

const Project: React.FC<Props> = (props) => {
  const { project } = props;

  return (
    <>
      <motion.article className={styles.container}>
        <h1 className={styles.title}>{project.title}</h1>
        <Link className={styles.image_link} href={`projects/${project.slug}`}>
          <motion.section
            title={project.title}
            initial={{ transform: "translateY(1rem)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
          >
            <Video
              src={project.videos[0].url}
              poster={project.img_url}
              width="100%"
              height="100%"
              autoPlay
              loop
              controls={false}
            />
          </motion.section>
        </Link>
      </motion.article>
    </>
  );
};

export default Project;
