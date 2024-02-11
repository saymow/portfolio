import Image from "next/image";
import { Project } from "@/app/models";
import Modal from "../../Modal";
import { motion } from "framer-motion";
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
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <motion.footer
          className={styles.details_container}
          initial={{ height: "50%", opacity: 0 }}
          animate={{ height: "60%", opacity: 1 }}
        >
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </motion.footer>
      </div>
    </Modal>
  );
};

export default DetailedProjectModal;
