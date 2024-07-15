import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Menus`.
 */
export type MenusProps = SliceComponentProps<Content.MenusSlice>;

/**
 * Component for "Menus" Slices.
 */
const Menus = ({ slice }: MenusProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for menus (variation: {slice.variation}) Slices
    </section>
  );
};

export default Menus;
