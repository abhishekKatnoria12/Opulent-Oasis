import React, { PropsWithChildren } from "react";
import styles from "./copyright.module.scss";
import { CopyRightDocument } from "@/prismicio-types";
import { PrismicRichText } from "@prismicio/react";

type CopyRightProps = PropsWithChildren<{ copyRight: CopyRightDocument }>;
const CopyRight = ({ copyRight }: CopyRightProps) => {
  const { data } = copyRight;
  return (
    <div className={`${styles.copyright} container-full`}>
      {data?.Heading && (
        <div className="copyright__cont">
          <div className="copyright__wrap">
            <div className="copyright__title">
              <PrismicRichText field={data?.Heading} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CopyRight;
