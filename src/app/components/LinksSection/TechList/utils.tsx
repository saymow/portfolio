import { Tech, Techs } from "@/app/models/tech";
import styles from "./tech-list.module.css";

export interface Rect {
  bottom: number;
  left: number;
  top: number;
  right: number;
}

export interface ClusterRect extends Rect {
  type: Techs;
}

export const TECHS_TYPE_ORDER = [
  Techs.Frontend,
  Techs.Backend,
  Techs.Testing,
  Techs.Infra,
  Techs.Services,
  Techs.Utilities,
  Techs.MachineLearning,
];

export const TECH_TYPE_COLOR: Record<Techs, string> = {
  [Techs.Frontend]: "rgba(0, 0, 255, .6)", // Blue
  [Techs.Backend]: "rgba(0, 128, 0, .6)", // Green
  [Techs.Testing]: "rgba(255, 0, 0, .6)", // Red
  [Techs.Infra]: "rgba(128, 0, 128, .6)", // Purple
  [Techs.Services]: "rgba(255, 165, 0, .6)", // Orange
  [Techs.Utilities]: "rgba(255, 255, 0, .6)", // Yellow
  [Techs.MachineLearning]: "rgba(255, 192, 203, .6)", // Pink
};

export const clusterTechs = (techs: Tech[]): Tech[] => {
  const clusteredTechs: Tech[] = [];

  for (const techType of TECHS_TYPE_ORDER) {
    for (const tech of techs) {
      if (tech.type === techType) {
        clusteredTechs.push(tech);
      }
    }
  }

  return clusteredTechs;
};

export const computeRectRelativePosition = (
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

export const computeClustersRects = (
  list: Tech[],
  rects: Rect[],
  rootRect: Rect
): ClusterRect[][] => {
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
      if (currentRect.top !== currentClusterRect.top) {
        currentClusterRect.right = rootRect.right - rootRect.left;
      }
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
        currentClusterRect.right = rootRect.right - rootRect.left;
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

export const makeClusterElements = (
  rects: ClusterRect[][]
): React.ReactNode => {
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
    .map((data) => {
      const left = data.left - padding;
      const top = data.top - 2 * padding;
      const height = data.bottom - data.top + 3 * padding;
      const width = data.right - data.left + 2 * padding;

      return (
        <span
          key={data.left + data.top}
          className={`${styles.tech_cluster} ${data.className}`}
          style={{
            position: "absolute",
            left,
            top,
            width,
            height,
            background: TECH_TYPE_COLOR[data.type],
            zIndex: -1,
          }}
        >
          <span>{data.type}</span>
        </span>
      );
    });
};

export const computeClusterElements = (
  root: HTMLElement,
  clusteredTechs: Tech[]
): React.ReactNode => {
  const rootRect = root.getBoundingClientRect();
  const childrenRects = Array.from(root.children).map((el) =>
    el.getBoundingClientRect()
  );
  const relativeRects = computeRectRelativePosition(rootRect, childrenRects);
  const clusterRects = computeClustersRects(
    clusteredTechs,
    relativeRects,
    rootRect
  );

  return makeClusterElements(clusterRects);
};
