import { Tech } from "@/models/tech";
import { LinksSection } from "@/components/LinksSection";
import styles from "./tech-stack.module.css";
import { motion } from "framer-motion";

interface Props {
  techs: Tech[];
}

const TechStack: React.FC<Props> = (props) => {
  const { techs } = props;

  return (
    <section data-id="stack" className={styles.container}>
      <h2>Tech Stack</h2>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(10%)" }}
        whileInView={{ opacity: 1, transform: "translateY(0%)" }}
      >
        <LinksSection.TechList list={techs} />
      </motion.div>
    </section>
  );
};

export default TechStack;
