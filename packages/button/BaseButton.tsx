import React, { ReactNode, HTMLAttributes } from 'react';
import {
  HelperMarginModifiers,
  HelperFloatModifiers,
  HelperWidthModifiers,
  HelperDisplayModifiers,
} from '../cavilha';
import { classNames } from '../core/utils/classNames';

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

export type BaseButtonProps = {
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
  to?: any;
  type?: 'button' | 'reset' | 'submit';
};

/**
 * constants
 */
const BUTTON_BLOCK = 'button';

/**
 * Button component base
 */
function baseButton({
  hasColor,
  isLink,
  hasSize,
  isOutline,
  isLoading,
  isDisabled,
  hasIconLeft,
  hasIconRight,
  variants,
  helpers,
  hasClassName,
  hasShape,
  wrapper,
  children,
  ...props
}: BaseButtonProps & HTMLAttributes<HTMLElement>): {
  content: ReactNode;
  buttonProps: BaseButtonProps;
  className: string;
} {
  const hasIcon = hasIconLeft || hasIconRight;
  const className = classNames(
    [
      BUTTON_BLOCK,
      hasColor ? (`button--is-${hasColor}` as ButtonColorModifiers) : null,
      hasSize ? (`button--is-${hasSize}` as ButtonVariantModifiers) : null,
      isOutline ? 'button--is-outline' : null,
      isLink ? 'button--is-link' : null,
      hasIcon ? 'button--has-icon' : null,
      isDisabled ? 'button--is-disabled' : null,
      hasShape ? `button--is-${hasShape}` : null,
    ],
    {
      variants,
      helpers,
      hasClassName,
    }
  );

  const text = hasIcon ? (
    <span className="button__text">{children}</span>
  ) : (
    children
  );
  const content = (
    <>
      {hasIconLeft || ''}
      {text}
      {hasIconRight || ''}
    </>
  );

  return { content, buttonProps: props, className };
}

export { baseButton };
