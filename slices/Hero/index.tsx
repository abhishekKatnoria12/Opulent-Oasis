import { Content, asImageSrc, asLink } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "../../components/Banner/banner.module.scss";
import { asText } from "@prismicio/client/richtext";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const { primary } = slice;
  return (
    <div className={`${styles.banner} container-full`}>
      <div
        className={`banner__cont ${asImageSrc(primary?.BackgroundImage) ? "banner__hero-image" : ""}`}
        style={{
          backgroundImage: asImageSrc(primary?.BackgroundImage)
            ? `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.51) 0%,
        rgba(0, 0, 0, 0.414375) 48.96%,
        rgba(0, 0, 0, 0) 100%,
        rgba(0, 0, 0, 0) 100%
    ), url(${asImageSrc(primary?.BackgroundImage)})`
            : "",
        }}
      >
        {primary?.Heading || asText(primary?.Description) || primary?.Button ? (
          <div className="banner__wrap">
            {primary?.Heading && (
              <h2 className="banner__title">{primary?.Heading}</h2>
            )}
            {asText(primary?.Description) && (
              <PrismicRichText
                field={primary?.Description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="banner__desc">{children}</p>
                  ),
                }}
              />
            )}
            {primary?.Button.map((items, index) => {
              return (
                <PrismicNextLink
                  field={items?.ButtonLink}
                  className="banner__btn"
                  key={index}
                >
                  {items?.Label}
                </PrismicNextLink>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Hero;
