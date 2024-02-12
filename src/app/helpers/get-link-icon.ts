import { Github } from "@styled-icons/bootstrap/Github";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Redux } from "@styled-icons/boxicons-logos/Redux";
import { Cypress } from "@styled-icons/simple-icons/Cypress";
import { Express } from "@styled-icons/simple-icons/Express";
import { Jest } from "@styled-icons/simple-icons/Jest";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Paypal } from "@styled-icons/simple-icons/Paypal";
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { Redis } from "@styled-icons/simple-icons/Redis";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { StyledIcon } from "@styled-icons/styled-icon";
import { Browser } from "@styled-icons/entypo/Browser";
import { Numpy } from "@styled-icons/simple-icons/Numpy";
import { Tensorflow } from "@styled-icons/simple-icons/Tensorflow";
import { Python } from "@styled-icons/fa-brands/Python";
import { Links } from "../models/links";

const LINK_ICON_MAP: Record<Links, StyledIcon> = {
  [Links.Live]: Browser,
  [Links.Github]: Github,
  [Links.React]: ReactLogo,
  [Links.Node]: Nodejs,
  [Links.Typescript]: Typescript,
  [Links.Nextjs]: Nextdotjs,
  [Links.Cypress]: Cypress,
  [Links.Postgresql]: Postgresql,
  [Links.Paypal]: Paypal,
  [Links.Jest]: Jest,
  [Links.Redux]: Redux,
  [Links.StyledComponents]: Styledcomponents,
  [Links.Bootstrap]: Bootstrap,
  [Links.Express]: Express,
  [Links.Redis]: Redis,
  [Links.Numpy]: Numpy,
  [Links.TensorFlow]: Tensorflow,
  [Links.Python]: Python,
};

export const makeLinkIcon = (link: Links): StyledIcon => {
  return LINK_ICON_MAP[link];
};
