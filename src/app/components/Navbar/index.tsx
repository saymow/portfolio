import { motion } from "framer-motion";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  // fragments sucks
  const scrollIntoView = (elementId: string) => {
    document.querySelector(`[data-id="${elementId}"]`)?.scrollIntoView();
  };

  return (
    <motion.nav
      initial={{ opacity: 0, transform: "translateX(10%)" }}
      animate={{ opacity: 1, transform: "translateX(0)" }}
      className={styles.container}
    >
      <ul className={styles.items_list}>
        <li className={styles.item}>
          <span onClick={() => scrollIntoView("projects")}>Projects</span>
        </li>
        <li className={styles.item}>
          <span onClick={() => scrollIntoView("stack")}>Stack</span>
        </li>
        <li className={styles.item}>
          <span onClick={() => scrollIntoView("contacts")}>Contacts</span>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
