import { ResourceApiResponse } from "cloudinary";
export type ImageResource = ResourceApiResponse["resources"][number];

export type Cta = {
  cta1: string;
  cta2: string;
};

export type Hero = {
  image: ImageResource;
  title: string;
  subtitle: string;
} & Cta;

export type Feature = {
  title: string;
  text: string;
  image: ImageResource;
};

export type About = {
  title: string;
  subtitle: string;
  features: Feature[];
};

export type RecentWork = {
  folder: string;
  title: string;
  subtitle: string;
  images: ImageResource[];
};

export type Concept = {
  folder: string;
  title: string;
  subtitle: string;
  cover: ImageResource;
  gallery: ImageResource[];
};

export type Tier = {
  name: string;
  folder: string;
  highlight?: boolean;
  images: ImageResource[];
};

export type Pricing = {
  title: string;
  subtitle: string;
  tiers: Tier[];
};

export type Review = {
  name: string;
  text: string;
  avatar: ImageResource;
};

export type Testimonials = {
  title: string;
  subtitle: string;
  reviews: Review[];
};

export type Contact = {
  facebook: string;
  instagram: string;
  email: string;
  phone: string;
  phoneDisplay: string;
};

export type Content = {
  hero: Hero;
  about: About;
  recentWork: RecentWork;
  concept: Concept;
  pricing: Pricing;
  testimonials: Testimonials;
  contact: Contact;
};
