export enum SelectedPage {
  Home = "home",
  About = "about",
  Contact = "contact",
  Services = "services",
  Profile = "profile",
  Login = "login",
}

export interface UserAuthType {
  isAuthenticated: boolean;
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: string;
}

// Hospital section
export interface SearchResult {
  id: number;
  username: string;
  name: string;
  email: string;
  // address: string;
  // phone: string;
  website: string;
  city: string;
}

export interface Hospital {
  id: number;
  name: string;
  address: string;
  phone: string;
}

export interface HospitalType {
  name: string;
  address: string;
  rating: number;
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
