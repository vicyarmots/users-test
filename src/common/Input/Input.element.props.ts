import { InputHTMLAttributes } from "react";

export interface InputHasProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

export type InputProps = InputHasProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "name">;
