import { Project } from "../models/project";
import { Links } from "../models/link";
import { Techs } from "../models/tech";

export const Projects: Project[] = [
  {
    title: "Graph Search",
    description: "A visual and interactive sandbox for graph searches.",
    img_url: "/graph-search.png",
    videos: [
      {
        title: "Sandbox mode",
        url: "/graph-sandbox-mode.mp4",
        poster_url: "/graph-sandbox-mode.png",
      },
      {
        title: "Run mode",
        url: "/graph-run-mode.mp4",
        poster_url: "/graph-run-mode.png",
      },
      {
        title: "Comparisson mode",
        url: "/graph-comparisson-mode.mp4",
        poster_url: "/graph-comparisson-mode.png",
      },
    ],
    details_links: [
      {
        kind: Links.Github,
        url: "https://github.com/saymow/graph-search",
      },
      {
        kind: Links.Live,
        url: "https://saymow.github.io/graph-search/",
      },
    ],
    tech_stack_links: [
      {
        kind: Links.Javascript,
        url: "https://www.javascript.com/",
        type: Techs.Frontend,
      },
      {
        kind: Links.Html,
        url: "https://www.w3.org/html/",
        type: Techs.Frontend,
      },
      {
        kind: Links.CSS,
        url: "https://www.w3.org/Style/CSS/",
        type: Techs.Frontend,
      },
    ],
  },
  {
    title: "Ecommerce",
    description:
      "An E-commerce with payment integration, admin panel and automated tests.",
    img_url: "/ecommerce.png",
    videos: [
      {
        title: "Frontend",
        url: "/ecommerce.mp4",
        poster_url: "/ecommerce.png",
      },
      {
        title: "Admin panel",
        url: "/ecommerce-admin.mp4",
        poster_url: "/ecommerce-admin.png",
      },
    ],
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
        type: Techs.Backend,
      },
      {
        kind: Links.React,
        url: "https://reactjs.org/",
        type: Techs.Frontend,
      },
      {
        kind: Links.Typescript,
        url: "https://www.typescriptlang.org/",
        type: Techs.Frontend,
      },
      {
        kind: Links.Nextjs,
        url: "https://nextjs.org/",
        type: Techs.Frontend,
      },
      {
        kind: Links.Cypress,
        url: "https://www.cypress.io/",
        type: Techs.Testing,
      },
      {
        kind: Links.Postgresql,
        url: "https://www.postgresql.org/",
        type: Techs.Database,
      },
      {
        kind: Links.Paypal,
        url: "https://www.paypal.com/",
        type: Techs.Services,
      },
      {
        kind: Links.Jest,
        url: "https://jestjs.io/",
        type: Techs.Testing,
      },
      {
        kind: Links.Redux,
        url: "https://redux.js.org/",
        type: Techs.Frontend,
      },
      {
        kind: Links.StyledComponents,
        url: "https://styled-components.com/",
        type: Techs.Frontend,
      },
      {
        kind: Links.Bootstrap,
        url: "https://getbootstrap.com/",
        type: Techs.Frontend,
      },
      {
        kind: Links.Express,
        url: "https://expressjs.com/",
        type: Techs.Backend,
      },
      {
        kind: Links.Redis,
        url: "https://redis.io/",
        type: Techs.Database,
      },
      {
        kind: Links.Eslint,
        url: "https://eslint.org/",
        type: Techs.Utilities,
      },
      {
        kind: Links.Prettier,
        url: "https://prettier.io/",
        type: Techs.Utilities,
      },
    ],
  },
  {
    title: "Movies Recommender",
    description:
      "A machine learning recommendation application. Pick three movies and the model will predict a recommendation for you. It works best if the three movies are similar. You can find detailed explanation of how it works on the Github repository.",
    img_url: "/movies-recommender.png",
    videos: [
      {
        title: "Frontend",
        url: "/movies-recommender.webm",
        poster_url: "/movies-recommender.png",
      },
    ],
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
        type: Techs.Backend,
      },
      {
        kind: Links.React,
        url: "https://reactjs.org/",
        type: Techs.Frontend,
      },
      {
        kind: Links.Nextjs,
        url: "https://nextjs.org/",
        type: Techs.Frontend,
      },
      {
        kind: Links.Python,
        url: "https://www.python.org/",
        type: Techs.Backend,
      },
      {
        kind: Links.Numpy,
        url: "https://numpy.org/",
        type: Techs.MachineLearning,
      },
      {
        kind: Links.TensorFlow,
        url: "https://www.tensorflow.org/",
        type: Techs.MachineLearning,
      },
      {
        kind: Links.Eslint,
        url: "https://eslint.org/",
        type: Techs.Utilities,
      },
      {
        kind: Links.Prettier,
        url: "https://prettier.io/",
        type: Techs.Utilities,
      },
      {
        kind: Links.Javascript,
        url: "https://www.javascript.com/",
        type: Techs.Backend,
      },
    ],
  },
];
