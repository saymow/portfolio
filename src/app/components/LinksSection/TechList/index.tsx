import { ProjectTech, TechType } from "@/app/models/project";
import Box, { Props as BoxLink } from "@/app/components/Box";
import { useMemo } from "react";
import styles from "./tech-list.module.css";
import { populateLinksIcon } from "../utils";

interface Props {
  list: ProjectTech[];
}

const TECHS_CLUSTERS_ORDER = [
  TechType.Frontend,
  TechType.Backend,
  TechType.Testing,
  TechType.Infra,
  TechType.Services,
  TechType.Utilities,
  TechType.MachineLearning,
];

const clusterTechs = (techs: ProjectTech[]) => {
  const clusteredTechs: ProjectTech[] = [];

  for (const techType of TECHS_CLUSTERS_ORDER) {
    for (const tech of techs) {
      if (tech.type === techType) {
        clusteredTechs.push(tech);
      }
    }
  }

  return clusteredTechs;
};

const TechList: React.FC<Props> = (props) => {
  const { list } = props;
  const clusteredTechs = useMemo(
    () => populateLinksIcon(clusterTechs(list)),
    [list]
  );

  return (
    <section className={styles.container}>
      {clusteredTechs.map((tech) => (
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

export default TechList;
