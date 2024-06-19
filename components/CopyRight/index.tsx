import React from "react";
import styles from "./copyright.module.scss";

interface props {
  props: copyRightProps;
}
const CopyRight = ({ props }: props) => {
  const data = props;
  return (
    <div className={`${styles.copyright} container-full`}>
      <div className="copyright__cont">
        <div className="copyright__wrap">
          <h4 className="copyright__title">{data?.text}</h4>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
