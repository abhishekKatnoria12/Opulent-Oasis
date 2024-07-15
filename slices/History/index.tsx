import { Content, asImageSrc, asText } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "./history.module.scss";

/**
 * Props for `History`.
 */
export type HistoryProps = SliceComponentProps<Content.HistorySlice>;

/**
 * Component for "History" Slices.
 */
const History = ({ slice }: HistoryProps): JSX.Element => {
  const { primary } = slice;
  return (
    <div className={`${styles.history} container-sm`}>
      {asImageSrc(primary?.BackgroundImage) ||
      asText(primary?.Title) ||
      asText(primary?.Description) ? (
        <div className="history__wrap">
          {asImageSrc(primary?.BackgroundImage) && (
            <div className="history__left">
              <PrismicImage
                field={primary?.BackgroundImage}
                className="history__img"
              />
            </div>
          )}

          <div className="history__right">
            {asText(primary?.Title) && (
              <div className="history__title">
                <PrismicRichText
                  field={primary?.Title}
                  components={{
                    label: ({ children }) => <span>{children}</span>,
                  }}
                />
              </div>
            )}
            <PrismicRichText
              field={primary?.Description}
              components={{
                paragraph: ({ children }) => (
                  <p className="history__subtitle">{children}</p>
                ),
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default History;
