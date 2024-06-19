import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

interface props {
  props: footerprops;
}
const Footer = ({ props }: props) => {
  const data = props;
  return (
    <footer className={`${styles.footer} container-full`}>
      <div className="footer__cont">
        <div className="footer__wrap">
          <div className="footer__content">
            <div className="footer__logo">
              <Image
                src={data?.footer_logo?.src}
                width={data?.footer_logo?.width}
                height={data?.footer_logo?.height}
                alt={data?.footer_logo?.alt}
                className="footer__img"
              />
              {data?.text && (
                <h2 className="footer__logo-text">{data?.text}</h2>
              )}
            </div>
            {data?.footerContent?.title && (
              <h5 className="footer__title">{data?.footerContent?.title}</h5>
            )}
            {data?.footerContent?.subtitle && (
              <p className="footer__subtitle">
                {data?.footerContent?.subtitle}
              </p>
            )}
            {data?.footerContent?.desc && (
              <span
                className="footer__desc"
                dangerouslySetInnerHTML={{
                  __html: data?.footerContent?.desc || "",
                }}
              />
            )}
            {data?.footerContent?.footerMedia && (
              <div className="footer__media">
                {data?.footerContent?.footerMedia.map((items, index) => (
                  <div className="footer__media-wrap" key={index}>
                    <Image
                      src={items?.src}
                      width={items?.width}
                      height={items?.height}
                      alt={items?.alt}
                      className="footer__media-logo"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          {data?.footerMenu && (
            <div className="footer__menus">
              {data?.footerMenu?.map((items, index) => (
                <div className="footer__menus-items" key={index}>
                  {items?.heading && (
                    <h4 className="footer__heading">{items?.heading}</h4>
                  )}
                  <ul>
                    {items.footerLinks?.map((link, linkIndex) => (
                      <li key={linkIndex} className="footer__links-wrap">
                        <Link href={link?.href} className="footer__links">
                          {link?.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
