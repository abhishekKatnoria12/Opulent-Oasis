import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "../../components/Score/score.module.scss";

/**
 * Props for `Score`.
 */
export type ScoreProps = SliceComponentProps<Content.ScoreSlice>;

/**
 * Component for "Score" Slices.
 */
const Score = ({ slice }: ScoreProps): JSX.Element => {
  const { primary } = slice;
  return (
    <div className={`${styles.score} container-sm`}>
      <div className="score__demo">
        <div className="score__cont">
          <div className="score__wrap">
            {primary?.Score.map((items, index) => (
              <div className="score__items" key={index}>
                <h3 className="score__heading">{items?.Heading}</h3>
                <PrismicRichText
                  field={items?.SubHeading}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="score__subheading">{children}</p>
                    ),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
