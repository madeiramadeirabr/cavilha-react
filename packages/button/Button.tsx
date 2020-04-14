import React, {
  ReactNode,
  HTMLProps,
  Ref,
  SFC
} from 'react';
import {
  HelperMarginModifiers,
  HelperFloatModifiers,
  HelperWidthModifiers,
  HelperDisplayModifiers
} from '../cavilha';

export type ButtonColorModifier =
  'primary' |
  'secondary' |
  'danger' |
  'success';

export type ButtonColorModifiers =
  'button--is-primary' |
  'button--is-secondary' |
  'button--is-danger' |
  'button--is-sucess';

export type ButtonSizeModifier =
  'extra-small' |
  'small' |
  'large' |
  'extra-large';

export type ButtonVariantModifiers =
  'button--is-outline' |
  'button--is-link' |
  'button--is-disabled' |
  'button--is-extra-small' |
  'button--is-small' |
  'button--is-large' |
  'button--is-extra-large' |
  'button--has-icon';

export type ButtonSizeModifiers =
  Omit<ButtonVariantModifiers, 'button--is-outline'> |
  Omit<ButtonVariantModifiers, 'button--is-link'> |
  Omit<ButtonVariantModifiers, 'button--is-disabled'> |
  Omit<ButtonVariantModifiers, 'button--has-icon'>
;

export type ButtonTypes = HTMLAnchorElement | HTMLButtonElement;

export interface ButtonProps {
  /** tst */
  isColor?: ButtonColorModifier
  isOutline?: boolean
  isLink?: boolean
  isSize?: ButtonSizeModifier
  buttonRef?: Ref<ButtonTypes>
  variants?: (ButtonVariantModifiers)[]
  helpers?: (
    HelperMarginModifiers |
    HelperFloatModifiers |
    HelperWidthModifiers |
    HelperDisplayModifiers
  )[]
  customCss?: string
  isLoading?: boolean
  isDisabled?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  children: ReactNode
  href?: string
  onClick?: any
};


/**
 * constants
 */
const BUTTON_BLOCK = 'button';
const BUTTON_MODIFIER_DISABLED = 'button--is-disabled';

/**
 * Button component base
 */
const Button: SFC<ButtonProps> = ({
  isColor,
  isLink,
  isSize,
  isOutline,
  isLoading,
  isDisabled,
  iconLeft,
  iconRight,
  variants,
  helpers,
  customCss,
  children,
  href,
  ...props
}) => {

  const isAnchor = href || false;
  const hasIcon = (iconLeft || iconRight);
  const cavilha = [
    BUTTON_BLOCK,
    isColor ? `button--is-${isColor}` as ButtonColorModifiers : null,
    isSize ? `button--is-${isSize}` as ButtonSizeModifiers : null,
    isOutline ? 'button--is-outline' : null,
    isLink ? 'button--is-link' : null,
    hasIcon ? 'button--has-icon' : null,
    isDisabled ? 'button--is-disabled' : null,
    [variants ? variants.join(' ') : null],
    [helpers ? helpers.join(' ') : null],
    customCss,
  ].filter(Boolean);

  const text = hasIcon ?
    <span className="button__text">{children}</span>
    : children;
  const content = <>{ iconLeft || ''}{text}{ iconRight || ''}</>;

  if (isLoading) {
    if (!cavilha.includes(BUTTON_MODIFIER_DISABLED)) {
      cavilha.push(BUTTON_MODIFIER_DISABLED);
    }
  }

  const className = cavilha.join(' ').trim();

  if (isAnchor) {
    return (
      <a
        {...(props as HTMLProps<HTMLAnchorElement>)}
        href={href}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      {...(props as HTMLProps<HTMLButtonElement>)}
      type="button"
      className={className}
    >
      {content}
    </button>
  );
};

export { Button };

