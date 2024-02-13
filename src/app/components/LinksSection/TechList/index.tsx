import Box from "@/app/components/Box";
import { Tech } from "@/app/models/tech";
import { useEffect, useMemo, useRef, useState } from "react";
import { populateLinksIcon } from "../utils";
import styles from "./tech-list.module.css";
import { clusterTechs, computeClusterElements } from "./utils";

interface Props {
  list: Tech[];
}

const TechList: React.FC<Props> = (props) => {
  const { list } = props;
  const listRef = useRef<HTMLElement>(null);
  const clusteredTechs = useMemo(
    () => populateLinksIcon(clusterTechs(list)),
    [list]
  );
  const [clusterElements, setClusterElements] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (listRef.current) {
      setClusterElements(
        computeClusterElements(listRef.current!, clusteredTechs)
      );
    }
  }, [clusteredTechs]);

  return (
    <section className={styles.container}>
      <section ref={listRef}>
        {clusteredTechs.map((tech) => (
          <Box
            key={tech.url}
            title={tech.title}
            icon={tech.icon}
            url={tech.url}
          />
        ))}
      </section>
      {clusterElements}
    </section>
  );
};

export default TechList;
