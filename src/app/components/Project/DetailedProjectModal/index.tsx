import { Project } from "@/app/models/project";
import { motion } from "framer-motion";
import Image from "next/image";
import { LinksSection } from "../../LinksSection";
import Modal from "../../Modal";
import styles from "./detailed-project-modal.module.css";

interface Props {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const DetailedProjectModal: React.FC<Props> = (props) => {
  const { isOpen, onClose, project } = props;

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
          style={{ width: "85vw", height: "auto" }}
        />
        <motion.footer
          className={styles.details_container}
          initial={{ height: "40%", opacity: 0 }}
          animate={{ height: "60%", opacity: 1 }}
        >
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <LinksSection.Root title="More details:">
            <LinksSection.OrdinaryList list={project.details_links} />
          </LinksSection.Root>
          <LinksSection.Root title="Tech stack:">
            <LinksSection.TechList list={project.tech_stack_links} />
          </LinksSection.Root>
        </motion.footer>
      </div>
    </Modal>
  );
};

export default DetailedProjectModal;
