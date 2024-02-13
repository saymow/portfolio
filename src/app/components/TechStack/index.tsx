import { Tech } from "@/app/models/tech";
import { LinksSection } from "../LinksSection";
import styles from "./tech-stack.module.css";
import { motion } from "framer-motion";

interface Props {
  techs: Tech[];
}

const TechStack: React.FC<Props> = (props) => {
  const { techs } = props;

  return (
    <section className={styles.container}>
      <h2>Tech Stack</h2>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <LinksSection.TechList list={techs} />
      </motion.div>
    </section>
  );
};

export default TechStack;
