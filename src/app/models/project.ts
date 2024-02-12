import { Links } from "./links";

export interface ProjectLink {
  kind: Links;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  img_url: string;
  details_links: ProjectLink[];
  tech_stack_links: ProjectLink[];
}
