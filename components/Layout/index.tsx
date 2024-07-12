import { CopyRightDocument, FooterDocument, NavbarDocument, TopNavbarDocument } from "@/prismicio-types";
import Navbar from "../Navbar";
import React, { PropsWithChildren } from "react";
import Footer from "../Footer";
import TopNavBar from "../TopNavbar";
import CopyRight from "../CopyRight";

type LayoutProps = PropsWithChildren<{
  navbar: NavbarDocument<string>;
  footer: FooterDocument<string>;
  topNavbar: TopNavbarDocument<string>
  copyRight: CopyRightDocument<string>
}>;

const Layout = ({ children, navbar, footer, topNavbar, copyRight }: LayoutProps) => {
  return (
    <>
      <TopNavBar topNavbar={topNavbar} />
      <Navbar navbar={navbar} />
      <main>{children}</main>
      <Footer footer={footer} />
      <CopyRight copyRight={copyRight}/>
    </>
  );
};

export default Layout;
