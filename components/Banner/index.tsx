import React from "react";
import styles from "./banner.module.scss";
const Banner = () => {
  return (
    <div className={`${styles.banner} container-sm`}>
      <div className="banner__wrap">
        <h2 className="banner__title">Shaping Bathrooms into something more</h2>
        <p className="banner__desc">
          Transform Your Bathroom into a Luxurious Oasis - Innovative Design and
          Quality Products to Create Your Dream Bathroom
        </p>
        <button className="banner__btn">Explore Products</button>
      </div>
    </div>
  );
};

export default Banner;
