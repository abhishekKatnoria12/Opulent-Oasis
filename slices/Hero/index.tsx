import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./banner.module.scss";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  console.log(slice);
  return (
  //   <div className={`${styles.banner} container-full`}>
  //   <div
  //     className="banner__cont"
  //     style={{
  //       backgroundImage: data?.banners_bg?.src
  //         ? `linear-gradient(
  //       180deg,
  //       rgba(0, 0, 0, 0.51) 0%, 
  //       rgba(0, 0, 0, 0.414375) 48.96%,
  //       rgba(0, 0, 0, 0) 100%,
  //       rgba(0, 0, 0, 0) 100%
  //   ), url(${data?.banners_bg?.src})`
  //         : "",
  //     }}
  //   >
  //     <div className="banner__wrap">
  //       {data?.title && <h2 className="banner__title">{data?.title}</h2>}
  //       {data?.desc && <p className="banner__desc">{data?.desc}</p>}
  //       {data?.btn && (
  //         <Link href={data?.btn?.href} className="banner__btn">
  //           {data?.btn?.text}
  //         </Link>
  //       )}
  //     </div>  
  //   </div>
  // </div>
  <></>
  );
};

export default Hero;
