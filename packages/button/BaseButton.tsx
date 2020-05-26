import React, { ReactNode, HTMLAttributes } from 'react';
import { classNames } from '../core/utils/classNames';
import {
  ButtonProps,
  ButtonColorModifiers,
  ButtonVariantModifiers,
} from './types';

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
}: ButtonProps & HTMLAttributes<HTMLElement>): {
  content: ReactNode;
  buttonProps: ButtonProps;
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
