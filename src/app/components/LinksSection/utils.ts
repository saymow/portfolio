import { makeLinkIcon } from "@/app/helpers/get-link-icon";
import { ProjectLink, ProjectTech } from "@/app/models/project";
import { Props as BoxLink } from "../Box";

export function populateLinksIcon<T extends ProjectLink | ProjectTech>(
  techs: T[]
): (T & BoxLink)[] {
  return techs.map((tech) => ({
    ...tech,
    kind: tech.kind,
    url: tech.url,
    title: tech.kind,
    icon: makeLinkIcon(tech.kind),
  }));
}
