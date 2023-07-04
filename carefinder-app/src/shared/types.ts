export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Contact = "contact",
  Login = "login",
  Services = "services",
}

export interface FooterType {
  heading: string;
  links: Array<LinkType>;
}

type LinkType = {
  title: string;
  url: string;
};

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
