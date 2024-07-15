import { asImageSrc, Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "./ourbrands.module.scss";
import { asText } from "@prismicio/client/richtext";

/**
 * Props for `OurBrand`.
 */
export type OurBrandProps = SliceComponentProps<Content.OurBrandSlice>;

/**
 * Component for "OurBrand" Slices.
 */
const OurBrand = ({ slice }: OurBrandProps): JSX.Element => {
  const { primary } = slice;
  return (
    <div className={`${styles.ourbrands} continer-fluid`}>
      {asImageSrc(primary?.BackgroundImage) ||
      asText(primary?.Title) ||
      asText(primary?.Description) ? (
        <div className="ourbrands__cont">
          <div className="ourbrands__wrap">
            <div className="ourbrands__content">
              {asText(primary?.Title) && (
                <div className="ourbrands__title">
                  <PrismicRichText
                    field={primary?.Title}
                    components={{
                      label: ({ children }) => <span>{children}</span>,
                    }}
                  />
                </div>
              )}
              {asText(primary?.Description) && (
                <PrismicRichText
                  field={primary?.Description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="ourbrands__desc">{children}</p>
                    ),
                  }}
                />
              )}
            </div>

            {asImageSrc(primary?.BackgroundImage) && (
              <div className="ourbrands__images">
                <PrismicImage
                  field={primary?.BackgroundImage}
                  className="ourbrands__logo"
                />
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default OurBrand;
