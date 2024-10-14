import { FileEarmarkCheckFill } from "@styled-icons/bootstrap/FileEarmarkCheckFill";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import { Email } from "@styled-icons/material-outlined/Email";
import { motion } from "framer-motion";
import styles from "./contacts.module.css";

interface Props {
  id?: string;
}

const Contacts = (props: Props) => {
  return (
    <section data-id={props.id} className={styles.container}>
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
            <Whatsapp width="4rem" height="4rem" />
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
            <Email width="4rem" height="4rem" />
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
            <LinkedinSquare width="4rem" height="4rem" />
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
            <Github width="4rem" height="4rem" />
            <h3>Github</h3>
          </motion.article>
        </a>
        <a
          href="https://docs.google.com/document/d/1lCX6R7cx0wpxCWhyCdpVyIiJUbIdotZW/edit?usp=sharing&ouid=111730928345408967975&rtpof=true&sd=true"
          target="_blank"
        >
          <motion.article
            title="CV"
            className={styles.card}
            initial={{ opacity: 0, transform: "translateY(10%)" }}
            whileInView={{ opacity: 1, transform: "translateY(0%)" }}
            whileHover={{ transform: "translateY(0%) scale(1.05)" }}
          >
            <FileEarmarkCheckFill width="4rem" height="4rem" />
            <h3>CV</h3>
          </motion.article>
        </a>
      </section>
    </section>
  );
};

export default Contacts;
