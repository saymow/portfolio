import { Link } from "./link";

export enum Techs {
  Frontend = "Frontend",
  Backend = "Backend",
  Testing = "Testing",
  Infra = "Infrastructure",
  Database = "Database", 
  MachineLearning = "Machine Learning",
  Utilities = "Utilities",
  Services = "Services",
}

export interface Tech extends Link {
  type: Techs;
}
