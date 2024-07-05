import { FooterDocument, NavbarDocument, TopNavbarDocument } from "@/prismicio-types";
import Navbar from "../Navbar";
import React, { PropsWithChildren } from "react";
import Footer from "../Footer";
import TopNavBar from "../TopNavbar";

type LayoutProps = PropsWithChildren<{
  navbar: NavbarDocument<string>;
  footer: FooterDocument<string>;
  topNavbar: TopNavbarDocument<string>
}>;

const Layout = ({ children, navbar, footer, topNavbar }: LayoutProps) => {
  return (
    <>
      <TopNavBar topNavbar={topNavbar} />
      <Navbar navbar={navbar} />
      <main>{children}</main>
      <Footer footer={footer} />
    </>
  );
};

export default Layout;
