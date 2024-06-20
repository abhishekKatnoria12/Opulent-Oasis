import React from "react";
import styles from "./banner.module.scss";
import Link from "next/link";

interface bannerData {
  bannerData: Banner;
}

const Banner = ({ bannerData }: bannerData) => {
  const data = bannerData;
  console.log(bannerData);
  return (
    <div className={`${styles.banner} container-sm`}>
      <div className="banner__wrap">
        {data?.title && <h2 className="banner__title">{data?.title}</h2>}
        {data?.desc && <p className="banner__desc">{data?.desc}</p>}
        {data?.btn && (
          <Link href={data?.btn?.href} className="banner__btn">
            {data?.btn?.text}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Banner;
