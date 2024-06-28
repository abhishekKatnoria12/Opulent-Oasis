import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "../../components/OurClients/ourclient.module.scss";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div className="ourclient__cont">
        <div className="ourclient__title">
          <PrismicRichText
            field={primary?.Title}
            components={{
              label: ({ children }) => <span>{children}</span>,
            }}
          />
        </div>
        <div className="ourclient__wrap">
          {primary?.OurClients && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
