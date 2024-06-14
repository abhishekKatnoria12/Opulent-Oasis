declare interface NavLink {
  text: string;
  href: string;
}
declare interface MenuItem {
  text: string;
  href: string;
  submenu?: boolean;
}
declare interface PImage {
  src: string;
  height: number;
  width: number;
  alt: string;
}

declare interface Button {
  text: string;
  href: string;
}

declare interface NavbarItem {
  image: PImage;
  menu: MenuItem[];
  button: Button;
}

declare interface ScoreProp {
  count: string;
  text: string;
}

declare interface Content {
  title: string;
  subtitle?: string;
  desc: string;
}

declare interface HistoryProps {
  content: Content;
  history_banner: PImage;
}
declare interface BrandsProps {
  content: Content;
  brands: PImage;
}

interface Identity {
  name: string;
  role: string;
  star: PImage;
  desc: string;
}

interface Testimonial {
  client: PImage;
  identity: Identity;
}

interface OurClient {
  heading: string;
  testimonials: Testimonial[];
}

declare interface ProjectClient {
  label: string;
  name: string;
}

declare interface Projectsprops {
  image: PImage;
  details: Content;
  client: ProjectClient;
  additionalInfo: additionalInfo[];
}
declare interface additionalInfo {
  icon: PImage;
  text: string;
}

declare interface ourProjects {
  heading: string;
  desc: string;
  projects: Projectsprops[];
}
