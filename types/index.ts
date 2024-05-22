export interface Headline {
  __typename: string;
  html: string;
}
export interface Photo {
  __typename: string;
  url: string;
}
export interface Hero {
  __typename: string;
  headline: Headline;
  photo: Photo;
  alt: string;
}
export interface About {
  __typename: string;
  headline: string;
  content: Headline;
}
export interface Tech {
  __typename: string;
  name: string;
  image: Photo;
  alt: string;
  id: string;
}
export interface Techs {
  __typename: string;
  headline: string;
  content: Headline;
  techs: Tech[];
}
export interface Project {
  __typename: string;
  techs: Tech[];
  viewCode: string;
  livePreview: string;
}
export interface Projects {
  __typename: string;
  headline: string;
  content: Headline;
  projects: Project[];
}
export interface WorkExperience {
  __typename: string;
  id: string;
  endDate?: any;
  employer: string;
  category: string;
  incomplete?: any;
  location: string;
  position: string;
  startDate: string;
  untilNow: boolean;
}
export interface WorkExperiences {
  __typename: string;
  headline: string;
  content: Headline;
  workExperience: WorkExperience[];
}
export interface Education {
  __typename: string;
  startDate: string;
  untilNow?: any;
  position: string;
  location: string;
  incomplete: boolean;
  id: string;
  endDate: string;
  employer: string;
  category: string;
}
export interface Educations {
  __typename: string;
  educations: Education[];
  id: string;
}
export interface Contact {
  __typename: string;
  headline: Headline;
}
export interface Page {
  __typename: string;
  hero: Hero;
  about: About;
  techs: Techs;
  projects: Projects;
  workExperiences: WorkExperiences;
  educations: Educations;
  contact: Contact;
  id: string;
  lang: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}
export interface HomePage {
  page: Page;
}
