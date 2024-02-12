import { makeLinkIcon } from "@/app/helpers/get-link-icon";
import { Project, ProjectLink } from "@/app/models/project";
import Image from "next/image";
import { useMemo } from "react";
import { Props as BoxLink } from "../../Box";
import Modal from "../../Modal";
import styles from "./detailed-project-modal.module.css";
import { motion } from "framer-motion";
import DetailedProjectSection from "./DetailedProjectSection";

interface Props {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const populateBoxLinks = (projectLink: ProjectLink[]): BoxLink[] => {
  return projectLink.map((link) => ({
    ...link,
    title: link.kind,
    icon: makeLinkIcon(link.kind),
  }));
};

const DetailedProjectModal: React.FC<Props> = (props) => {
  const { isOpen, onClose, project } = props;
  const detailsLinks = useMemo(
    () => populateBoxLinks(project.details_links),
    [project.details_links]
  );
  const techStackLinks = useMemo(
    () => populateBoxLinks(project.tech_stack_links),
    [project.tech_stack_links]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container} data-img={project.img_url}>
        <Image
          src={project.img_url}
          alt={project.title}
          className={styles.backdrop_image}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "80vw", height: "auto" }}
        />
        <motion.footer
          className={styles.details_container}
          initial={{ height: "40%", opacity: 0 }}
          animate={{ height: "60%", opacity: 1 }}
        >
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <DetailedProjectSection title="More details:" links={detailsLinks} />
          <DetailedProjectSection title="Tech stack:" links={techStackLinks} />
        </motion.footer>
      </div>
    </Modal>
  );
};

export default DetailedProjectModal;
