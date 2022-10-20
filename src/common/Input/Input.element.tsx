import { FC, forwardRef, InputHTMLAttributes } from 'react';
import { InputProps } from './Input.element.types';

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
   (
      { id, name, label, type = 'text', className, placeholder, ...props },
      ref
   ) => {
      return (
         <input
            id={id}
            ref={ref}
            name={name}
            type={type}
            aria-label={label}
            placeholder={placeholder}
            {...props}
         />
      );
   }
);

export default Input;
