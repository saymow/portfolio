import { Project } from "../models/project";
import { Links } from "../models/links";

export const projects: Project[] = [
  {
    title: "Ecommerce",
    description:
      "An E-commerce with payment integration, admin panel and automated tests.",
    img_url: "/ecommerce.png",
    details_links: [
      {
        kind: Links.Github,
        url: "https://github.com/saymow/e-commerce-2.0",
      },
    ],
    tech_stack_links: [
      {
        kind: Links.Node,
        url: "https://nodejs.org/en/",
      },
      {
        kind: Links.React,
        url: "https://reactjs.org/",
      },
      {
        kind: Links.Typescript,
        url: "https://www.typescriptlang.org/",
      },
      {
        kind: Links.Nextjs,
        url: "https://nextjs.org/",
      },
      {
        kind: Links.Cypress,
        url: "https://www.cypress.io/",
      },
      {
        kind: Links.Postgresql,
        url: "https://www.postgresql.org/",
      },
      {
        kind: Links.Paypal,
        url: "https://www.paypal.com/",
      },
      {
        kind: Links.Jest,
        url: "https://jestjs.io/",
      },
      {
        kind: Links.Redux,
        url: "https://redux.js.org/",
      },
      {
        kind: Links.StyledComponents,
        url: "https://styled-components.com/",
      },
      {
        kind: Links.Bootstrap,
        url: "https://getbootstrap.com/",
      },
      {
        kind: Links.Express,
        url: "https://expressjs.com/",
      },
      {
        kind: Links.Redis,
        url: "https://redis.io/",
      },
    ],
  }
];
