import Head from "next/head";
import Image from "next/image";
import { Inter, Raleway, Plus_Jakarta_Sans } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import TopNavBar from "@/components/TopNavbar";
import Navbar from "@/components/Navbar";

import {
  Faqs,
  contact,
  footer,
  history,
  navbar,
  ourBrands,
  ourClient,
  ourProjects,
  score,
  topNav,
} from "@/mock.data";
import Score from "@/components/Score";
import History from "@/components/History";
import OurBrands from "@/components/OurBrands";
import OurClients from "@/components/OurClients";
import OurProjects from "@/components/OurProjects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Home = () => {
  return (
    <main className={`${jakarta.variable}`}>
      <TopNavBar props={topNav} />
      <Navbar props={navbar} />
      <Score props={score} />
      <History props={history} />
      <OurBrands props={ourBrands} />
      <OurClients props={ourClient} />
      <OurProjects props={ourProjects} />
      <FAQ props={Faqs} />
      <Contact props={contact} />
      <Footer props={footer}/>
    </main>
  );
};
export default Home;
