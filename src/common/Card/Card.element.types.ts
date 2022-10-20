import { ComponentProps, ElementType, ReactNode } from 'react';

export type CardHasProps<E extends ElementType = ElementType> = {
   children: ReactNode;
   as?: E;
};

export type CardProps<E extends ElementType> = CardHasProps<E> &
   Omit<ComponentProps<E>, keyof CardHasProps>;
