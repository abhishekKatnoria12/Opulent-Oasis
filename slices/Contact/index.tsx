import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "../../components/Contact/contact.module.scss";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */

const Contact = ({ slice }: ContactProps): JSX.Element => {
  const { primary } = slice;
  console.log(primary);
  return (
    <div className={`${styles.contact} container-sm`}>
      <div className="contact__cont">
        <div className="contact__wrap">
          {primary?.ContactImage && (
            <div className="contact__banner">
              <PrismicNextImage
                field={primary?.ContactImage}
                className="contact__image"
              />
            </div>
          )}

          <div className="contact__form-cont">
            <div className="contact__title">
              <PrismicRichText field={primary?.Heading} />
            </div>

            <p className="contact__desc">{primary?.SubHeading}</p>

            <div className="contact__form-wrap">
              {primary?.ContactForm.map((items, index) => (
                <div key={index} className="contact__form-tag">
                  <label className="contact__label">{items?.Label}</label>
                  {items.Type === "textarea" ? (
                    <textarea
                      className="contact__input-field"
                      placeholder={items.Placeholder?.toString()}
                      rows={2}
                      cols={40}
                    />
                  ) : (
                    <input
                      className="contact__input-field"
                      type={items.Type?.toString()}
                      placeholder={items.Placeholder?.toString()}
                    />
                  )}
                </div>
              ))}
            </div>

            {primary?.Button.map((items, indexs) => (
              <PrismicNextLink
                field={items?.Href}
                className="contact__btn"
                key={indexs}
              >
                {items?.Text}
              </PrismicNextLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
