import { Link } from "./link";

export enum Techs {
  Frontend = "Frontend",
  Backend = "Backend",
  Testing = "Testing",
  Infra = "Infra",
  MachineLearning = "Machine Learning",
  Utilities = "Utilities",
  Services = "Services",
}

export interface Tech extends Link {
  type: Techs;
}
