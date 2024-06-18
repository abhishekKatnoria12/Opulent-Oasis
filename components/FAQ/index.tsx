import React, { useState } from "react";
import styles from "./faq.module.scss";
import Image from "next/image";

interface props {
  props: FaqsProp;
}
const FAQ = ({ props }: props) => {
  const data = props;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={`${styles.faq} container-sm`}>
      <div className="faq__cont">
        <div className="faq__wrap">
          {data?.heading && (
            <h2
              className="faq__heading"
              dangerouslySetInnerHTML={{ __html: data?.heading }}
            ></h2>
          )}
          {data?.desc && <p className="faq__desc">{data?.desc}</p>}
        </div>
        {data?.faqsData && (
          <div className="faq__acc-cont">
            {data?.faqsData.map((items, index) => (
              <div
                className={`${
                  index !== activeIndex
                    ? "faq__acc-wrap"
                    : "faq__acc-wrap faq__acc-wrap-var"
                }`}
                key={index}
                onClick={() => handleClick(index)}
              >
                <div className="faq__arrow">
                  <h5 className="faq__title">{items?.title}</h5>
                  {data?.add && data?.sub && (
                    <Image
                      src={`${
                        index === activeIndex ? data?.sub?.src : data?.add?.src
                      }`}
                      height={2}
                      width={12}
                      alt="Logo"
                      className="faq__logo"
                    />
                  )}
                </div>
                {index === activeIndex && (
                  <p className="faq__subTitle">{items?.subtitle}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
