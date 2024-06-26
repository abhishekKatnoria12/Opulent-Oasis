import React from "react";
import styles from "./ourprojects.module.scss";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface props {
  props: ourProjects;
}

const OurProjects = ({ props }: props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
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
  const data = props;
  return (
    <div className={`${styles.project} continer-fluid`}>
      <div className="project__cont">
        <div className="project__wrap">
          <div className="project__content">
            {data?.heading && (
              <h2
                dangerouslySetInnerHTML={{ __html: data.heading }}
                className="project__heading"
              ></h2>
            )}
            {data?.desc && <p className="project__desc">{data?.desc}</p>}
          </div>

          {data?.projects && (
            <Slider {...settings} className="project__client project__demo">
              {data?.projects.map((items, index) => (
                <div className="project__details" key={index}>
                  <div key={index} className="project__img">
                    <Image
                      src={items?.image?.src}
                      width={items?.image?.width}
                      height={items?.image?.height}
                      alt={items?.image?.alt}
                      className="project__project"
                    />
                  </div>
                  <div className="project__subContent">
                    <h5 className="project__title">{items?.details?.title}</h5>
                    <p className="project__subTitle">{items?.details?.desc}</p>
                    <span className="project__client-label">
                      {items?.client?.label}
                    </span>
                    <span className="project__client-name">
                      {items?.client?.name}
                    </span>
                  </div>
                  <div className="project__additional">
                    {items?.additionalInfo.map((item, index) => (
                      <div key={index} className="project__info">
                        <div className="project__image">
                          <Image
                            src={item?.icon?.src}
                            width={item?.icon?.width}
                            height={item?.icon?.height}
                            alt={item?.icon?.alt}
                          />
                        </div>
                        <p className="project__detail">{item?.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
