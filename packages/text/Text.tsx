import React, {
  HTMLProps,
  ReactNode,
  HTMLAttributes
} from 'react';
import { classNames } from '../core/utils/classNames';
import {
  HelperMarginModifiers,
  HelperDisplayModifiers,
  HelperTextColorModifiers,
  HelperTextAlignModifiers,
  HelperGapModifiers,
  ElementColorProps
} from '../cavilha';

export type TextVariantModifiers =
  'text--is-body-one-regular' |
  'text--is-body-one-bold' |
  'text--is-body-two-regular' |
  'text--is-body-two-bold' |
  'text--is-button' |
  'text--is-caption' |
  'text--is-overline';

  export type TextVariantModifier =
  'body-one-regular' |
  'body-one-bold' |
  'body-two-regular' |
  'body-two-bold' |
  'button' |
  'caption' |
  'overline';

export type TextProps = {
  type?: HTMLParagraphElement | HTMLSpanElement
  hasText?: TextVariantModifier
  variants?: (TextVariantModifiers)[]
  helpers?: (
    HelperMarginModifiers |
    HelperGapModifiers |
    HelperDisplayModifiers |
    HelperTextColorModifiers |
    HelperTextAlignModifiers
  )[]
  hasClassName?: string
  children: ReactNode
} & ElementColorProps & HTMLAttributes<HTMLParagraphElement>
& HTMLAttributes<HTMLSpanElement>;

function Text({
  type,
  hasColor,
  hasBackground,
  hasText = 'body-one-regular',
  variants,
  helpers,
  hasClassName,
  children,
  ...props
}: TextProps) {
  const className = classNames(['text', `text--is-${hasText}` as TextVariantModifiers], {
    variants, helpers, hasClassName, hasColor, hasBackground})

  if (type instanceof HTMLSpanElement) {
    return (
      <span
        {...(props as HTMLProps<HTMLSpanElement>)}
        className={className}
      >
        {children}
      </span>
    );
  }

  return (
    <div className="helper--has-margin-fix">
      <p
        {...(props as HTMLProps<HTMLParagraphElement>)}
        className={className}
      >
        {children}
      </p>
    </div>
  );
}

export { Text };
