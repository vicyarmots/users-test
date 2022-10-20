import Input from '../../common/Input';

import {
   UseFormRegister,
   RegisterOptions,
   Path,
   FieldValues,
   DeepMap,
   FieldError,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FormErrorMessage } from '../../common/Error/Error.element';
import { InputProps } from '../../common/Input/Input.element.props';

type FormInputProps<TFormValues extends FieldValues> = {
   name: Path<TFormValues>;
   register?: UseFormRegister<TFormValues>;
   rules?: RegisterOptions;
   errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & InputProps;

const FormInput = <TFormValues extends Record<string, unknown>>({
   name,
   type,
   label,
   placeholder,
   register,
   rules,
   errors,
   className,
   ...props
}: FormInputProps<TFormValues>): JSX.Element => {
   return (
      <>
         <Input
            name={name}
            {...props}
            {...(register && register(name, rules))}
            type={type}
            label={label}
            placeholder={placeholder}
         />
         <ErrorMessage
            errors={errors}
            name={name as any}
            render={({ message }) => (
               <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
            )}
         />
      </>
   );
};

export default FormInput;
