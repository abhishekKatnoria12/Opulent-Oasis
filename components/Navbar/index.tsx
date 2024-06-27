import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
interface props {
  props?: {
    image?: PImage;
    menu?: MenuItem[];
    button?: Button;
  };
}

const Navbar = ({ props }: props) => {
  const [isActive, setIsActive] = useState(false);
  const handleLogo: () => void = () => {
    setIsActive(!isActive);
  };
  const data = props;
  return (
    <div className={`${styles.navbar} .continer-fluid`}>
      <div className="navbar__wrap container-sm">
        {data?.image && (
          <div className="navbar__left">
            <Image
              src={data?.image?.src}
              width={data?.image?.width}
              height={data?.image?.height}
              alt={data?.image?.alt}
              className="navbar__img"
            />
            <h2 className="navbar__title">OpulentOasis</h2>
          </div>
        )}
        <div className="navbar__right">
          <div className="navbar__hamburger" onClick={handleLogo}>
            {isActive === true ? (
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "#ffffff" }}
                size="xl"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "#ffffff" }}
                size="xl"
              />
            )}
          </div>
          <ul className={`navbar__menu ${isActive ? "is-open" : ""}`}>
            {data?.menu?.map((item, index) => (
              <li key={index} className="navbar__links">
                <Link href={item?.href}>{item?.text}</Link>
                {item?.submenu && (
                  <Image
                    loading="lazy"
                    src="/vector.svg"
                    width={6}
                    height={10}
                    alt=""
                    className="navbar__arrow"
                  />
                )}
              </li>
            ))}
            <button className="navbar__btn">{data?.button?.text}</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
