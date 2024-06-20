import React from "react";
import styles from "./score.module.scss";

interface props {
  props: ScoreProp[];
}

const Score = ({ props }: props) => {
  const data = props;
  return (
    <div className={`${styles.score} container-sm`}>
      <div className="score__wrap">
        {data?.map((items, index) => (
          <div className="score__items" key={index}>
            <h3 className="score__heading">{items?.count}</h3>
            <p className="score__subheading"> {items?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Score;
