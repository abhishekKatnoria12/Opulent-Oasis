import React from "react";
import styles from "./ourbrands.module.scss";
import Image from "next/image";
interface props {
  props: BrandsProps;
}

const OurBrands = ({ props }: props) => {
  const data = props;
  return (
    <div className={`${styles.ourbrands} continer-fluid`}>
      <div className="ourbrands__cont">
      <div className="ourbrands__wrap">
        <div className="ourbrands__content">
          <h3
            className="ourbrands__title"
            dangerouslySetInnerHTML={{ __html: data?.content?.title }}
          ></h3>
          <p className="ourbrands__desc">{data?.content?.desc}</p>
        </div>
        <div className="ourbrands__images">
          <Image
            src={data?.brands?.src}
            width={data?.brands?.width}
            height={data?.brands?.height}
            alt={data?.brands?.alt}
            className="ourbrands__logo"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default OurBrands;
