import { motion } from "framer-motion";
import styles from "./contacts.module.css";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import { Email } from "@styled-icons/material-outlined/Email";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";

const Contacts = () => {
  return (
    <section className={styles.container}>
      <h2>{"Let's work together"}</h2>
      <section className={styles.cards_container}>
        <a
          href="https://api.whatsapp.com/send?phone=5516996367795"
          target="_blank"
        >
          <motion.article
            title="Whatsapp"
            className={styles.card}
            initial={{ opacity: 0, transform: "translateY(10%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            whileHover={{ transform: "translateY(0%) scale(1.05)" }}
          >
            <Whatsapp width="5rem" height="5rem" />
            <h3>Whatsapp</h3>
          </motion.article>
        </a>
        <a
          href="mailto:gustavo_alves2010@yahoo.com.br?subject=Work"
          target="_blank"
        >
          <motion.article
            title="Email"
            className={styles.card}
            initial={{ opacity: 0, transform: "translateY(10%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            whileHover={{ transform: "translateY(0%) scale(1.05)" }}
          >
            <Email width="5rem" height="5rem" />
            <h3>Email</h3>
          </motion.article>
        </a>
        <a
          href="https://www.linkedin.com/in/gustavo-alves-smw/"
          target="_blank"
        >
          <motion.article
            title="Linkedin"
            className={styles.card}
            initial={{ opacity: 0, transform: "translateY(10%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            whileHover={{ transform: "translateY(0%) scale(1.05)" }}
          >
            <LinkedinSquare width="5rem" height="5rem" />
            <h3>Linkedin</h3>
          </motion.article>
        </a>
        <a href="https://github.com/saymow" target="_blank">
          <motion.article
            title="Github"
            className={styles.card}
            initial={{ opacity: 0, transform: "translateY(10%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            whileHover={{ transform: "translateY(0%) scale(1.05)" }}
          >
            <Github width="5rem" height="5rem" />
            <h3>Github</h3>
          </motion.article>
        </a>
      </section>
    </section>
  );
};

export default Contacts;
