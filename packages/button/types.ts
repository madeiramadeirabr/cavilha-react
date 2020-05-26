import { ReactNode } from 'react';
import {
  HelperMarginModifiers,
  HelperFloatModifiers,
  HelperWidthModifiers,
  HelperDisplayModifiers,
} from '../cavilha';

export type ButtonColorModifier =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success';

export type ButtonColorModifiers =
  | 'button--is-default'
  | 'button--is-primary'
  | 'button--is-secondary'
  | 'button--is-danger'
  | 'button--is-sucess';

export type ButtonSizeModifier =
  | 'extra-small'
  | 'small'
  | 'large'
  | 'extra-large';

export type ButtonVariantModifiers =
  | 'button--is-outline'
  | 'button--is-link'
  | 'button--is-disabled'
  | 'button--is-extra-small'
  | 'button--is-small'
  | 'button--is-large'
  | 'button--is-extra-large'
  | 'button--has-icon'
  | 'button--is-square'
  | 'button--is-circle';

export type ButtonProps = {
  /** tst */
  hasColor?: ButtonColorModifier;
  isOutline?: boolean;
  hasSize?: ButtonSizeModifier;
  variants?: ButtonVariantModifiers[];
  helpers?: (
    | HelperMarginModifiers
    | HelperFloatModifiers
    | HelperWidthModifiers
    | HelperDisplayModifiers
  )[];
  hasClassName?: string;
  isLoading?: boolean;
  isLink?: boolean;
  isDisabled?: boolean;
  hasIconLeft?: ReactNode;
  hasIconRight?: ReactNode;
  hasShape?: 'square' | 'circle';
  wrapper?: Function;
  href?: string;
  type?: 'button' | 'reset' | 'submit';
  children?: ReactNode;
};
