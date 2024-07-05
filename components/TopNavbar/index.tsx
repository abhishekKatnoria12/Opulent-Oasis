import React, { PropsWithChildren } from "react";
import styles from "./TopNavbar.module.scss";
import Link from "next/link";
import { TopNavbarDocument } from "@/prismicio-types";
import { PrismicNextLink } from "@prismicio/next";

type TopNavbarProps = PropsWithChildren<{
  topNavbar: TopNavbarDocument<string>;
}>;
const TopNavBar = ({ topNavbar }: TopNavbarProps) => {
  const { data } = topNavbar;

  if (!data?.TopNavbar || data.TopNavbar.length === 0) {
    return null;
  }

  return (
    <nav className={`${styles.topNavbar} continer-sm`}>
      <div className="topNavbar__cont ">
        {data?.TopNavbar && (
          <ul className="topNavbar__wrap">
            {data?.TopNavbar.map((item, index) => (
              <li key={index} className="topNavbar__links">
                <PrismicNextLink field={item?.Href}>
                  {item?.Label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default TopNavBar;
