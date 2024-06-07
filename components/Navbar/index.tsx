import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={`${styles.navbar} continer-fluid `}>
      <div className="navbar__wrap contianer-sm">
        <div className="navbar__left">
          <Image />
        </div>
        <div className="navbar__right"></div>
      </div>
    </div>
  );
};

export default Navbar;
