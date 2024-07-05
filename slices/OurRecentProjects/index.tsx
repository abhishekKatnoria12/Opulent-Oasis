import { Content, asImageSrc, asText } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "../../components/OurProjects/ourprojects.module.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `OurRecentProjects`.
 */
export type OurRecentProjectsProps =
  SliceComponentProps<Content.OurRecentProjectsSlice>;

/**
 * Component for "OurRecentProjects" Slices.
 */
const OurRecentProjects = ({ slice }: OurRecentProjectsProps): JSX.Element => {
  const { primary } = slice;

  if (!primary || !primary.Card || primary.Card.length === 0) {
    return <></>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={`${styles.project} container-fluid`}>
      <div className="project__cont">
        <div className="project__wrap">
          {asText(primary.Title || primary.Description) && (
            <div className="project__content">
              {primary.Title && (
                <div className="project__heading">
                  <PrismicRichText field={primary.Title} />
                </div>
              )}
              {primary.Description && (
                <div className="project__desc">
                  <PrismicRichText field={primary.Description} />
                </div>
              )}
            </div>
          )}

          <Slider {...settings} className="project__client project__demo">
            {primary.Card.map((items, index) => {
              const hasContent =
                asImageSrc(items.CoverImage) ||
                asText(items.Heading) ||
                asText(items.SubHeading) ||
                items.Label ||
                items.Name ||
                items.LocationLabel ||
                items.EmployeeLabel ||
                items.SettingLabel ||
                asImageSrc(items.LocationIcon) ||
                asImageSrc(items.EmployeeIcon) ||
                asImageSrc(items.SettingIcon);

              if (!hasContent) {
                return <></>;
              }

              return (
                <div className="project__details" key={index}>
                  {asImageSrc(items.CoverImage) && (
                    <div className="project__img">
                      <PrismicNextImage
                        field={items.CoverImage}
                        className="project__project"
                        alt=""
                      />
                    </div>
                  )}
                  {(asText(items.Heading) ||
                    asText(items.SubHeading) ||
                    items.Label ||
                    items.Name) && (
                    <div className="project__subContent">
                      {items.Heading && (
                        <PrismicRichText field={items.Heading} />
                      )}
                      {asText(items.SubHeading) && (
                        <PrismicRichText field={items.SubHeading} />
                      )}
                      {items.Label && (
                        <span className="project__client-label">
                          {items.Label}
                        </span>
                      )}
                      {items.Name && (
                        <span className="project__client-name">
                          {items.Name}
                        </span>
                      )}
                    </div>
                  )}
                  {(items.LocationLabel ||
                    items.EmployeeLabel ||
                    items.SettingLabel ||
                    asImageSrc(items.LocationIcon) ||
                    asImageSrc(items.EmployeeIcon) ||
                    asImageSrc(items.SettingIcon)) && (
                    <div className="project__additional">
                      {(asImageSrc(items.LocationIcon) ||
                        items.LocationLabel) && (
                        <div className="project__info">
                          {asImageSrc(items.LocationIcon) && (
                            <div className="project__image">
                              <PrismicNextImage field={items.LocationIcon} />
                            </div>
                          )}
                          {items.LocationLabel && (
                            <p className="project__detail">
                              {items.LocationLabel}
                            </p>
                          )}
                        </div>
                      )}
                      {(asImageSrc(items.EmployeeIcon) ||
                        items.EmployeeLabel) && (
                        <div className="project__info">
                          {asImageSrc(items.EmployeeIcon) && (
                            <div className="project__image">
                              <PrismicNextImage field={items.EmployeeIcon} />
                            </div>
                          )}
                          {items.EmployeeLabel && (
                            <p className="project__detail">
                              {items.EmployeeLabel}
                            </p>
                          )}
                        </div>
                      )}
                      {(asImageSrc(items.SettingIcon) ||
                        items.SettingLabel) && (
                        <div className="project__info">
                          {asImageSrc(items.SettingIcon) && (
                            <div className="project__image">
                              <PrismicNextImage field={items.SettingIcon} />
                            </div>
                          )}
                          {items.SettingLabel && (
                            <p className="project__detail">
                              {items.SettingLabel}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurRecentProjects;
