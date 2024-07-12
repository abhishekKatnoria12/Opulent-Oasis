import React, { PropsWithChildren } from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import CopyRight from "../CopyRight";
import { copyright } from "@/mock.data";
import { FooterDocument } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

type FooterProps = PropsWithChildren<{ footer: FooterDocument }>;

const Footer = ({ footer }: FooterProps) => {
  const { data } = footer;
  return (
    <footer className={`${styles.footer} container-full`}>
      <div className="footer__cont">
        <div className="footer__wrap">
          <div className="footer__content">
            <div className="footer__logo">
              <PrismicNextImage
                field={data?.FooterLogo}
                className="footer__img"
              />
              <div className="footer__logo-text">
                <PrismicRichText field={data?.Heading} />
              </div>
            </div>
            <div className="footer__title">
              <PrismicRichText field={data?.Title} />
            </div>
            <p className="footer__subtitle">{data?.SubTitle}</p>
            <span className="footer__desc"> {data?.Description}</span>
            <div className="footer__media">
              {data?.footer_media.map((items, index) => (
                <div className="footer__media-wrap" key={index}>
                  <PrismicNextImage
                    field={items?.Logo}
                    className="footer__media-logo"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="footer__menus">
            <div className="footer__menus-items">
              {data?.FooterLink1?.map((items, index) => (
                <React.Fragment key={index}>
                  {index === 0 ? (
                    <div className="footer__heading">
                      <PrismicRichText field={items?.Label} />
                    </div>
                  ) : (
                    <ul>
                      <li className="footer__links-wrap">
                        <Link
                          href={items?.Href.toString()}
                          className="footer__links"
                        >
                          <PrismicRichText field={items?.Label} />
                        </Link>
                      </li>
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="footer__menus-items">
              {data?.FooterLink2?.map((items, index) => (
                <React.Fragment key={index}>
                  {index === 0 ? (
                    <div className="footer__heading">
                      <PrismicRichText field={items?.Label} />
                    </div>
                  ) : (
                    <ul>
                      <li className="footer__links-wrap">
                        <Link
                          href={items?.Href.toString()}
                          className="footer__links"
                        >
                          <PrismicRichText field={items?.Label} />
                        </Link>
                      </li>
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="footer__menus-items">
              {data?.FooterLink3?.map((items, index) => (
                <React.Fragment key={index}>
                  {index === 0 ? (
                    <div className="footer__heading">
                      <PrismicRichText field={items?.Label} />
                    </div>
                  ) : (
                    <ul>
                      <li className="footer__links-wrap">
                        <Link
                          href={items?.Href.toString()}
                          className="footer__links"
                        >
                          <PrismicRichText field={items?.Label} />
                        </Link>
                      </li>
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="footer__menus-items">
              {data?.FooterLink4?.map((items, index) => (
                <React.Fragment key={index}>
                  {index === 0 ? (
                    <div className="footer__heading">
                      <PrismicRichText field={items?.Label} />
                    </div>
                  ) : (
                    <ul>
                      <li className="footer__links-wrap">
                        <Link
                          href={items?.Href.toString()}
                          className="footer__links"
                        >
                          <PrismicRichText field={items?.Label} />
                        </Link>
                      </li>
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
