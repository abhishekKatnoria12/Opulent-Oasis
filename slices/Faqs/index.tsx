import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./faq.module.scss";
import { useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { asText } from "@prismicio/client/richtext";

/**
 * Props for `Faqs`.
 */
export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;

/**
 * Component for "Faqs" Slices.
 */
const Faqs = ({ slice }: FaqsProps): JSX.Element => {
  const { primary } = slice;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={`${styles.faq} container-sm`}>
      {asText(primary?.Heading) ||
      primary?.SubHeading ||
      primary?.Content.length > 0 ? (
        <div className="faq__cont">
          <div className="faq__wrap">
            <div className="faq__heading">
              <PrismicRichText field={primary?.Heading} />
            </div>
            <p className="faq__desc">{primary?.SubHeading}</p>
          </div>

          {primary?.Content.length > 0 && (
            <div className="faq__acc-cont">
              {primary?.Content.map((items, index) => (
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
                    {asText(items?.Title) && (
                      <div className="faq__title">
                        <PrismicRichText field={items?.Title} />
                      </div>
                    )}
                    <PrismicNextImage
                      field={
                        index === activeIndex
                          ? primary?.SubIcon
                          : primary?.AddIcon
                      }
                      height={2}
                      width={12}
                      className="faq__logo"
                    />
                  </div>
                  {index === activeIndex && (
                    <p className="faq__subTitle">{items?.SubTitle}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Faqs;
