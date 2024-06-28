import { Content, asText } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "../../components/History/history.module.scss";

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
      <div className="history__wrap">
        {primary?.BackgroundImage && (
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
    </div>
  );
};

export default History;
