import { Project, TechType } from "../models/project";
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
        type: TechType.Backend,
      },
      {
        kind: Links.React,
        url: "https://reactjs.org/",
        type: TechType.Frontend,
      },
      {
        kind: Links.Typescript,
        url: "https://www.typescriptlang.org/",
        type: TechType.Frontend,
      },
      {
        kind: Links.Nextjs,
        url: "https://nextjs.org/",
        type: TechType.Frontend,
      },
      {
        kind: Links.Cypress,
        url: "https://www.cypress.io/",
        type: TechType.Testing,
      },
      {
        kind: Links.Postgresql,
        url: "https://www.postgresql.org/",
        type: TechType.Infra,
      },
      {
        kind: Links.Paypal,
        url: "https://www.paypal.com/",
        type: TechType.Services,
      },
      {
        kind: Links.Jest,
        url: "https://jestjs.io/",
        type: TechType.Testing,
      },
      {
        kind: Links.Redux,
        url: "https://redux.js.org/",
        type: TechType.Frontend,
      },
      {
        kind: Links.StyledComponents,
        url: "https://styled-components.com/",
        type: TechType.Frontend,
      },
      {
        kind: Links.Bootstrap,
        url: "https://getbootstrap.com/",
        type: TechType.Frontend,
      },
      {
        kind: Links.Express,
        url: "https://expressjs.com/",
        type: TechType.Backend,
      },
      {
        kind: Links.Redis,
        url: "https://redis.io/",
        type: TechType.Infra,
      },
    ],
  },
  {
    title: "Movies Recommender",
    description: "A machine learning recommendation application.",
    img_url: "/movies-recommender.png",
    details_links: [
      {
        kind: Links.Live,
        url: "https://movies-recommender-tau.vercel.app/",
      },
      {
        kind: Links.Github,
        url: "https://github.com/saymow/movies-recommender",
      },
    ],
    tech_stack_links: [
      {
        kind: Links.Node,
        url: "https://nodejs.org/en/",
        type: TechType.Backend,
      },
      {
        kind: Links.React,
        url: "https://reactjs.org/",
        type: TechType.Frontend,
      },
      {
        kind: Links.Nextjs,
        url: "https://nextjs.org/",
        type: TechType.Frontend,
      },
      {
        kind: Links.Python,
        url: "https://www.python.org/",
        type: TechType.Backend,
      },
      {
        kind: Links.Numpy,
        url: "https://numpy.org/",
        type: TechType.MachineLearning,
      },
      {
        kind: Links.TensorFlow,
        url: "https://www.tensorflow.org/",
        type: TechType.MachineLearning,
      },
    ],
  },
];
