import React, { ReactNode, HTMLProps, Ref, HTMLAttributes } from 'react';
import {
  HelperMarginModifiers,
  HelperFloatModifiers,
  HelperWidthModifiers,
  HelperDisplayModifiers,
} from '../cavilha';
import { Link, LinkProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { classNames } from '../core/utils/classNames';

export type ButtonColorModifier =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success';

export type ButtonColorModifiers =
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

export type ButtonTypes = HTMLAnchorElement | HTMLButtonElement;

export type ButtonProps = {
  /** tst */
  hasColor?: ButtonColorModifier;
  isOutline?: boolean;
  isLink?: boolean;
  hasSize?: ButtonSizeModifier;
  buttonRef?: Ref<ButtonTypes>;
  variants?: ButtonVariantModifiers[];
  helpers?: (
    | HelperMarginModifiers
    | HelperFloatModifiers
    | HelperWidthModifiers
    | HelperDisplayModifiers
  )[];
  hasClassName?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  hasIconLeft?: ReactNode;
  hasIconRight?: ReactNode;
  hasShape?: 'square' | 'circle';
  children: ReactNode;
};

/**
 * constants
 */
const BUTTON_BLOCK = 'button';
const BUTTON_MODIFIER_DISABLED = 'button--is-disabled';

/**
 * Button component base
 */
function Button({
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
  children,
  hasShape,
  ...props
}: ButtonProps & HTMLAttributes<HTMLButtonElement>) {
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

  return (
    <button
      {...(props as HTMLProps<HTMLButtonElement>)}
      type="button"
      className={className}
    >
      {content}
    </button>
  );
}

function ButtonLink({
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
  children,
  hasShape,
  ...props
}: ButtonProps & HTMLAttributes<HTMLElement> & LinkProps) {
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

  return (
    <Link {...props} className={className}>
      {content}
    </Link>
  );
}

Button.Link = ButtonLink;

// @ts-ignore
Button.LinkWithRouter = withRouter(ButtonLink);

export { Button };
