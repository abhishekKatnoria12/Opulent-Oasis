import Head from "next/head";
import Image from "next/image";
import { Inter, Raleway, Plus_Jakarta_Sans } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import TopNavBar from "@/components/TopNavbar";
import Navbar from "@/components/Navbar";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Home() {
  return (
    <main className={`${jakarta.variable}`}>
      <TopNavBar />
      <Navbar />
    </main>
  );
}
