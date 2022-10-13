import { defaultCommonElements } from "../../constants/CommonTypes";
import { ButtonProps } from "./Button.element.props";
import { ElementType } from "react";

const defaultElement = defaultCommonElements.button;

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
