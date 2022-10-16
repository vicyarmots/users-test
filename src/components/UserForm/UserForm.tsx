import React, { FC } from "react";
import { useAppDispatch } from "../../hooks/useReduxHook";
import { addUser } from "../../store/users/UserListSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "../FormInput";
import { emailPattern } from "../../utils";

// ts models
import { IUser } from "../../models/IUser";
import { ModalProps } from "../Modal/Modal";
import Button from "../../common/Button";

// types & interfaces
type FormState = Omit<IUser, "id">;

type UserFormProps = Pick<ModalProps, "setIsOpen">;

// component
const UserForm: FC<UserFormProps> = ({ setIsOpen }): JSX.Element => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormState>({
    mode: "onChange",
  });

  const handleSubmitForm: SubmitHandler<FormState> = ({
    name,
    email,
    phone,
  }) => {
    dispatch(addUser(name, email, phone));
    setIsOpen && setIsOpen(false);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <FormInput<FormState>
        id="name"
        type="text"
        name="name"
        label="First Name"
        placeholder="First Name"
        className="mb-2"
        register={register}
        rules={{ required: `You must enter your first name.` }}
        errors={errors}
      />

      <FormInput<FormState>
        id="phone"
        type="text"
        name="phone"
        label="phone"
        placeholder="phone"
        className="mb-2"
        register={register}
        rules={{ required: "You must enter your phone." }}
        errors={errors}
      />

      <FormInput<FormState>
        id="email"
        type="email"
        name="email"
        label="Email Address"
        placeholder="Email Address"
        className="mb-2"
        register={register}
        rules={{
          required: "You must enter your email address.",
          pattern: emailPattern,
        }}
        errors={errors}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserForm;
