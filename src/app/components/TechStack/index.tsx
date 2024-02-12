import { Tech } from "@/app/models/tech";
import { LinksSection } from "../LinksSection";
import styles from "./tech-stack.module.css";

interface Props {
  techs: Tech[];
}

const TechStack: React.FC<Props> = (props) => {
  const { techs } = props;

  return (
    <section className={styles.container}>
      <h2>Tech Stack</h2>
      <LinksSection.TechList list={techs} />
    </section>
  );
};

export default TechStack;
