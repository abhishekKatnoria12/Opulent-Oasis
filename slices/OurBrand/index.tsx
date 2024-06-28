import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "../../components/OurBrands/ourbrands.module.scss";

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
      <div className="ourbrands__cont">
        <div className="ourbrands__wrap">
          <div className="ourbrands__content">
            <div className="ourbrands__title">
              <PrismicRichText
                field={primary?.Title}
                components={{
                  label: ({ children }) => <span>{children}</span>,
                }}
              />
            </div>
            <PrismicRichText
              field={primary?.Description}
              components={{
                paragraph: ({ children }) => (
                  <p className="ourbrands__desc">{children}</p>
                ),
              }}
            />
          </div>
          <div className="ourbrands__images">
            <PrismicImage
              field={primary?.BackgroundImage}
              className="ourbrands__logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
