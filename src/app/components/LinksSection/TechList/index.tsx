import { ProjectTech, TechType } from "@/app/models/project";
import Box, { Props as BoxLink } from "@/app/components/Box";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./tech-list.module.css";
import { populateLinksIcon } from "../utils";

interface Props {
  list: ProjectTech[];
}

const TECHS_TYPE_ORDER = [
  TechType.Frontend,
  TechType.Backend,
  TechType.Testing,
  TechType.Infra,
  TechType.Services,
  TechType.Utilities,
  TechType.MachineLearning,
];

const TECH_TYPE_COLOR: Record<TechType, string> = {
  [TechType.Frontend]: "rgba(0, 0, 255, .6)", // Blue
  [TechType.Backend]: "rgba(0, 128, 0, .6)", // Green
  [TechType.Testing]: "rgba(255, 0, 0, .6)", // Red
  [TechType.Infra]: "rgba(128, 0, 128, .6)", // Purple
  [TechType.Services]: "rgba(255, 165, 0, .6)", // Orange
  [TechType.Utilities]: "rgba(255, 255, 0, .6)", // Yellow
  [TechType.MachineLearning]: "rgba(255, 192, 203, .6)", // Pink
};

const clusterTechs = (techs: ProjectTech[]): ProjectTech[] => {
  const clusteredTechs: ProjectTech[] = [];

  for (const techType of TECHS_TYPE_ORDER) {
    for (const tech of techs) {
      if (tech.type === techType) {
        clusteredTechs.push(tech);
      }
    }
  }

  return clusteredTechs;
};

interface Rect {
  bottom: number;
  left: number;
  top: number;
  right: number;
}

const computeRectRelativePosition = (
  root: DOMRect,
  children: DOMRect[]
): Rect[] => {
  return children.map((child) => ({
    left: child.x - root.x,
    top: child.y - root.y,
    right: child.x + child.width - root.x,
    bottom: child.y + child.height - root.y,
  }));
};

interface ClusterRect extends Rect {
  type: TechType;
}

const computeClustersRects = (
  list: ProjectTech[],
  rects: Rect[]
): ClusterRect[][] => {
  console.log(list.length, rects.length);
  if (list.length === 0) return [];
  if (list.length !== rects.length) return [];

  const clustersRects: ClusterRect[][] = [
    [
      {
        type: list[0].type,
        left: rects[0].left,
        top: rects[0].top,
        right: rects[0].right,
        bottom: rects[0].bottom,
      },
    ],
  ];

  for (let idx = 1; idx < list.length; idx++) {
    const currentRect = rects[idx];
    const currentTech = list[idx];
    const currentCluster = clustersRects[clustersRects.length - 1];
    const currentClusterRect = currentCluster[currentCluster.length - 1];

    if (currentTech.type !== currentClusterRect.type) {
      clustersRects.push([
        {
          type: currentTech.type,
          top: currentRect.top,
          left: currentRect.left,
          right: currentRect.right,
          bottom: currentRect.bottom,
        },
      ]);
    } else {
      if (currentRect.top !== currentClusterRect.top) {
        currentCluster.push({
          type: currentClusterRect.type,
          top: currentRect.top,
          left: currentRect.left,
          right: currentRect.right,
          bottom: currentRect.bottom,
        });
      } else {
        currentClusterRect.right = currentRect.right;
      }
    }
  }

  return clustersRects;
};

const makeClusterElements = (rects: ClusterRect[][]): React.ReactNode => {
  const padding = 10;

  return rects
    .flatMap((clusterRects) => {
      if (clusterRects.length === 1) {
        return [{ ...clusterRects[0], className: styles.tech_cluster_full }];
      }
      if (clusterRects.length === 2) {
        const [start, end] = clusterRects;
        return [
          { ...start, className: styles.tech_cluster_start },
          { ...end, className: styles.tech_cluster_end },
        ];
      }

      return [
        { ...clusterRects[0], className: styles.tech_cluster_start },
        ...clusterRects
          .slice(1, clusterRects.length - 1)
          .map((clusterRect) => ({
            ...clusterRect,
            className: styles.tech_cluster_middle,
          })),
        {
          ...clusterRects[clusterRects.length - 1],
          className: styles.tech_cluster_end,
        },
      ];
    })
    .map((data) => (
      <span
        key={data.left + data.top}
        className={`${styles.tech_cluster} ${data.className}`}
        style={{
          position: "absolute",
          left: data.left - padding,
          top: data.top - 2 * padding,
          width: data.right - data.left + 2 * padding,
          height: data.bottom - data.top + 3 * padding,
          background: TECH_TYPE_COLOR[data.type],
          zIndex: -1,
        }}
      >
        <span>{data.type}</span>
      </span>
    ));
};

const TechList: React.FC<Props> = (props) => {
  const { list } = props;
  const listRef = useRef<HTMLElement>(null);
  const clusteredTechs = useMemo(
    () => populateLinksIcon(clusterTechs(list)),
    [list]
  );
  const [clusterRects, setCluserRects] = useState<ClusterRect[][]>([]);

  const computeRects = useCallback(() => {
    const rootEl = listRef.current!;
    const rootRect = rootEl.getBoundingClientRect();
    const childrenRects = Array.from(rootEl.children).map((el) =>
      el.getBoundingClientRect()
    );
    const relativeRects = computeRectRelativePosition(rootRect, childrenRects);

    setCluserRects(computeClustersRects(clusteredTechs, relativeRects));
  }, [clusteredTechs]);

  useEffect(() => {
    if (listRef.current) {
      computeRects();
    }
  }, [computeRects]);

  // useEffect(() => {
  //   if (!listRef.current) return;

  //   const observer = new MutationObserver((mutationList, observer) => {
  //     for (const mutation of mutationList) {
  //       if (mutation.type === "childList") {
  //       }
  //     }
  //   });

  //   observer.observe(listRef.current!, { childList: true });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  const clusterElements = useMemo(
    () => makeClusterElements(clusterRects),
    [clusterRects]
  );

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
