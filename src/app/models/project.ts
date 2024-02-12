import { Link } from "./link";
import { Tech } from "./tech";

export interface Project {
  title: string;
  description: string;
  img_url: string;
  details_links: Link[];
  tech_stack_links: Tech[];
}
