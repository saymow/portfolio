import { motion } from "framer-motion";
import styles from "./box.module.css";
import { StyledIcon } from "@styled-icons/styled-icon";

export interface Props {
  title: string;
  icon: StyledIcon;
  url: string;
}

const Box: React.FC<Props> = (props) => {
  const { title, icon: Icon, url } = props;

  return (
    <a href={url} target="_blank">
      <motion.article
        title={title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={styles.box}
      >
        <Icon height="2rem" width="2rem" />
        <span>{title}</span>
      </motion.article>
    </a>
  );
};

export default Box;
