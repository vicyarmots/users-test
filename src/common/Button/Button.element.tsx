import { ButtonProps } from "./Button.element.props";
import { ElementType } from "react";

const defaultElement = "button";

const Button = <E extends ElementType = typeof defaultElement>({
  children,
  primary,
  secondary,
  as,
  ...otherProps
}: ButtonProps<E>): JSX.Element => {
  const TagName = as || defaultElement;

  return <TagName {...otherProps}>{children}</TagName>;
};

export default Button;
