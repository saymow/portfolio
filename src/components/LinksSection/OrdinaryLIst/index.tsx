import { useMemo } from "react";
import { populateLinksIcon } from "../utils";
import { Link } from "@/models/link";
import Box from "../../Box";
import styles from './ordinary-list.module.css'

interface Props {
  list: Link[];
}

const OrdinaryList: React.FC<Props> = (props) => {
  const list = useMemo(() => populateLinksIcon(props.list), [props.list]);

  return (
    <section className={styles.container}>
      {list.map((tech) => (
        <Box
          key={tech.url}
          title={tech.title}
          icon={tech.icon}
          url={tech.url}
        />
      ))}
    </section>
  );
};

export default OrdinaryList;
