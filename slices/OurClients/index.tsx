import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "./ourclient.module.scss";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { asText } from "@prismicio/client/richtext";

/**
 * Props for `OurClients`.
 */
export type OurClientsProps = SliceComponentProps<Content.OurClientsSlice>;

/**
 * Component for "OurClients" Slices.
 */
const OurClients = ({ slice }: OurClientsProps): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const { primary } = slice;
  return (
    <div className={`${styles.ourclient} container-sm`}>
      {primary?.OurClients.length > 0 || asText(primary?.Title) ? (
        <div className="ourclient__cont">
          {asText(primary?.Title) && (
            <div className="ourclient__title">
              <PrismicRichText
                field={primary?.Title}
                components={{
                  label: ({ children }) => <span>{children}</span>,
                }}
              />
            </div>
          )}
          <div className="ourclient__wrap">
            {primary?.OurClients.length > 0 ? (
              <>
                <Slider
                  {...settings}
                  className="ourclient__slide ourclient__demo"
                >
                  {primary?.OurClients.map((items, index) => (
                    <div className="ourclient__content" key={index}>
                      <div className="ourclient__logo">
                        <PrismicImage
                          field={items?.ProfileImage}
                          className="ourclient__img"
                        />
                      </div>
                      <div className="ourclient__review">
                        <div className="ourclient__name">
                          <PrismicRichText field={items?.Name} />
                        </div>
                        <div className="ourclient__role">
                          <PrismicRichText field={items?.Occupation} />
                        </div>
                        <div className="ourclient__star">
                          <PrismicImage
                            field={items?.Stars}
                            className="ourclient__stars"
                          />
                        </div>
                      </div>
                      <div className="ourclient__desc">
                        <PrismicRichText field={items?.Description} />
                      </div>
                    </div>
                  ))}
                </Slider>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default OurClients;
