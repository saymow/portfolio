import { Link } from "./link";
import { Tech } from "./tech";

interface Video {
  title: string;
  poster_url: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  img_url: string;
  videos: Video[];
  details_links: Link[];
  tech_stack_links: Tech[];
}
