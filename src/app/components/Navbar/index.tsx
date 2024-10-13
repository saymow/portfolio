import { motion } from "framer-motion";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, transform: "translateX(10%)" }}
      animate={{ opacity: 1, transform: "translateX(0)" }}
      className={styles.container}
    >
      <ul className={styles.items_list}>
        <li className={styles.item}>
          <a href="#projects">Projects</a>
        </li>
        <li className={styles.item}>
          <a href="#stack">Stack</a>
        </li>
        <li className={styles.item}>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
