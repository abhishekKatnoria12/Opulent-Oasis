import React from "react";
import styles from "./TopNavbar.module.scss";
import Link from "next/link";

interface props {
  props:NavLink[];
}
const TopNavBar = ({props}: props) => {
  return (
    <nav className={`${styles.topNavbar} .continer-fluid`}>
      <div className="topNavbar__cont container-sm">
        <ul className="topNavbar__wrap">
          {props.map((item, index) => (
            <li key={index} className="topNavbar__links">
              <Link href={item?.href}>{item?.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
