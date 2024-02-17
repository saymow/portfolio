import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "@styled-icons/fa-solid/Expand";
import { Project as ProjectModel } from "@/app/models/project";
import styles from "./project.module.css";
import DetailedProjectModal from "./DetailedProjectModal";
import { useCallback, useState } from "react";

export interface Props {
  project: ProjectModel;
}

const Project: React.FC<Props> = (props) => {
  const { project } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDetails = () => {
    setIsOpen(true);
  };

  const handleCloseDetails = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <motion.article className={styles.container}>
        <motion.section
          title={project.title}
          className={styles.image_section}
          onClick={handleOpenDetails}
          initial={{ transform: "translateY(10%)", opacity: 0 }}
          whileInView={{ transform: "translateY(0)", opacity: 1 }}
          whileHover={{
            boxShadow: "1rem 1rem 0px 0px var(--secondary-color)",
            transform: "translateY(-1rem) translateX(-1rem)",
          }}
        >
          <Image
            src={project.img_url}
            alt={project.title}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.section>
      </motion.article>

      <DetailedProjectModal
        isOpen={isOpen}
        onClose={handleCloseDetails}
        project={project}
      />
    </>
  );
};

export default Project;
