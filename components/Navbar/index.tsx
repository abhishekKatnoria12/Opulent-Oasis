import React, { PropsWithChildren, useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavbarDocument } from "@/prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { asImageSrc, asText } from "@prismicio/client";

type NavbarProps = PropsWithChildren<{ navbar: NavbarDocument }>;

const Navbar = ({ navbar }: NavbarProps) => {
  const { data } = navbar;
  const [isActive, setIsActive] = useState(false);

  const handleLogo: () => void = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.navbar} .continer-fluid`}>
      <div className="navbar__wrap container-sm">
        <div className="navbar__left">
          {asImageSrc(data?.NavbarLogo) && (
            <PrismicNextImage
              field={data?.NavbarLogo}
              className="navbar__img"
            />
          )}
          {asText(data?.Heading) && (
            <div className="navbar__title">
              <PrismicRichText field={data?.Heading} />
            </div>
          )}
        </div>
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
            {navbar?.data?.slices?.map((item, index) => (
              <li key={index} className="navbar__links">
                <PrismicNextLink href={item?.primary?.MenuLink.toString()}>
                  {item?.primary?.MenuLabel}
                </PrismicNextLink>
                {item?.primary?.ChildMenus.length > 0 &&
                  item?.primary?.ChildMenus && (
                    <>
                      <Image
                        loading="lazy"
                        src="/vector.svg"
                        width={6}
                        height={10}
                        alt=""
                        className="navbar__arrow"
                      />
                      {/* <div className="navbar__childmenu">
                        {item?.primary?.ChildMenus.map((items, index) =>(
                               <h6>{items?.MenuLabel}</h6>
                         ))}
                        
                        </div> */}
                    </>
                  )}
              </li>
            ))}
            {data?.Button.map((item, index) => (
              <button className="navbar__btn" key={index}>
                {item?.ButtonLabel}
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
