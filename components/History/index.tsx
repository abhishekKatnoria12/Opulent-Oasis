import React from "react";
import styles from "./history.module.scss";
import Image from "next/image";

interface props {
  props: HistoryProps;
}

const History = ({ props }: props) => {
  const data = props;
  return (
    <div className={`${styles.history} container-sm`}>
      <div className="history__wrap">
        {data?.history_banner && (
          <div className="history__left">
            <Image
              src={data?.history_banner?.src}
              width={data?.history_banner?.width}
              height={data?.history_banner?.height}
              alt={data?.history_banner?.alt}
              className="history__img"
            />
          </div>
        )}
        {data?.content && (
          <div className="history__right">
            {data?.content?.title && (
              <h2
                className="history__title"
                dangerouslySetInnerHTML={{ __html: data?.content?.title }}
              ></h2>
            )}
            {data?.content?.subtitle && (
              <p className="history__subtitle">{data?.content?.subtitle}</p>
            )}
            {data?.content?.desc && (
              <p className="history__desc">{data?.content?.desc}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
