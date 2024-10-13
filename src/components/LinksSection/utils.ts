import { makeLinkIcon } from "@/helpers/get-link-icon";
import { Props as BoxLink } from "../Box";
import { Tech } from "@/models/tech";
import { Link } from "@/models/link";

export function populateLinksIcon<T extends Link | Tech>(
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
