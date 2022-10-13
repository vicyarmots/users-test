import { ComponentProps, ElementType, ReactNode } from "react";

export type ButtonHasProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  as?: E;
};

export type ButtonProps<E extends ElementType> = ButtonHasProps<E> &
  Omit<ComponentProps<E>, keyof ButtonHasProps>;
