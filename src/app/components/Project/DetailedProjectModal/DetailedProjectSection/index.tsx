import { StyledIcon } from "@styled-icons/styled-icon";
import Box, { Props as BoxLink } from "@/app/components/Box";
import styles from "./detailed-project-section.module.css";

interface Props {
  title: string;
  links: BoxLink[];
}

const DetailedProjectSection: React.FC<Props> = (props) => {
  const { title, links } = props;

  return (
    <section className={styles.container}>
      <h2>{title}</h2>

      <section className={styles.links}>
        {links.map((link) => (
          <Box
            key={link.url}
            title={link.title}
            icon={link.icon}
            url={link.url}
          />
        ))}
      </section>
    </section>
  );
};

export default DetailedProjectSection;
