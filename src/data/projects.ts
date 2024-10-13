import { Project } from "../models/project";
import { Links } from "../models/link";
import { Techs } from "../models/tech";

export const Projects: Project[] = [
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
    title: "Simpl programming language",
    description: `!html 
    <h3>Simpl</h3>
    <br>
    <p><a href="https://github.com/saymow/simpl" target="_blank">Simpl</a> is a simple parallel OOP bytecode script language.</p>

    <br>
    <br>

    <h3>Simpl Web</h3>
    <br>
    <p>Simpl Web is a basic script language with arrays, structs, closure, I/O, and so on.</p>
    
    <br>

    <h4>Playground code snippets: </h4>

    <br>
    
    <ul>
      <li>
        <a target="_blank" href="https://simpl-web-programming-language.vercel.app/?snippet=lexer">Lexer 🔗</a>
      </li>
      <li>
        <a target="_blank" href="https://simpl-web-programming-language.vercel.app/?snippet=dijkstra">Dijkstra 🔗</a>
      </li>
      <li>
        <a target="_blank" href="https://simpl-web-programming-language.vercel.app/?snippet=breadth_first_search">Breadth First Search 🔗</a>
      </li>
      <li>
        <a target="_blank" href="https://simpl-web-programming-language.vercel.app/?snippet=linear_function">Linear Function 🔗</a>
      </li>
      <li>
        <a target="_blank" href="https://simpl-web-programming-language.vercel.app/?snippet=todo_list">To-do List 🔗</a>
      </li>
      <li>
        <a target="_blank" href="https://simpl-web-programming-language.vercel.app/?snippet=insertion_sort">Insertion Sort 🔗</a>
      </li>
      <li>
        <a target="_blank" href="https://simpl-web-programming-language.vercel.app/?snippet=avg">Average Calculator 🔗</a>
      </li>
      <li>
        <a target="_blank" href="https://simpl-web-programming-language.vercel.app/?snippet=bmi">Body Mass Index Calculator 🔗</a>
      </li>
    </ul>
    `,
    img_url: "/simpl.png",
    videos: [
      {
        title: "Simpl playground",
        url: "/simpl.mp4",
        poster_url: "/simpl.png",
      },
    ],
    details_links: [
      {
        kind: Links.Github,
        url: "https://github.com/saymow/simpl",
      },
      {
        kind: Links.Live,
        url: "https://simpl-web-programming-language.vercel.app",
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
    title: "Recommender system model",
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
];
