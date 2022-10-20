import { FC } from 'react';
import { FormErrorMessageProps } from './Error.element.types';

export const FormErrorMessage: FC<FormErrorMessageProps> = ({
   children,
   className,
}) => <p className={className}>{children}</p>;
