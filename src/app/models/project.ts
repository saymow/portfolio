import { Links } from "./links";

export enum TechType {
  Frontend = "Frontend",
  Backend = "Backend",
  Testing = "Testing",
  Infra = "Infra",
  MachineLearning = "Machine Learning",
  Utilities = "Utilities",
  Services = "Services",
}

export interface ProjectLink {
  kind: Links;
  url: string;
}

export interface ProjectTech extends ProjectLink {
  type: TechType;
}

export interface Project {
  title: string;
  description: string;
  img_url: string;
  details_links: ProjectLink[];
  tech_stack_links: ProjectTech[];
}
