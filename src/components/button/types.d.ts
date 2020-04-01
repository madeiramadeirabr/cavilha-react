import { ElementType, ComponentPropsWithRef } from 'react';
import { HelperHasMarginModifiers, HelperIsFloatModifiers } from '../../cavilha';

type MergeElementProps<T extends ElementType, P extends object = {}> = Omit<
ComponentPropsWithRef<T>,
keyof P
> &
P;


export type ButtonTypeModifiers = 'button--is-primary' |
'button--is-secondary' |
'button--is-danger' |
'button--is-success';

export type ButtonVariantModifiers =
  | 'button--is-outline'
  | 'button--is-small'
  | 'button--is-large'
  | 'button--is-extra-large'
  | 'button--is-disabled';


export type ButtonModifiers = {
  type: ButtonTypeModifiers;
  variants?: (ButtonVariantModifiers)[];
  helpers?: (HelperHasMarginModifiers | HelperIsFloatModifiers)[]
  misc?: Array<string>
};

export type ButtonProps = MergeElementProps<
'button',
{
  id: string;
  modifiers: ButtonModifiers;
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean
}
>;
