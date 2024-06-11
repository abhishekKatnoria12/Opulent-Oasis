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

declare interface content {
  title: string;
  subtitle: string;
  desc: string;
}

declare interface HistoryProps {
  content: content;
  history_banner: PImage;
}
