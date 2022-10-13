import { FC } from "react";
import { FormErrorMessageProps } from "./Error.element.props";

export const FormErrorMessage: FC<FormErrorMessageProps> = ({
  children,
  className,
}) => <p>{children}</p>;
