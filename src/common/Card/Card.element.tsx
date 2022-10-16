import { CardProps } from "./Card.element.props";
import { ElementType } from "react";

const defaultElement = "div";

const Card = <E extends ElementType = typeof defaultElement>({
  children,
  as,
  ...otherProps
}: CardProps<E>): JSX.Element => {
  const TagName = as || defaultElement;

  return <TagName {...otherProps}>{children}</TagName>;
};

export default Card;
