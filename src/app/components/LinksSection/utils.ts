import { makeLinkIcon } from "@/app/helpers/get-link-icon";
import { Props as BoxLink } from "../Box";
import { Tech } from "@/app/models/tech";
import { Link } from "@/app/models/link";

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
