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
import { Links } from "../models/link";
import { Vuejs } from "@styled-icons/fa-brands/Vuejs";
import { Gatsby } from "@styled-icons/remix-fill/Gatsby";
import { Mui } from "@styled-icons/simple-icons/Mui";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Docker } from "@styled-icons/boxicons-logos/Docker";
import { Markdown } from "@styled-icons/boxicons-logos/Markdown";
import { Java } from "@styled-icons/boxicons-logos/Java";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Spring } from "@styled-icons/simple-icons/Spring";
import { Aws } from "@styled-icons/fa-brands/Aws";
import { VisualStudio } from "@styled-icons/boxicons-logos/VisualStudio";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Ethereum } from "@styled-icons/simple-icons/Ethereum";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Stripe } from "@styled-icons/boxicons-logos/Stripe";
import { Nestjs } from "@styled-icons/simple-icons/Nestjs";
import { Createreactapp } from "@styled-icons/simple-icons/Createreactapp";
import { Prettier } from "@styled-icons/simple-icons/Prettier";
import { Eslint } from "@styled-icons/simple-icons/Eslint";
import { Webcomponentsdotorg } from "@styled-icons/simple-icons/Webcomponentsdotorg";

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
  [Links.Vue]: Vuejs,
  [Links.Gatsby]: Gatsby,
  [Links.Mui]: Mui,
  [Links.Git]: Git,
  [Links.Html]: Html5,
  [Links.CSS]: Css3,
  [Links.Docker]: Docker,
  [Links.Markdown]: Markdown,
  [Links.Java]: Java,
  [Links.Spring]: Spring,
  [Links.Aws]: Aws,
  [Links.VSCode]: VisualStudio,
  [Links.MongoDB]: Mongodb,
  [Links.MySQL]: Mysql,
  [Links.Ethereum]: Ethereum,
  [Links.Sass]: Sass,
  [Links.Stripe]: Stripe,
  [Links.NestJS]: Nestjs,
  [Links.Javascript]: Javascript,
  [Links.Createreactapp]: Createreactapp,
  [Links.Prettier]: Prettier,
  [Links.Eslint]: Eslint,
  [Links.WebComponents]: Webcomponentsdotorg,
};

export const makeLinkIcon = (link: Links): StyledIcon => {
  return LINK_ICON_MAP[link];
};
