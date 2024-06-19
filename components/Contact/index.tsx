import React from "react";
import styles from "./contact.module.scss";
import Image from "next/image";
import Link from "next/link";

interface props {
  props: Contactporps;
}

const Contact = ({ props }: props) => {
  const data = props;
  return (
    <div className={`${styles.contact} container-sm`}>
      <div className="contact__cont">
        <div className="contact__wrap">
          {data?.contactImage && (
            <div className="contact__banner">
              <Image
                src={data?.contactImage?.src}
                height={data?.contactImage?.height}
                width={data?.contactImage?.width}
                alt={data?.contactImage?.alt}
                className="contact__image"
              />
            </div>
          )}

          <div className="contact__form-cont">
            {data?.title && (
              <h2
                className="contact__title"
                dangerouslySetInnerHTML={{ __html: data?.title }}
              ></h2>
            )}
            {data?.desc && <p className="contact__desc">{data?.desc}</p>}

            {data?.contactUs && (
              <div className="contact__form-wrap">
                {data?.contactUs.map((items, index) => (
                  <div key={index} className="contact__form-tag">
                    {items?.label && (
                      <label htmlFor={items?.label} className="contact__label">
                        {items?.label}
                      </label>
                    )}
                    {items.type === "textarea" ? (
                      <textarea
                        className="contact__input-field"
                        placeholder={items.placeholder}
                        rows={2}
                        cols={40}
                      />
                    ) : (
                      <input
                        className="contact__input-field"
                        type={items.type}
                        placeholder={items.placeholder}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
            {data?.btn && (
              <Link href={data?.btn?.href} className="contact__btn">
                {data?.btn?.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
