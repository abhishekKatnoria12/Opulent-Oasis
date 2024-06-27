import React, { useState } from "react";
import styles from "./ourclient.module.scss";
import Image from "next/image";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface porps {
  props: OurClient;
}

const OurClients = ({ props }: porps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const data = props;
  return (
    <div className={`${styles.ourclient} container-sm`}>
      <div className="ourclient__cont">
        {data?.heading && <h2 className="ourclient__title">{data?.heading}</h2>}
        <div className="ourclient__wrap">
          {data?.testimonials && (
            <>
              <Slider
                {...settings}
                className="ourclient__slide ourclient__demo"
              >
                {data?.testimonials.map((items, index) => (
                  <div className="ourclient__content" key={index}>
                    <div className="ourclient__logo">
                      <Image
                        src={items?.client?.src}
                        width={items?.client?.width}
                        height={items?.client?.height}
                        alt={items?.client?.alt}
                        className="ourclient__img"
                      />
                    </div>

                    <div className="ourclient__review">
                      <h4 className="ourclient__name">
                        {items?.identity?.name}
                      </h4>
                      <p className="ourclient__role">{items?.identity?.role}</p>
                      {/* <div className="ourclient__vector"></div> */}
                      <div className="ourclient__star">
                        <Image
                          src={items?.identity?.star?.src}
                          width={items?.identity?.star?.width}
                          height={items?.identity?.star?.height}
                          alt={items?.identity?.star?.alt}
                          className="ourclient__stars"
                        />
                      </div>
                    </div>
                    <p className="ourclient__desc">{items?.identity?.desc}</p>
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
