import OrdinaryList from "./OrdinaryLIst";
import TechList from "./TechList";
import styles from "./links-section.module.css";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Root: React.FC<Props> = (props) => {
  const { title, children } = props;

  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export const LinksSection = {
  Root: Root,
  OrdinaryList: OrdinaryList,
  TechList: TechList,
};
